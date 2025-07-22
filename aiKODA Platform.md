# aiKODA Platform

## Advanced Cultural Intelligence for Japanese Business

The aiKODA Platform is an enterprise-grade cultural intelligence system designed specifically for Japanese business environments. It provides comprehensive 47-dimension cultural analysis, AI-powered predictions, and real-time analytics for recruitment and cultural integration.

## 🌟 Key Features

### 47-Dimension Cultural Analysis
- Comprehensive assessment across all aspects of Japanese business culture
- Real calculation algorithms with no placeholder values
- Covers core philosophy, communication, hierarchy, group dynamics, work ethics, time management, and professional conduct

### Enterprise Dashboard
- Real-time KPIs and analytics
- Live data updates and performance monitoring
- SAP Fiori design system for professional enterprise experience

### AI-Powered Predictions
- Cultural fit prediction algorithms
- Integration timeline calculations
- Personalized training recommendations

### Bilingual Support
- Full Japanese and English language support
- Optimized for global operations
- Cultural context-aware translations

## 🏗️ Architecture

### Frontend
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with SAP Fiori design system
- **Components**: Custom SAP-style component library
- **State Management**: React hooks and context

### Backend
- **Database**: SQLite with Prisma ORM
- **API**: Next.js API routes
- **Validation**: Custom validation library
- **Cultural Engine**: 47-dimension calculation system

### Database Schema
- **Candidates**: Comprehensive candidate profiles
- **Cultural Assessments**: 47-dimension analysis results
- **Job Postings**: Position requirements and cultural fit criteria
- **Applications**: Candidate-job matching with cultural scores
- **System Metrics**: Performance and analytics data

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aikoda-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name "initial_aikoda_schema"
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
aikoda-platform/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/               # API endpoints
│   │   │   ├── dashboard/     # Dashboard KPIs
│   │   │   └── candidates/    # Candidate analysis
│   │   ├── globals.css        # Global styles with SAP Fiori
│   │   └── page.tsx          # Main application page
│   ├── components/
│   │   └── SAP/              # SAP Fiori component library
│   │       ├── SAPCard.tsx
│   │       ├── SAPButton.tsx
│   │       ├── SAPInput.tsx
│   │       ├── SAPSelect.tsx
│   │       ├── SAPLayout.tsx
│   │       ├── LanguageToggle.tsx
│   │       ├── EnterpriseCockpit.tsx
│   │       ├── CandidateAnalyzer.tsx
│   │       └── CulturalReport.tsx
│   └── lib/
│       ├── prisma.ts         # Database client
│       ├── validation.ts     # Input validation
│       └── cultural-calculator.ts  # 47-dimension engine
├── prisma/
│   └── schema.prisma         # Database schema
├── package.json
└── README.md
```

## 🎯 Core Components

### SAP Fiori Component Library

#### SAPCard
Professional card component with SAP styling
```tsx
<SAPCard>
  <h3>Card Title</h3>
  <p>Card content</p>
</SAPCard>
```

#### SAPButton
Enterprise-grade button with multiple variants
```tsx
<SAPButton variant="primary" size="lg">
  Action Button
</SAPButton>
```

#### SAPLayout
Main application layout with navigation
```tsx
<SAPLayout title="Page Title" navigation={navComponent}>
  <PageContent />
</SAPLayout>
```

### Dashboard Components

#### EnterpriseCockpit
Real-time analytics dashboard with KPIs
- Total candidates and active jobs
- Cultural match averages
- Placement success rates
- Integration timelines
- Pipeline value tracking

#### CandidateAnalyzer
47-dimension cultural intelligence analyzer
- Multi-step candidate assessment
- Real-time cultural scoring
- AI-powered predictions
- Training recommendations

#### CulturalReport
PDF report generation for cultural assessments
- Comprehensive analysis results
- Visual charts and graphs
- Actionable recommendations
- Professional formatting

## 🧮 Cultural Intelligence Engine

### 47 Cultural Dimensions

The platform analyzes candidates across 47 specific dimensions of Japanese business culture:

#### Core Philosophy (5 dimensions)
- **Wa (Harmony)**: Group cohesion and harmony
- **Kaizen**: Continuous improvement mindset
- **Omotenashi**: Selfless service and hospitality
- **Bushido**: Dedication and loyalty
- **Nemawashi**: Behind-the-scenes consensus building

#### Communication (10 dimensions)
- Honne/Tatemae balance
- Indirect communication
- Nonverbal awareness
- Silence comfort
- Contextual understanding
- And 5 more...

#### Hierarchy & Respect (7 dimensions)
- Senpai-kohai relationships
- Authority recognition
- Formality adherence
- Status awareness
- And 3 more...

#### Group Dynamics (8 dimensions)
- Group harmony priority
- Collective decision making
- Consensus building
- Team loyalty
- And 4 more...

#### Work Ethics (7 dimensions)
- Dedication to work
- Quality focus
- Continuous improvement
- Attention to detail
- And 3 more...

#### Time Management (5 dimensions)
- Punctuality importance
- Time respect
- Schedule adherence
- Planning orientation
- Deadline commitment

#### Professional Conduct (5 dimensions)
- Professional etiquette
- Business card protocol
- Meeting participation
- Presentation skills
- Client service orientation

### Calculation Methodology

1. **Weighted Scoring**: Each dimension has a cultural importance weight (0-1)
2. **Adaptability Factor**: Measures how trainable each dimension is
3. **Nationality Baseline**: Adjusts scoring based on cultural background
4. **Integration Timeline**: Calculates expected adaptation period (30-180 days)
5. **Training Recommendations**: Generates personalized development plans

## 🔌 API Endpoints

### Dashboard KPIs
```
GET /api/dashboard/enterprise-kpis
```
Returns real-time dashboard metrics including candidate counts, job statistics, cultural match averages, and pipeline values.

### Candidate Analysis
```
POST /api/candidates/analyze
```
Analyzes candidate cultural intelligence across 47 dimensions and returns:
- Overall cultural score
- Cultural fit prediction
- Integration timeline
- Training recommendations
- Detailed dimension scores

## 🎨 Design System

### SAP Fiori Principles
- **Consistent**: Unified design language
- **Coherent**: Logical information architecture
- **Delightful**: Engaging user experience
- **Simple**: Intuitive interactions

### Color Palette
- **Primary**: SAP Blue (#0070f3)
- **Secondary**: SAP Green (#30a46c)
- **Accent**: SAP Orange (#ff6b35)
- **Neutral**: Professional grays
- **Status**: Success, warning, error colors

### Typography
- **Primary Font**: 'Segoe UI', system fonts
- **Japanese Support**: Optimized for Japanese characters
- **Hierarchy**: Clear heading and body text scales

## 🌐 Internationalization

### Language Support
- **English**: Primary interface language
- **Japanese**: Full localization for Japanese market
- **Dynamic Switching**: Real-time language toggle
- **Cultural Context**: Culturally appropriate translations

### Implementation
```tsx
const labels = {
  en: { title: "aiKODA Platform" },
  ja: { title: "aiKODAプラットフォーム" }
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Dashboard loads with correct KPIs
- [ ] Language toggle functions properly
- [ ] Candidate analyzer multi-step form works
- [ ] Cultural analysis produces real results
- [ ] API endpoints return valid JSON
- [ ] Responsive design on mobile devices
- [ ] Cross-browser compatibility

### Performance Requirements
- [ ] Page load time < 3 seconds
- [ ] API response time < 1 second
- [ ] Cultural analysis completion < 5 seconds
- [ ] Smooth animations and transitions

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
```

## 📊 Analytics & Monitoring

### Key Metrics
- User engagement and session duration
- Cultural analysis completion rates
- API response times and error rates
- Dashboard interaction patterns

### Performance Monitoring
- Real-time error tracking
- Database query optimization
- Frontend performance metrics
- User experience analytics

## 🔒 Security

### Data Protection
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF token validation

### Privacy Compliance
- GDPR compliance for EU users
- Data retention policies
- User consent management
- Secure data transmission

## 🤝 Contributing

### Development Guidelines
1. Follow TypeScript best practices
2. Use SAP Fiori design principles
3. Maintain cultural calculation accuracy
4. Write comprehensive tests
5. Document all new features

### Code Style
- ESLint configuration
- Prettier formatting
- TypeScript strict mode
- Component naming conventions

## 📞 Support

### Documentation
- API documentation
- Component library guide
- Cultural dimension reference
- Integration tutorials

### Contact
- Technical support: support@aikoda.com
- Sales inquiries: sales@aikoda.com
- Partnership opportunities: partners@aikoda.com

## 📄 License

Copyright © 2024 aiKODA Platform. All rights reserved.

This is proprietary software designed for enterprise cultural intelligence analysis. Unauthorized reproduction or distribution is prohibited.

---

**Built with ❤️ for Japanese business success**

