'use client'

import { useState } from 'react'

interface DashboardNavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
  language: 'en' | 'ja'
  setLanguage: (lang: 'en' | 'ja') => void
}

export function DashboardNavigation({ 
  activeSection, 
  setActiveSection, 
  language, 
  setLanguage 
}: DashboardNavigationProps) {
  const menuItems = [
    { 
      id: 'dashboard', 
      label: language === 'ja' ? 'ダッシュボード' : 'Dashboard',
      icon: '📊'
    },
    { 
      id: 'candidates', 
      label: language === 'ja' ? '候補者分析' : 'Candidate Analyzer',
      icon: '👤'
    },
    { 
      id: 'companies', 
      label: language === 'ja' ? '企業管理' : 'Company Management',
      icon: '🏢'
    },
    { 
      id: 'jobs', 
      label: language === 'ja' ? '求人投稿' : 'Job Posting',
      icon: '💼'
    },
    { 
      id: 'matching', 
      label: language === 'ja' ? 'AIマッチング' : 'AI Matching',
      icon: '🤖'
    },
    { 
      id: 'cultural', 
      label: language === 'ja' ? '文化インテリジェンス' : 'Cultural Intelligence',
      icon: '🧠'
    },
    { 
      id: 'reports', 
      label: language === 'ja' ? 'レポート' : 'Reports',
      icon: '📈'
    }
  ]

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">aiK</span>
          </div>
          <span className="text-xl font-bold text-gray-900">aiKODA</span>
        </div>
      </div>

      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setLanguage('en')}
            className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-all ${
              language === 'en' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('ja')}
            className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-all ${
              language === 'ja' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
            }`}
          >
            日本語
          </button>
        </div>
      </div>
    </div>
  )
}