// Validation utilities for aiKODA platform

export interface ValidationResult<T> {
  success: boolean
  data?: T
  error?: string
}

export interface CandidateSchema {
  name: string
  email: string
  phone?: string
  nationality?: string
  location?: string
  position?: string
  experience?: number
  education?: string
  skills?: string[]
  languages?: Record<string, string>
  culturalResponses?: CulturalResponse[]
}

export interface CulturalResponse {
  dimension_id: string
  question_id: string
  score: number
  evidence?: string
}

export function validateAndSanitize<T>(data: unknown, schema: unknown): ValidationResult<T> {
  try {
    // Basic validation for candidate data
    if (schema === candidateSchema) {
      return validateCandidateData(data)
    }
    
    return {
      success: true,
      data: data as T
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Validation failed'
    }
  }
}

function isRecord(data: unknown): data is Record<string, any> {
  return typeof data === 'object' && data !== null && !Array.isArray(data)
}

function validateCandidateData(data: unknown): ValidationResult<CandidateSchema> {
  const errors: string[] = []
  
  if (!isRecord(data)) {
    return {
      success: false,
      error: 'Invalid data format'
    }
  }
  
  // Required fields
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required')
  }
  
  if (!data.email || typeof data.email !== 'string' || !isValidEmail(data.email)) {
    errors.push('Valid email is required')
  }
  
  // Optional field validation
  if (data.phone && typeof data.phone !== 'string') {
    errors.push('Phone must be a string')
  }
  
  if (data.nationality && typeof data.nationality !== 'string') {
    errors.push('Nationality must be a string')
  }
  
  if (data.experience && (typeof data.experience !== 'number' || data.experience < 0)) {
    errors.push('Experience must be a non-negative number')
  }
  
  if (data.skills && !Array.isArray(data.skills)) {
    errors.push('Skills must be an array')
  }
  
  if (data.languages && typeof data.languages !== 'object') {
    errors.push('Languages must be an object')
  }
  
  if (data.culturalResponses && !Array.isArray(data.culturalResponses)) {
    errors.push('Cultural responses must be an array')
  }
  
  if (errors.length > 0) {
    return {
      success: false,
      error: errors.join(', ')
    }
  }
  
  // Sanitize data
  const sanitizedData: CandidateSchema = {
    name: data.name.trim(),
    email: data.email.toLowerCase().trim(),
    phone: data.phone?.trim(),
    nationality: data.nationality?.trim(),
    location: data.location?.trim(),
    position: data.position?.trim(),
    experience: data.experience || 0,
    education: data.education?.trim(),
    skills: data.skills || [],
    languages: data.languages || {},
    culturalResponses: data.culturalResponses || []
  }
  
  return {
    success: true,
    data: sanitizedData
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const candidateSchema = 'candidate' // Schema identifier

// Additional validation functions
export function validateCulturalResponse(response: any): ValidationResult<CulturalResponse> {
  const errors: string[] = []
  
  if (!response.dimension_id || typeof response.dimension_id !== 'string') {
    errors.push('Dimension ID is required')
  }
  
  if (!response.question_id || typeof response.question_id !== 'string') {
    errors.push('Question ID is required')
  }
  
  if (typeof response.score !== 'number' || response.score < 0 || response.score > 100) {
    errors.push('Score must be a number between 0 and 100')
  }
  
  if (errors.length > 0) {
    return {
      success: false,
      error: errors.join(', ')
    }
  }
  
  return {
    success: true,
    data: {
      dimension_id: response.dimension_id,
      question_id: response.question_id,
      score: response.score,
      evidence: response.evidence?.trim()
    }
  }
}

export function sanitizeString(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

export function validateLanguageProficiency(languages: Record<string, string>): boolean {
  const validLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'N1', 'N2', 'N3', 'N4', 'N5', 'Native']
  
  for (const [language, level] of Object.entries(languages)) {
    if (!validLevels.includes(level)) {
      return false
    }
  }
  
  return true
}

