import React from 'react'

interface PsychologicalAssessmentProps {
  language: string
  onLanguageToggle: () => void
}

export default function PsychologicalAssessment({ 
  language, 
  onLanguageToggle 
}: PsychologicalAssessmentProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {language === 'en' ? 'Psychological Assessment' : '心理的評価'}
        </h2>
        <button
          onClick={onLanguageToggle}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {language === 'en' ? '日本語' : 'English'}
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-4">
            <h3 className="font-medium mb-2">
              {language === 'en' ? 'Personality Traits' : '性格特性'}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{language === 'en' ? 'Openness' : '開放性'}</span>
                <span className="font-medium">78%</span>
              </div>
              <div className="flex justify-between">
                <span>{language === 'en' ? 'Conscientiousness' : '誠実性'}</span>
                <span className="font-medium">85%</span>
              </div>
              <div className="flex justify-between">
                <span>{language === 'en' ? 'Extraversion' : '外向性'}</span>
                <span className="font-medium">72%</span>
              </div>
            </div>
          </div>
          
          <div className="border rounded p-4">
            <h3 className="font-medium mb-2">
              {language === 'en' ? 'Work Style' : '仕事のスタイル'}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{language === 'en' ? 'Team Work' : 'チームワーク'}</span>
                <span className="font-medium">89%</span>
              </div>
              <div className="flex justify-between">
                <span>{language === 'en' ? 'Leadership' : 'リーダーシップ'}</span>
                <span className="font-medium">76%</span>
              </div>
              <div className="flex justify-between">
                <span>{language === 'en' ? 'Adaptability' : '適応性'}</span>
                <span className="font-medium">83%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}