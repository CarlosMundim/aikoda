# 🐅 aiKODA Platform v2 - Enterprise Cultural Intelligence

**The World's Most Advanced Cultural Intelligence Platform for the Japanese Market**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CarlosMundim/aikoda-platform-v2)

---

## 🎯 **Platform Overview**

aiKODA Platform v2 is an enterprise-grade cultural intelligence platform designed specifically for the Japanese employment market. It combines advanced AI matching algorithms with deep cultural assessment to predict hiring success with 87% accuracy.

### **Key Features**
- 🧠 **47-Dimension Cultural Intelligence Framework**
- 🤖 **AI-Powered Candidate Matching**
- 📊 **Real-Time Analytics Dashboard**
- 🌐 **Dual-Language Support** (Japanese/English)
- 📱 **Mobile-First Responsive Design**
- 🎨 **SAP Fiori Enterprise Design System**

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### **Installation**

```bash
# Clone the repository
git clone https://github.com/CarlosMundim/aikoda-platform-v2.git
cd aikoda-platform-v2

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### **Environment Setup**

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Application Configuration
VITE_APP_NAME=aiKODA Platform v2
VITE_APP_VERSION=2.0.0
```

---

## 📁 **Project Structure**

```
aikoda-platform-v2/
├── src/
│   ├── components/
│   │   ├── common/           # Shared components
│   │   ├── dashboards/       # Dashboard components
│   │   ├── matching/         # AI matching components
│   │   └── registration/     # Registration wizards
│   ├── pages/               # Page components
│   ├── services/            # API services
│   ├── types/               # TypeScript types
│   ├── lib/                 # Utility functions
│   ├── App.jsx              # Main application
│   └── App.css              # SAP Fiori styles
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
└── README.md               # This file
```

---

## 🎨 **Design System**

### **SAP Fiori Enterprise Colors**
- **Primary**: #0070F2 (SAP Blue)
- **Success**: #30914C (Green)
- **Warning**: #E76500 (Orange)
- **Error**: #BB0000 (Red)
- **Neutral**: #FAFAFA to #32363A (Light to Dark Gray)

### **Typography**
- **English**: Inter (Google Fonts)
- **Japanese**: Noto Sans JP (Google Fonts)
- **Touch Targets**: Minimum 44px for mobile optimization

### **Responsive Breakpoints**
- **Mobile**: 375px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large**: 1440px+
- **Ultra-wide**: 2560px+

---

## 🧠 **Cultural Intelligence Framework**

### **47-Dimension Assessment**
The platform evaluates candidates across 47 cultural dimensions including:

#### **Core Cultural Values**
- Wa (Harmony) - 和
- Kaizen (Continuous Improvement) - 改善
- Omotenashi (Hospitality) - おもてなし
- Nemawashi (Consensus Building) - 根回し

#### **Communication Styles**
- High-context vs Low-context communication
- Direct vs Indirect feedback preferences
- Formal vs Informal interaction styles
- Non-verbal communication awareness

#### **Work Culture Adaptation**
- Hierarchy respect and navigation
- Team collaboration preferences
- Decision-making participation
- Conflict resolution approaches

---

## 📊 **Dashboard Components**

### **Executive Analytics Cockpit**
- Real-time KPI monitoring
- Cultural fit success rates
- Hiring pipeline analytics
- ROI calculations

### **AI Matching Insights**
- Explainable AI recommendations
- Cultural compatibility scores
- Bias detection and mitigation
- Success probability predictions

### **Cultural Intelligence Reports**
- Team cultural diversity analysis
- Cultural gap identification
- Integration timeline predictions
- Training recommendations

### **Diversity Metrics Dashboard**
- Inclusion analytics
- Accessibility compliance
- Global mobility tracking
- Career development insights

---

## 🤖 **AI Matching Engine**

### **Multi-Dimensional Analysis**
- **Cultural Intelligence**: 47-dimension CQ assessment
- **Psychological Profiling**: Big Five, HEXACO, resilience
- **Skills Matching**: Technical and soft skills alignment
- **Team Dynamics**: Personality compatibility analysis
- **Career Trajectory**: Growth potential and aspirations

### **Explainable AI**
- Visual explanation of matching decisions
- Confidence intervals and uncertainty quantification
- Bias detection and fairness metrics
- Continuous learning and model improvement

---

## 🌐 **Internationalization**

### **Supported Languages**
- **Japanese** (Primary) - 日本語
- **English** (Secondary)

### **Cultural Localization**
- Japanese business etiquette integration
- Proper honorific usage (Keigo - 敬語)
- Cultural context-aware messaging
- Local compliance and regulations

---

## 📱 **Mobile Optimization**

### **Progressive Web App (PWA)**
- Offline functionality
- App-like experience
- Push notifications
- Home screen installation

### **Touch-Friendly Design**
- Minimum 44px touch targets
- Gesture-based navigation
- Optimized form inputs
- Smooth animations (60fps)

---

## 🔧 **Development**

### **Available Scripts**

```bash
# Development
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run preview      # Preview production build
pnpm run lint         # Run ESLint
pnpm run type-check   # TypeScript type checking

# Testing
pnpm run test         # Run unit tests
pnpm run test:e2e     # Run end-to-end tests
pnpm run test:coverage # Generate coverage report
```

### **Code Quality**
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
- Husky for pre-commit hooks

---

## 🚀 **Deployment**

### **Vercel (Recommended)**
```bash
# Deploy to Vercel
vercel --prod
```

### **Manual Build**
```bash
# Build for production
pnpm run build

# Serve static files
pnpm run preview
```

---

## 🤝 **Contributing**

### **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Code Standards**
- Follow SAP Fiori design principles
- Maintain 44px minimum touch targets
- Ensure WCAG AA accessibility compliance
- Write comprehensive tests
- Document all new features

---

## 📄 **License**

This project is proprietary software owned by aiKODA. All rights reserved.

---

## 🆘 **Support**

For technical support or questions:
- **Email**: support@aikoda.com
- **Documentation**: [docs.aikoda.com](https://docs.aikoda.com)
- **Issues**: [GitHub Issues](https://github.com/CarlosMundim/aikoda-platform-v2/issues)

---

## 🏆 **Acknowledgments**

- **Tiger Boss Koda** - Backend Architecture & Engineering
- **Manus AI** - Frontend Development & UI/UX Design
- **Papa Carlos** - Strategic Vision & Leadership
- **Auntie Chachie** - Strategic Planning & Business Intelligence

---

**Built with ❤️ for the Japanese market by the aiKODA team**

*Revolutionizing talent matching through cultural intelligence*

