import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { aiCulturalIntelligenceAnalysis } from '../../../../lib/ai-services'

/**
 * Complete Candidate Registration Workflow
 * Handles the full flow: Registration → Cultural Analysis → Database Storage → Dashboard Updates
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
        { status: 400 }
      )
    }
    
    console.log('🚀 Starting candidate registration workflow:', body.email)
    
    // Step 1: Create candidate record
    const candidate = await prisma.candidate.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        cellPhone: body.cellPhone,
        nationality: body.nationality || 'OTHER',
        currentLocation: body.currentLocation || 'Japan',
        dateOfBirth: body.dateOfBirth ? new Date(body.dateOfBirth) : null,
        currentPosition: body.currentPosition,
        experience: body.experience || 0,
        technicalSkills: JSON.stringify(body.technicalSkills || []),
        languageProficiency: JSON.stringify(body.languageProficiency || {}),
        salaryExpectation: body.salaryExpectation,
        availabilityDate: body.availabilityDate ? new Date(body.availabilityDate) : null
      }
    })
    
    console.log('✅ Candidate created:', candidate.id)
    
    // Step 2: AI Cultural Intelligence Analysis
    let culturalAnalysis = null
    try {
      console.log('🧠 Running AI cultural intelligence analysis...')
      culturalAnalysis = await aiCulturalIntelligenceAnalysis(candidate, body.culturalResponses)
      
      // Step 3: Store cultural assessment
      await prisma.culturalAssessment.create({
        data: {
          candidateId: candidate.id,
          assessmentType: 'comprehensive',
          overallScore: culturalAnalysis.overallScore,
          culturalFitPrediction: Math.min(98, culturalAnalysis.overallScore + 5),
          integrationTimelineDays: culturalAnalysis.integrationTimeline,
          waHarmonyScore: culturalAnalysis.waHarmony,
          kaizenImprovementScore: culturalAnalysis.kaizenImprovement,
          omotenashiServiceScore: culturalAnalysis.omotenashiService,
          bushidoDedicationScore: culturalAnalysis.bushidoDedication,
          nemawashiConsensusScore: culturalAnalysis.nemawashiConsensus,
          dimensionScores: JSON.stringify({
            wa_harmony: culturalAnalysis.waHarmony,
            kaizen_improvement: culturalAnalysis.kaizenImprovement,
            omotenashi_service: culturalAnalysis.omotenashiService,
            bushido_dedication: culturalAnalysis.bushidoDedication,
            nemawashi_consensus: culturalAnalysis.nemawashiConsensus
          }),
          culturalTrainingNeeded: JSON.stringify(culturalAnalysis.culturalTraining)
        }
      })
      
      console.log('✅ Cultural assessment stored')
    } catch (aiError) {
      console.error('⚠️ AI analysis failed, continuing without:', aiError)
    }
    
    // Step 4: Find potential job matches
    let jobMatches = []
    try {
      console.log('🎯 Finding job matches...')
      const activeJobs = await prisma.jobPosting.findMany({
        where: { 
          // Add any active job filters here if needed
        },
        include: {
          company: {
            select: {
              companyName: true,
              industry: true
            }
          }
        },
        take: 5 // Limit to top 5 jobs
      })
      
      // Calculate match scores for each job
      const { aiJobCandidateMatching } = await import('../../../../lib/ai-services')
      
      for (const job of activeJobs) {
        try {
          const matchResult = await aiJobCandidateMatching(candidate, job)
          jobMatches.push({
            jobId: job.id,
            jobTitle: job.jobTitle,
            company: job.company?.companyName,
            matchScore: matchResult.overallScore,
            skillsMatch: matchResult.skillsMatch,
            culturalFit: matchResult.culturalFit,
            recommendations: matchResult.recommendations
          })
        } catch (matchError) {
          console.error('Match calculation failed for job:', job.id, matchError)
        }
      }
      
      // Sort by match score
      jobMatches.sort((a, b) => b.matchScore - a.matchScore)
      console.log(`✅ Found ${jobMatches.length} job matches`)
      
    } catch (matchError) {
      console.error('⚠️ Job matching failed:', matchError)
    }
    
    // Step 5: Prepare dashboard data
    const dashboardData = {
      candidate: {
        id: candidate.id,
        name: `${candidate.firstName} ${candidate.lastName}`,
        email: candidate.email,
        nationality: candidate.nationality,
        location: candidate.currentLocation,
        experience: candidate.experience,
        skills: body.technicalSkills || [],
        languages: body.languageProficiency || {}
      },
      culturalIntelligence: culturalAnalysis ? {
        overallScore: culturalAnalysis.overallScore,
        integrationTimeline: culturalAnalysis.integrationTimeline,
        dimensions: {
          waHarmony: culturalAnalysis.waHarmony,
          kaizenImprovement: culturalAnalysis.kaizenImprovement,
          omotenashiService: culturalAnalysis.omotenashiService,
          bushidoDedication: culturalAnalysis.bushidoDedication,
          nemawashiConsensus: culturalAnalysis.nemawashiConsensus
        },
        trainingRecommendations: culturalAnalysis.culturalTraining
      } : null,
      jobMatches,
      nextSteps: [
        'Review cultural intelligence assessment',
        'Contact top matching companies',
        'Schedule cultural orientation training',
        'Prepare for technical interviews'
      ]
    }
    
    console.log('🎉 Registration workflow completed successfully')
    
    return NextResponse.json({
      success: true,
      message: 'Candidate registration and analysis completed successfully',
      candidateId: candidate.id,
      dashboard: dashboardData,
      aiPowered: !!culturalAnalysis,
      timestamp: new Date().toISOString()
    }, { status: 201 })
    
  } catch (error) {
    console.error('❌ Registration workflow error:', error)
    return NextResponse.json(
      { 
        error: 'Registration workflow failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}