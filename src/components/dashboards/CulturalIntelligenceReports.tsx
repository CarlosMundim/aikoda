import React from 'react'

interface CulturalIntelligenceReportsProps {
  language: string
  onLanguageToggle: () => void
}

export default function CulturalIntelligenceReports({ 
  language, 
  onLanguageToggle 
}: CulturalIntelligenceReportsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {language === 'en' ? 'Cultural Intelligence Reports' : '文化知能レポート'}
        </h2>
        <button
          onClick={onLanguageToggle}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {language === 'en' ? '日本語' : 'English'}
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="border rounded p-4">
          <h3 className="font-medium mb-2">
            {language === 'en' ? 'Japanese Cultural Alignment' : '日本文化適合性'}
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Wa (和): </span>
              <span className="font-medium">85%</span>
            </div>
            <div>
              <span className="text-gray-600">Kaizen (改善): </span>
              <span className="font-medium">92%</span>
            </div>
            <div>
              <span className="text-gray-600">Omotenashi (おもてなし): </span>
              <span className="font-medium">78%</span>
            </div>
            <div>
              <span className="text-gray-600">Bushido (武士道): </span>
              <span className="font-medium">81%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}