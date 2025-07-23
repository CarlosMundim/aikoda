import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { logger } from '@/lib/logger'
import './App.css'

// Core Layout Components
import DashboardLayout from './components/common/DashboardLayout'
import LandingPage from './pages/LandingPage'

// Registration Components
import CandidateRegistrationWizard from './components/registration/CandidateRegistrationWizard'
import CompanyRegistrationWizard from './components/registration/CompanyRegistrationWizard'

// Dashboard Components
import ExecutiveAnalyticsCockpit from './components/dashboards/ExecutiveAnalyticsCockpit'
import AIMatchingInsights from './components/dashboards/AIMatchingInsights'
import CulturalIntelligenceReports from './components/dashboards/CulturalIntelligenceReports'
import DiversityMetricsDashboard from './components/dashboards/DiversityMetricsDashboard'

// Matching Components
import AIMatchingEngine from './components/matching/AIMatchingEngine'
import CandidateDiscovery from './components/matching/CandidateDiscovery'

// Assessment Components
import CulturalIntelligenceTest from './components/registration/CulturalIntelligenceTest'
import PsychologicalAssessment from './components/registration/PsychologicalAssessment'

// Job Management
import JobPostingSystem from './pages/JobPostingSystem'
import InterviewPreparation from './pages/InterviewPreparation'

function App() {
  const [language, setLanguage] = useState('ja') // Default to Japanese for target market
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize application
  useEffect(() => {
    // Simulate app initialization
    const initializeApp = async () => {
      try {
        // Check for saved language preference
        const savedLanguage = localStorage.getItem('aikoda-language')
        if (savedLanguage) {
          setLanguage(savedLanguage)
        }
        
        // Check for authentication state
        // TODO: Implement actual auth check with Tiger Boss backend
        
        setIsLoading(false)
      } catch (error) {
        logger.error('App initialization error:', { error })
        setIsLoading(false)
      }
    }

    initializeApp()
  }, [])

  // Language toggle handler
  const toggleLanguage = () => {
    const newLanguage = language === 'ja' ? 'en' : 'ja'
    setLanguage(newLanguage)
    localStorage.setItem('aikoda-language', newLanguage)
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">
            {language === 'ja' ? 'プラットフォームを初期化中...' : 'Initializing platform...'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          {/* Public Landing Page */}
          <Route 
            path="/" 
            element={
              <LandingPage 
                language={language} 
                onLanguageToggle={toggleLanguage}
              />
            } 
          />
          
          {/* Registration Routes */}
          <Route 
            path="/candidate-registration" 
            element={
              <CandidateRegistrationWizard 
                language={language} 
                onLanguageToggle={toggleLanguage}
              />
            } 
          />
          <Route 
            path="/company-registration" 
            element={
              <CompanyRegistrationWizard 
                language={language} 
                onLanguageToggle={toggleLanguage}
              />
            } 
          />
          
          {/* Assessment Routes */}
          <Route 
            path="/cultural-assessment" 
            element={
              <CulturalIntelligenceTest 
                language={language} 
                onLanguageToggle={toggleLanguage}
              />
            } 
          />
          <Route 
            path="/psychological-assessment" 
            element={
              <PsychologicalAssessment 
                language={language} 
                onLanguageToggle={toggleLanguage}
              />
            } 
          />
          
          {/* Dashboard Routes - Protected by DashboardLayout */}
          <Route 
            path="/dashboard/*" 
            element={
              <DashboardLayout 
                language={language} 
                onLanguageToggle={toggleLanguage}
                user={user}
                onUserChange={setUser}
              >
                <Routes>
                  {/* Executive Dashboard */}
                  <Route 
                    index 
                    element={<ExecutiveAnalyticsCockpit language={language} />} 
                  />
                  
                  {/* Analytics Dashboards */}
                  <Route 
                    path="ai-matching" 
                    element={<AIMatchingInsights language={language} />} 
                  />
                  <Route 
                    path="cultural-intelligence" 
                    element={<CulturalIntelligenceReports language={language} />} 
                  />
                  <Route 
                    path="diversity-metrics" 
                    element={<DiversityMetricsDashboard language={language} />} 
                  />
                  
                  {/* Matching & Discovery */}
                  <Route 
                    path="matching-engine" 
                    element={<AIMatchingEngine language={language} />} 
                  />
                  <Route 
                    path="candidate-discovery" 
                    element={<CandidateDiscovery language={language} />} 
                  />
                  
                  {/* Job Management */}
                  <Route 
                    path="job-posting" 
                    element={<JobPostingSystem language={language} />} 
                  />
                  <Route 
                    path="interview-preparation" 
                    element={<InterviewPreparation language={language} />} 
                  />
                </Routes>
              </DashboardLayout>
            } 
          />
          
          {/* Redirect unknown routes to landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

