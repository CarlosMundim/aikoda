import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const format = searchParams.get('format') || 'csv'
    
    const candidates = await prisma.candidate.findMany({
      include: {
        culturalAssessments: {
          orderBy: { createdAt: 'desc' },
          take: 1
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    if (format === 'csv') {
      // Generate CSV content
      const headers = [
        'ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Nationality', 
        'Location', 'Position', 'Experience (Years)', 'Technical Skills',
        'Language Proficiency', 'Salary Expectation', 'Availability Date',
        'Cultural Score', 'Cultural Fit Prediction', 'Registration Date'
      ]
      
      const csvRows = [
        headers.join(','),
        ...candidates.map(candidate => {
          const cultural = candidate.culturalAssessments[0]
          return [
            candidate.id,
            `"${candidate.firstName}"`,
            `"${candidate.lastName}"`,
            `"${candidate.email}"`,
            `"${candidate.cellPhone || ''}"`,
            `"${candidate.nationality}"`,
            `"${candidate.currentLocation || ''}"`,
            `"${candidate.currentPosition || ''}"`,
            candidate.experience || 0,
            `"${candidate.technicalSkills || ''}"`,
            `"${candidate.languageProficiency || ''}"`,
            candidate.salaryExpectation || 0,
            candidate.availabilityDate ? new Date(candidate.availabilityDate).toISOString().split('T')[0] : '',
            cultural?.overallScore || '',
            cultural?.culturalFitPrediction || '',
            new Date(candidate.createdAt).toISOString().split('T')[0]
          ].join(',')
        })
      ]
      
      const csvContent = csvRows.join('\\n')
      
      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="candidates_export_${new Date().toISOString().split('T')[0]}.csv"`
        }
      })
    }
    
    // For Excel format, return JSON that frontend can convert
    if (format === 'json') {
      const excelData = candidates.map(candidate => {
        const cultural = candidate.culturalAssessments[0]
        return {
          'ID': candidate.id,
          'First Name': candidate.firstName,
          'Last Name': candidate.lastName,
          'Email': candidate.email,
          'Phone': candidate.cellPhone || '',
          'Nationality': candidate.nationality,
          'Location': candidate.currentLocation || '',
          'Position': candidate.currentPosition || '',
          'Experience (Years)': candidate.experience || 0,
          'Technical Skills': candidate.technicalSkills ? JSON.parse(candidate.technicalSkills).join(', ') : '',
          'Language Proficiency': candidate.languageProficiency ? Object.entries(JSON.parse(candidate.languageProficiency)).map(([lang, level]) => `${lang}: ${level}`).join(', ') : '',
          'Salary Expectation': candidate.salaryExpectation || 0,
          'Availability Date': candidate.availabilityDate ? new Date(candidate.availabilityDate).toISOString().split('T')[0] : '',
          'Cultural Score': cultural?.overallScore || '',
          'Cultural Fit Prediction': cultural?.culturalFitPrediction || '',
          'Registration Date': new Date(candidate.createdAt).toISOString().split('T')[0]
        }
      })
      
      return NextResponse.json({
        data: excelData,
        filename: `candidates_export_${new Date().toISOString().split('T')[0]}.xlsx`
      })
    }
    
    return NextResponse.json({ error: 'Invalid format' }, { status: 400 })
    
  } catch (error) {
    console.error('Error exporting candidates:', error)
    return NextResponse.json(
      { error: 'Failed to export candidates' },
      { status: 500 }
    )
  }
}