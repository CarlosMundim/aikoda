'use client'
import React, { useState } from 'react'
import { SAPCard, SAPButton, SAPInput, SAPSelect } from '@/components/SAP'

interface CompanyBasicInfo {
  companyLegalName: string
  companyTradeName?: string
  companyRegistrationNumber?: string
  taxIdentificationNumber?: string
  industryClassification: string
  companySizeCategory: 'startup' | 'small' | 'medium' | 'large' | 'enterprise'
  numberOfEmployees?: number
  foundingYear?: number
  annualRevenueRange?: string
}

interface CompanyLocation {
  headquartersCountry: string
  headquartersCity: string
  headquartersAddress: string
  headquartersPostalCode: string
  primaryContactName: string
  primaryContactTitle: string
  primaryContactEmail: string
  primaryContactPhone: string
  primaryContactLinkedin?: string
}

interface BusinessProfile {
  businessModel: 'b2b' | 'b2c' | 'b2b2c' | 'marketplace' | 'saas' | 'consulting'
  primaryProductsServices: string[]
  uniqueValueProposition: string
  targetCustomerSegments: string[]
  competitiveAdvantages: string[]
  marketPosition: 'startup' | 'challenger' | 'leader' | 'niche'
}

interface CulturalProfile {
  companyCultureType: 'hierarchical' | 'collaborative' | 'innovative' | 'traditional' | 'hybrid'
  workEnvironmentStyle: 'formal' | 'casual' | 'mixed'
  communicationCulture: 'direct' | 'indirect' | 'contextual'
  decisionMakingStyle: 'top-down' | 'consensus' | 'democratic' | 'agile'
  innovationApproach: 'conservative' | 'moderate' | 'aggressive'
  riskToleranceLevel: 'low' | 'medium' | 'high'
  japaneseCulturalOpenness: number
  diversityInclusionScore: number
}

interface HiringRequirements {
  urgentPositionsCount: number
  plannedHiresNextQuarter: number
  plannedHiresNextYear: number
  hiringBudgetAnnual: number
  hiringUrgencyLevel: 'low' | 'medium' | 'high' | 'critical'
  preferredCandidateOrigins: string[]
  criticalSkillGaps: string[]
  culturalFitPriorityScore: number
  remoteWorkPolicy: 'none' | 'hybrid' | 'full' | 'flexible'
  workLifeBalancePriority: number
}

export default function ClientRegistration() {
  const [currentStep, setCurrentStep] = useState(1)
  const [language, setLanguage] = useState<'en' | 'ja'>('en')
  
  const [companyBasicInfo, setCompanyBasicInfo] = useState<CompanyBasicInfo>({
    companyLegalName: '',
    industryClassification: '',
    companySizeCategory: 'medium'
  })
  
  const [companyLocation, setCompanyLocation] = useState<CompanyLocation>({
    headquartersCountry: '',
    headquartersCity: '',
    headquartersAddress: '',
    headquartersPostalCode: '',
    primaryContactName: '',
    primaryContactTitle: '',
    primaryContactEmail: '',
    primaryContactPhone: ''
  })
  
  const [businessProfile, setBusinessProfile] = useState<BusinessProfile>({
    businessModel: 'b2b',
    primaryProductsServices: [],
    uniqueValueProposition: '',
    targetCustomerSegments: [],
    competitiveAdvantages: [],
    marketPosition: 'challenger'
  })
  
  const [culturalProfile, setCulturalProfile] = useState<CulturalProfile>({
    companyCultureType: 'collaborative',
    workEnvironmentStyle: 'mixed',
    communicationCulture: 'contextual',
    decisionMakingStyle: 'consensus',
    innovationApproach: 'moderate',
    riskToleranceLevel: 'medium',
    japaneseCulturalOpenness: 70,
    diversityInclusionScore: 75
  })
  
  const [hiringRequirements, setHiringRequirements] = useState<HiringRequirements>({
    urgentPositionsCount: 0,
    plannedHiresNextQuarter: 0,
    plannedHiresNextYear: 0,
    hiringBudgetAnnual: 0,
    hiringUrgencyLevel: 'medium',
    preferredCandidateOrigins: [],
    criticalSkillGaps: [],
    culturalFitPriorityScore: 80,
    remoteWorkPolicy: 'hybrid',
    workLifeBalancePriority: 70
  })

  const labels = {
    en: {
      title: "Client Registration",
      subtitle: "Enterprise Client Onboarding System",
      step1: "Company Information",
      step2: "Geographic & Contact",
      step3: "Business Profile", 
      step4: "Cultural Profile",
      step5: "Hiring Requirements",
      companyLegalName: "Company Legal Name*",
      companyTradeName: "Company Trade Name",
      companyRegistrationNumber: "Registration Number",
      taxIdentificationNumber: "Tax ID Number",
      industryClassification: "Industry Classification*",
      companySizeCategory: "Company Size*",
      numberOfEmployees: "Number of Employees",
      foundingYear: "Founding Year",
      annualRevenueRange: "Annual Revenue Range",
      headquartersCountry: "Headquarters Country*",
      headquartersCity: "Headquarters City*",
      headquartersAddress: "Headquarters Address*",
      headquartersPostalCode: "Postal Code*",
      primaryContactName: "Primary Contact Name*",
      primaryContactTitle: "Primary Contact Title*",
      primaryContactEmail: "Primary Contact Email*",
      primaryContactPhone: "Primary Contact Phone*",
      primaryContactLinkedin: "LinkedIn Profile",
      businessModel: "Business Model*",
      uniqueValueProposition: "Unique Value Proposition*",
      marketPosition: "Market Position*",
      companyCultureType: "Company Culture Type*",
      workEnvironmentStyle: "Work Environment Style*",
      communicationCulture: "Communication Culture*",
      decisionMakingStyle: "Decision Making Style*",
      innovationApproach: "Innovation Approach*",
      riskToleranceLevel: "Risk Tolerance Level*",
      japaneseCulturalOpenness: "Japanese Cultural Openness",
      diversityInclusionScore: "Diversity & Inclusion Score",
      urgentPositionsCount: "Urgent Positions Count*",
      plannedHiresNextQuarter: "Planned Hires Next Quarter*",
      plannedHiresNextYear: "Planned Hires Next Year*",
      hiringBudgetAnnual: "Annual Hiring Budget*",
      hiringUrgencyLevel: "Hiring Urgency Level*",
      culturalFitPriorityScore: "Cultural Fit Priority Score",
      remoteWorkPolicy: "Remote Work Policy*",
      workLifeBalancePriority: "Work-Life Balance Priority",
      nextStep: "Next Step",
      previousStep: "Previous Step",
      submitRegistration: "Submit Registration",
      stepOf: "Step {current} of {total}"
    },
    ja: {
      title: "クライアント登録",
      subtitle: "エンタープライズクライアントオンボーディングシステム",
      step1: "会社情報",
      step2: "地理・連絡先情報",
      step3: "ビジネスプロファイル",
      step4: "企業文化プロファイル", 
      step5: "採用要件",
      companyLegalName: "会社法人名*",
      companyTradeName: "商号",
      companyRegistrationNumber: "登記番号",
      taxIdentificationNumber: "税務識別番号",
      industryClassification: "業界分類*",
      companySizeCategory: "会社規模*",
      numberOfEmployees: "従業員数",
      foundingYear: "設立年",
      annualRevenueRange: "年間売上高範囲",
      headquartersCountry: "本社所在国*",
      headquartersCity: "本社所在都市*",
      headquartersAddress: "本社住所*",
      headquartersPostalCode: "郵便番号*",
      primaryContactName: "主要連絡先氏名*",
      primaryContactTitle: "主要連絡先役職*",
      primaryContactEmail: "主要連絡先メール*",
      primaryContactPhone: "主要連絡先電話*",
      primaryContactLinkedin: "LinkedInプロファイル",
      businessModel: "ビジネスモデル*",
      uniqueValueProposition: "独自価値提案*",
      marketPosition: "市場ポジション*",
      companyCultureType: "企業文化タイプ*",
      workEnvironmentStyle: "職場環境スタイル*",
      communicationCulture: "コミュニケーション文化*",
      decisionMakingStyle: "意思決定スタイル*",
      innovationApproach: "イノベーションアプローチ*",
      riskToleranceLevel: "リスク許容レベル*",
      japaneseCulturalOpenness: "日本文化への開放性",
      diversityInclusionScore: "多様性・包摂スコア",
      urgentPositionsCount: "緊急採用ポジション数*",
      plannedHiresNextQuarter: "次四半期採用予定数*",
      plannedHiresNextYear: "来年採用予定数*",
      hiringBudgetAnnual: "年間採用予算*",
      hiringUrgencyLevel: "採用緊急度*",
      culturalFitPriorityScore: "文化適合性優先度スコア",
      remoteWorkPolicy: "リモートワーク方針*",
      workLifeBalancePriority: "ワークライフバランス優先度",
      nextStep: "次のステップ",
      previousStep: "前のステップ",
      submitRegistration: "登録を送信",
      stepOf: "ステップ {current} / {total}"
    }
  }

  const currentLabels = labels[language]

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    const registrationData = {
      companyBasicInfo,
      companyLocation,
      businessProfile,
      culturalProfile,
      hiringRequirements
    }
    
    console.log('Client Registration Data:', registrationData)
    // TODO: Submit to API
  }

  const renderStep1 = () => (
    <div className="sap-section">
      <h3 className="sap-heading mb-6">{currentLabels.step1}</h3>
      
      <div className="sap-grid sap-grid-2 gap-6">
        <div>
          <label className="sap-label">{currentLabels.companyLegalName}</label>
          <SAPInput
            value={companyBasicInfo.companyLegalName}
            onChange={(e) => setCompanyBasicInfo({...companyBasicInfo, companyLegalName: e.target.value})}
            placeholder="Enter company legal name"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.companyTradeName}</label>
          <SAPInput
            value={companyBasicInfo.companyTradeName || ''}
            onChange={(e) => setCompanyBasicInfo({...companyBasicInfo, companyTradeName: e.target.value})}
            placeholder="Enter trade name"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.companyRegistrationNumber}</label>
          <SAPInput
            value={companyBasicInfo.companyRegistrationNumber || ''}
            onChange={(e) => setCompanyBasicInfo({...companyBasicInfo, companyRegistrationNumber: e.target.value})}
            placeholder="Enter registration number"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.taxIdentificationNumber}</label>
          <SAPInput
            value={companyBasicInfo.taxIdentificationNumber || ''}
            onChange={(e) => setCompanyBasicInfo({...companyBasicInfo, taxIdentificationNumber: e.target.value})}
            placeholder="Enter tax ID"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.industryClassification}</label>
          <SAPSelect
            value={companyBasicInfo.industryClassification}
            onChange={(e) => setCompanyBasicInfo({...companyBasicInfo, industryClassification: e.target.value})}
            options={[
              { value: '', label: 'Select Industry' },
              { value: 'technology', label: 'Technology' },
              { value: 'finance', label: 'Finance' },
              { value: 'healthcare', label: 'Healthcare' },
              { value: 'manufacturing', label: 'Manufacturing' },
              { value: 'retail', label: 'Retail' },
              { value: 'consulting', label: 'Consulting' },
              { value: 'education', label: 'Education' },
              { value: 'other', label: 'Other' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.companySizeCategory}</label>
          <SAPSelect
            value={companyBasicInfo.companySizeCategory}
            onChange={(e) => setCompanyBasicInfo({...companyBasicInfo, companySizeCategory: e.target.value as any})}
            options={[
              { value: 'startup', label: 'Startup (1-10)' },
              { value: 'small', label: 'Small (11-50)' },
              { value: 'medium', label: 'Medium (51-250)' },
              { value: 'large', label: 'Large (251-1000)' },
              { value: 'enterprise', label: 'Enterprise (1000+)' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.numberOfEmployees}</label>
          <SAPInput
            type="number"
            value={companyBasicInfo.numberOfEmployees || ''}
            onChange={(e) => setCompanyBasicInfo({...companyBasicInfo, numberOfEmployees: parseInt(e.target.value)})}
            placeholder="Enter number of employees"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.foundingYear}</label>
          <SAPInput
            type="number"
            value={companyBasicInfo.foundingYear || ''}
            onChange={(e) => setCompanyBasicInfo({...companyBasicInfo, foundingYear: parseInt(e.target.value)})}
            placeholder="Enter founding year"
          />
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="sap-section">
      <h3 className="sap-heading mb-6">{currentLabels.step2}</h3>
      
      <div className="sap-grid sap-grid-2 gap-6">
        <div>
          <label className="sap-label">{currentLabels.headquartersCountry}</label>
          <SAPSelect
            value={companyLocation.headquartersCountry}
            onChange={(e) => setCompanyLocation({...companyLocation, headquartersCountry: e.target.value})}
            options={[
              { value: '', label: 'Select Country' },
              { value: 'JP', label: 'Japan' },
              { value: 'US', label: 'United States' },
              { value: 'CN', label: 'China' },
              { value: 'KR', label: 'South Korea' },
              { value: 'SG', label: 'Singapore' },
              { value: 'UK', label: 'United Kingdom' },
              { value: 'DE', label: 'Germany' },
              { value: 'OTHER', label: 'Other' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.headquartersCity}</label>
          <SAPInput
            value={companyLocation.headquartersCity}
            onChange={(e) => setCompanyLocation({...companyLocation, headquartersCity: e.target.value})}
            placeholder="Enter city"
          />
        </div>
        
        <div className="col-span-2">
          <label className="sap-label">{currentLabels.headquartersAddress}</label>
          <SAPInput
            value={companyLocation.headquartersAddress}
            onChange={(e) => setCompanyLocation({...companyLocation, headquartersAddress: e.target.value})}
            placeholder="Enter full address"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.headquartersPostalCode}</label>
          <SAPInput
            value={companyLocation.headquartersPostalCode}
            onChange={(e) => setCompanyLocation({...companyLocation, headquartersPostalCode: e.target.value})}
            placeholder="Enter postal code"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.primaryContactName}</label>
          <SAPInput
            value={companyLocation.primaryContactName}
            onChange={(e) => setCompanyLocation({...companyLocation, primaryContactName: e.target.value})}
            placeholder="Enter contact name"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.primaryContactTitle}</label>
          <SAPInput
            value={companyLocation.primaryContactTitle}
            onChange={(e) => setCompanyLocation({...companyLocation, primaryContactTitle: e.target.value})}
            placeholder="Enter contact title"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.primaryContactEmail}</label>
          <SAPInput
            type="email"
            value={companyLocation.primaryContactEmail}
            onChange={(e) => setCompanyLocation({...companyLocation, primaryContactEmail: e.target.value})}
            placeholder="Enter email address"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.primaryContactPhone}</label>
          <SAPInput
            value={companyLocation.primaryContactPhone}
            onChange={(e) => setCompanyLocation({...companyLocation, primaryContactPhone: e.target.value})}
            placeholder="Enter phone number"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.primaryContactLinkedin}</label>
          <SAPInput
            value={companyLocation.primaryContactLinkedin || ''}
            onChange={(e) => setCompanyLocation({...companyLocation, primaryContactLinkedin: e.target.value})}
            placeholder="Enter LinkedIn profile URL"
          />
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="sap-section">
      <h3 className="sap-heading mb-6">{currentLabels.step3}</h3>
      
      <div className="sap-grid sap-grid-2 gap-6">
        <div>
          <label className="sap-label">{currentLabels.businessModel}</label>
          <SAPSelect
            value={businessProfile.businessModel}
            onChange={(e) => setBusinessProfile({...businessProfile, businessModel: e.target.value as any})}
            options={[
              { value: 'b2b', label: 'B2B (Business to Business)' },
              { value: 'b2c', label: 'B2C (Business to Consumer)' },
              { value: 'b2b2c', label: 'B2B2C (Business to Business to Consumer)' },
              { value: 'marketplace', label: 'Marketplace' },
              { value: 'saas', label: 'SaaS (Software as a Service)' },
              { value: 'consulting', label: 'Consulting' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.marketPosition}</label>
          <SAPSelect
            value={businessProfile.marketPosition}
            onChange={(e) => setBusinessProfile({...businessProfile, marketPosition: e.target.value as any})}
            options={[
              { value: 'startup', label: 'Startup' },
              { value: 'challenger', label: 'Challenger' },
              { value: 'leader', label: 'Market Leader' },
              { value: 'niche', label: 'Niche Player' }
            ]}
          />
        </div>
        
        <div className="col-span-2">
          <label className="sap-label">{currentLabels.uniqueValueProposition}</label>
          <textarea
            className="sap-input min-h-[100px]"
            value={businessProfile.uniqueValueProposition}
            onChange={(e) => setBusinessProfile({...businessProfile, uniqueValueProposition: e.target.value})}
            placeholder="Describe your unique value proposition"
          />
        </div>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="sap-section">
      <h3 className="sap-heading mb-6">{currentLabels.step4}</h3>
      
      <div className="sap-grid sap-grid-2 gap-6">
        <div>
          <label className="sap-label">{currentLabels.companyCultureType}</label>
          <SAPSelect
            value={culturalProfile.companyCultureType}
            onChange={(e) => setCulturalProfile({...culturalProfile, companyCultureType: e.target.value as any})}
            options={[
              { value: 'hierarchical', label: 'Hierarchical' },
              { value: 'collaborative', label: 'Collaborative' },
              { value: 'innovative', label: 'Innovative' },
              { value: 'traditional', label: 'Traditional' },
              { value: 'hybrid', label: 'Hybrid' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.workEnvironmentStyle}</label>
          <SAPSelect
            value={culturalProfile.workEnvironmentStyle}
            onChange={(e) => setCulturalProfile({...culturalProfile, workEnvironmentStyle: e.target.value as any})}
            options={[
              { value: 'formal', label: 'Formal' },
              { value: 'casual', label: 'Casual' },
              { value: 'mixed', label: 'Mixed' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.communicationCulture}</label>
          <SAPSelect
            value={culturalProfile.communicationCulture}
            onChange={(e) => setCulturalProfile({...culturalProfile, communicationCulture: e.target.value as any})}
            options={[
              { value: 'direct', label: 'Direct' },
              { value: 'indirect', label: 'Indirect' },
              { value: 'contextual', label: 'Contextual' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.decisionMakingStyle}</label>
          <SAPSelect
            value={culturalProfile.decisionMakingStyle}
            onChange={(e) => setCulturalProfile({...culturalProfile, decisionMakingStyle: e.target.value as any})}
            options={[
              { value: 'top-down', label: 'Top-Down' },
              { value: 'consensus', label: 'Consensus' },
              { value: 'democratic', label: 'Democratic' },
              { value: 'agile', label: 'Agile' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.innovationApproach}</label>
          <SAPSelect
            value={culturalProfile.innovationApproach}
            onChange={(e) => setCulturalProfile({...culturalProfile, innovationApproach: e.target.value as any})}
            options={[
              { value: 'conservative', label: 'Conservative' },
              { value: 'moderate', label: 'Moderate' },
              { value: 'aggressive', label: 'Aggressive' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.riskToleranceLevel}</label>
          <SAPSelect
            value={culturalProfile.riskToleranceLevel}
            onChange={(e) => setCulturalProfile({...culturalProfile, riskToleranceLevel: e.target.value as any})}
            options={[
              { value: 'low', label: 'Low' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.japaneseCulturalOpenness} ({culturalProfile.japaneseCulturalOpenness}%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={culturalProfile.japaneseCulturalOpenness}
            onChange={(e) => setCulturalProfile({...culturalProfile, japaneseCulturalOpenness: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.diversityInclusionScore} ({culturalProfile.diversityInclusionScore}%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={culturalProfile.diversityInclusionScore}
            onChange={(e) => setCulturalProfile({...culturalProfile, diversityInclusionScore: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  )

  const renderStep5 = () => (
    <div className="sap-section">
      <h3 className="sap-heading mb-6">{currentLabels.step5}</h3>
      
      <div className="sap-grid sap-grid-2 gap-6">
        <div>
          <label className="sap-label">{currentLabels.urgentPositionsCount}</label>
          <SAPInput
            type="number"
            value={hiringRequirements.urgentPositionsCount}
            onChange={(e) => setHiringRequirements({...hiringRequirements, urgentPositionsCount: parseInt(e.target.value)})}
            placeholder="Enter number of urgent positions"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.plannedHiresNextQuarter}</label>
          <SAPInput
            type="number"
            value={hiringRequirements.plannedHiresNextQuarter}
            onChange={(e) => setHiringRequirements({...hiringRequirements, plannedHiresNextQuarter: parseInt(e.target.value)})}
            placeholder="Enter planned hires next quarter"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.plannedHiresNextYear}</label>
          <SAPInput
            type="number"
            value={hiringRequirements.plannedHiresNextYear}
            onChange={(e) => setHiringRequirements({...hiringRequirements, plannedHiresNextYear: parseInt(e.target.value)})}
            placeholder="Enter planned hires next year"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.hiringBudgetAnnual}</label>
          <SAPInput
            type="number"
            value={hiringRequirements.hiringBudgetAnnual}
            onChange={(e) => setHiringRequirements({...hiringRequirements, hiringBudgetAnnual: parseInt(e.target.value)})}
            placeholder="Enter annual hiring budget"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.hiringUrgencyLevel}</label>
          <SAPSelect
            value={hiringRequirements.hiringUrgencyLevel}
            onChange={(e) => setHiringRequirements({...hiringRequirements, hiringUrgencyLevel: e.target.value as any})}
            options={[
              { value: 'low', label: 'Low' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' },
              { value: 'critical', label: 'Critical' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.remoteWorkPolicy}</label>
          <SAPSelect
            value={hiringRequirements.remoteWorkPolicy}
            onChange={(e) => setHiringRequirements({...hiringRequirements, remoteWorkPolicy: e.target.value as any})}
            options={[
              { value: 'none', label: 'No Remote Work' },
              { value: 'hybrid', label: 'Hybrid' },
              { value: 'full', label: 'Full Remote' },
              { value: 'flexible', label: 'Flexible' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.culturalFitPriorityScore} ({hiringRequirements.culturalFitPriorityScore}%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={hiringRequirements.culturalFitPriorityScore}
            onChange={(e) => setHiringRequirements({...hiringRequirements, culturalFitPriorityScore: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.workLifeBalancePriority} ({hiringRequirements.workLifeBalancePriority}%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={hiringRequirements.workLifeBalancePriority}
            onChange={(e) => setHiringRequirements({...hiringRequirements, workLifeBalancePriority: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1()
      case 2: return renderStep2()
      case 3: return renderStep3()
      case 4: return renderStep4()
      case 5: return renderStep5()
      default: return renderStep1()
    }
  }

  return (
    <div className="sap-container">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="sap-title">{currentLabels.title}</h2>
          <div className="sap-caption">
            {currentLabels.stepOf.replace('{current}', currentStep.toString()).replace('{total}', '5')}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          ></div>
        </div>
        
        {/* Step Navigation */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`flex items-center ${step <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
              <span className="ml-2 text-sm font-medium hidden md:block">
                {step === 1 && currentLabels.step1}
                {step === 2 && currentLabels.step2}
                {step === 3 && currentLabels.step3}
                {step === 4 && currentLabels.step4}
                {step === 5 && currentLabels.step5}
              </span>
            </div>
          ))}
        </div>
      </div>

      <SAPCard>
        {renderCurrentStep()}
        
        <div className="flex justify-between mt-8">
          <SAPButton
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            {currentLabels.previousStep}
          </SAPButton>
          
          {currentStep < 5 ? (
            <SAPButton
              variant="primary"
              onClick={handleNext}
            >
              {currentLabels.nextStep}
            </SAPButton>
          ) : (
            <SAPButton
              variant="primary"
              onClick={handleSubmit}
            >
              {currentLabels.submitRegistration}
            </SAPButton>
          )}
        </div>
      </SAPCard>
    </div>
  )
}

