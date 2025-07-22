# MANUS COMPLETE DASHBOARD PACKAGE - aiKODA Platform

## **URGENT IMPLEMENTATION REQUIRED**

### **Platform Status**: https://aikoda-platform.vercel.app/ ✅ WORKING
### **Current Dashboards**: 6 dashboards complete by Tiger
### **Missing Dashboards**: 4 critical dashboards needed IMMEDIATELY

---

## **DASHBOARD 1: CLIENT REGISTRATION**

### **File**: `src/app/client-registration/page.tsx` + `src/components/SAP/ClientRegistration.tsx`

### **Multi-Step Form Requirements**:

#### **Step 1: Company Information**
```typescript
interface CompanyBasicInfo {
  companyLegalName: string
  companyTradeName?: string
  companyRegistrationNumber?: string
  taxIdentificationNumber?: string
  industryClassification: string
  companySizeCategory: 'startup' | 'small' | 'medium' | 'large' | 'enterprise'
  numberOfEmployees?: number
  foundingYear?: number
  annualRevenueRange?: string
}
```

#### **Step 2: Geographic & Contact Information**
```typescript
interface CompanyLocation {
  headquartersCountry: string
  headquartersCity: string
  headquartersAddress: string
  headquartersPostalCode: string
  primaryContactName: string
  primaryContactTitle: string
  primaryContactEmail: string
  primaryContactPhone: string
  primaryContactLinkedin?: string
}
```

#### **Step 3: Business Profile**
```typescript
interface BusinessProfile {
  businessModel: 'b2b' | 'b2c' | 'b2b2c' | 'marketplace' | 'saas' | 'consulting'
  primaryProductsServices: string[]
  uniqueValueProposition: string
  targetCustomerSegments: string[]
  competitiveAdvantages: string[]
  marketPosition: 'startup' | 'challenger' | 'leader' | 'niche'
}
```

#### **Step 4: Cultural Profile (aiKODA UNIQUE)**
```typescript
interface CulturalProfile {
  companyCultureType: 'hierarchical' | 'collaborative' | 'innovative' | 'traditional' | 'hybrid'
  workEnvironmentStyle: 'formal' | 'casual' | 'mixed'
  communicationCulture: 'direct' | 'indirect' | 'contextual'
  decisionMakingStyle: 'top-down' | 'consensus' | 'democratic' | 'agile'
  innovationApproach: 'conservative' | 'moderate' | 'aggressive'
  riskToleranceLevel: 'low' | 'medium' | 'high'
  japaneseCulturalOpenness: number // 0-100
  diversityInclusionScore: number // 0-100
}
```

#### **Step 5: Hiring Requirements**
```typescript
interface HiringRequirements {
  urgentPositionsCount: number
  plannedHiresNextQuarter: number
  plannedHiresNextYear: number
  hiringBudgetAnnual: number
  hiringUrgencyLevel: 'low' | 'medium' | 'high' | 'critical'
  preferredCandidateOrigins: string[]
  criticalSkillGaps: string[]
  culturalFitPriorityScore: number // 0-100
  remoteWorkPolicy: 'none' | 'hybrid' | 'full' | 'flexible'
  workLifeBalancePriority: number // 0-100
}
```

---

## **DASHBOARD 2: CANDIDATE REGISTRATION**

### **File**: `src/app/candidate-registration/page.tsx` + `src/components/SAP/CandidateRegistration.tsx`

### **Complete Candidate Profile Requirements**:

#### **Step 1: Personal Information**
```typescript
interface PersonalInfo {
  firstName: string
  lastName: string
  middleName?: string
  email: string
  cellPhone: string
  homePhone?: string
  dateOfBirth: Date
  nationality: string
  gender?: 'male' | 'female' | 'other' | 'prefer_not_to_say'
  maritalStatus?: 'single' | 'married' | 'divorced' | 'widowed'
  profilePictureUrl?: string
}
```

#### **Step 2: Address & Location**
```typescript
interface AddressInfo {
  currentAddress: string
  permanentAddress?: string
  city: string
  stateProvince: string
  postalCode: string
  country: string
  willingToRelocate: boolean
  preferredWorkLocations: string[]
}
```

#### **Step 3: Professional Background**
```typescript
interface ProfessionalBackground {
  currentPosition: string
  currentCompany?: string
  currentSalary?: number
  salaryExpectationMin?: number
  salaryExpectationMax?: number
  totalYearsExperience: number
  industryExperience: string[] // JSON array
  noticePeriod: string
  availabilityDate: Date
  workAuthorizationStatus: string
  visaType?: string
  visaExpiryDate?: Date
  preferredEmploymentType: 'full-time' | 'part-time' | 'contract' | 'freelance'
  preferredWorkArrangement: 'office' | 'remote' | 'hybrid'
}
```

#### **Step 4: Skills & Education**
```typescript
interface SkillsEducation {
  technicalSkills: string[] // Tags input
  softSkills: string[]
  certifications: Array<{
    name: string
    issuer: string
    issueDate: Date
    expiryDate?: Date
    credentialId?: string
  }>
  languageProficiency: Record<string, 'basic' | 'conversational' | 'business' | 'native'>
  educationRecords: Array<{
    degree: string
    fieldOfStudy: string
    institution: string
    graduationYear: number
    gpa?: number
  }>
}
```

#### **Step 5: Cultural Preferences & Work Style**
```typescript
interface CulturalPreferences {
  workStylePreference: 'independent' | 'collaborative' | 'mixed'
  communicationStyle: 'direct' | 'diplomatic' | 'contextual'
  teamCollaborationPreference: 'leader' | 'contributor' | 'supporter'
  leadershipInterest: number // 0-100
  stressToleranceLevel: number // 0-100
  adaptabilityScore: number // 0-100
  culturalCuriosity: number // 0-100
  japaneseBusinessKnowledge: number // 0-100
}
```

#### **Step 6: Document Uploads**
```typescript
interface DocumentUploads {
  resumeUrl?: string
  portfolioUrl?: string
  certificatesUrls: string[]
  coverLetterUrl?: string
  workSamplesUrls: string[]
}
```

---

## **DASHBOARD 3: JOB POSTING MANAGEMENT**

### **File**: `src/app/job-posting/page.tsx` + `src/components/SAP/JobPosting.tsx`

### **Complete Job Posting Interface**:

#### **Job Posting Creation Form**:
```typescript
interface JobPostingForm {
  // Basic Job Information
  internalJobCode: string
  externalJobTitle: string
  internalJobTitle: string
  jobCategory: 'engineering' | 'design' | 'marketing' | 'sales' | 'operations' | 'hr' | 'finance'
  jobFamily: 'technical' | 'business' | 'creative' | 'leadership'
  jobLevel: 'entry' | 'junior' | 'mid' | 'senior' | 'principal' | 'executive'
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship'
  workArrangement: 'onsite' | 'remote' | 'hybrid'
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical'
  targetStartDate?: Date
  applicationDeadline?: Date
  
  // Job Requirements
  minimumExperienceYears: number
  maximumExperienceYears?: number
  requiredEducationLevel: 'high_school' | 'bachelors' | 'masters' | 'phd'
  requiredDegreeField?: string
  professionalCertRequired: string[]
  languageRequirements: Record<string, 'basic' | 'conversational' | 'business' | 'native'>
  jlptLevelRequired?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
  
  // Skills Requirements
  requiredTechnicalSkills: string[]
  preferredTechnicalSkills: string[]
  requiredSoftSkills: string[]
  leadershipSkillsRequired: string[]
  industryKnowledgeRequired: string[]
  
  // Cultural Requirements (aiKODA UNIQUE)
  culturalIntelligenceMin?: number
  waHarmonyRequirement?: number
  kaizenMindsetRequirement?: number
  omotenashiServiceRequirement?: number
  communicationStylePref?: 'direct' | 'indirect' | 'contextual'
  hierarchyRespectRequirement?: number
  teamCollaborationRequired?: number
  crossCulturalExpRequired: boolean
  
  // Compensation & Benefits
  salaryRangeMinimum: number
  salaryRangeMaximum: number
  salaryCurrency: 'JPY' | 'USD' | 'EUR'
  salaryNegotiable: boolean
  performanceBonusPercent?: number
  stockOptionsAvailable: boolean
  visaSponsorshipAvailable: boolean
  relocationAssistance: boolean
  
  // Job Description
  jobDescription: string
  keyResponsibilities: string[]
  successCriteria: string[]
  careerGrowthPath: string
  teamStructure: string
}
```

#### **Job Management Interface**:
```typescript
// Job Posting Management Features
interface JobManagementFeatures {
  // Job Listing
  jobList: Array<{
    id: string
    title: string
    status: 'draft' | 'active' | 'paused' | 'filled' | 'cancelled'
    applications: number
    qualifiedCandidates: number
    culturalMatches: number
    daysActive: number
    urgency: 'low' | 'medium' | 'high' | 'critical'
  }>
  
  // Bulk Operations
  bulkActions: 'activate' | 'pause' | 'clone' | 'archive'
  
  // Analytics
  jobAnalytics: {
    totalApplications: number
    qualifiedApplications: number
    averageCulturalFit: number
    timeToFill: number
    costPerHire: number
    sourceEffectiveness: Record<string, number>
  }
}
```

---

## **DASHBOARD 4: ENHANCED MARKET INTELLIGENCE WITH JOB SCRAPING**

### **File**: `src/app/market-intelligence/page.tsx` + Update existing `MarketIntelligence.tsx`

### **Job Portal Scraping & Market Analytics**:

#### **Job Market Data Structure**:
```typescript
interface JobMarketData {
  // Job Portal Analytics
  jobPortals: Array<{
    portalName: 'Indeed' | 'LinkedIn' | 'Glassdoor' | 'CareerCross' | 'Bizreach' | 'Rikunabi'
    totalJobs: number
    newJobsThisWeek: number
    averageSalary: number
    topLocations: Array<{
      city: string
      jobCount: number
      averageSalary: number
    }>
    topSkills: Array<{
      skill: string
      demandScore: number
      salaryPremium: number
    }>
    topCompanies: Array<{
      company: string
      openPositions: number
      averageSalary: number
      culturalOpenness: number
    }>
  }>
  
  // Geographic Analysis
  locationAnalytics: Array<{
    location: string
    totalJobs: number
    averageSalary: number
    costOfLiving: number
    culturalDiversity: number
    foreignerFriendliness: number
    transportationScore: number
    qualityOfLife: number
  }>
  
  // Industry Trends
  industryTrends: Array<{
    industry: string
    growthRate: number
    demandScore: number
    averageSalary: number
    culturalChallenges: string[]
    topSkillsNeeded: string[]
  }>
  
  // Salary Benchmarking
  salaryBenchmarks: Array<{
    position: string
    location: string
    experienceLevel: 'entry' | 'mid' | 'senior' | 'executive'
    currency: string
    percentiles: {
      p25: number
      p50: number
      p75: number
      p90: number
    }
    culturalFitPremium: number
    benefits: string[]
  }>
}
```

#### **Market Intelligence Dashboard Features**:

##### **Real-Time Job Market Monitoring**:
```typescript
interface JobMarketMonitoring {
  // Live Job Counts
  totalActiveJobs: number
  newJobsToday: number
  jobGrowthRate: number
  
  // Trending Positions
  trendingJobs: Array<{
    title: string
    demandIncrease: number
    averageSalary: number
    culturalRequirements: number
  }>
  
  // Competitive Analysis
  competitorAnalysis: Array<{
    company: string
    activeJobs: number
    hiringVelocity: number
    salaryRange: [number, number]
    culturalOpenness: number
    targetCandidateProfiles: string[]
  }>
}
```

##### **Advanced Analytics Visualizations**:
```typescript
interface MarketAnalyticsCharts {
  // Geographic Heat Map
  jobDensityMap: {
    regions: Array<{
      name: string
      coordinates: [number, number]
      jobCount: number
      averageSalary: number
      culturalScore: number
    }>
  }
  
  // Salary Trend Charts
  salaryTrends: {
    timeSeries: Array<{
      date: Date
      averageSalary: number
      position: string
      location: string
    }>
  }
  
  // Skills Demand Matrix
  skillsDemand: Array<{
    skill: string
    currentDemand: number
    projectedGrowth: number
    salaryImpact: number
    culturalAlignment: number
  }>
  
  // Cultural Fit Analytics
  culturalFitTrends: Array<{
    company: string
    culturalOpenness: number
    retentionRate: number
    satisfactionScore: number
    integrationTime: number
  }>
}
```

---

## **CANDIDATE LIFECYCLE WORKFLOW**

### **Complete Workflow from Registration to Contract End**:

#### **Stage 1: Registration & Profile Creation**
```typescript
interface RegistrationStage {
  step: 'registration'
  status: 'incomplete' | 'complete'
  profileCompleteness: number // 0-100
  documentsUploaded: string[]
  verificationStatus: 'pending' | 'verified' | 'rejected'
  culturalAssessmentScheduled: boolean
}
```

#### **Stage 2: Cultural Intelligence Assessment**
```typescript
interface CulturalAssessmentStage {
  step: 'cultural_assessment'
  assessmentType: 'comprehensive' | 'quick' | 'targeted'
  completionDate?: Date
  overallScore?: number
  dimensionScores?: Record<string, number>
  culturalProfile?: {
    primaryType: string
    secondaryType?: string
    strengths: string[]
    developmentAreas: string[]
  }
  integrationTimelinePrediction?: number
  trainingRecommendations?: string[]
}
```

#### **Stage 3: Job Matching & Application**
```typescript
interface JobMatchingStage {
  step: 'job_matching'
  matchedJobs: Array<{
    jobId: string
    jobTitle: string
    company: string
    overallMatchScore: number
    culturalFitScore: number
    skillsMatchScore: number
    salaryMatchScore: number
    applicationStatus: 'not_applied' | 'applied' | 'reviewing' | 'interviewing' | 'offered' | 'rejected'
    applicationDate?: Date
  }>
  activeApplications: number
  interviewsScheduled: number
  offersReceived: number
}
```

#### **Stage 4: Interview Process**
```typescript
interface InterviewStage {
  step: 'interview_process'
  interviews: Array<{
    interviewId: string
    jobId: string
    interviewType: 'screening' | 'technical' | 'cultural' | 'final'
    scheduledDate: Date
    interviewerName: string
    interviewerTitle: string
    status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled'
    feedback?: {
      technicalScore: number
      culturalFitScore: number
      communicationScore: number
      overallRating: number
      notes: string
      recommendation: 'strong_hire' | 'hire' | 'no_hire' | 'strong_no_hire'
    }
    culturalIntegrationNotes?: string
  }>
}
```

#### **Stage 5: Job Offer & Negotiation**
```typescript
interface OfferStage {
  step: 'job_offer'
  offers: Array<{
    offerId: string
    jobId: string
    company: string
    offerDate: Date
    expiryDate: Date
    baseSalary: number
    totalCompensation: number
    benefits: string[]
    startDate: Date
    visaSponsorship: boolean
    relocationPackage?: {
      amount: number
      services: string[]
    }
    culturalIntegrationSupport: {
      mentorAssigned: boolean
      trainingProgram: string[]
      integrationTimeline: number
    }
    status: 'pending' | 'accepted' | 'rejected' | 'negotiating' | 'expired'
    negotiationHistory?: Array<{
      date: Date
      counterOffer: number
      terms: string[]
      response: string
    }>
  }>
}
```

#### **Stage 6: Onboarding & Integration**
```typescript
interface OnboardingStage {
  step: 'onboarding'
  startDate: Date
  onboardingPlan: {
    culturalOrientationComplete: boolean
    mentorAssigned: {
      name: string
      title: string
      culturalBackground: string
      contactInfo: string
    }
    trainingModulesCompleted: Array<{
      module: string
      completionDate: Date
      score: number
    }>
    integrationMilestones: Array<{
      milestone: string
      targetDate: Date
      completionDate?: Date
      status: 'pending' | 'complete' | 'overdue'
    }>
  }
  integrationProgress: {
    day30Review: {
      managerRating: number
      peerFeedback: number
      culturalAdaptation: number
      jobPerformance: number
    }
    day90Review: {
      managerRating: number
      peerFeedback: number
      culturalAdaptation: number
      jobPerformance: number
      retentionProbability: number
    }
  }
}
```

#### **Stage 7: Employment & Performance Tracking**
```typescript
interface EmploymentStage {
  step: 'employment'
  employmentStartDate: Date
  currentStatus: 'active' | 'on_leave' | 'performance_review' | 'termination_notice'
  performanceReviews: Array<{
    reviewDate: Date
    period: string
    technicalPerformance: number
    culturalIntegration: number
    teamCollaboration: number
    leadershipGrowth: number
    overallRating: number
    goals: string[]
    achievements: string[]
    developmentAreas: string[]
    careerPath: string
  }>
  culturalIntegrationTracking: {
    integrationSuccessScore: number
    culturalChallengesOvercome: string[]
    mentorshipEffectiveness: number
    teamFeedback: number
    retentionRisk: 'low' | 'medium' | 'high'
  }
  promotions: Array<{
    promotionDate: Date
    fromTitle: string
    toTitle: string
    salaryIncrease: number
    reasonForPromotion: string[]
  }>
}
```

#### **Stage 8: Contract End & Transition**
```typescript
interface ContractEndStage {
  step: 'contract_end'
  endReason: 'resignation' | 'termination' | 'contract_completion' | 'retirement' | 'relocation'
  endDate: Date
  noticePeriod: number
  exitInterview: {
    interviewDate: Date
    overallSatisfaction: number
    culturalExperience: number
    wouldRecommendCompany: boolean
    culturalChallengesFaced: string[]
    suggestionsForImprovement: string[]
    likelyToReferFriends: boolean
  }
  knowledgeTransfer: {
    documentsCreated: string[]
    trainingProvided: string[]
    replacementTrained: boolean
  }
  alumniProgram: {
    enrolled: boolean
    contactPreferences: string[]
    futureOpportunityInterest: boolean
  }
}
```

---

## **SAP FIORI DESIGN IMPLEMENTATION**

### **Exact Styling Requirements**:

#### **Use These CSS Classes**:
```css
/* Layout */
.sap-container
.sap-section
.sap-grid .sap-grid-2 .sap-grid-3 .sap-grid-4

/* Cards */
.sap-card
.sap-card-header
.sap-card-title
.sap-card-content

/* Forms */
.sap-input
.sap-select
.sap-label
.sap-button.primary
.sap-button.secondary
.sap-button.ghost

/* Typography */
.sap-title
.sap-subtitle
.sap-heading
.sap-body
.sap-caption

/* Status */
.sap-status-success
.sap-status-warning
.sap-status-error
```

#### **Color Variables**:
```css
var(--sap-brand-color)     /* #0070F2 */
var(--sap-success-color)   /* #30914C */
var(--sap-warning-color)   /* #E76500 */
var(--sap-error-color)     /* #BB0000 */
```

---

## **BILINGUAL IMPLEMENTATION**

### **Language Support Pattern**:
```typescript
const labels = {
  en: {
    // English labels
  },
  ja: {
    // Japanese labels
  }
}

const currentLabels = labels[language]
```

---

## **DELIVERY REQUIREMENTS**

### **Files to Create**:
1. `src/app/client-registration/page.tsx`
2. `src/app/candidate-registration/page.tsx`  
3. `src/app/job-posting/page.tsx`
4. `src/components/SAP/ClientRegistration.tsx`
5. `src/components/SAP/CandidateRegistration.tsx`
6. `src/components/SAP/JobPosting.tsx`
7. Enhanced `src/components/SAP/MarketIntelligence.tsx`
8. API routes for all registration/posting endpoints

### **Success Criteria**:
✅ Exact SAP Fiori styling match
✅ Complete bilingual support
✅ Professional enterprise appearance
✅ Mobile responsive design
✅ Form validation and error handling
✅ Database integration
✅ Workflow tracking implementation

**DEADLINE: IMMEDIATE IMPLEMENTATION REQUIRED**

---

**Manus, this is the complete specification for all missing dashboards plus the enhanced market intelligence and candidate lifecycle workflow. Follow the existing SAP Fiori patterns EXACTLY.**