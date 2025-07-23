import React from 'react'

interface ExecutiveAnalyticsCockpitProps {
  language: string
  onLanguageToggle: () => void
}

export default function ExecutiveAnalyticsCockpit({ 
  language, 
  onLanguageToggle 
}: ExecutiveAnalyticsCockpitProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {language === 'en' ? 'Executive Analytics Cockpit' : 'エグゼクティブ分析コックピット'}
        </h2>
        <button
          onClick={onLanguageToggle}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {language === 'en' ? '日本語' : 'English'}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="font-medium text-blue-800">
            {language === 'en' ? 'Total Candidates' : '総候補者数'}
          </h3>
          <p className="text-2xl font-bold text-blue-600">1,247</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded">
          <h3 className="font-medium text-green-800">
            {language === 'en' ? 'Active Jobs' : '募集中の求人'}
          </h3>
          <p className="text-2xl font-bold text-green-600">89</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded">
          <h3 className="font-medium text-purple-800">
            {language === 'en' ? 'Cultural Match Rate' : '文化適合率'}
          </h3>
          <p className="text-2xl font-bold text-purple-600">87%</p>
        </div>
      </div>
    </div>
  )
}