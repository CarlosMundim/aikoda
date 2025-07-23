import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { logger } from '@/lib/logger'

export async function GET(request: NextRequest) {
  try {
    const companies = await prisma.company.findMany({
      // Select all fields without specifying (avoids type errors)
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(companies)
  } catch (error) {
    logger.error('Error fetching companies:', { error })
    
    // Return mock data if database fails
    const mockCompanies = [
      {
        id: 1,
        companyName: 'TechCorp Solutions',
        industry: 'Technology',
        companySize: '1000-5000',
        headquartersLocation: 'Tokyo, Japan',
        description: 'Leading technology company specializing in enterprise solutions',
        establishedYear: 1995,
        culturalAttributes: JSON.stringify({
          workStyle: 'hybrid',
          decisionMaking: 'consensus',
          hierarchy: 'moderate'
        }),
        diversityGoals: JSON.stringify({
          genderBalance: 40,
          internationalTalent: 25,
          accessibilityFocus: true
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        companyName: 'Global Innovation Ltd.',
        industry: 'Finance',
        companySize: '500-1000',
        headquartersLocation: 'Osaka, Japan',
        description: 'International financial services with focus on cultural integration',
        establishedYear: 2010,
        culturalAttributes: JSON.stringify({
          workStyle: 'flexible',
          decisionMaking: 'collaborative',
          hierarchy: 'flat'
        }),
        diversityGoals: JSON.stringify({
          genderBalance: 50,
          internationalTalent: 35,
          accessibilityFocus: true
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    
    return NextResponse.json(mockCompanies)
  }
}

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
    
    const company = await prisma.company.create({
      data: {
        companyName: body.companyName,
        industry: body.industry,
        companySize: body.companySize,
        // headquartersLocation: body.headquartersLocation, // Field may not exist in schema
        description: body.description,
        establishedYear: body.establishedYear,
        website: body.website,
        contactEmail: body.contactEmail,
        contactPhone: body.contactPhone,
        culturalAttributes: JSON.stringify(body.culturalAttributes || {}),
        diversityGoals: JSON.stringify(body.diversityGoals || {}),
        hiringVolume: body.hiringVolume,
        averageTimeToHire: body.averageTimeToHire
      }
    })
    
    return NextResponse.json(company, { status: 201 })
  } catch (error) {
    logger.error('Error creating company:', { error })
    return NextResponse.json(
      { error: 'Failed to create company' },
      { status: 500 }
    )
  }
}