import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database with sample data...')
  
  // Create companies
  const techCorp = await prisma.company.create({
    data: {
      companyName: 'TechCorp Solutions',
      industry: 'Technology',
      companySize: '1000-5000',
      headquarters: 'Tokyo, Japan',
      description: 'Leading technology company specializing in enterprise solutions',
      foundedYear: 1995,
      website: 'https://techcorp-solutions.com'
    }
  })
  
  const globalInnovation = await prisma.company.create({
    data: {
      companyName: 'Global Innovation Ltd.',
      industry: 'Finance',
      companySize: '500-1000',
      headquarters: 'Osaka, Japan',
      description: 'International financial services company',
      foundedYear: 2010,
      website: 'https://global-innovation.com'
    }
  })
  
  console.log('✅ Companies created')
  
  // Create job postings  
  const job1 = await prisma.jobPosting.create({
    data: {
      jobTitle: 'Senior Software Engineer',
      companyId: techCorp.id,
      department: 'Engineering',
      location: 'Tokyo, Japan',
      employmentType: 'Full-time',
      experienceLevel: 'Senior',
      jobDescription: 'Lead development of enterprise applications',
      salaryRangeMinimum: 8000000,
      salaryRangeMaximum: 12000000
    }
  })
  
  const job2 = await prisma.jobPosting.create({
    data: {
      jobTitle: 'Cultural Integration Specialist',
      companyId: globalInnovation.id,
      department: 'Human Resources',
      location: 'Osaka, Japan',
      employmentType: 'Full-time',
      experienceLevel: 'Mid-level',
      jobDescription: 'Support international talent integration',
      salaryRangeMinimum: 6000000,
      salaryRangeMaximum: 9000000
    }
  })
  
  console.log('✅ Jobs created')
  
  // Create candidates
  const candidate1 = await prisma.candidate.create({
    data: {
      firstName: 'Yuki',
      lastName: 'Tanaka',
      email: 'yuki.tanaka@email.com',
      cellPhone: '+81-90-1234-5678',
      nationality: 'JP',
      currentLocation: 'Tokyo, Japan',
      dateOfBirth: new Date('1990-05-15'),
      currentPosition: 'Software Engineer',
      experience: 8,
      technicalSkills: JSON.stringify(['JavaScript', 'React', 'Node.js']),
      languageProficiency: JSON.stringify({japanese: 'native', english: 'business'}),
      salaryExpectation: 10000000,
      availabilityDate: new Date('2025-09-01')
    }
  })
  
  const candidate2 = await prisma.candidate.create({
    data: {
      firstName: 'Maria',
      lastName: 'Santos',
      email: 'maria.santos@email.com',
      cellPhone: '+63-917-123-4567',
      nationality: 'PH',
      currentLocation: 'Manila, Philippines',
      dateOfBirth: new Date('1988-12-20'),
      currentPosition: 'Data Scientist',
      experience: 6,
      technicalSkills: JSON.stringify(['Python', 'Machine Learning', 'SQL']),
      languageProficiency: JSON.stringify({english: 'native', japanese: 'intermediate'}),
      salaryExpectation: 8000000,
      availabilityDate: new Date('2025-10-15')
    }
  })
  
  console.log('✅ Candidates created')
  
  // Create cultural assessments
  await prisma.culturalAssessment.create({
    data: {
      candidateId: candidate1.id,
      assessmentType: 'comprehensive',
      overallScore: 92,
      culturalFitPrediction: 94,
      integrationTimelineDays: 30,
      waHarmonyScore: 95,
      kaizenImprovementScore: 90,
      omotenashiServiceScore: 88,
      bushidoDedicationScore: 92,
      nemawashiConsensusScore: 89
    }
  })
  
  await prisma.culturalAssessment.create({
    data: {
      candidateId: candidate2.id,
      assessmentType: 'comprehensive',
      overallScore: 78,
      culturalFitPrediction: 82,
      integrationTimelineDays: 90,
      waHarmonyScore: 75,
      kaizenImprovementScore: 80,
      omotenashiServiceScore: 85,
      bushidoDedicationScore: 70,
      nemawashiConsensusScore: 75
    }
  })
  
  console.log('✅ Cultural assessments created')
  
  console.log('🎉 Database seeding completed successfully!')
  console.log(`
📊 Sample Data Created:
- 2 Companies (TechCorp Solutions, Global Innovation Ltd.)
- 2 Job Openings (Tech and HR roles)
- 2 Candidates (Japanese and International talent)
- 2 Cultural Intelligence Assessments

🚀 Platform is ready for demonstrations!
  `)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })