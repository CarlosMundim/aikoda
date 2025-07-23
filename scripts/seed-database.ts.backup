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
      description: 'Leading technology company specializing in enterprise solutions and AI-driven platforms',
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
      description: 'International financial services with focus on cultural integration and sustainable growth',
      foundedYear: 2010,
      website: 'https://global-innovation.com'
    }
  })
  
  const techStartup = await prisma.company.create({
    data: {
      companyName: 'NextGen AI Solutions',
      industry: 'Artificial Intelligence',
      companySize: '50-200',
      headquarters: 'Kyoto, Japan',
      description: 'Cutting-edge AI startup developing next-generation machine learning solutions',
      foundedYear: 2020,
      website: 'https://nextgen-ai.com'
    }
  })
  
  console.log('✅ Companies created')
  
  // Create jobs
  const jobs = [
    {
      title: 'Senior Software Engineer',
      companyId: techCorp.id,
      department: 'Engineering',
      location: 'Tokyo, Japan',
      employmentType: 'Full-time',
      salaryMin: 8000000,
      salaryMax: 12000000,
      currency: 'JPY',
      description: 'Lead development of enterprise-scale applications using modern technology stack',
      responsibilities: 'Design and implement scalable software solutions, mentor junior developers, collaborate with cross-functional teams',
      requiredSkills: JSON.stringify(['JavaScript', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS']),
      preferredSkills: JSON.stringify(['Next.js', 'Prisma', 'Docker', 'Kubernetes']),
      culturalRequirements: JSON.stringify({
        teamwork: 90,
        communication: 85,
        adaptability: 80,
        leadership: 75,
        waHarmony: 85,
        kaizenImprovement: 80
      }),
      benefits: 'Health insurance, commuter allowance, flexible working hours, professional development budget',
      status: 'active',
      urgencyLevel: 'high',
      remoteWorkOptions: 'hybrid',
      travelRequirements: 'minimal'
    },
    {
      title: 'Cultural Integration Specialist',
      companyId: globalInnovation.id,
      department: 'Human Resources',
      location: 'Osaka, Japan',
      employmentType: 'Full-time',
      salaryMin: 6000000,
      salaryMax: 9000000,
      currency: 'JPY',
      description: 'Support international talent integration and foster multicultural workplace environment',
      responsibilities: 'Develop cultural training programs, support international hires, facilitate cross-cultural communication',
      requiredSkills: JSON.stringify(['Cultural Intelligence', 'HR Management', 'Communication', 'Training Design']),
      preferredSkills: JSON.stringify(['Psychology', 'Organizational Development', 'Diversity & Inclusion']),
      culturalRequirements: JSON.stringify({
        empathy: 95,
        crossCulturalCompetence: 95,
        communication: 90,
        teamwork: 85,
        omotenashiService: 90,
        nemawashiConsensus: 80
      }),
      benefits: 'Comprehensive health coverage, cultural exchange programs, language learning support',
      status: 'active',
      urgencyLevel: 'medium',
      remoteWorkOptions: 'onsite',
      travelRequirements: 'occasional'
    },
    {
      title: 'AI Research Scientist',
      companyId: techStartup.id,
      department: 'Research & Development',
      location: 'Kyoto, Japan',
      employmentType: 'Full-time',
      salaryMin: 12000000,
      salaryMax: 18000000,
      currency: 'JPY',
      description: 'Conduct cutting-edge research in machine learning and artificial intelligence',
      responsibilities: 'Research novel AI algorithms, publish papers, develop prototypes, collaborate with international research teams',
      requiredSkills: JSON.stringify(['Python', 'Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Statistics']),
      preferredSkills: JSON.stringify(['Computer Vision', 'NLP', 'Reinforcement Learning', 'Research Publication']),
      culturalRequirements: JSON.stringify({
        analyticalThinking: 95,
        innovation: 90,
        collaboration: 80,
        adaptability: 85,
        bushidoDedication: 85,
        kaizenImprovement: 90
      }),
      benefits: 'Stock options, research budget, conference attendance, patent bonuses',
      status: 'active',
      urgencyLevel: 'high',
      remoteWorkOptions: 'remote',
      travelRequirements: 'frequent'
    },
    {
      title: 'Data Scientist',
      companyId: techCorp.id,
      department: 'Analytics',
      location: 'Tokyo, Japan',
      employmentType: 'Full-time',
      salaryMin: 7000000,
      salaryMax: 11000000,
      currency: 'JPY',
      description: 'Analyze complex data sets to drive business insights and strategic decisions',
      responsibilities: 'Build predictive models, create data visualizations, collaborate with business stakeholders',
      requiredSkills: JSON.stringify(['Python', 'R', 'SQL', 'Machine Learning', 'Statistics', 'Tableau']),
      preferredSkills: JSON.stringify(['Spark', 'Hadoop', 'AWS', 'Data Engineering']),
      culturalRequirements: JSON.stringify({
        analyticalThinking: 90,
        attention: 85,
        communication: 80,
        teamwork: 75,
        waHarmony: 80,
        nemawashiConsensus: 75
      }),
      benefits: 'Performance bonuses, training allowance, health club membership',
      status: 'active',
      urgencyLevel: 'medium',
      remoteWorkOptions: 'hybrid',
      travelRequirements: 'minimal'
    }
  ]
  
  for (const jobData of jobs) {
    await prisma.job.create({ data: jobData })
  }
  
  console.log('✅ Jobs created')
  
  // Create candidates
  const candidates = [
    {
      firstName: 'Yuki',
      lastName: 'Tanaka',
      email: 'yuki.tanaka@email.com',
      cellPhone: '+81-90-1234-5678',
      nationality: 'JP',
      currentLocation: 'Tokyo, Japan',
      dateOfBirth: new Date('1990-05-15'),
      workEligibilityStatus: 'Japanese citizen',
      linkedInProfile: 'https://linkedin.com/in/yuki-tanaka',
      githubProfile: 'https://github.com/yukitanaka',
      technicalSkills: JSON.stringify(['JavaScript', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']),
      languageProficiency: JSON.stringify({
        japanese: 'native',
        english: 'business',
        mandarin: 'conversational'
      }),
      educationLevel: 'Bachelor',
      fieldOfStudy: 'Computer Science',
      yearsOfExperience: 8,
      currentJobTitle: 'Senior Software Engineer',
      currentCompany: 'Tech Solutions Inc.',
      desiredSalaryMin: 8500000,
      desiredSalaryMax: 12000000,
      jobSearchStatus: 'active',
      availabilityDate: new Date('2025-09-01'),
      willingToRelocate: false,
      remoteWorkPreference: 'hybrid'
    },
    {
      firstName: 'Maria',
      lastName: 'Santos',
      email: 'maria.santos@email.com',
      cellPhone: '+63-917-123-4567',
      nationality: 'PH',
      currentLocation: 'Manila, Philippines',
      dateOfBirth: new Date('1988-12-20'),
      workEligibilityStatus: 'Needs visa sponsorship',
      linkedInProfile: 'https://linkedin.com/in/maria-santos',
      githubProfile: 'https://github.com/mariasantos',
      technicalSkills: JSON.stringify(['Python', 'R', 'Machine Learning', 'TensorFlow', 'SQL', 'Tableau', 'AWS']),
      languageProficiency: JSON.stringify({
        english: 'native',
        tagalog: 'native',
        japanese: 'intermediate'
      }),
      educationLevel: 'Masters',
      fieldOfStudy: 'Data Science',
      yearsOfExperience: 6,
      currentJobTitle: 'Data Scientist',
      currentCompany: 'Analytics Plus',
      desiredSalaryMin: 7000000,
      desiredSalaryMax: 10000000,
      jobSearchStatus: 'active',
      availabilityDate: new Date('2025-10-15'),
      willingToRelocate: true,
      remoteWorkPreference: 'remote'
    },
    {
      firstName: 'Kenji',
      lastName: 'Nakamura',
      email: 'kenji.nakamura@email.com',
      cellPhone: '+81-80-9876-5432',
      nationality: 'JP',
      currentLocation: 'Osaka, Japan',
      dateOfBirth: new Date('1985-03-10'),
      workEligibilityStatus: 'Japanese citizen',
      linkedInProfile: 'https://linkedin.com/in/kenji-nakamura',
      technicalSkills: JSON.stringify(['Cultural Intelligence', 'HR Management', 'Training Design', 'Psychology', 'Communication']),
      languageProficiency: JSON.stringify({
        japanese: 'native',
        english: 'fluent',
        korean: 'conversational'
      }),
      educationLevel: 'Masters',
      fieldOfStudy: 'Organizational Psychology',
      yearsOfExperience: 12,
      currentJobTitle: 'HR Manager',
      currentCompany: 'Global Corp',
      desiredSalaryMin: 6500000,
      desiredSalaryMax: 9500000,
      jobSearchStatus: 'passive',
      availabilityDate: new Date('2025-11-01'),
      willingToRelocate: false,
      remoteWorkPreference: 'onsite'
    },
    {
      firstName: 'Priya',
      lastName: 'Sharma',
      email: 'priya.sharma@email.com',
      cellPhone: '+91-98765-43210',
      nationality: 'IN',
      currentLocation: 'Bangalore, India',
      dateOfBirth: new Date('1992-08-25'),
      workEligibilityStatus: 'Needs visa sponsorship',
      linkedInProfile: 'https://linkedin.com/in/priya-sharma',
      githubProfile: 'https://github.com/priyasharma',
      technicalSkills: JSON.stringify(['Python', 'Deep Learning', 'Computer Vision', 'PyTorch', 'Research', 'Statistics']),
      languageProficiency: JSON.stringify({
        english: 'fluent',
        hindi: 'native',
        japanese: 'beginner'
      }),
      educationLevel: 'PhD',
      fieldOfStudy: 'Machine Learning',
      yearsOfExperience: 5,
      currentJobTitle: 'Research Scientist',
      currentCompany: 'AI Research Lab',
      desiredSalaryMin: 12000000,
      desiredSalaryMax: 18000000,
      jobSearchStatus: 'active',
      availabilityDate: new Date('2025-08-15'),
      willingToRelocate: true,
      remoteWorkPreference: 'remote'
    }
  ]
  
  const createdCandidates = []
  for (const candidateData of candidates) {
    const candidate = await prisma.candidate.create({ data: candidateData })
    createdCandidates.push(candidate)
  }
  
  console.log('✅ Candidates created')
  
  // Create cultural assessments for candidates
  const culturalAssessments = [
    {
      candidateId: createdCandidates[0].id, // Yuki Tanaka
      assessmentType: 'comprehensive',
      overallScore: 92,
      culturalFitPrediction: 94,
      integrationTimelineDays: 30,
      waHarmonyScore: 95,
      kaizenImprovementScore: 90,
      omotenashiServiceScore: 88,
      bushidoDedicationScore: 92,
      nemawashiConsensusScore: 89,
      dimensionScores: JSON.stringify({
        wa_harmony: 95,
        kaizen_improvement: 90,
        omotenashi_service: 88,
        bushido_dedication: 92,
        nemawashi_consensus: 89
      }),
      culturalTrainingNeeded: JSON.stringify(['Advanced leadership skills', 'Cross-cultural mentoring'])
    },
    {
      candidateId: createdCandidates[1].id, // Maria Santos
      assessmentType: 'comprehensive',
      overallScore: 78,
      culturalFitPrediction: 82,
      integrationTimelineDays: 90,
      waHarmonyScore: 75,
      kaizenImprovementScore: 80,
      omotenashiServiceScore: 85,
      bushidoDedicationScore: 70,
      nemawashiConsensusScore: 75,
      dimensionScores: JSON.stringify({
        wa_harmony: 75,
        kaizen_improvement: 80,
        omotenashi_service: 85,
        bushido_dedication: 70,
        nemawashi_consensus: 75
      }),
      culturalTrainingNeeded: JSON.stringify([
        'Japanese harmony and team consensus training',
        'Business etiquette and hierarchy understanding',
        'Continuous improvement methodology training'
      ])
    },
    {
      candidateId: createdCandidates[2].id, // Kenji Nakamura
      assessmentType: 'comprehensive',
      overallScore: 96,
      culturalFitPrediction: 98,
      integrationTimelineDays: 15,
      waHarmonyScore: 98,
      kaizenImprovementScore: 95,
      omotenashiServiceScore: 97,
      bushidoDedicationScore: 94,
      nemawashiConsensusScore: 96,
      dimensionScores: JSON.stringify({
        wa_harmony: 98,
        kaizen_improvement: 95,
        omotenashi_service: 97,
        bushido_dedication: 94,
        nemawashi_consensus: 96
      }),
      culturalTrainingNeeded: JSON.stringify(['Excellent cultural compatibility demonstrated'])
    },
    {
      candidateId: createdCandidates[3].id, // Priya Sharma
      assessmentType: 'comprehensive',
      overallScore: 71,
      culturalFitPrediction: 76,
      integrationTimelineDays: 120,
      waHarmonyScore: 68,
      kaizenImprovementScore: 75,
      omotenashiServiceScore: 70,
      bushidoDedicationScore: 78,
      nemawashiConsensusScore: 65,
      dimensionScores: JSON.stringify({
        wa_harmony: 68,
        kaizen_improvement: 75,
        omotenashi_service: 70,
        bushido_dedication: 78,
        nemawashi_consensus: 65
      }),
      culturalTrainingNeeded: JSON.stringify([
        'Comprehensive Japanese cultural orientation',
        'Team harmony and consensus building training',
        'Customer service excellence and hospitality training',
        'Japanese business communication styles'
      ])
    }
  ]
  
  for (const assessmentData of culturalAssessments) {
    await prisma.culturalAssessment.create({ data: assessmentData })
  }
  
  console.log('✅ Cultural assessments created')
  
  console.log('🎉 Database seeding completed successfully!')
  console.log(`
📊 Sample Data Created:
- 3 Companies (TechCorp Solutions, Global Innovation Ltd., NextGen AI Solutions)
- ${jobs.length} Job Openings (Tech, HR, AI Research roles)
- ${candidates.length} Candidates (Japanese and International talent)
- ${culturalAssessments.length} Cultural Intelligence Assessments

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