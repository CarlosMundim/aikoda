import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const candidates = await prisma.candidate.findMany({
      include: {
        culturalAssessments: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Transform data for frontend consumption
    const transformedCandidates = candidates.map(candidate => ({
      id: candidate.id,
      firstName: candidate.firstName,
      lastName: candidate.lastName,
      email: candidate.email,
      cellPhone: candidate.cellPhone,
      nationality: candidate.nationality,
      currentLocation: candidate.currentLocation,
      technicalSkills: candidate.technicalSkills ? JSON.parse(candidate.technicalSkills) : [],
      languageProficiency: candidate.languageProficiency ? JSON.parse(candidate.languageProficiency) : {},
      experience: candidate.experience,
      salaryExpectation: candidate.salaryExpectation,
      availabilityDate: candidate.availabilityDate,
      culturalScore: candidate.culturalAssessments[0]?.overallScore || null,
      createdAt: candidate.createdAt,
      updatedAt: candidate.updatedAt
    }))

    return NextResponse.json(transformedCandidates)
  } catch (error) {
    console.error('Error fetching candidates:', error)
    return NextResponse.json(
      { error: 'Failed to fetch candidates' },
      { status: 500 }
    )
  }
}

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
    
    const candidate = await prisma.candidate.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        cellPhone: body.cellPhone,
        nationality: body.nationality || 'JP',
        currentLocation: body.currentLocation,
        dateOfBirth: body.dateOfBirth ? new Date(body.dateOfBirth) : null,
        currentPosition: body.currentPosition,
        experience: body.experience,
        technicalSkills: JSON.stringify(body.technicalSkills || []),
        languageProficiency: JSON.stringify(body.languageProficiency || {}),
        salaryExpectation: body.salaryExpectation,
        availabilityDate: body.availabilityDate ? new Date(body.availabilityDate) : null
      }
    })
    
    return NextResponse.json(candidate, { status: 201 })
  } catch (error) {
    console.error('Error creating candidate:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to create candidate' },
      { status: 500 }
    )
  }
}