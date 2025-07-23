import { NextRequest, NextResponse } from 'next/server'

// Foundation API - No Prisma complexity, just mock data that works
// This proves the API layer works before adding database

export async function GET() {
  try {
    // Mock data - proves API works
    const mockCandidates = [
      {
        id: '1',
        firstName: 'Yuki',
        lastName: 'Tanaka',
        email: 'yuki.tanaka@example.com',
        phone: '+81-90-1234-5678',
        nationality: 'Japanese',
        location: 'Tokyo, Japan',
        position: 'Software Engineer',
        experience: 3
      },
      {
        id: '2', 
        firstName: 'Maria',
        lastName: 'Santos',
        email: 'maria.santos@example.com',
        phone: '+63-917-123-4567',
        nationality: 'Filipino',
        location: 'Manila, Philippines',
        position: 'Data Scientist',
        experience: 5
      },
      {
        id: '3',
        firstName: 'Tiger',
        lastName: 'Koda',
        email: 'tiger@aikoda.dev',
        nationality: 'AI Entity',
        location: 'Digital Realm',
        position: 'AI Cultural Intelligence Specialist',
        experience: 1
      }
    ]

    return NextResponse.json(mockCandidates)
  } catch (error) {
    console.error('Foundation API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
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
        { error: 'firstName, lastName, and email are required' },
        { status: 400 }
      )
    }

    // Mock creation - in real version this would save to database
    const newCandidate = {
      id: Date.now().toString(),
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone || null,
      nationality: body.nationality || null,
      location: body.location || null,
      position: body.position || null,
      experience: body.experience || null,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json(newCandidate, { status: 201 })
  } catch (error) {
    console.error('Foundation API Create Error:', error)
    return NextResponse.json(
      { error: 'Failed to create candidate' },
      { status: 500 }
    )
  }
}