import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { aiJobCandidateMatching } from '../../../../lib/ai-services'
import { logger } from '@/lib/logger'

/**
 * Complete Company Registration Workflow
 * Handles: Company Registration → Job Posting → Candidate Matching → Analytics Dashboard
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.companyName || !body.industry) {
      return NextResponse.json(
        { error: 'Company name and industry are required' },
        { status: 400 }
      )
    }
    
    logger.info('🏢 Starting company registration workflow:', { companyName: body.companyName })
    
    // Step 1: Create company record
    const company = await prisma.company.create({
      data: {
        companyName: body.companyName,
        industry: body.industry,
        companySize: body.companySize || '50-200',
        headquarters: body.headquarters || 'Tokyo, Japan',
        description: body.description,
        foundedYear: body.foundedYear,
        website: body.website
      }
    })
    
    logger.info('✅ Company created:', { companyId: company.id })
    
    // Step 2: Create initial job posting if provided
    let jobPosting = null
    if (body.jobPosting) {
      const jobData = body.jobPosting
      jobPosting = await prisma.jobPosting.create({
        data: {
          jobTitle: jobData.title,
          companyId: company.id,
          department: jobData.department || 'General',
          location: jobData.location || company.headquarters,
          employmentType: jobData.employmentType || 'Full-time',
          experienceLevel: jobData.experienceLevel || 'Mid-level',
          jobDescription: jobData.description,
          salaryRangeMinimum: jobData.salaryMin,
          salaryRangeMaximum: jobData.salaryMax,
          requirements: JSON.stringify(jobData.requirements || []),
          technicalSkills: JSON.stringify(jobData.technicalSkills || []),
          culturalFitRequirements: JSON.stringify(jobData.culturalRequirements || {})
        }
      })
      
      logger.info('✅ Job posting created:', { jobPostingId: jobPosting.id })
    }
    
    // Step 3: Find potential candidates if job was posted
    let candidateMatches = []
    if (jobPosting) {
      try {
        logger.info('🎯 Finding candidate matches for job...')
        const candidates = await prisma.candidate.findMany({
          take: 10, // Limit to top 10 candidates
          orderBy: { createdAt: 'desc' }
        })
        
        // Calculate match scores for each candidate
        for (const candidate of candidates) {
          try {
            const matchResult = await aiJobCandidateMatching(candidate, jobPosting)
            candidateMatches.push({
              candidateId: candidate.id,
              candidateName: `${candidate.firstName} ${candidate.lastName}`,
              nationality: candidate.nationality,
              experience: candidate.experience,
              matchScore: matchResult.overallScore,
              skillsMatch: matchResult.skillsMatch,
              culturalFit: matchResult.culturalFit,
              recommendations: matchResult.recommendations,
              confidence: matchResult.confidence
            })
          } catch (matchError) {
            logger.error('Match calculation failed for candidate:', { candidateId: candidate.id, error: matchError })
          }
        }
        
        // Sort by match score
        candidateMatches.sort((a, b) => b.matchScore - a.matchScore)
        logger.info(`✅ Found ${candidateMatches.length} candidate matches`, { matchCount: candidateMatches.length })
        
      } catch (matchError) {
        logger.error('⚠️ Candidate matching failed:', { error: matchError })
      }
    }
    
    // Step 4: Generate company analytics
    const analytics = {
      totalJobs: jobPosting ? 1 : 0,
      totalCandidates: candidateMatches.length,
      averageMatchScore: candidateMatches.length > 0 
        ? Math.round(candidateMatches.reduce((sum, match) => sum + match.matchScore, 0) / candidateMatches.length)
        : 0,
      topCulturalFit: candidateMatches.length > 0 
        ? Math.max(...candidateMatches.map(match => match.culturalFit))
        : 0,
      diversityMetrics: {
        nationalityDistribution: calculateNationalityDistribution(candidateMatches),
        experienceLevels: calculateExperienceLevels(candidateMatches)
      },
      hiringPipeline: {
        qualified: candidateMatches.filter(match => match.matchScore >= 80).length,
        potential: candidateMatches.filter(match => match.matchScore >= 60 && match.matchScore < 80).length,
        needsTraining: candidateMatches.filter(match => match.matchScore < 60).length
      }
    }
    
    // Step 5: Prepare dashboard data
    const dashboardData = {
      company: {
        id: company.id,
        name: company.companyName,
        industry: company.industry,
        size: company.companySize,
        location: company.headquarters,
        website: company.website
      },
      jobPosting: jobPosting ? {
        id: jobPosting.id,
        title: jobPosting.jobTitle,
        department: jobPosting.department,
        location: jobPosting.location,
        experienceLevel: jobPosting.experienceLevel
      } : null,
      candidateMatches: candidateMatches.slice(0, 5), // Top 5 matches for dashboard
      analytics,
      nextSteps: [
        jobPosting ? 'Review top candidate matches' : 'Create your first job posting',
        'Set up interview processes',
        'Configure cultural integration programs',
        'Monitor hiring pipeline metrics'
      ]
    }
    
    logger.info('🎉 Company registration workflow completed successfully')
    
    return NextResponse.json({
      success: true,
      message: 'Company registration and initial setup completed successfully',
      companyId: company.id,
      jobPostingId: jobPosting?.id,
      dashboard: dashboardData,
      aiMatching: candidateMatches.some(match => match.aiPowered),
      timestamp: new Date().toISOString()
    }, { status: 201 })
    
  } catch (error) {
    logger.error('❌ Company registration workflow error:', { error })
    return NextResponse.json(
      { 
        error: 'Company registration workflow failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Helper functions for analytics
function calculateNationalityDistribution(matches: any[]) {
  const distribution: Record<string, number> = {}
  matches.forEach(match => {
    distribution[match.nationality] = (distribution[match.nationality] || 0) + 1
  })
  return distribution
}

function calculateExperienceLevels(matches: any[]) {
  const levels = {
    junior: 0,     // 0-2 years
    midLevel: 0,   // 3-5 years
    senior: 0,     // 6-10 years
    expert: 0      // 10+ years
  }
  
  matches.forEach(match => {
    const exp = match.experience || 0
    if (exp <= 2) levels.junior++
    else if (exp <= 5) levels.midLevel++
    else if (exp <= 10) levels.senior++
    else levels.expert++
  })
  
  return levels
}