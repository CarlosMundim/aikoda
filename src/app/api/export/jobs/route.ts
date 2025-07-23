import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const format = searchParams.get('format') || 'csv'
    
    const jobs = await prisma.job.findMany({
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

    if (format === 'csv') {
      // Generate CSV content
      const headers = [
        'ID', 'Job Title', 'Company', 'Industry', 'Department', 'Location', 
        'Employment Type', 'Salary Min', 'Salary Max', 'Currency',
        'Required Skills', 'Preferred Skills', 'Cultural Requirements',
        'Remote Work', 'Urgency Level', 'Status', 'Posted Date'
      ]
      
      const csvRows = [
        headers.join(','),
        ...jobs.map(job => [
          job.id,
          `"${job.title}"`,
          `"${job.company?.companyName || ''}"`,
          `"${job.company?.industry || ''}"`,
          `"${job.department || ''}"`,
          `"${job.location || ''}"`,
          `"${job.employmentType || ''}"`,
          job.salaryMin || 0,
          job.salaryMax || 0,
          `"${job.currency || 'JPY'}"`,
          `"${job.requiredSkills || ''}"`,
          `"${job.preferredSkills || ''}"`,
          `"${job.culturalRequirements || ''}"`,
          `"${job.remoteWorkOptions || ''}"`,
          `"${job.urgencyLevel || ''}"`,
          `"${job.status || ''}"`,
          new Date(job.createdAt).toISOString().split('T')[0]
        ].join(','))
      ]
      
      const csvContent = csvRows.join('\\n')
      
      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="jobs_export_${new Date().toISOString().split('T')[0]}.csv"`
        }
      })
    }
    
    // For Excel format, return JSON that frontend can convert
    if (format === 'json') {
      const excelData = jobs.map(job => ({
        'ID': job.id,
        'Job Title': job.title,
        'Company': job.company?.companyName || '',
        'Industry': job.company?.industry || '',
        'Department': job.department || '',
        'Location': job.location || '',
        'Employment Type': job.employmentType || '',
        'Salary Min': job.salaryMin || 0,
        'Salary Max': job.salaryMax || 0,
        'Currency': job.currency || 'JPY',
        'Required Skills': job.requiredSkills ? JSON.parse(job.requiredSkills).join(', ') : '',
        'Preferred Skills': job.preferredSkills ? JSON.parse(job.preferredSkills).join(', ') : '',
        'Cultural Requirements': job.culturalRequirements || '',
        'Remote Work': job.remoteWorkOptions || '',
        'Urgency Level': job.urgencyLevel || '',
        'Status': job.status || '',
        'Posted Date': new Date(job.createdAt).toISOString().split('T')[0]
      }))
      
      return NextResponse.json({
        data: excelData,
        filename: `jobs_export_${new Date().toISOString().split('T')[0]}.xlsx`
      })
    }
    
    return NextResponse.json({ error: 'Invalid format' }, { status: 400 })
    
  } catch (error) {
    console.error('Error exporting jobs:', error)
    return NextResponse.json(
      { error: 'Failed to export jobs' },
      { status: 500 }
    )
  }
}