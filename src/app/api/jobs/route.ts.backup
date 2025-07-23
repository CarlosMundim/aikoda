import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { logger } from '@/lib/logger'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const companyId = searchParams.get('companyId')
    
    const whereClause: any = {}
    if (status) whereClause.status = status
    if (companyId) whereClause.companyId = parseInt(companyId)
    
    const jobs = await prisma.job.findMany({
      where: whereClause,
      include: {
        company: {
          select: {
            companyName: true,
            industry: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(jobs)
  } catch (error) {
    logger.error('Error fetching jobs:', { error })
    
    // Return mock data if database fails
    const mockJobs = [
      {
        id: 1,
        title: 'Senior Software Engineer',
        department: 'Engineering',
        location: 'Tokyo, Japan',
        employmentType: 'Full-time',
        salaryMin: 8000000,
        salaryMax: 12000000,
        currency: 'JPY',
        requiredSkills: JSON.stringify(['JavaScript', 'React', 'Node.js', 'PostgreSQL']),
        culturalRequirements: JSON.stringify({
          teamwork: 95,
          communication: 90,
          adaptability: 85,
          leadership: 80
        }),
        status: 'active',
        urgencyLevel: 'high',
        remoteWorkOptions: 'hybrid',
        company: {
          companyName: 'TechCorp Solutions',
          industry: 'Technology'
        },
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Cultural Integration Specialist',
        department: 'Human Resources',
        location: 'Osaka, Japan',
        employmentType: 'Full-time',
        salaryMin: 6000000,
        salaryMax: 9000000,
        currency: 'JPY',
        requiredSkills: JSON.stringify(['Cultural Intelligence', 'HR Management', 'Communication']),
        culturalRequirements: JSON.stringify({
          empathy: 95,
          crossCulturalCompetence: 90,
          communication: 95,
          teamwork: 85
        }),
        status: 'active',
        urgencyLevel: 'medium',
        remoteWorkOptions: 'onsite',
        company: {
          companyName: 'Global Innovation Ltd.',
          industry: 'Finance'
        },
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Data Scientist',
        department: 'Analytics',
        location: 'Tokyo, Japan',
        employmentType: 'Full-time',
        salaryMin: 10000000,
        salaryMax: 15000000,
        currency: 'JPY',
        requiredSkills: JSON.stringify(['Python', 'Machine Learning', 'Statistics', 'SQL']),
        culturalRequirements: JSON.stringify({
          analyticalThinking: 95,
          attention: 90,
          collaboration: 80,
          innovation: 85
        }),
        status: 'active',
        urgencyLevel: 'high',
        remoteWorkOptions: 'remote',
        company: {
          companyName: 'TechCorp Solutions',
          industry: 'Technology'
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    
    return NextResponse.json(mockJobs)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.title || !body.companyId) {
      return NextResponse.json(
        { error: 'Job title and company ID are required' },
        { status: 400 }
      )
    }
    
    const job = await prisma.job.create({
      data: {
        title: body.title,
        companyId: body.companyId,
        department: body.department,
        location: body.location,
        employmentType: body.employmentType || 'Full-time',
        salaryMin: body.salaryMin,
        salaryMax: body.salaryMax,
        currency: body.currency || 'JPY',
        description: body.description,
        responsibilities: body.responsibilities,
        requiredSkills: JSON.stringify(body.requiredSkills || []),
        preferredSkills: JSON.stringify(body.preferredSkills || []),
        culturalRequirements: JSON.stringify(body.culturalRequirements || {}),
        benefits: body.benefits,
        status: body.status || 'active',
        urgencyLevel: body.urgencyLevel || 'medium',
        remoteWorkOptions: body.remoteWorkOptions,
        travelRequirements: body.travelRequirements
      },
      include: {
        company: {
          select: {
            companyName: true,
            industry: true
          }
        }
      }
    })
    
    return NextResponse.json(job, { status: 201 })
  } catch (error) {
    logger.error('Error creating job:', { error })
    return NextResponse.json(
      { error: 'Failed to create job' },
      { status: 500 }
    )
  }
}