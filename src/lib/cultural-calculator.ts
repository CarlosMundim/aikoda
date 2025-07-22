// Real calculation engine - NO PLACEHOLDER VALUES
// 47-Dimension Cultural Intelligence Calculator for Japanese Business Culture

export interface CulturalDimension {
  id: string
  weight: number // Cultural importance weight (0-1)
  adaptabilityFactor: number // How trainable this dimension is (0-1)
  category: string
  description: string
}

export const JAPANESE_CULTURAL_DIMENSIONS: CulturalDimension[] = [
  // Core Philosophy Dimensions (5)
  { id: 'wa_harmony', weight: 0.95, adaptabilityFactor: 0.7, category: 'core_philosophy', description: 'Harmony and group cohesion' },
  { id: 'kaizen_improvement', weight: 0.90, adaptabilityFactor: 0.8, category: 'core_philosophy', description: 'Continuous improvement mindset' },
  { id: 'omotenashi_service', weight: 0.85, adaptabilityFactor: 0.6, category: 'core_philosophy', description: 'Selfless service and hospitality' },
  { id: 'bushido_dedication', weight: 0.80, adaptabilityFactor: 0.5, category: 'core_philosophy', description: 'Dedication and loyalty' },
  { id: 'nemawashi_consensus', weight: 0.88, adaptabilityFactor: 0.7, category: 'core_philosophy', description: 'Behind-the-scenes consensus building' },

  // Communication Dimensions (10)
  { id: 'honne_tatemae_balance', weight: 0.85, adaptabilityFactor: 0.6, category: 'communication', description: 'True feelings vs. public facade balance' },
  { id: 'indirect_communication', weight: 0.82, adaptabilityFactor: 0.7, category: 'communication', description: 'Indirect and subtle communication' },
  { id: 'nonverbal_awareness', weight: 0.78, adaptabilityFactor: 0.8, category: 'communication', description: 'Reading nonverbal cues' },
  { id: 'silence_comfort', weight: 0.75, adaptabilityFactor: 0.9, category: 'communication', description: 'Comfort with silence in conversation' },
  { id: 'contextual_understanding', weight: 0.80, adaptabilityFactor: 0.7, category: 'communication', description: 'High-context communication understanding' },
  { id: 'listening_skills', weight: 0.77, adaptabilityFactor: 0.8, category: 'communication', description: 'Active and respectful listening' },
  { id: 'language_sensitivity', weight: 0.73, adaptabilityFactor: 0.9, category: 'communication', description: 'Sensitivity to language nuances' },
  { id: 'feedback_reception', weight: 0.70, adaptabilityFactor: 0.8, category: 'communication', description: 'Graceful reception of feedback' },
  { id: 'conflict_avoidance', weight: 0.68, adaptabilityFactor: 0.6, category: 'communication', description: 'Avoiding direct confrontation' },
  { id: 'emotional_restraint', weight: 0.72, adaptabilityFactor: 0.7, category: 'communication', description: 'Emotional self-control in communication' },

  // Hierarchy and Respect Dimensions (7)
  { id: 'senpai_kohai_respect', weight: 0.90, adaptabilityFactor: 0.6, category: 'hierarchy', description: 'Senior-junior relationship respect' },
  { id: 'authority_recognition', weight: 0.85, adaptabilityFactor: 0.7, category: 'hierarchy', description: 'Recognition of authority and status' },
  { id: 'formality_adherence', weight: 0.80, adaptabilityFactor: 0.8, category: 'hierarchy', description: 'Adherence to formal protocols' },
  { id: 'status_awareness', weight: 0.78, adaptabilityFactor: 0.7, category: 'hierarchy', description: 'Awareness of social and professional status' },
  { id: 'hierarchy_navigation', weight: 0.83, adaptabilityFactor: 0.6, category: 'hierarchy', description: 'Skillful navigation of hierarchies' },
  { id: 'deference_demonstration', weight: 0.75, adaptabilityFactor: 0.8, category: 'hierarchy', description: 'Appropriate deference to superiors' },
  { id: 'title_usage', weight: 0.70, adaptabilityFactor: 0.9, category: 'hierarchy', description: 'Proper use of titles and honorifics' },

  // Group Dynamics Dimensions (8)
  { id: 'group_harmony_priority', weight: 0.92, adaptabilityFactor: 0.6, category: 'group_dynamics', description: 'Prioritizing group harmony over individual needs' },
  { id: 'collective_decision_making', weight: 0.88, adaptabilityFactor: 0.7, category: 'group_dynamics', description: 'Participation in collective decision processes' },
  { id: 'consensus_building', weight: 0.90, adaptabilityFactor: 0.6, category: 'group_dynamics', description: 'Building consensus before action' },
  { id: 'team_loyalty', weight: 0.85, adaptabilityFactor: 0.5, category: 'group_dynamics', description: 'Loyalty to team and organization' },
  { id: 'group_accountability', weight: 0.80, adaptabilityFactor: 0.7, category: 'group_dynamics', description: 'Shared responsibility and accountability' },
  { id: 'face_saving', weight: 0.78, adaptabilityFactor: 0.6, category: 'group_dynamics', description: 'Helping others save face' },
  { id: 'group_identity', weight: 0.75, adaptabilityFactor: 0.7, category: 'group_dynamics', description: 'Strong identification with group' },
  { id: 'collective_success', weight: 0.82, adaptabilityFactor: 0.8, category: 'group_dynamics', description: 'Focus on collective rather than individual success' },

  // Work Ethics Dimensions (7)
  { id: 'dedication_to_work', weight: 0.88, adaptabilityFactor: 0.6, category: 'work_ethics', description: 'Strong dedication and commitment to work' },
  { id: 'quality_focus', weight: 0.90, adaptabilityFactor: 0.8, category: 'work_ethics', description: 'Unwavering focus on quality' },
  { id: 'continuous_improvement', weight: 0.87, adaptabilityFactor: 0.9, category: 'work_ethics', description: 'Commitment to continuous improvement' },
  { id: 'attention_to_detail', weight: 0.85, adaptabilityFactor: 0.8, category: 'work_ethics', description: 'Meticulous attention to detail' },
  { id: 'process_adherence', weight: 0.80, adaptabilityFactor: 0.9, category: 'work_ethics', description: 'Strict adherence to established processes' },
  { id: 'perfectionism', weight: 0.75, adaptabilityFactor: 0.7, category: 'work_ethics', description: 'Pursuit of perfection in work' },
  { id: 'work_life_integration', weight: 0.70, adaptabilityFactor: 0.6, category: 'work_ethics', description: 'Integration of work and personal identity' },

  // Time and Punctuality Dimensions (5)
  { id: 'punctuality_importance', weight: 0.85, adaptabilityFactor: 0.9, category: 'time_management', description: 'High importance placed on punctuality' },
  { id: 'time_respect', weight: 0.82, adaptabilityFactor: 0.8, category: 'time_management', description: 'Respect for others\' time' },
  { id: 'schedule_adherence', weight: 0.80, adaptabilityFactor: 0.9, category: 'time_management', description: 'Strict adherence to schedules' },
  { id: 'planning_orientation', weight: 0.78, adaptabilityFactor: 0.8, category: 'time_management', description: 'Long-term planning orientation' },
  { id: 'deadline_commitment', weight: 0.83, adaptabilityFactor: 0.8, category: 'time_management', description: 'Strong commitment to meeting deadlines' },

  // Professional Conduct Dimensions (5)
  { id: 'professional_etiquette', weight: 0.88, adaptabilityFactor: 0.8, category: 'professional_conduct', description: 'Mastery of professional etiquette' },
  { id: 'business_card_protocol', weight: 0.75, adaptabilityFactor: 0.9, category: 'professional_conduct', description: 'Proper business card exchange protocol' },
  { id: 'meeting_participation', weight: 0.80, adaptabilityFactor: 0.8, category: 'professional_conduct', description: 'Appropriate meeting participation' },
  { id: 'presentation_skills', weight: 0.77, adaptabilityFactor: 0.8, category: 'professional_conduct', description: 'Professional presentation skills' },
  { id: 'client_service_orientation', weight: 0.85, adaptabilityFactor: 0.7, category: 'professional_conduct', description: 'Strong client service orientation' }
]

export interface CulturalResponse {
  dimension_id: string
  question_id: string
  score: number
  evidence?: string
}

export function calculate47Dimensions(responses: CulturalResponse[]): Record<string, number> {
  const scores: Record<string, number> = {}
  
  // Calculate each dimension score
  for (const dimension of JAPANESE_CULTURAL_DIMENSIONS) {
    const dimensionResponses = responses.filter(r => r.dimension_id === dimension.id)
    
    if (dimensionResponses.length === 0) {
      scores[dimension.id] = 50 // Default neutral score
      continue
    }
    
    // Calculate weighted average
    let totalScore = 0
    let totalWeight = 0
    
    for (const response of dimensionResponses) {
      const weight = getQuestionWeight(response.question_id)
      totalScore += response.score * weight
      totalWeight += weight
    }
    
    scores[dimension.id] = Math.round((totalScore / totalWeight) * 100) / 100
  }
  
  return scores
}

export function calculateCulturalFitForJob(
  candidateScores: Record<string, number>,
  jobRequirements: Record<string, number>
): number {
  
  let totalFitScore = 0
  let totalWeight = 0
  
  for (const [dimensionId, requiredScore] of Object.entries(jobRequirements)) {
    const candidateScore = candidateScores[dimensionId] || 50
    const dimension = JAPANESE_CULTURAL_DIMENSIONS.find(d => d.id === dimensionId)
    
    if (!dimension) continue
    
    // Calculate fit score for this dimension
    const scoreDifference = Math.abs(candidateScore - requiredScore)
    const fitScore = Math.max(0, 100 - (scoreDifference * 1.5)) // Penalty for mismatch
    
    totalFitScore += fitScore * dimension.weight
    totalWeight += dimension.weight
  }
  
  return totalWeight > 0 ? Math.round((totalFitScore / totalWeight) * 100) / 100 : 0
}

export function calculateOverallCulturalIntelligence(dimensionScores: Record<string, number>): number {
  let weightedSum = 0
  let totalWeight = 0
  
  for (const dimension of JAPANESE_CULTURAL_DIMENSIONS) {
    const score = dimensionScores[dimension.id] || 50
    weightedSum += score * dimension.weight
    totalWeight += dimension.weight
  }
  
  return totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) / 100 : 0
}

export function calculateIntegrationTimeline(
  overallScore: number, 
  dimensionScores: Record<string, number>,
  nationality?: string
): number {
  let baseTimeline = 90 // Base 90 days
  
  // Adjust based on overall cultural score
  const scoreAdjustment = (100 - overallScore) * 0.8
  
  // Adjust based on critical dimensions
  const criticalDimensions = ['wa_harmony', 'hierarchy_navigation', 'group_harmony_priority']
  let criticalDimensionPenalty = 0
  
  for (const dimension of criticalDimensions) {
    const score = dimensionScores[dimension] || 50
    if (score < 60) {
      criticalDimensionPenalty += (60 - score) * 0.5
    }
  }
  
  // Adjust based on nationality cultural distance
  let nationalityAdjustment = 0
  if (nationality) {
    const culturalDistance: Record<string, number> = {
      'JP': 0,     // Japanese - no adjustment
      'KR': 10,    // Korean - similar Confucian culture
      'CN': 20,    // Chinese - some similarities
      'TW': 15,    // Taiwanese - moderate similarities
      'TH': 30,    // Thai - moderate differences
      'VN': 35,    // Vietnamese - moderate differences
      'PH': 40,    // Filipino - more differences
      'IN': 45,    // Indian - significant differences
      'SG': 25,    // Singaporean - multicultural
      'MY': 30,    // Malaysian - multicultural
      'ID': 35,    // Indonesian - moderate differences
      'US': 50,    // American - large differences
      'CA': 48,    // Canadian - large differences
      'AU': 45,    // Australian - large differences
      'UK': 50,    // British - large differences
      'DE': 52,    // German - very different
      'FR': 48,    // French - different
      'BR': 40,    // Brazilian - moderate differences
      'MX': 38,    // Mexican - moderate differences
      'OTHER': 40  // Other - moderate assumption
    }
    
    nationalityAdjustment = culturalDistance[nationality] || 40
  }
  
  const finalTimeline = baseTimeline + scoreAdjustment + criticalDimensionPenalty + nationalityAdjustment
  return Math.max(30, Math.min(180, Math.round(finalTimeline))) // Between 30-180 days
}

export function generateCulturalTrainingPlan(dimensionScores: Record<string, number>): string[] {
  const trainingPlan = []
  
  // Core philosophy training
  if (dimensionScores.wa_harmony < 70) {
    trainingPlan.push('Japanese harmony (wa) and consensus-building workshop')
  }
  if (dimensionScores.kaizen_improvement < 70) {
    trainingPlan.push('Kaizen continuous improvement methodology training')
  }
  if (dimensionScores.omotenashi_service < 70) {
    trainingPlan.push('Omotenashi customer service excellence and hospitality training')
  }
  
  // Communication training
  if (dimensionScores.indirect_communication < 70) {
    trainingPlan.push('Japanese indirect communication and reading between the lines')
  }
  if (dimensionScores.honne_tatemae_balance < 70) {
    trainingPlan.push('Understanding honne and tatemae in Japanese business culture')
  }
  
  // Hierarchy training
  if (dimensionScores.senpai_kohai_respect < 70) {
    trainingPlan.push('Senpai-kohai relationship and hierarchy respect training')
  }
  if (dimensionScores.hierarchy_navigation < 70) {
    trainingPlan.push('Japanese business hierarchy navigation and protocol')
  }
  
  // Group dynamics training
  if (dimensionScores.group_harmony_priority < 70) {
    trainingPlan.push('Group harmony prioritization and collective decision-making')
  }
  if (dimensionScores.consensus_building < 70) {
    trainingPlan.push('Nemawashi and consensus-building techniques')
  }
  
  // Professional conduct training
  if (dimensionScores.professional_etiquette < 70) {
    trainingPlan.push('Japanese business etiquette and professional conduct')
  }
  if (dimensionScores.business_card_protocol < 70) {
    trainingPlan.push('Meishi (business card) exchange protocol and networking etiquette')
  }
  
  return trainingPlan
}

function getQuestionWeight(questionId: string): number {
  // Assign weights based on question importance and reliability
  const questionWeights: Record<string, number> = {
    // High importance questions
    'wa_harmony_core': 1.0,
    'kaizen_mindset': 1.0,
    'hierarchy_respect': 1.0,
    'group_priority': 1.0,
    
    // Medium importance questions
    'communication_style': 0.8,
    'time_management': 0.8,
    'professional_conduct': 0.8,
    
    // Supporting questions
    'cultural_awareness': 0.6,
    'adaptation_willingness': 0.7,
    'learning_orientation': 0.7
  }
  
  return questionWeights[questionId] || 1.0
}

export function getCulturalDimensionsByCategory(): Record<string, CulturalDimension[]> {
  const categories: Record<string, CulturalDimension[]> = {}
  
  for (const dimension of JAPANESE_CULTURAL_DIMENSIONS) {
    if (!categories[dimension.category]) {
      categories[dimension.category] = []
    }
    categories[dimension.category].push(dimension)
  }
  
  return categories
}

export function calculateCategoryScores(dimensionScores: Record<string, number>): Record<string, number> {
  const categories = getCulturalDimensionsByCategory()
  const categoryScores: Record<string, number> = {}
  
  for (const [categoryName, dimensions] of Object.entries(categories)) {
    let totalScore = 0
    let totalWeight = 0
    
    for (const dimension of dimensions) {
      const score = dimensionScores[dimension.id] || 50
      totalScore += score * dimension.weight
      totalWeight += dimension.weight
    }
    
    categoryScores[categoryName] = totalWeight > 0 ? Math.round((totalScore / totalWeight) * 100) / 100 : 0
  }
  
  return categoryScores
}

