#!/usr/bin/env node

/**
 * COMPREHENSIVE DEMO TEST SCRIPT
 * Tests ALL functionality to ensure ZERO failures during client presentations
 * Papa Carlos demands PERFECTION - no mock data, everything must work!
 */

const { default: fetch } = require('node-fetch')
const fs = require('fs')

const BASE_URL = 'http://localhost:3000'

console.log('🐅 TIGER BOSS COMPREHENSIVE DEMO TEST SCRIPT')
console.log('=====================================')
console.log('Testing ALL functionality to ensure PERFECT client demos!')
console.log('')

// Test data
const testCandidate = {
  firstName: 'Takeshi',
  lastName: 'Yamamoto',
  email: `test.candidate.${Date.now()}@demo.com`,
  cellPhone: '+81-90-1234-5678',
  nationality: 'JP',
  currentLocation: 'Tokyo, Japan',
  currentPosition: 'Senior Developer',
  experience: 8,
  technicalSkills: ['JavaScript', 'React', 'Node.js', 'Python'],
  languageProficiency: { japanese: 'native', english: 'business' },
  salaryExpectation: 10000000,
  availabilityDate: '2025-09-01',
  culturalResponses: {
    teamworkPreference: 'collaborative',
    communicationStyle: 'direct',
    hierarchyComfort: 'moderate'
  }
}

const testCompany = {
  companyName: 'Demo Tech Solutions',
  industry: 'Technology',
  companySize: '500-1000',
  headquartersLocation: 'Tokyo, Japan',
  description: 'Leading technology solutions provider',
  establishedYear: 2010,
  website: 'https://demo-tech.com',
  contactEmail: 'hr@demo-tech.com'
}

const testJob = {
  title: 'Senior Full Stack Developer',
  department: 'Engineering',
  location: 'Tokyo, Japan',
  employmentType: 'Full-time',
  salaryMin: 8000000,
  salaryMax: 12000000,
  currency: 'JPY',
  description: 'Lead development of innovative web applications',
  requiredSkills: ['JavaScript', 'React', 'Node.js'],
  culturalRequirements: { teamwork: 90, communication: 85 },
  status: 'active',
  urgencyLevel: 'high'
}

async function apiRequest(endpoint, method = 'GET', data = null) {
  try {
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' }
    }
    
    if (data) {
      options.body = JSON.stringify(data)
    }
    
    const response = await fetch(`${BASE_URL}${endpoint}`, options)
    const result = await response.json()
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${JSON.stringify(result)}`)
    }
    
    return result
  } catch (error) {
    console.error(`❌ API Request failed for ${endpoint}:`, error.message)
    throw error
  }
}

async function testDatabaseConnectivity() {
  console.log('🔌 Testing Database Connectivity...')
  
  try {
    const candidates = await apiRequest('/api/candidates')
    console.log(`✅ Database connected - Found ${candidates.length} existing candidates`)
    
    const companies = await apiRequest('/api/companies')
    console.log(`✅ Companies table accessible - Found ${companies.length} companies`)
    
    const jobs = await apiRequest('/api/jobs')
    console.log(`✅ Jobs table accessible - Found ${jobs.length} jobs`)
    
    return true
  } catch (error) {
    console.error('❌ Database connectivity test FAILED')
    throw error
  }
}

async function testCandidateRegistration() {
  console.log('\\n👤 Testing Candidate Registration Flow...')
  
  try {
    console.log('  📝 Submitting candidate registration...')
    const registration = await apiRequest('/api/workflow/candidate-registration', 'POST', testCandidate)
    
    if (!registration.success || !registration.candidateId) {
      throw new Error('Registration did not return success or candidate ID')
    }
    
    console.log(`✅ Candidate registered successfully - ID: ${registration.candidateId}`)
    
    // Verify candidate was actually saved to database
    console.log('  🔍 Verifying candidate was saved to database...')
    const savedCandidate = await apiRequest(`/api/candidates`)
    const foundCandidate = savedCandidate.find(c => c.id === registration.candidateId)
    
    if (!foundCandidate) {
      throw new Error('Candidate not found in database after registration!')
    }
    
    console.log('✅ Candidate successfully saved to database')
    console.log(`  - Name: ${foundCandidate.firstName} ${foundCandidate.lastName}`)
    console.log(`  - Email: ${foundCandidate.email}`)
    console.log(`  - Skills: ${foundCandidate.technicalSkills.join(', ')}`)
    
    // Test AI cultural analysis
    if (registration.dashboard && registration.dashboard.culturalIntelligence) {
      console.log('✅ AI Cultural Intelligence analysis completed')
      console.log(`  - Overall Score: ${registration.dashboard.culturalIntelligence.overallScore}`)
    } else {
      console.log('⚠️ AI Cultural Intelligence analysis not available')
    }
    
    return registration.candidateId
  } catch (error) {
    console.error('❌ Candidate registration test FAILED')
    throw error
  }
}

async function testCompanyRegistration() {
  console.log('\\n🏢 Testing Company Registration...')
  
  try {
    const company = await apiRequest('/api/companies', 'POST', testCompany)
    console.log(`✅ Company registered successfully - ID: ${company.id}`)
    
    return company.id
  } catch (error) {
    console.error('❌ Company registration test FAILED')
    throw error
  }
}

async function testJobPosting(companyId) {
  console.log('\\n💼 Testing Job Posting...')
  
  try {
    const jobData = { ...testJob, companyId }
    const job = await apiRequest('/api/jobs', 'POST', jobData)
    console.log(`✅ Job posted successfully - ID: ${job.id}`)
    
    return job.id
  } catch (error) {
    console.error('❌ Job posting test FAILED')
    throw error
  }
}

async function testJobMatching(candidateId, jobId) {
  console.log('\\n🎯 Testing AI Job Matching...')
  
  try {
    console.log('  🤖 Running AI matching analysis...')
    const matchResult = await apiRequest('/api/matching', 'POST', {
      analysisType: 'job_candidates',
      jobId: jobId
    })
    
    if (!matchResult.matches || matchResult.matches.length === 0) {
      throw new Error('No matches returned from AI matching')
    }
    
    console.log(`✅ AI Matching completed - Found ${matchResult.matches.length} matches`)
    
    const topMatch = matchResult.matches[0]
    console.log(`  - Top match score: ${topMatch.overallScore}%`)
    console.log(`  - Skills match: ${topMatch.skillsMatch}%`)
    console.log(`  - Cultural fit: ${topMatch.culturalFit}%`)
    
    if (matchResult.aiPowered) {
      console.log('✅ AI-powered matching confirmed')
    } else {
      console.log('⚠️ Using fallback algorithm (AI may be unavailable)')
    }
    
    return matchResult.matches
  } catch (error) {
    console.error('❌ Job matching test FAILED')
    throw error
  }
}

async function testReportExports() {
  console.log('\\n📊 Testing Report Exports...')
  
  try {
    // Test CSV exports
    console.log('  📄 Testing CSV exports...')
    
    const candidatesCsv = await fetch(`${BASE_URL}/api/export/candidates?format=csv`)
    if (!candidatesCsv.ok) throw new Error('Candidates CSV export failed')
    console.log('✅ Candidates CSV export working')
    
    const jobsCsv = await fetch(`${BASE_URL}/api/export/jobs?format=csv`)
    if (!jobsCsv.ok) throw new Error('Jobs CSV export failed')
    console.log('✅ Jobs CSV export working')
    
    const matchesCsv = await fetch(`${BASE_URL}/api/export/matches?format=csv`)
    if (!matchesCsv.ok) throw new Error('Matches CSV export failed')
    console.log('✅ Matches CSV export working')
    
    // Test JSON exports for Excel
    console.log('  📈 Testing Excel (JSON) exports...')
    
    const candidatesExcel = await apiRequest('/api/export/candidates?format=json')
    if (!candidatesExcel.data) throw new Error('Candidates Excel export failed')
    console.log('✅ Candidates Excel export working')
    
    const jobsExcel = await apiRequest('/api/export/jobs?format=json')
    if (!jobsExcel.data) throw new Error('Jobs Excel export failed')
    console.log('✅ Jobs Excel export working')
    
    console.log('✅ ALL report exports are functional')
    
  } catch (error) {
    console.error('❌ Report exports test FAILED')
    throw error
  }
}

async function testDashboardAPIs() {
  console.log('\\n📈 Testing Dashboard APIs...')
  
  try {
    const kpis = await apiRequest('/api/dashboard/enterprise-kpis')
    console.log('✅ Enterprise KPIs API working')
    console.log(`  - Total candidates: ${kpis.total_candidates}`)
    console.log(`  - Active jobs: ${kpis.active_jobs}`)
    console.log(`  - Cultural match average: ${kpis.cultural_match_avg}%`)
    
    return true
  } catch (error) {
    console.error('❌ Dashboard APIs test FAILED')
    throw error
  }
}

async function runComprehensiveTest() {
  console.log('🚀 Starting comprehensive demo test...')
  console.log('This will test EVERY functionality that must work during client demos\\n')
  
  let candidateId, companyId, jobId
  
  try {
    // Test 1: Database connectivity
    await testDatabaseConnectivity()
    
    // Test 2: Candidate registration (CRITICAL)
    candidateId = await testCandidateRegistration()
    
    // Test 3: Company registration
    companyId = await testCompanyRegistration()
    
    // Test 4: Job posting
    jobId = await testJobPosting(companyId)
    
    // Test 5: AI job matching (CRITICAL)
    await testJobMatching(candidateId, jobId)
    
    // Test 6: Report exports (CRITICAL)
    await testReportExports()
    
    // Test 7: Dashboard APIs
    await testDashboardAPIs()
    
    console.log('\\n🎉 ===============================================')
    console.log('🐅 COMPREHENSIVE TEST COMPLETED SUCCESSFULLY! 🐅')
    console.log('===============================================')
    console.log('✅ Database connectivity: WORKING')
    console.log('✅ Candidate registration: WORKING')
    console.log('✅ Company registration: WORKING')
    console.log('✅ Job posting: WORKING')
    console.log('✅ AI job matching: WORKING')
    console.log('✅ CSV/Excel exports: WORKING')
    console.log('✅ Dashboard APIs: WORKING')
    console.log('')
    console.log('🚀 PLATFORM IS READY FOR CLIENT DEMONSTRATIONS!')
    console.log('Papa Carlos, your demos will be FLAWLESS! 💪')
    
  } catch (error) {
    console.log('\\n💥 ===============================================')
    console.log('❌ COMPREHENSIVE TEST FAILED!')
    console.log('===============================================')
    console.error('Error details:', error.message)
    console.log('')
    console.log('🚨 DO NOT PROCEED WITH CLIENT DEMO UNTIL FIXED!')
    process.exit(1)
  }
}

// Add delay to ensure server is ready
setTimeout(runComprehensiveTest, 2000)