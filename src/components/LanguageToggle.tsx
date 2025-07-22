'use client'
import { useState, useEffect } from 'react'

interface LanguageToggleProps {
  onLanguageChange?: (language: 'en' | 'ja') => void
  defaultLanguage?: 'en' | 'ja'
}

export function LanguageToggle({ onLanguageChange, defaultLanguage = 'en' }: LanguageToggleProps) {
  const [language, setLanguage] = useState<'en' | 'ja'>(defaultLanguage)
  
  useEffect(() => {
    // Update document language attribute
    document.documentElement.lang = language
    
    // Update CSS custom property for font family
    document.documentElement.style.setProperty(
      '--font-family-primary',
      language === 'ja' ? 'var(--font-family-japanese)' : 'var(--font-family-english)'
    )
    
    // Call parent callback if provided
    if (onLanguageChange) {
      onLanguageChange(language)
    }
  }, [language, onLanguageChange])
  
  const handleLanguageChange = (newLanguage: 'en' | 'ja') => {
    setLanguage(newLanguage)
  }
  
  return (
    <div className="sap-language-toggle">
      <button 
        className={`toggle-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button 
        className={`toggle-btn ${language === 'ja' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('ja')}
        aria-label="日本語に切り替え"
      >
        JP
      </button>
    </div>
  )
}

export default LanguageToggle

