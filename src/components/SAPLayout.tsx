'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MobileNavigation, MobileHeader } from '../Mobile/MobileNavigation'
import { PWAInstaller, PWAStatus } from '../PWA/PWAInstaller'

interface SAPLayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  showLanguageToggle?: boolean
  navigation?: React.ReactNode
  actions?: React.ReactNode
  showMobileNav?: boolean
  showBack?: boolean
}

export function SAPLayout({
  children,
  title,
  subtitle,
  showLanguageToggle = true,
  navigation,
  actions,
  showMobileNav = true,
  showBack = false
}: SAPLayoutProps) {
  const [language, setLanguage] = useState<'en' | 'ja'>('en')
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  const labels = {
    en: {
      title: title || 'iWORKZ Platform',
      subtitle: subtitle || 'Cultural Intelligence for Japanese Business'
    },
    ja: {
      title: title || 'iWORKZプラットフォーム',
      subtitle: subtitle || '日本ビジネスのための文化的知能'
    }
  }

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Set document language
    document.documentElement.lang = language
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [language])

  const handleBack = () => {
    router.back()
  }

  const handleLanguageChange = (lang: 'en' | 'ja') => {
    setLanguage(lang)
    // Store language preference
    localStorage.setItem('preferred-language', lang)
  }

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as 'en' | 'ja'
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  return (
    <div className="min-h-screen bg-sap-background" lang={language}>
      {/* PWA Components */}
      <PWAInstaller language={language} />
      <PWAStatus language={language} />
      
      {/* Mobile Layout */}
      {isMobile ? (
        <>
          {/* Mobile Header */}
          <MobileHeader
            title={labels[language].title}
            subtitle={labels[language].subtitle}
            language={language}
            onLanguageChange={handleLanguageChange}
            showBack={showBack}
            onBack={handleBack}
          />
          
          {/* Mobile Content */}
          <main className="pb-20"> {/* Bottom padding for mobile nav */}
            <div className="sap-container">
              {children}
            </div>
          </main>
          
          {/* Mobile Navigation */}
          {showMobileNav && (
            <MobileNavigation language={language} />
          )}
        </>
      ) : (
        /* Desktop Layout */
        <>
          {/* Desktop Header */}
          <header className="bg-white border-b border-sap-border-color sticky top-0 z-40">
            <div className="sap-container">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-6">
                  <div>
                    <h1 className="sap-title">{labels[language].title}</h1>
                    {subtitle && (
                      <p className="sap-caption mt-1">{labels[language].subtitle}</p>
                    )}
                  </div>
                  {navigation && (
                    <nav className="hidden md:block">
                      {navigation}
                    </nav>
                  )}
                </div>
                
                <div className="flex items-center space-x-4">
                  {actions}
                  {showLanguageToggle && (
                    <div className="sap-language-toggle">
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className={`toggle-btn ${language === 'en' ? 'active' : ''}`}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => handleLanguageChange('ja')}
                        className={`toggle-btn ${language === 'ja' ? 'active' : ''}`}
                      >
                        JP
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>
          
          {/* Desktop Content */}
          <main className="sap-section">
            <div className="sap-container">
              {children}
            </div>
          </main>
        </>
      )}
    </div>
  )
}

// Mobile-First Page Wrapper
export function MobilePage({
  children,
  title,
  subtitle,
  showBack = false,
  className = ''
}: {
  children: React.ReactNode
  title: string
  subtitle?: string
  showBack?: boolean
  className?: string
}) {
  return (
    <SAPLayout
      title={title}
      subtitle={subtitle}
      showBack={showBack}
      showMobileNav={true}
    >
      <div className={`sap-fade-in ${className}`}>
        {children}
      </div>
    </SAPLayout>
  )
}

// Desktop Navigation Component
export function DesktopNavigation({ language }: { language: 'en' | 'ja' }) {
  const labels = {
    en: {
      dashboard: 'Dashboard',
      clients: 'Client Registration',
      candidates: 'Candidate Registration',
      jobs: 'Job Posting',
      market: 'Market Intelligence'
    },
    ja: {
      dashboard: 'ダッシュボード',
      clients: 'クライアント登録',
      candidates: '候補者登録',
      jobs: '求人投稿',
      market: '市場インテリジェンス'
    }
  }

  const navItems = [
    { href: '/', label: labels[language].dashboard },
    { href: '/client-registration', label: labels[language].clients },
    { href: '/candidate-registration', label: labels[language].candidates },
    { href: '/job-posting', label: labels[language].jobs },
    { href: '/market-intelligence', label: labels[language].market }
  ]

  return (
    <nav className="flex space-x-6">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sap-text-secondary hover:text-sap-brand-color transition-colors duration-200 font-medium"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

// Gesture Handler Hook
export function useGestures() {
  const [gesture, setGesture] = useState<{
    type: 'swipe' | 'pinch' | 'tap' | null
    direction?: 'left' | 'right' | 'up' | 'down'
    scale?: number
  }>({ type: null })

  useEffect(() => {
    let startX = 0
    let startY = 0
    let startDistance = 0

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX
        startY = e.touches[0].clientY
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        startDistance = Math.sqrt(dx * dx + dy * dy)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const scale = distance / startDistance
        
        setGesture({ type: 'pinch', scale })
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length === 1) {
        const endX = e.changedTouches[0].clientX
        const endY = e.changedTouches[0].clientY
        const deltaX = endX - startX
        const deltaY = endY - startY
        const threshold = 50

        if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
          let direction: 'left' | 'right' | 'up' | 'down'
          
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            direction = deltaX > 0 ? 'right' : 'left'
          } else {
            direction = deltaY > 0 ? 'down' : 'up'
          }
          
          setGesture({ type: 'swipe', direction })
        } else if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
          setGesture({ type: 'tap' })
        }
      }
      
      // Reset gesture after a short delay
      setTimeout(() => setGesture({ type: null }), 100)
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return gesture
}

