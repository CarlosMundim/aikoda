const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function testDatabase() {
  console.log('🐅 TIGER BOSS DATABASE VERIFICATION TEST')
  console.log('=========================================')
  
  try {
    // Test 1: Database connectivity
    console.log('🔌 Testing database connectivity...')
    const candidates = await prisma.candidate.findMany()
    console.log(`✅ Database connected - Found ${candidates.length} candidates`)
    
    // Test 2: Create a test candidate
    console.log('\\n👤 Testing candidate creation...')
    const testCandidate = await prisma.candidate.create({
      data: {
        firstName: 'Test',
        lastName: 'Candidate',
        email: `test.${Date.now()}@demo.com`,
        nationality: 'JP',
        currentLocation: 'Tokyo, Japan',
        experience: 5,
        technicalSkills: JSON.stringify(['JavaScript', 'React']),
        languageProficiency: JSON.stringify({ japanese: 'native', english: 'business' })
      }
    })
    console.log(`✅ Test candidate created - ID: ${testCandidate.id}`)
    
    // Test 3: Create cultural assessment
    console.log('\\n🧠 Testing cultural assessment creation...')
    const culturalAssessment = await prisma.culturalAssessment.create({
      data: {
        candidateId: testCandidate.id,
        assessmentType: 'comprehensive',
        overallScore: 85,
        culturalFitPrediction: 88,
        integrationTimelineDays: 60,
        waHarmonyScore: 80,
        kaizenImprovementScore: 85,
        omotenashiServiceScore: 82,
        bushidoDedicationScore: 88,
        nemawashiConsensusScore: 83
      }
    })
    console.log(`✅ Cultural assessment created - ID: ${culturalAssessment.id}`)
    
    // Test 4: Verify data retrieval
    console.log('\\n🔍 Testing data retrieval...')
    const retrievedCandidate = await prisma.candidate.findUnique({
      where: { id: testCandidate.id },
      include: { culturalAssessments: true }
    })
    
    if (retrievedCandidate && retrievedCandidate.culturalAssessments.length > 0) {
      console.log('✅ Data retrieval successful')
      console.log(`  - Candidate: ${retrievedCandidate.firstName} ${retrievedCandidate.lastName}`)
      console.log(`  - Cultural Score: ${retrievedCandidate.culturalAssessments[0].overallScore}`)
    } else {
      throw new Error('Data retrieval failed')
    }
    
    // Test 5: Check companies and jobs
    const companies = await prisma.company.findMany()
    const jobs = await prisma.jobPosting.findMany()
    
    console.log(`\\n📊 Current database status:`)
    console.log(`  - Candidates: ${candidates.length + 1}`)
    console.log(`  - Companies: ${companies.length}`)
    console.log(`  - Jobs: ${jobs.length}`)
    
    console.log('\\n🎉 ===============================================')
    console.log('✅ DATABASE IS FULLY FUNCTIONAL!')
    console.log('===============================================')
    console.log('✅ Data persistence: WORKING')
    console.log('✅ Candidate registration: WORKING')
    console.log('✅ Cultural assessments: WORKING')
    console.log('✅ Data retrieval: WORKING')
    console.log('')
    console.log('🚀 DATABASE READY FOR CLIENT DEMONSTRATIONS!')
    
  } catch (error) {
    console.log('\\n💥 ===============================================')
    console.log('❌ DATABASE TEST FAILED!')
    console.log('===============================================')
    console.error('Error details:', error.message)
    console.log('🚨 CRITICAL ISSUE - MUST BE FIXED!')
  } finally {
    await prisma.$disconnect()
  }
}

testDatabase()