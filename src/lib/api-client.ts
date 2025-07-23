// API Client for aiKODA Platform v2
// Connects Manus frontend components to Tiger Boss backend APIs

export interface KPIData {
  total_candidates: number
  active_jobs: number
  cultural_match_avg: number
  placement_success_rate: number
  time_to_fill_days: number
  pipeline_value: number
}

export interface CandidateData {
  firstName: string
  lastName: string
  email: string
  nationality: string
  technicalSkills: string[]
  languageProficiency: Record<string, string>
  experience?: number
  currentLocation?: string
}

export interface JobData {
  title: string
  company: string
  department: string
  location: string
  technicalSkills: string[]
  salaryMin?: number
  salaryMax?: number
  description: string
}

export interface CompanyData {
  name: string
  industry: string
  size: string
  location: string
  contactEmail: string
  website?: string
  description?: string
  culturalRequirements?: string[]
}

export interface MatchingResult {
  candidateId: string
  jobId: string
  overallScore: number
  skillsMatch: number
  culturalFit: number
  recommendations: string[]
  aiPowered?: boolean
}

export interface CulturalAnalysis {
  overallScore: number
  dimensionScores: {
    wa_harmony: number
    kaizen_improvement: number
    omotenashi_service: number
    bushido_dedication: number
    nemawashi_consensus: number
  }
  culturalFitPrediction: number
  integrationTimeline: number
  recommendations: string[]
}

class APIClient {
  private baseURL = '/api'

  // Enterprise Dashboard APIs
  async getEnterpriseKPIs(): Promise<KPIData> {
    const response = await fetch(`${this.baseURL}/dashboard/enterprise-kpis`)
    if (!response.ok) {
      throw new Error('Failed to fetch enterprise KPIs')
    }
    return response.json()
  }

  // Candidate APIs
  async registerCandidate(candidateData: CandidateData) {
    const response = await fetch(`${this.baseURL}/workflow/candidate-registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(candidateData)
    })
    
    if (!response.ok) {
      throw new Error('Failed to register candidate')
    }
    
    return response.json()
  }

  async analyzeCandidateCultural(candidateData: Partial<CandidateData>): Promise<CulturalAnalysis> {
    const response = await fetch(`${this.baseURL}/candidates/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(candidateData)
    })
    
    if (!response.ok) {
      throw new Error('Failed to analyze candidate')
    }
    
    return response.json()
  }

  async getCandidates() {
    const response = await fetch(`${this.baseURL}/candidates`)
    if (!response.ok) {
      throw new Error('Failed to fetch candidates')
    }
    return response.json()
  }

  // Company APIs
  async registerCompany(companyData: CompanyData) {
    const response = await fetch(`${this.baseURL}/workflow/company-registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(companyData)
    })
    
    if (!response.ok) {
      throw new Error('Failed to register company')
    }
    
    return response.json()
  }

  async getCompanies() {
    const response = await fetch(`${this.baseURL}/companies`)
    if (!response.ok) {
      throw new Error('Failed to fetch companies')
    }
    return response.json()
  }

  // Job APIs
  async getJobs(filters?: { status?: string; companyId?: string }) {
    const params = new URLSearchParams()
    if (filters?.status) params.append('status', filters.status)
    if (filters?.companyId) params.append('companyId', filters.companyId)
    
    const response = await fetch(`${this.baseURL}/jobs?${params}`)
    if (!response.ok) {
      throw new Error('Failed to fetch jobs')
    }
    return response.json()
  }

  async createJob(jobData: JobData) {
    const response = await fetch(`${this.baseURL}/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
    })
    
    if (!response.ok) {
      throw new Error('Failed to create job')
    }
    
    return response.json()
  }

  // AI Matching APIs
  async findCandidatesForJob(jobId: string): Promise<MatchingResult[]> {
    const response = await fetch(`${this.baseURL}/matching`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        analysisType: 'job_candidates',
        jobId
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to find candidates for job')
    }
    
    const result = await response.json()
    return result.matches || []
  }

  async findJobsForCandidate(candidateId: string): Promise<MatchingResult[]> {
    const response = await fetch(`${this.baseURL}/matching`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        analysisType: 'candidate_jobs',
        candidateId
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to find jobs for candidate')
    }
    
    const result = await response.json()
    return result.matches || []
  }

  // Analytics APIs
  async getDiversityMetrics() {
    const response = await fetch(`${this.baseURL}/analytics/diversity`)
    if (!response.ok) {
      // Return mock data for now
      return {
        genderDistribution: { male: 45, female: 55 },
        nationalityDistribution: { JP: 60, PH: 20, IN: 15, OTHER: 5 },
        culturalFitAverage: 82,
        inclusionScore: 88
      }
    }
    return response.json()
  }

  async getCulturalIntelligenceReport() {
    const response = await fetch(`${this.baseURL}/analytics/cultural-intelligence`)
    if (!response.ok) {
      // Return mock data for now
      return {
        averageScores: {
          wa_harmony: 78,
          kaizen_improvement: 82,
          omotenashi_service: 85,
          bushido_dedication: 75,
          nemawashi_consensus: 80
        },
        teamCompatibility: 87,
        trainingRecommendations: [
          'Team harmony workshops',
          'Continuous improvement training'
        ]
      }
    }
    return response.json()
  }

  async getMarketIntelligence() {
    const response = await fetch(`${this.baseURL}/analytics/market-intelligence`)
    if (!response.ok) {
      // Return mock data for now
      return {
        talentSupply: 1247,
        demandTrends: [
          { skill: 'React', demand: 95 },
          { skill: 'Python', demand: 88 },
          { skill: 'Cultural Intelligence', demand: 92 }
        ],
        salaryTrends: {
          softwareEngineer: { min: 6000000, max: 12000000, avg: 8500000 },
          dataScientist: { min: 7000000, max: 15000000, avg: 10500000 }
        }
      }
    }
    return response.json()
  }
}

// Export singleton instance
export const apiClient = new APIClient()

// Export individual functions for easier imports
export const {
  getEnterpriseKPIs,
  registerCandidate,
  analyzeCandidateCultural,
  getCandidates,
  registerCompany,
  getCompanies,
  getJobs,
  createJob,
  findCandidatesForJob,
  findJobsForCandidate,
  getDiversityMetrics,
  getCulturalIntelligenceReport,
  getMarketIntelligence
} = apiClient