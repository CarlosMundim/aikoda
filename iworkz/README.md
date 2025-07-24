# iWORKZ Cultural Intelligence Platform

> **Revolutionizing Talent Management in Japan**  
> Advanced AI-powered cultural intelligence platform for seamless talent integration in Japan

![iWORKZ Platform](https://img.shields.io/badge/Platform-iWORKZ-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)

## 🎯 **Overview**

The iWORKZ Cultural Intelligence Platform is a comprehensive talent management solution designed specifically for the Japanese market. It combines advanced AI matching algorithms with deep cultural intelligence assessment to ensure successful talent integration and reduce early turnover.

### **Key Features**

- 🧠 **CQ47 Cultural Intelligence Framework** - 47-dimension cultural assessment
- 🤖 **AI-Powered Matching** - Advanced algorithms for candidate-job compatibility
- 🌏 **Dual-Language Support** - Seamless Japanese/English interface
- 📊 **Real-time Analytics** - Comprehensive dashboards and insights
- 🎨 **SAP Fiori Design** - Enterprise-grade user experience
- 📱 **Mobile-First** - Responsive design for all devices

## 🚀 **Live Demo**

**Production URL**: [https://iworkz-carlos-projects-2bda097e.vercel.app](https://iworkz-carlos-projects-2bda097e.vercel.app)

## 🏗️ **Architecture**

### **Frontend Stack**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible component primitives

### **Backend & Database**
- **Supabase** - PostgreSQL database with real-time subscriptions
- **Row Level Security** - Enterprise-grade data protection
- **Authentication** - Built-in user management and OAuth

### **Deployment**
- **Vercel** - Edge-optimized hosting with global CDN
- **GitHub Actions** - Automated CI/CD pipeline
- **Environment Variables** - Secure configuration management

## 🛠️ **Development Setup**

### **Prerequisites**
- Node.js 18+ 
- npm or pnpm
- Supabase account
- Vercel account (for deployment)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/CarlosMundim/iworkz.git
   cd iworkz
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 **Project Structure**

```
iworkz/
├── src/
│   ├── components/          # React components
│   ├── lib/                # Utilities and configurations
│   ├── App.jsx             # Main application component
│   └── App.css             # Global styles
├── public/                 # Static assets
├── supabase/              # Database schema and migrations
├── dist/                  # Build output
└── README.md
```

## 🎨 **Design System**

### **Color Palette**
- **Primary**: SAP Blue (#0070F2)
- **Secondary**: Enterprise Gray (#6B7280)
- **Success**: Green (#10B981)
- **Warning**: Amber (#F59E0B)
- **Error**: Red (#EF4444)

### **Typography**
- **Japanese**: Noto Sans JP
- **English**: Inter
- **Monospace**: JetBrains Mono

## 🌏 **Internationalization**

### **Supported Languages**
- 🇯🇵 Japanese (Primary)
- 🇺🇸 English (Secondary)

### **Cultural Adaptations**
- Japanese business hierarchy respect
- Wa (harmony) integration
- Kaizen (continuous improvement) focus
- Omotenashi (hospitality) principles

## 👥 **Team**

### **Development Team**
- **Manus AI** - Frontend Development, UI/UX, SAP Fiori Implementation
- **Tiger Boss Koda** - Backend Architecture, AI Engines, Database Design
- **Chachie** - Strategic Planning, Research, Business Intelligence

### **Project Owner**
- **Papa Carlos** - Project Leadership and Vision

## 📄 **License**

This project is proprietary software owned by Carlos Mundim and the iWORKZ team.

---

**Built with ❤️ for the Japanese talent market**

*Revolutionizing talent management through cultural intelligence*

