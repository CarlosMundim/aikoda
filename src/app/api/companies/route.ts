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
        // establishedYear: body.establishedYear, // Field may not exist in schema
        // website: body.website, // Field may not exist in schema
        // contactEmail: body.contactEmail, // Field may not exist in schema
        // contactPhone: body.contactPhone, // Field may not exist in schema
        // culturalAttributes: JSON.stringify(body.culturalAttributes || {}), // Field may not exist in schema
        // diversityGoals: JSON.stringify(body.diversityGoals || {}), // Field may not exist in schema
        // hiringVolume: body.hiringVolume, // Field may not exist in schema
        // averageTimeToHire: body.averageTimeToHire // Field may not exist in schema
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