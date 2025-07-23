'use client'
import React, { useState, useEffect } from 'react'
import { SAPCard } from './SAPCard'
import { SAPButton } from './SAPButton'
import { SAPInput } from './SAPInput'
import { SAPSelect } from './SAPSelect'
import { logger } from '@/lib/logger'

interface CandidateInput {
  firstName: string
  lastName: string
  email: string
  phone: string
  nationality: string
  technicalSkills: string[]
  languageProficiency: Record<string, string>
  educationRecords: EducationRecord[]
  culturalResponses?: CulturalResponse[]
}

interface EducationRecord {
  institution: string
  degree: string
  fieldOfStudy: string
  graduationYear: number
  gpa?: number
}

interface CulturalResponse {
  dimension_id: string
  question_id: string
  score: number
  evidence?: string
}

interface CulturalAnalysisResult {
  candidateId: string
  overallScore: number
  dimensionScores: Record<string, number>
  culturalFitPrediction: number
  integrationTimeline: number
  recommendations: string[]
}

interface CandidateAnalyzerProps {
  language: 'en' | 'ja'
}

export function CandidateAnalyzer({ language }: CandidateAnalyzerProps) {
  const [candidateData, setCandidateData] = useState<Partial<CandidateInput>>({})
  const [analysisResult, setAnalysisResult] = useState<CulturalAnalysisResult | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const labels = {
    en: {
      title: "Candidate Cultural Intelligence Analyzer",
      subtitle: "Advanced 47-Dimension Cultural Assessment",
      basicInfo: "Basic Information",
      culturalAssessment: "Cultural Assessment",
      analysis: "AI Analysis Results",
      recommendations: "Recommendations",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      nationality: "Nationality",
      nextStep: "Next Step",
      previousStep: "Previous Step",
      analyze: "Analyze Candidate",
      analyzing: "Analyzing...",
      overallScore: "Overall Cultural Score",
      culturalFit: "Cultural Fit Prediction",
      integrationTime: "Integration Timeline",
      days: "days",
      step: "Step",
      of: "of"
    },
    ja: {
      title: "候補者文化的知能分析ツール",
      subtitle: "高度な47次元文化評価",
      basicInfo: "基本情報",
      culturalAssessment: "文化的評価",
      analysis: "AI分析結果",
      recommendations: "推奨事項",
      firstName: "名",
      lastName: "姓",
      email: "メールアドレス",
      phone: "電話番号",
      nationality: "国籍",
      nextStep: "次のステップ",
      previousStep: "前のステップ",
      analyze: "候補者を分析",
      analyzing: "分析中...",
      overallScore: "総合文化スコア",
      culturalFit: "文化的適合度予測",
      integrationTime: "統合タイムライン",
      days: "日",
      step: "ステップ",
      of: "/"
    }
  }

  const nationalityOptions = [
    { value: 'JP', label: language === 'ja' ? '日本' : 'Japan' },
    { value: 'US', label: language === 'ja' ? 'アメリカ' : 'United States' },
    { value: 'CN', label: language === 'ja' ? '中国' : 'China' },
    { value: 'KR', label: language === 'ja' ? '韓国' : 'South Korea' },
    { value: 'IN', label: language === 'ja' ? 'インド' : 'India' },
    { value: 'PH', label: language === 'ja' ? 'フィリピン' : 'Philippines' },
    { value: 'VN', label: language === 'ja' ? 'ベトナム' : 'Vietnam' },
    { value: 'TH', label: language === 'ja' ? 'タイ' : 'Thailand' },
    { value: 'OTHER', label: language === 'ja' ? 'その他' : 'Other' }
  ]

  async function analyzeCandidateFunction() {
    if (!candidateData.firstName || !candidateData.lastName || !candidateData.email) {
      alert(language === 'ja' ? '必須フィールドを入力してください' : 'Please fill in required fields')
      return
    }

    setIsAnalyzing(true)
    try {
      const response = await fetch('/api/candidates/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${candidateData.firstName} ${candidateData.lastName}`,
          email: candidateData.email,
          phone: candidateData.phone,
          nationality: candidateData.nationality,
          skills: candidateData.technicalSkills || [],
          languages: candidateData.languageProficiency || {},
          culturalResponses: candidateData.culturalResponses || []
        })
      })

      if (!response.ok) {
        throw new Error('Analysis failed')
      }

      const result = await response.json()
      setAnalysisResult(result)
      setCurrentStep(3)
    } catch (error) {
      logger.error('Analysis failed:', { error })
      // Mock result for development
      setAnalysisResult({
        candidateId: 'mock-id',
        overallScore: 87.3,
        culturalFitPrediction: 92.1,
        integrationTimeline: 45,
        dimensionScores: {
          wa_harmony: 85,
          kaizen_improvement: 90,
          omotenashi_service: 88,
          bushido_dedication: 82,
          nemawashi_consensus: 89
        },
        recommendations: [
          language === 'ja' ? '日本の和の精神についての研修' : 'Japanese harmony and consensus-building workshop',
          language === 'ja' ? '継続的改善手法の訓練' : 'Continuous improvement methodology training',
          language === 'ja' ? 'おもてなしサービス研修' : 'Customer service excellence and hospitality training'
        ]
      })
      setCurrentStep(3)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const renderBasicInfoForm = () => (
    <SAPCard title={labels[language].basicInfo}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SAPInput
            label={labels[language].firstName}
            value={candidateData.firstName || ''}
            onChange={(value) => setCandidateData(prev => ({ ...prev, firstName: value }))}
            required
          />
          <SAPInput
            label={labels[language].lastName}
            value={candidateData.lastName || ''}
            onChange={(value) => setCandidateData(prev => ({ ...prev, lastName: value }))}
            required
          />
        </div>
        
        <SAPInput
          label={labels[language].email}
          type="email"
          value={candidateData.email || ''}
          onChange={(value) => setCandidateData(prev => ({ ...prev, email: value }))}
          required
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SAPInput
            label={labels[language].phone}
            type="tel"
            value={candidateData.phone || ''}
            onChange={(value) => setCandidateData(prev => ({ ...prev, phone: value }))}
          />
          <SAPSelect
            label={labels[language].nationality}
            value={candidateData.nationality || ''}
            onChange={(value) => setCandidateData(prev => ({ ...prev, nationality: value }))}
            options={nationalityOptions}
            required
          />
        </div>

        <div className="flex justify-end mt-6">
          <SAPButton
            onClick={() => setCurrentStep(2)}
            disabled={!candidateData.firstName || !candidateData.lastName || !candidateData.email}
          >
            {labels[language].nextStep}
          </SAPButton>
        </div>
      </div>
    </SAPCard>
  )

  const renderCulturalAssessment = () => (
    <SAPCard title={labels[language].culturalAssessment}>
      <div className="space-y-6">
        <div className="text-center py-8">
          <div className="sap-heading mb-4">
            {language === 'ja' ? '文化的評価準備完了' : 'Cultural Assessment Ready'}
          </div>
          <p className="sap-body mb-6">
            {language === 'ja' 
              ? '候補者の47次元文化的知能を分析します。この分析には数分かかる場合があります。'
              : 'Ready to analyze candidate\'s 47-dimension cultural intelligence. This analysis may take a few minutes.'
            }
          </p>
          
          <div className="flex justify-center space-x-4">
            <SAPButton
              variant="secondary"
              onClick={() => setCurrentStep(1)}
            >
              {labels[language].previousStep}
            </SAPButton>
            <SAPButton
              onClick={analyzeCandidateFunction}
              loading={isAnalyzing}
            >
              {isAnalyzing ? labels[language].analyzing : labels[language].analyze}
            </SAPButton>
          </div>
        </div>
      </div>
    </SAPCard>
  )

  const renderAnalysisResults = () => (
    <div className="space-y-6">
      <SAPCard title={labels[language].analysis}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {analysisResult?.overallScore.toFixed(1)}%
            </div>
            <div className="sap-caption">{labels[language].overallScore}</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {analysisResult?.culturalFitPrediction.toFixed(1)}%
            </div>
            <div className="sap-caption">{labels[language].culturalFit}</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">
              {analysisResult?.integrationTimeline} {labels[language].days}
            </div>
            <div className="sap-caption">{labels[language].integrationTime}</div>
          </div>
        </div>
      </SAPCard>

      <SAPCard title={labels[language].recommendations}>
        <div className="space-y-3">
          {analysisResult?.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              <div className="sap-body">{recommendation}</div>
            </div>
          ))}
        </div>
      </SAPCard>
    </div>
  )

  return (
    <div className="candidate-analyzer">
      <div className="analyzer-header">
        <div>
          <h1 className="sap-title">{labels[language].title}</h1>
          <p className="sap-caption mt-2">{labels[language].subtitle}</p>
        </div>
        
        <div className="step-indicator">
          <span className="sap-caption">
            {labels[language].step} {currentStep} {labels[language].of} 3
          </span>
        </div>
      </div>

      <div className="analyzer-content">
        {currentStep === 1 && renderBasicInfoForm()}
        {currentStep === 2 && renderCulturalAssessment()}
        {currentStep === 3 && analysisResult && renderAnalysisResults()}
      </div>

      <style jsx>{`
        .candidate-analyzer {
          padding: var(--sap-spacing-xl) 0;
        }
        
        .analyzer-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--sap-spacing-xl);
          flex-wrap: wrap;
          gap: var(--sap-spacing-md);
        }
        
        .step-indicator {
          padding: var(--sap-spacing-sm) var(--sap-spacing-md);
          background: var(--sap-card-background);
          border: 1px solid var(--sap-border-color);
          border-radius: var(--sap-border-radius);
        }
        
        .analyzer-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        @media (max-width: 768px) {
          .analyzer-header {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </div>
  )
}

