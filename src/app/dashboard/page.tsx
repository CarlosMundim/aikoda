'use client'

import { useState, useEffect } from 'react'
import DashboardLayout from '../../components/common/DashboardLayout'

// Import all dashboard components
import ExecutiveAnalyticsCockpit from '../../components/dashboards/ExecutiveAnalyticsCockpit'
import AIMatchingInsights from '../../components/dashboards/AIMatchingInsights'
import CulturalIntelligenceReports from '../../components/dashboards/CulturalIntelligenceReports'
import DiversityMetricsDashboard from '../../components/dashboards/DiversityMetricsDashboard'

// Import registration components
import CandidateRegistrationWizard from '../../components/registration/CandidateRegistrationWizard'
import CompanyRegistrationWizard from '../../components/registration/CompanyRegistrationWizard'
import CulturalIntelligenceTest from '../../components/registration/CulturalIntelligenceTest'
import PsychologicalAssessment from '../../components/registration/PsychologicalAssessment'

// Import matching components
import AIMatchingEngine from '../../components/matching/AIMatchingEngine'
import CandidateDiscovery from '../../components/matching/CandidateDiscovery'

export default function DashboardPage() {
  const [language, setLanguage] = useState('ja')
  const [user, setUser] = useState(null)
  const [currentView, setCurrentView] = useState('dashboard')

  useEffect(() => {
    // Initialize language from localStorage
    const savedLanguage = localStorage.getItem('aikoda-language')
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageToggle = () => {
    const newLanguage = language === 'ja' ? 'en' : 'ja'
    setLanguage(newLanguage)
    localStorage.setItem('aikoda-language', newLanguage)
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <ExecutiveAnalyticsCockpit language={language} />
      case 'ai-matching':
        return <AIMatchingInsights language={language} />
      case 'cultural-intelligence':
        return <CulturalIntelligenceReports language={language} />
      case 'diversity-metrics':
        return <DiversityMetricsDashboard language={language} />
      case 'candidate-registration':
        return <CandidateRegistrationWizard language={language} />
      case 'company-registration':
        return <CompanyRegistrationWizard language={language} />
      case 'cultural-test':
        return <CulturalIntelligenceTest language={language} />
      case 'psychological-assessment':
        return <PsychologicalAssessment language={language} />
      case 'ai-matching-engine':
        return <AIMatchingEngine language={language} />
      case 'candidate-discovery':
        return <CandidateDiscovery language={language} />
      default:
        return <ExecutiveAnalyticsCockpit language={language} />
    }
  }

  return (
    <DashboardLayout
      language={language}
      onLanguageToggle={handleLanguageToggle}
      user={user}
      onUserChange={setUser}
      currentView={currentView}
      onViewChange={setCurrentView}
    >
      {renderCurrentView()}
    </DashboardLayout>
  )
}