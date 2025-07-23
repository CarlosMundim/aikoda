'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import LandingPage from '../components/pages/LandingPage'

export default function HomePage() {
  const [language, setLanguage] = useState('ja')
  const router = useRouter()

  const handleLanguageToggle = () => {
    const newLanguage = language === 'ja' ? 'en' : 'ja'
    setLanguage(newLanguage)
    localStorage.setItem('aikoda-language', newLanguage)
  }

  return (
    <div className="min-h-screen">
      <LandingPage 
        language={language} 
        onLanguageToggle={handleLanguageToggle}
        onNavigate={(path) => router.push(path)}
      />
    </div>
  )
}