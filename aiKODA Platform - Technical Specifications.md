# aiKODA Platform - Technical Specifications

## System Architecture

### Technology Stack
- **Frontend Framework**: Next.js 15.4.1 with TypeScript
- **Styling**: Tailwind CSS 3.x with custom SAP Fiori design system
- **Database**: SQLite with Prisma ORM 6.12.0
- **Runtime**: Node.js 20.18.0
- **Package Manager**: npm
- **Development Tools**: ESLint, TypeScript strict mode

### Performance Requirements
- **Page Load Time**: < 3 seconds
- **API Response Time**: < 1 second
- **Cultural Analysis**: < 5 seconds
- **Database Queries**: < 500ms
- **Memory Usage**: < 512MB
- **Bundle Size**: < 2MB gzipped

## Database Schema Details

### Core Tables

#### Candidates
```sql
model Candidate {
  id                    String   @id @default(cuid())
  firstName             String
  lastName              String
  email                 String   @unique
  cellPhone             String?
  nationality           String
  currentLocation       String
  currentPosition       String?
  experience            Int?
  education             String?
  technicalSkills       String?  // JSON
  languageProficiency   String?  // JSON
  candidateStatus       CandidateStatus
  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt
}
```

#### Cultural Assessments
```sql
model CulturalAssessment {
  id                        String   @id @default(cuid())
  candidateId               String
  assessmentType            String
  dimensionScores           String   // JSON - 47 dimensions
  overallScore              Float
  culturalFitPrediction     Float
  integrationTimelineDays   Int
  culturalTrainingNeeded    String   // JSON array
  
  // Individual philosophy scores
  waHarmonyScore           Float?
  kaizenImprovementScore   Float?
  omotenashiServiceScore   Float?
  bushidoDedicationScore   Float?
  nemawashiConsensusScore  Float?
  
  // Communication dimensions
  honneTatemaeBalance      Float?
  indirectCommunication    Float?
  nonverbalAwareness       Float?
  silenceComfort           Float?
  contextualUnderstanding  Float?
  
  createdAt                DateTime @default(now())
  updatedAt                DateTime @updatedAt
}
```

### Indexes and Performance
```sql
-- Performance indexes
@@index([candidateId])
@@index([overallScore])
@@index([culturalFitPrediction])
@@index([createdAt])
```

## Cultural Intelligence Engine

### 47-Dimension Framework

#### Dimension Categories
1. **Core Philosophy** (5 dimensions) - Weight: 0.95-0.80
2. **Communication** (10 dimensions) - Weight: 0.85-0.68
3. **Hierarchy & Respect** (7 dimensions) - Weight: 0.90-0.70
4. **Group Dynamics** (8 dimensions) - Weight: 0.92-0.75
5. **Work Ethics** (7 dimensions) - Weight: 0.90-0.70
6. **Time Management** (5 dimensions) - Weight: 0.85-0.78
7. **Professional Conduct** (5 dimensions) - Weight: 0.88-0.77

#### Calculation Algorithm
```typescript
function calculateOverallScore(dimensionScores: Record<string, number>): number {
  let weightedSum = 0
  let totalWeight = 0
  
  for (const dimension of JAPANESE_CULTURAL_DIMENSIONS) {
    const score = dimensionScores[dimension.id] || 50
    weightedSum += score * dimension.weight
    totalWeight += dimension.weight
  }
  
  return totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) / 100 : 0
}
```

#### Integration Timeline Formula
```typescript
function calculateIntegrationTimeline(
  overallScore: number,
  dimensionScores: Record<string, number>,
  nationality?: string
): number {
  let baseTimeline = 90 // Base 90 days
  
  // Score adjustment (0-100 scale)
  const scoreAdjustment = (100 - overallScore) * 0.8
  
  // Critical dimension penalties
  const criticalDimensions = ['wa_harmony', 'hierarchy_navigation', 'group_harmony_priority']
  let criticalPenalty = 0
  
  for (const dimension of criticalDimensions) {
    const score = dimensionScores[dimension] || 50
    if (score < 60) {
      criticalPenalty += (60 - score) * 0.5
    }
  }
  
  // Nationality cultural distance
  const culturalDistance = getCulturalDistance(nationality)
  
  const finalTimeline = baseTimeline + scoreAdjustment + criticalPenalty + culturalDistance
  return Math.max(30, Math.min(180, Math.round(finalTimeline)))
}
```

### Cultural Distance Matrix
```typescript
const CULTURAL_DISTANCE: Record<string, number> = {
  'JP': 0,     // Japanese - baseline
  'KR': 10,    // Korean - Confucian similarities
  'CN': 20,    // Chinese - some cultural overlap
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
  'OTHER': 40  // Default assumption
}
```

## API Specifications

### Dashboard KPIs Endpoint
```typescript
// GET /api/dashboard/enterprise-kpis
interface KPIResponse {
  total_candidates: number
  active_jobs: number
  cultural_match_avg: number
  placement_success_rate: number
  time_to_fill_days: number
  pipeline_value: number
  last_updated: string
}
```

### Candidate Analysis Endpoint
```typescript
// POST /api/candidates/analyze
interface AnalysisRequest {
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

interface AnalysisResponse {
  candidateId: string
  overallScore: number
  culturalFitPrediction: number
  integrationTimeline: number
  recommendations: string[]
  dimensionScores: Record<string, number>
}
```

### Error Handling
```typescript
interface APIError {
  error: string
  code?: string
  details?: any
}

// Standard HTTP status codes
// 400 - Bad Request (validation errors)
// 500 - Internal Server Error
// 200 - Success
```

## Component Architecture

### SAP Fiori Design System

#### Color Variables
```css
:root {
  --sap-primary: #0070f3;
  --sap-secondary: #30a46c;
  --sap-accent: #ff6b35;
  --sap-background: #fafafa;
  --sap-card-background: #ffffff;
  --sap-border-color: #e1e5e9;
  --sap-text-primary: #32363a;
  --sap-text-secondary: #6a6d70;
  --sap-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --sap-shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

#### Typography Scale
```css
.sap-title { font-size: 2rem; font-weight: 600; }
.sap-heading { font-size: 1.5rem; font-weight: 500; }
.sap-subheading { font-size: 1.25rem; font-weight: 500; }
.sap-body { font-size: 1rem; font-weight: 400; }
.sap-caption { font-size: 0.875rem; font-weight: 400; }
```

#### Component Props Interface
```typescript
interface SAPCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'sm' | 'md' | 'lg'
}

interface SAPButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
}
```

### State Management
```typescript
// Language context
interface LanguageContextType {
  language: 'en' | 'ja'
  setLanguage: (lang: 'en' | 'ja') => void
  labels: Record<string, any>
}

// Analysis state
interface AnalysisState {
  step: number
  candidateData: CandidateData
  analysisResults?: AnalysisResults
  loading: boolean
  error?: string
}
```

## Security Implementation

### Input Validation
```typescript
function validateCandidateData(data: any): ValidationResult<CandidateSchema> {
  const errors: string[] = []
  
  // Required field validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required')
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email is required')
  }
  
  // Sanitization
  const sanitized = {
    name: data.name.trim(),
    email: data.email.toLowerCase().trim(),
    // ... other fields
  }
  
  return { success: errors.length === 0, data: sanitized, error: errors.join(', ') }
}
```

### SQL Injection Prevention
- Prisma ORM with parameterized queries
- Input sanitization at API layer
- Type-safe database operations

### XSS Protection
- React's built-in XSS protection
- Content Security Policy headers
- Input sanitization for user content

## Performance Optimization

### Frontend Optimization
```typescript
// Code splitting
const CandidateAnalyzer = dynamic(() => import('./CandidateAnalyzer'), {
  loading: () => <LoadingSpinner />
})

// Memoization
const MemoizedKPICard = React.memo(KPICard)

// Lazy loading
const LazyChart = lazy(() => import('./Chart'))
```

### Database Optimization
```sql
-- Efficient queries with indexes
SELECT * FROM Candidate 
WHERE candidateStatus = 'AVAILABLE' 
ORDER BY createdAt DESC 
LIMIT 50;

-- Aggregation optimization
SELECT 
  COUNT(*) as total,
  AVG(overallScore) as avgScore
FROM CulturalAssessment 
WHERE createdAt >= DATE('now', '-30 days');
```

### Caching Strategy
```typescript
// API response caching
const cache = new Map<string, { data: any, timestamp: number }>()

function getCachedData(key: string, ttl: number = 300000) { // 5 min TTL
  const cached = cache.get(key)
  if (cached && Date.now() - cached.timestamp < ttl) {
    return cached.data
  }
  return null
}
```

## Testing Strategy

### Unit Tests
```typescript
describe('Cultural Calculator', () => {
  test('calculates overall score correctly', () => {
    const dimensionScores = {
      wa_harmony: 85,
      kaizen_improvement: 90,
      // ... other dimensions
    }
    
    const result = calculateOverallCulturalIntelligence(dimensionScores)
    expect(result).toBeGreaterThan(0)
    expect(result).toBeLessThanOrEqual(100)
  })
})
```

### Integration Tests
```typescript
describe('API Endpoints', () => {
  test('dashboard KPIs endpoint returns valid data', async () => {
    const response = await fetch('/api/dashboard/enterprise-kpis')
    const data = await response.json()
    
    expect(response.status).toBe(200)
    expect(data).toHaveProperty('total_candidates')
    expect(data).toHaveProperty('pipeline_value')
  })
})
```

### E2E Tests
```typescript
describe('Candidate Analysis Flow', () => {
  test('completes full analysis workflow', async () => {
    // Navigate to analyzer
    await page.goto('/analyzer')
    
    // Fill form
    await page.fill('[data-testid="firstName"]', 'Taro')
    await page.fill('[data-testid="lastName"]', 'Yamada')
    await page.fill('[data-testid="email"]', 'taro@example.com')
    
    // Submit and verify results
    await page.click('[data-testid="analyze-button"]')
    await expect(page.locator('[data-testid="results"]')).toBeVisible()
  })
})
```

## Deployment Configuration

### Environment Variables
```env
# Database
DATABASE_URL="file:./dev.db"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# API Configuration
API_RATE_LIMIT="100"
API_TIMEOUT="30000"

# Feature Flags
ENABLE_ANALYTICS="true"
ENABLE_CACHING="true"
```

### Build Configuration
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:e2e": "playwright test"
  }
}
```

### Production Optimizations
```javascript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  }
}
```

## Monitoring & Analytics

### Performance Metrics
```typescript
// Core Web Vitals tracking
function trackWebVitals(metric: any) {
  switch (metric.name) {
    case 'FCP':
      // First Contentful Paint
      analytics.track('performance.fcp', metric.value)
      break
    case 'LCP':
      // Largest Contentful Paint
      analytics.track('performance.lcp', metric.value)
      break
    case 'CLS':
      // Cumulative Layout Shift
      analytics.track('performance.cls', metric.value)
      break
  }
}
```

### Error Tracking
```typescript
// Global error handler
window.addEventListener('error', (event) => {
  analytics.track('error.javascript', {
    message: event.error.message,
    stack: event.error.stack,
    filename: event.filename,
    lineno: event.lineno
  })
})
```

### Business Metrics
```typescript
// Cultural analysis completion tracking
analytics.track('analysis.completed', {
  candidateId: result.candidateId,
  overallScore: result.overallScore,
  integrationTimeline: result.integrationTimeline,
  nationality: candidateData.nationality
})
```

## Maintenance & Updates

### Database Migrations
```bash
# Create new migration
npx prisma migrate dev --name "add_new_feature"

# Deploy to production
npx prisma migrate deploy
```

### Dependency Updates
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Security audit
npm audit
```

### Backup Strategy
```bash
# Database backup
cp dev.db backup/dev_$(date +%Y%m%d_%H%M%S).db

# Code backup
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

---

**Technical Specifications v1.0**  
*Last Updated: July 17, 2025*

