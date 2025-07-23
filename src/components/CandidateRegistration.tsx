'use client'
import React, { useState } from 'react'
import { SAPCard, SAPButton, SAPInput, SAPSelect } from '@/components/SAP'
import { logger } from '@/lib/logger'

interface PersonalInfo {
  firstName: string
  lastName: string
  middleName?: string
  email: string
  cellPhone: string
  homePhone?: string
  dateOfBirth: string
  nationality: string
  gender?: 'male' | 'female' | 'other' | 'prefer_not_to_say'
  maritalStatus?: 'single' | 'married' | 'divorced' | 'widowed'
  profilePictureUrl?: string
}

interface AddressInfo {
  currentAddress: string
  permanentAddress?: string
  city: string
  stateProvince: string
  postalCode: string
  country: string
  willingToRelocate: boolean
  preferredWorkLocations: string[]
}

interface ProfessionalBackground {
  currentPosition: string
  currentCompany?: string
  currentSalary?: number
  salaryExpectationMin?: number
  salaryExpectationMax?: number
  totalYearsExperience: number
  industryExperience: string[]
  noticePeriod: string
  availabilityDate: string
  workAuthorizationStatus: string
  visaType?: string
  visaExpiryDate?: string
  preferredEmploymentType: 'full-time' | 'part-time' | 'contract' | 'freelance'
  preferredWorkArrangement: 'office' | 'remote' | 'hybrid'
}

interface SkillsEducation {
  technicalSkills: string[]
  softSkills: string[]
  certifications: Array<{
    name: string
    issuer: string
    issueDate: string
    expiryDate?: string
    credentialId?: string
  }>
  languageProficiency: Record<string, 'basic' | 'conversational' | 'business' | 'native'>
  educationRecords: Array<{
    degree: string
    fieldOfStudy: string
    institution: string
    graduationYear: number
    gpa?: number
  }>
}

interface CulturalPreferences {
  workStylePreference: 'independent' | 'collaborative' | 'mixed'
  communicationStyle: 'direct' | 'diplomatic' | 'contextual'
  teamCollaborationPreference: 'leader' | 'contributor' | 'supporter'
  leadershipInterest: number
  stressToleranceLevel: number
  adaptabilityScore: number
  culturalCuriosity: number
  japaneseBusinessKnowledge: number
}

interface DocumentUploads {
  resumeUrl?: string
  portfolioUrl?: string
  certificatesUrls: string[]
  coverLetterUrl?: string
  workSamplesUrls: string[]
}

export default function CandidateRegistration() {
  const [currentStep, setCurrentStep] = useState(1)
  const [language, setLanguage] = useState<'en' | 'ja'>('en')
  
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    lastName: '',
    email: '',
    cellPhone: '',
    dateOfBirth: '',
    nationality: ''
  })
  
  const [addressInfo, setAddressInfo] = useState<AddressInfo>({
    currentAddress: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: '',
    willingToRelocate: false,
    preferredWorkLocations: []
  })
  
  const [professionalBackground, setProfessionalBackground] = useState<ProfessionalBackground>({
    currentPosition: '',
    totalYearsExperience: 0,
    industryExperience: [],
    noticePeriod: '',
    availabilityDate: '',
    workAuthorizationStatus: '',
    preferredEmploymentType: 'full-time',
    preferredWorkArrangement: 'hybrid'
  })
  
  const [skillsEducation, setSkillsEducation] = useState<SkillsEducation>({
    technicalSkills: [],
    softSkills: [],
    certifications: [],
    languageProficiency: {},
    educationRecords: []
  })
  
  const [culturalPreferences, setCulturalPreferences] = useState<CulturalPreferences>({
    workStylePreference: 'collaborative',
    communicationStyle: 'contextual',
    teamCollaborationPreference: 'contributor',
    leadershipInterest: 50,
    stressToleranceLevel: 70,
    adaptabilityScore: 75,
    culturalCuriosity: 80,
    japaneseBusinessKnowledge: 60
  })
  
  const [documentUploads, setDocumentUploads] = useState<DocumentUploads>({
    certificatesUrls: [],
    workSamplesUrls: []
  })

  const labels = {
    en: {
      title: "Candidate Registration",
      subtitle: "Comprehensive Candidate Profile System",
      step1: "Personal Information",
      step2: "Address & Location",
      step3: "Professional Background",
      step4: "Skills & Education",
      step5: "Cultural Preferences",
      step6: "Document Uploads",
      firstName: "First Name*",
      lastName: "Last Name*",
      middleName: "Middle Name",
      email: "Email Address*",
      cellPhone: "Cell Phone*",
      homePhone: "Home Phone",
      dateOfBirth: "Date of Birth*",
      nationality: "Nationality*",
      gender: "Gender",
      maritalStatus: "Marital Status",
      currentAddress: "Current Address*",
      permanentAddress: "Permanent Address",
      city: "City*",
      stateProvince: "State/Province*",
      postalCode: "Postal Code*",
      country: "Country*",
      willingToRelocate: "Willing to Relocate",
      currentPosition: "Current Position*",
      currentCompany: "Current Company",
      currentSalary: "Current Salary",
      salaryExpectationMin: "Minimum Salary Expectation",
      salaryExpectationMax: "Maximum Salary Expectation",
      totalYearsExperience: "Total Years of Experience*",
      noticePeriod: "Notice Period*",
      availabilityDate: "Availability Date*",
      workAuthorizationStatus: "Work Authorization Status*",
      visaType: "Visa Type",
      visaExpiryDate: "Visa Expiry Date",
      preferredEmploymentType: "Preferred Employment Type*",
      preferredWorkArrangement: "Preferred Work Arrangement*",
      workStylePreference: "Work Style Preference*",
      communicationStyle: "Communication Style*",
      teamCollaborationPreference: "Team Collaboration Preference*",
      leadershipInterest: "Leadership Interest",
      stressToleranceLevel: "Stress Tolerance Level",
      adaptabilityScore: "Adaptability Score",
      culturalCuriosity: "Cultural Curiosity",
      japaneseBusinessKnowledge: "Japanese Business Knowledge",
      nextStep: "Next Step",
      previousStep: "Previous Step",
      submitRegistration: "Submit Registration",
      stepOf: "Step {current} of {total}"
    },
    ja: {
      title: "候補者登録",
      subtitle: "包括的候補者プロファイルシステム",
      step1: "個人情報",
      step2: "住所・所在地",
      step3: "職歴・経歴",
      step4: "スキル・学歴",
      step5: "文化的嗜好",
      step6: "書類アップロード",
      firstName: "名*",
      lastName: "姓*",
      middleName: "ミドルネーム",
      email: "メールアドレス*",
      cellPhone: "携帯電話*",
      homePhone: "自宅電話",
      dateOfBirth: "生年月日*",
      nationality: "国籍*",
      gender: "性別",
      maritalStatus: "婚姻状況",
      currentAddress: "現住所*",
      permanentAddress: "本籍地住所",
      city: "市区町村*",
      stateProvince: "都道府県*",
      postalCode: "郵便番号*",
      country: "国*",
      willingToRelocate: "転居可能",
      currentPosition: "現在の職位*",
      currentCompany: "現在の会社",
      currentSalary: "現在の給与",
      salaryExpectationMin: "最低希望給与",
      salaryExpectationMax: "最高希望給与",
      totalYearsExperience: "総経験年数*",
      noticePeriod: "退職予告期間*",
      availabilityDate: "就業可能日*",
      workAuthorizationStatus: "就労許可状況*",
      visaType: "ビザタイプ",
      visaExpiryDate: "ビザ有効期限",
      preferredEmploymentType: "希望雇用形態*",
      preferredWorkArrangement: "希望勤務形態*",
      workStylePreference: "ワークスタイル嗜好*",
      communicationStyle: "コミュニケーションスタイル*",
      teamCollaborationPreference: "チーム協働嗜好*",
      leadershipInterest: "リーダーシップ関心度",
      stressToleranceLevel: "ストレス耐性レベル",
      adaptabilityScore: "適応性スコア",
      culturalCuriosity: "文化的好奇心",
      japaneseBusinessKnowledge: "日本ビジネス知識",
      nextStep: "次のステップ",
      previousStep: "前のステップ",
      submitRegistration: "登録を送信",
      stepOf: "ステップ {current} / {total}"
    }
  }

  const currentLabels = labels[language]

  const handleNext = () => {
    if (currentStep < 6) {
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
      personalInfo,
      addressInfo,
      professionalBackground,
      skillsEducation,
      culturalPreferences,
      documentUploads
    }
    
    logger.info('Candidate Registration Data:', { registrationData })
    // TODO: Submit to API
  }

  const renderStep1 = () => (
    <div className="sap-section">
      <h3 className="sap-heading mb-6">{currentLabels.step1}</h3>
      
      <div className="sap-grid sap-grid-2 gap-6">
        <div>
          <label className="sap-label">{currentLabels.firstName}</label>
          <SAPInput
            value={personalInfo.firstName}
            onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
            placeholder="Enter first name"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.lastName}</label>
          <SAPInput
            value={personalInfo.lastName}
            onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
            placeholder="Enter last name"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.middleName}</label>
          <SAPInput
            value={personalInfo.middleName || ''}
            onChange={(e) => setPersonalInfo({...personalInfo, middleName: e.target.value})}
            placeholder="Enter middle name"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.email}</label>
          <SAPInput
            type="email"
            value={personalInfo.email}
            onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
            placeholder="Enter email address"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.cellPhone}</label>
          <SAPInput
            value={personalInfo.cellPhone}
            onChange={(e) => setPersonalInfo({...personalInfo, cellPhone: e.target.value})}
            placeholder="Enter cell phone"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.homePhone}</label>
          <SAPInput
            value={personalInfo.homePhone || ''}
            onChange={(e) => setPersonalInfo({...personalInfo, homePhone: e.target.value})}
            placeholder="Enter home phone"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.dateOfBirth}</label>
          <SAPInput
            type="date"
            value={personalInfo.dateOfBirth}
            onChange={(e) => setPersonalInfo({...personalInfo, dateOfBirth: e.target.value})}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.nationality}</label>
          <SAPSelect
            value={personalInfo.nationality}
            onChange={(e) => setPersonalInfo({...personalInfo, nationality: e.target.value})}
            options={[
              { value: '', label: 'Select Nationality' },
              { value: 'JP', label: 'Japanese' },
              { value: 'US', label: 'American' },
              { value: 'CN', label: 'Chinese' },
              { value: 'KR', label: 'Korean' },
              { value: 'IN', label: 'Indian' },
              { value: 'PH', label: 'Filipino' },
              { value: 'VN', label: 'Vietnamese' },
              { value: 'TH', label: 'Thai' },
              { value: 'SG', label: 'Singaporean' },
              { value: 'MY', label: 'Malaysian' },
              { value: 'ID', label: 'Indonesian' },
              { value: 'UK', label: 'British' },
              { value: 'DE', label: 'German' },
              { value: 'FR', label: 'French' },
              { value: 'CA', label: 'Canadian' },
              { value: 'AU', label: 'Australian' },
              { value: 'BR', label: 'Brazilian' },
              { value: 'MX', label: 'Mexican' },
              { value: 'OTHER', label: 'Other' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.gender}</label>
          <SAPSelect
            value={personalInfo.gender || ''}
            onChange={(e) => setPersonalInfo({...personalInfo, gender: e.target.value as any})}
            options={[
              { value: '', label: 'Select Gender' },
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
              { value: 'prefer_not_to_say', label: 'Prefer not to say' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.maritalStatus}</label>
          <SAPSelect
            value={personalInfo.maritalStatus || ''}
            onChange={(e) => setPersonalInfo({...personalInfo, maritalStatus: e.target.value as any})}
            options={[
              { value: '', label: 'Select Marital Status' },
              { value: 'single', label: 'Single' },
              { value: 'married', label: 'Married' },
              { value: 'divorced', label: 'Divorced' },
              { value: 'widowed', label: 'Widowed' }
            ]}
          />
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="sap-section">
      <h3 className="sap-heading mb-6">{currentLabels.step2}</h3>
      
      <div className="sap-grid sap-grid-2 gap-6">
        <div className="col-span-2">
          <label className="sap-label">{currentLabels.currentAddress}</label>
          <SAPInput
            value={addressInfo.currentAddress}
            onChange={(e) => setAddressInfo({...addressInfo, currentAddress: e.target.value})}
            placeholder="Enter current address"
          />
        </div>
        
        <div className="col-span-2">
          <label className="sap-label">{currentLabels.permanentAddress}</label>
          <SAPInput
            value={addressInfo.permanentAddress || ''}
            onChange={(e) => setAddressInfo({...addressInfo, permanentAddress: e.target.value})}
            placeholder="Enter permanent address"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.city}</label>
          <SAPInput
            value={addressInfo.city}
            onChange={(e) => setAddressInfo({...addressInfo, city: e.target.value})}
            placeholder="Enter city"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.stateProvince}</label>
          <SAPInput
            value={addressInfo.stateProvince}
            onChange={(e) => setAddressInfo({...addressInfo, stateProvince: e.target.value})}
            placeholder="Enter state/province"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.postalCode}</label>
          <SAPInput
            value={addressInfo.postalCode}
            onChange={(e) => setAddressInfo({...addressInfo, postalCode: e.target.value})}
            placeholder="Enter postal code"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.country}</label>
          <SAPSelect
            value={addressInfo.country}
            onChange={(e) => setAddressInfo({...addressInfo, country: e.target.value})}
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
        
        <div className="col-span-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={addressInfo.willingToRelocate}
              onChange={(e) => setAddressInfo({...addressInfo, willingToRelocate: e.target.checked})}
              className="rounded border-gray-300"
            />
            <span className="sap-label">{currentLabels.willingToRelocate}</span>
          </label>
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="sap-section">
      <h3 className="sap-heading mb-6">{currentLabels.step3}</h3>
      
      <div className="sap-grid sap-grid-2 gap-6">
        <div>
          <label className="sap-label">{currentLabels.currentPosition}</label>
          <SAPInput
            value={professionalBackground.currentPosition}
            onChange={(e) => setProfessionalBackground({...professionalBackground, currentPosition: e.target.value})}
            placeholder="Enter current position"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.currentCompany}</label>
          <SAPInput
            value={professionalBackground.currentCompany || ''}
            onChange={(e) => setProfessionalBackground({...professionalBackground, currentCompany: e.target.value})}
            placeholder="Enter current company"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.currentSalary}</label>
          <SAPInput
            type="number"
            value={professionalBackground.currentSalary || ''}
            onChange={(e) => setProfessionalBackground({...professionalBackground, currentSalary: parseInt(e.target.value)})}
            placeholder="Enter current salary"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.totalYearsExperience}</label>
          <SAPInput
            type="number"
            value={professionalBackground.totalYearsExperience}
            onChange={(e) => setProfessionalBackground({...professionalBackground, totalYearsExperience: parseInt(e.target.value)})}
            placeholder="Enter years of experience"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.salaryExpectationMin}</label>
          <SAPInput
            type="number"
            value={professionalBackground.salaryExpectationMin || ''}
            onChange={(e) => setProfessionalBackground({...professionalBackground, salaryExpectationMin: parseInt(e.target.value)})}
            placeholder="Enter minimum salary expectation"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.salaryExpectationMax}</label>
          <SAPInput
            type="number"
            value={professionalBackground.salaryExpectationMax || ''}
            onChange={(e) => setProfessionalBackground({...professionalBackground, salaryExpectationMax: parseInt(e.target.value)})}
            placeholder="Enter maximum salary expectation"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.noticePeriod}</label>
          <SAPSelect
            value={professionalBackground.noticePeriod}
            onChange={(e) => setProfessionalBackground({...professionalBackground, noticePeriod: e.target.value})}
            options={[
              { value: '', label: 'Select Notice Period' },
              { value: 'immediate', label: 'Immediate' },
              { value: '1_week', label: '1 Week' },
              { value: '2_weeks', label: '2 Weeks' },
              { value: '1_month', label: '1 Month' },
              { value: '2_months', label: '2 Months' },
              { value: '3_months', label: '3 Months' },
              { value: 'other', label: 'Other' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.availabilityDate}</label>
          <SAPInput
            type="date"
            value={professionalBackground.availabilityDate}
            onChange={(e) => setProfessionalBackground({...professionalBackground, availabilityDate: e.target.value})}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.workAuthorizationStatus}</label>
          <SAPSelect
            value={professionalBackground.workAuthorizationStatus}
            onChange={(e) => setProfessionalBackground({...professionalBackground, workAuthorizationStatus: e.target.value})}
            options={[
              { value: '', label: 'Select Work Authorization' },
              { value: 'citizen', label: 'Citizen' },
              { value: 'permanent_resident', label: 'Permanent Resident' },
              { value: 'work_visa', label: 'Work Visa' },
              { value: 'student_visa', label: 'Student Visa' },
              { value: 'requires_sponsorship', label: 'Requires Sponsorship' },
              { value: 'other', label: 'Other' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.preferredEmploymentType}</label>
          <SAPSelect
            value={professionalBackground.preferredEmploymentType}
            onChange={(e) => setProfessionalBackground({...professionalBackground, preferredEmploymentType: e.target.value as any})}
            options={[
              { value: 'full-time', label: 'Full-time' },
              { value: 'part-time', label: 'Part-time' },
              { value: 'contract', label: 'Contract' },
              { value: 'freelance', label: 'Freelance' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.preferredWorkArrangement}</label>
          <SAPSelect
            value={professionalBackground.preferredWorkArrangement}
            onChange={(e) => setProfessionalBackground({...professionalBackground, preferredWorkArrangement: e.target.value as any})}
            options={[
              { value: 'office', label: 'Office' },
              { value: 'remote', label: 'Remote' },
              { value: 'hybrid', label: 'Hybrid' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.visaType}</label>
          <SAPInput
            value={professionalBackground.visaType || ''}
            onChange={(e) => setProfessionalBackground({...professionalBackground, visaType: e.target.value})}
            placeholder="Enter visa type"
          />
        </div>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="sap-section">
      <h3 className="sap-heading mb-6">{currentLabels.step4}</h3>
      
      <div className="space-y-6">
        <div>
          <label className="sap-label">Technical Skills</label>
          <SAPInput
            value={skillsEducation.technicalSkills.join(', ')}
            onChange={(e) => setSkillsEducation({...skillsEducation, technicalSkills: e.target.value.split(', ').filter(s => s.trim())})}
            placeholder="Enter technical skills (comma separated)"
          />
        </div>
        
        <div>
          <label className="sap-label">Soft Skills</label>
          <SAPInput
            value={skillsEducation.softSkills.join(', ')}
            onChange={(e) => setSkillsEducation({...skillsEducation, softSkills: e.target.value.split(', ').filter(s => s.trim())})}
            placeholder="Enter soft skills (comma separated)"
          />
        </div>
        
        <div>
          <h4 className="sap-subheading">Language Proficiency</h4>
          <div className="sap-grid sap-grid-2 gap-4">
            {['English', 'Japanese', 'Chinese', 'Korean', 'Spanish', 'French'].map((lang) => (
              <div key={lang}>
                <label className="sap-label">{lang}</label>
                <SAPSelect
                  value={skillsEducation.languageProficiency[lang] || ''}
                  onChange={(e) => setSkillsEducation({
                    ...skillsEducation,
                    languageProficiency: {
                      ...skillsEducation.languageProficiency,
                      [lang]: e.target.value as any
                    }
                  })}
                  options={[
                    { value: '', label: 'Select Level' },
                    { value: 'basic', label: 'Basic' },
                    { value: 'conversational', label: 'Conversational' },
                    { value: 'business', label: 'Business' },
                    { value: 'native', label: 'Native' }
                  ]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderStep5 = () => (
    <div className="sap-section">
      <h3 className="sap-heading mb-6">{currentLabels.step5}</h3>
      
      <div className="sap-grid sap-grid-2 gap-6">
        <div>
          <label className="sap-label">{currentLabels.workStylePreference}</label>
          <SAPSelect
            value={culturalPreferences.workStylePreference}
            onChange={(e) => setCulturalPreferences({...culturalPreferences, workStylePreference: e.target.value as any})}
            options={[
              { value: 'independent', label: 'Independent' },
              { value: 'collaborative', label: 'Collaborative' },
              { value: 'mixed', label: 'Mixed' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.communicationStyle}</label>
          <SAPSelect
            value={culturalPreferences.communicationStyle}
            onChange={(e) => setCulturalPreferences({...culturalPreferences, communicationStyle: e.target.value as any})}
            options={[
              { value: 'direct', label: 'Direct' },
              { value: 'diplomatic', label: 'Diplomatic' },
              { value: 'contextual', label: 'Contextual' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.teamCollaborationPreference}</label>
          <SAPSelect
            value={culturalPreferences.teamCollaborationPreference}
            onChange={(e) => setCulturalPreferences({...culturalPreferences, teamCollaborationPreference: e.target.value as any})}
            options={[
              { value: 'leader', label: 'Leader' },
              { value: 'contributor', label: 'Contributor' },
              { value: 'supporter', label: 'Supporter' }
            ]}
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.leadershipInterest} ({culturalPreferences.leadershipInterest}%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={culturalPreferences.leadershipInterest}
            onChange={(e) => setCulturalPreferences({...culturalPreferences, leadershipInterest: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.stressToleranceLevel} ({culturalPreferences.stressToleranceLevel}%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={culturalPreferences.stressToleranceLevel}
            onChange={(e) => setCulturalPreferences({...culturalPreferences, stressToleranceLevel: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.adaptabilityScore} ({culturalPreferences.adaptabilityScore}%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={culturalPreferences.adaptabilityScore}
            onChange={(e) => setCulturalPreferences({...culturalPreferences, adaptabilityScore: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.culturalCuriosity} ({culturalPreferences.culturalCuriosity}%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={culturalPreferences.culturalCuriosity}
            onChange={(e) => setCulturalPreferences({...culturalPreferences, culturalCuriosity: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="sap-label">{currentLabels.japaneseBusinessKnowledge} ({culturalPreferences.japaneseBusinessKnowledge}%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={culturalPreferences.japaneseBusinessKnowledge}
            onChange={(e) => setCulturalPreferences({...culturalPreferences, japaneseBusinessKnowledge: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  )

  const renderStep6 = () => (
    <div className="sap-section">
      <h3 className="sap-heading mb-6">{currentLabels.step6}</h3>
      
      <div className="space-y-6">
        <div>
          <label className="sap-label">Resume/CV</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-500">Click to upload or drag and drop your resume</p>
            <p className="text-sm text-gray-400">PDF, DOC, DOCX up to 10MB</p>
          </div>
        </div>
        
        <div>
          <label className="sap-label">Portfolio</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-500">Click to upload or drag and drop your portfolio</p>
            <p className="text-sm text-gray-400">PDF, ZIP up to 50MB</p>
          </div>
        </div>
        
        <div>
          <label className="sap-label">Certificates</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-500">Click to upload or drag and drop certificates</p>
            <p className="text-sm text-gray-400">PDF, JPG, PNG up to 10MB each</p>
          </div>
        </div>
        
        <div>
          <label className="sap-label">Cover Letter</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-500">Click to upload or drag and drop cover letter</p>
            <p className="text-sm text-gray-400">PDF, DOC, DOCX up to 5MB</p>
          </div>
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
      case 6: return renderStep6()
      default: return renderStep1()
    }
  }

  return (
    <div className="sap-container">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="sap-title">{currentLabels.title}</h2>
          <div className="sap-caption">
            {currentLabels.stepOf.replace('{current}', currentStep.toString()).replace('{total}', '6')}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          ></div>
        </div>
        
        {/* Step Navigation */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4, 5, 6].map((step) => (
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
              <span className="ml-2 text-sm font-medium hidden lg:block">
                {step === 1 && currentLabels.step1}
                {step === 2 && currentLabels.step2}
                {step === 3 && currentLabels.step3}
                {step === 4 && currentLabels.step4}
                {step === 5 && currentLabels.step5}
                {step === 6 && currentLabels.step6}
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
          
          {currentStep < 6 ? (
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

