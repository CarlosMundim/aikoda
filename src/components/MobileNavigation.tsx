'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileNavigationProps {
  language: 'en' | 'ja'
}

export function MobileNavigation({ language }: MobileNavigationProps) {
  const pathname = usePathname()

  const labels = {
    en: {
      dashboard: 'Dashboard',
      clients: 'Clients',
      candidates: 'Candidates',
      jobs: 'Jobs',
      market: 'Market'
    },
    ja: {
      dashboard: 'ダッシュボード',
      clients: 'クライアント',
      candidates: '候補者',
      jobs: '求人',
      market: '市場'
    }
  }

  const navItems = [
    {
      href: '/',
      label: labels[language].dashboard,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="sap-mobile-nav-icon">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      )
    },
    {
      href: '/client-registration',
      label: labels[language].clients,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="sap-mobile-nav-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      href: '/candidate-registration',
      label: labels[language].candidates,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="sap-mobile-nav-icon">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10l-1.99-1.01A2.5 2.5 0 0 0 10 8H8.46c-.8 0-1.49.59-1.42 1.37L9.5 16H12v6h8z"/>
        </svg>
      )
    },
    {
      href: '/job-posting',
      label: labels[language].jobs,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="sap-mobile-nav-icon">
          <path d="M20 6h-2.5l-1.5-1.5h-5L9.5 6H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H7V8h2.5l1.5-1.5h5L17.5 8H20v10z"/>
        </svg>
      )
    },
    {
      href: '/market-intelligence',
      label: labels[language].market,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="sap-mobile-nav-icon">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      )
    }
  ]

  return (
    <nav className="sap-mobile-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`sap-mobile-nav-item ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span className="sap-mobile-nav-label">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

// Mobile Header Component
export function MobileHeader({ 
  title, 
  subtitle, 
  language, 
  onLanguageChange,
  showBack = false,
  onBack
}: {
  title: string
  subtitle?: string
  language: 'en' | 'ja'
  onLanguageChange: (lang: 'en' | 'ja') => void
  showBack?: boolean
  onBack?: () => void
}) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-sap-border-color sap-safe-area-top">
      <div className="flex items-center justify-between p-4 min-h-[56px]">
        <div className="flex items-center flex-1">
          {showBack && (
            <button
              onClick={onBack}
              className="mr-3 p-2 -ml-2 text-sap-text-primary hover:bg-sap-hover-background rounded-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
            </button>
          )}
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-semibold text-sap-text-primary truncate">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-sap-text-secondary truncate">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        
        {/* Language Toggle */}
        <div className="sap-language-toggle ml-4">
          <button
            onClick={() => onLanguageChange('en')}
            className={`toggle-btn ${language === 'en' ? 'active' : ''}`}
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange('ja')}
            className={`toggle-btn ${language === 'ja' ? 'active' : ''}`}
          >
            JP
          </button>
        </div>
      </div>
    </header>
  )
}

// Mobile Drawer Component
export function MobileDrawer({
  isOpen,
  onClose,
  children,
  title
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '80vh' }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>
        
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-sap-border-color">
            <h2 className="text-lg font-semibold text-sap-text-primary">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-sap-text-secondary hover:bg-sap-hover-background rounded-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        )}
        
        {/* Content */}
        <div className="overflow-y-auto p-4 sap-safe-area-bottom">
          {children}
        </div>
      </div>
    </>
  )
}

// Mobile Action Sheet Component
export function MobileActionSheet({
  isOpen,
  onClose,
  actions,
  title
}: {
  isOpen: boolean
  onClose: () => void
  actions: Array<{
    label: string
    icon?: React.ReactNode
    onClick: () => void
    destructive?: boolean
  }>
  title?: string
}) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={onClose}
        />
      )}
      
      {/* Action Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-xl transform transition-transform duration-300 ease-out sap-safe-area-bottom ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>
        
        {/* Title */}
        {title && (
          <div className="px-4 py-3 border-b border-sap-border-color">
            <h3 className="text-center text-sm font-medium text-sap-text-secondary">
              {title}
            </h3>
          </div>
        )}
        
        {/* Actions */}
        <div className="p-4 space-y-2">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                action.onClick()
                onClose()
              }}
              className={`w-full flex items-center justify-center gap-3 p-4 rounded-xl border transition-colors ${
                action.destructive
                  ? 'border-red-200 text-red-600 hover:bg-red-50'
                  : 'border-sap-border-color text-sap-text-primary hover:bg-sap-hover-background'
              }`}
            >
              {action.icon}
              <span className="font-medium">{action.label}</span>
            </button>
          ))}
          
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="w-full p-4 mt-4 text-sap-text-secondary border border-sap-border-color rounded-xl hover:bg-sap-hover-background"
          >
            Cancel / キャンセル
          </button>
        </div>
      </div>
    </>
  )
}

