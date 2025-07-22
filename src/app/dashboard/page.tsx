'use client'

import { useState, useEffect } from 'react'
import { EnterpriseCockpit } from '../../components/EnterpriseCockpit'
import { CandidateAnalyzer } from '../../components/CandidateAnalyzer'
import { DashboardNavigation } from '../../components/DashboardNavigation'

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [language, setLanguage] = useState<'en' | 'ja'>('en')

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        language={language}
        setLanguage={setLanguage}
      />
      
      <main className="ml-64 p-8">
        {activeSection === 'dashboard' && (
          <EnterpriseCockpit language={language} />
        )}
        
        {activeSection === 'candidates' && (
          <CandidateAnalyzer language={language} />
        )}
        
        {/* Add other sections as needed */}
      </main>
    </div>
  )
}