import React from 'react'

interface CandidateDiscoveryProps {
  language: string
  onLanguageToggle: () => void
}

export default function CandidateDiscovery({ 
  language, 
  onLanguageToggle 
}: CandidateDiscoveryProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {language === 'en' ? 'Candidate Discovery' : '候補者発見'}
        </h2>
        <button
          onClick={onLanguageToggle}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {language === 'en' ? '日本語' : 'English'}
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder={language === 'en' ? 'Search candidates...' : '候補者を検索...'}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            {language === 'en' ? 'Search' : '検索'}
          </button>
        </div>
        
        <div className="border rounded">
          <div className="p-4 border-b">
            <h3 className="font-medium">Top Matches</h3>
          </div>
          <div className="p-4">
            <p className="text-gray-600 text-sm">
              {language === 'en' ? 'AI-powered candidate matching results will appear here' : 'AI搭載の候補者マッチング結果がここに表示されます'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}