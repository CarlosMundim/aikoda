'use client'
import React, { useState } from 'react'
import { SAPCard, SAPButton, SAPInput, SAPSelect } from '@/components/SAP'

interface JobPostingForm {
  // Basic Job Information
  internalJobCode: string
  externalJobTitle: string
  internalJobTitle: string
  jobCategory: 'engineering' | 'design' | 'marketing' | 'sales' | 'operations' | 'hr' | 'finance'
  jobFamily: 'technical' | 'business' | 'creative' | 'leadership'
  jobLevel: 'entry' | 'junior' | 'mid' | 'senior' | 'principal' | 'executive'
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship'
  workArrangement: 'onsite' | 'remote' | 'hybrid'
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical'
  targetStartDate?: string
  applicationDeadline?: string
  
  // Job Requirements
  minimumExperienceYears: number
  maximumExperienceYears?: number
  requiredEducationLevel: 'high_school' | 'bachelors' | 'masters' | 'phd'
  requiredDegreeField?: string
  professionalCertRequired: string[]
  languageRequirements: Record<string, 'basic' | 'conversational' | 'business' | 'native'>
  jlptLevelRequired?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
  
  // Skills Requirements
  requiredTechnicalSkills: string[]
  preferredTechnicalSkills: string[]
  requiredSoftSkills: string[]
  leadershipSkillsRequired: string[]
  industryKnowledgeRequired: string[]
  
  // Cultural Requirements (aiKODA UNIQUE)
  culturalIntelligenceMin?: number
  waHarmonyRequirement?: number
  kaizenMindsetRequirement?: number
  omotenashiServiceRequirement?: number
  communicationStylePref?: 'direct' | 'indirect' | 'contextual'
  hierarchyRespectRequirement?: number
  teamCollaborationRequired?: number
  crossCulturalExpRequired: boolean
  
  // Compensation & Benefits
  salaryRangeMinimum: number
  salaryRangeMaximum: number
  salaryCurrency: 'JPY' | 'USD' | 'EUR'
  salaryNegotiable: boolean
  performanceBonusPercent?: number
  stockOptionsAvailable: boolean
  visaSponsorshipAvailable: boolean
  relocationAssistance: boolean
  
  // Job Description
  jobDescription: string
  keyResponsibilities: string[]
  successCriteria: string[]
  careerGrowthPath: string
  teamStructure: string
}

interface JobListItem {
  id: string
  title: string
  status: 'draft' | 'active' | 'paused' | 'filled' | 'cancelled'
  applications: number
  qualifiedCandidates: number
  culturalMatches: number
  daysActive: number
  urgency: 'low' | 'medium' | 'high' | 'critical'
}

export default function JobPosting() {
  const [currentView, setCurrentView] = useState<'list' | 'create' | 'edit'>('list')
  const [language, setLanguage] = useState<'en' | 'ja'>('en')
  
  const [jobForm, setJobForm] = useState<JobPostingForm>({
    internalJobCode: '',
    externalJobTitle: '',
    internalJobTitle: '',
    jobCategory: 'engineering',
    jobFamily: 'technical',
    jobLevel: 'mid',
    employmentType: 'full-time',
    workArrangement: 'hybrid',
    urgencyLevel: 'medium',
    minimumExperienceYears: 0,
    requiredEducationLevel: 'bachelors',
    professionalCertRequired: [],
    languageRequirements: {},
    requiredTechnicalSkills: [],
    preferredTechnicalSkills: [],
    requiredSoftSkills: [],
    leadershipSkillsRequired: [],
    industryKnowledgeRequired: [],
    crossCulturalExpRequired: false,
    salaryRangeMinimum: 0,
    salaryRangeMaximum: 0,
    salaryCurrency: 'JPY',
    salaryNegotiable: false,
    stockOptionsAvailable: false,
    visaSponsorshipAvailable: false,
    relocationAssistance: false,
    jobDescription: '',
    keyResponsibilities: [],
    successCriteria: [],
    careerGrowthPath: '',
    teamStructure: ''
  })

  // Mock job data
  const [jobList] = useState<JobListItem[]>([
    {
      id: '1',
      title: 'Senior Software Engineer',
      status: 'active',
      applications: 45,
      qualifiedCandidates: 12,
      culturalMatches: 8,
      daysActive: 15,
      urgency: 'high'
    },
    {
      id: '2',
      title: 'Product Manager',
      status: 'active',
      applications: 32,
      qualifiedCandidates: 9,
      culturalMatches: 6,
      daysActive: 8,
      urgency: 'critical'
    },
    {
      id: '3',
      title: 'UX Designer',
      status: 'paused',
      applications: 28,
      qualifiedCandidates: 7,
      culturalMatches: 5,
      daysActive: 22,
      urgency: 'medium'
    },
    {
      id: '4',
      title: 'Data Scientist',
      status: 'draft',
      applications: 0,
      qualifiedCandidates: 0,
      culturalMatches: 0,
      daysActive: 0,
      urgency: 'low'
    }
  ])

  const labels = {
    en: {
      title: "Job Posting Management",
      subtitle: "Comprehensive Job Posting & Management System",
      createNewJob: "Create New Job",
      jobList: "Job List",
      analytics: "Analytics",
      internalJobCode: "Internal Job Code*",
      externalJobTitle: "External Job Title*",
      internalJobTitle: "Internal Job Title*",
      jobCategory: "Job Category*",
      jobFamily: "Job Family*",
      jobLevel: "Job Level*",
      employmentType: "Employment Type*",
      workArrangement: "Work Arrangement*",
      urgencyLevel: "Urgency Level*",
      targetStartDate: "Target Start Date",
      applicationDeadline: "Application Deadline",
      minimumExperienceYears: "Minimum Experience (Years)*",
      maximumExperienceYears: "Maximum Experience (Years)",
      requiredEducationLevel: "Required Education Level*",
      requiredDegreeField: "Required Degree Field",
      jlptLevelRequired: "JLPT Level Required",
      culturalIntelligenceMin: "Minimum Cultural Intelligence",
      waHarmonyRequirement: "Wa (Harmony) Requirement",
      kaizenMindsetRequirement: "Kaizen Mindset Requirement",
      omotenashiServiceRequirement: "Omotenashi Service Requirement",
      communicationStylePref: "Communication Style Preference",
      hierarchyRespectRequirement: "Hierarchy Respect Requirement",
      teamCollaborationRequired: "Team Collaboration Required",
      crossCulturalExpRequired: "Cross-Cultural Experience Required",
      salaryRangeMinimum: "Minimum Salary*",
      salaryRangeMaximum: "Maximum Salary*",
      salaryCurrency: "Currency*",
      salaryNegotiable: "Salary Negotiable",
      performanceBonusPercent: "Performance Bonus %",
      stockOptionsAvailable: "Stock Options Available",
      visaSponsorshipAvailable: "Visa Sponsorship Available",
      relocationAssistance: "Relocation Assistance",
      jobDescription: "Job Description*",
      keyResponsibilities: "Key Responsibilities",
      successCriteria: "Success Criteria",
      careerGrowthPath: "Career Growth Path",
      teamStructure: "Team Structure",
      saveJob: "Save Job",
      publishJob: "Publish Job",
      cancel: "Cancel",
      status: "Status",
      applications: "Applications",
      qualified: "Qualified",
      culturalMatches: "Cultural Matches",
      daysActive: "Days Active",
      urgency: "Urgency",
      actions: "Actions"
    },
    ja: {
      title: "求人投稿管理",
      subtitle: "包括的求人投稿・管理システム",
      createNewJob: "新規求人作成",
      jobList: "求人一覧",
      analytics: "分析",
      internalJobCode: "内部求人コード*",
      externalJobTitle: "外部求人タイトル*",
      internalJobTitle: "内部求人タイトル*",
      jobCategory: "求人カテゴリ*",
      jobFamily: "求人ファミリー*",
      jobLevel: "求人レベル*",
      employmentType: "雇用形態*",
      workArrangement: "勤務形態*",
      urgencyLevel: "緊急度*",
      targetStartDate: "目標開始日",
      applicationDeadline: "応募締切日",
      minimumExperienceYears: "最低経験年数*",
      maximumExperienceYears: "最高経験年数",
      requiredEducationLevel: "必要学歴*",
      requiredDegreeField: "必要学位分野",
      jlptLevelRequired: "必要JLPT レベル",
      culturalIntelligenceMin: "最低文化知能",
      waHarmonyRequirement: "和（調和）要件",
      kaizenMindsetRequirement: "改善マインドセット要件",
      omotenashiServiceRequirement: "おもてなしサービス要件",
      communicationStylePref: "コミュニケーションスタイル嗜好",
      hierarchyRespectRequirement: "階層尊重要件",
      teamCollaborationRequired: "チーム協働要件",
      crossCulturalExpRequired: "異文化経験必須",
      salaryRangeMinimum: "最低給与*",
      salaryRangeMaximum: "最高給与*",
      salaryCurrency: "通貨*",
      salaryNegotiable: "給与交渉可能",
      performanceBonusPercent: "成果賞与%",
      stockOptionsAvailable: "ストックオプション有",
      visaSponsorshipAvailable: "ビザスポンサーシップ有",
      relocationAssistance: "転居支援",
      jobDescription: "求人説明*",
      keyResponsibilities: "主要責任",
      successCriteria: "成功基準",
      careerGrowthPath: "キャリア成長パス",
      teamStructure: "チーム構造",
      saveJob: "求人保存",
      publishJob: "求人公開",
      cancel: "キャンセル",
      status: "ステータス",
      applications: "応募",
      qualified: "適格",
      culturalMatches: "文化マッチ",
      daysActive: "アクティブ日数",
      urgency: "緊急度",
      actions: "アクション"
    }
  }

  const currentLabels = labels[language]

  const handleSaveJob = () => {
    console.log('Saving job:', jobForm)
    setCurrentView('list')
  }

  const handlePublishJob = () => {
    console.log('Publishing job:', jobForm)
    setCurrentView('list')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100'
      case 'paused': return 'text-yellow-600 bg-yellow-100'
      case 'draft': return 'text-gray-600 bg-gray-100'
      case 'filled': return 'text-blue-600 bg-blue-100'
      case 'cancelled': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'text-red-600 bg-red-100'
      case 'high': return 'text-orange-600 bg-orange-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const renderJobList = () => (
    <div className="sap-section">
      <div className="flex justify-between items-center mb-6">
        <h3 className="sap-heading">{currentLabels.jobList}</h3>
        <SAPButton
          variant="primary"
          onClick={() => setCurrentView('create')}
        >
          {currentLabels.createNewJob}
        </SAPButton>
      </div>

      <SAPCard>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Job Title</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.status}</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.applications}</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.qualified}</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.culturalMatches}</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.daysActive}</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.urgency}</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.actions}</th>
              </tr>
            </thead>
            <tbody>
              {jobList.map((job) => (
                <tr key={job.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{job.title}</div>
                    <div className="text-sm text-gray-500">ID: {job.id}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-900">{job.applications}</td>
                  <td className="py-3 px-4 text-gray-900">{job.qualifiedCandidates}</td>
                  <td className="py-3 px-4 text-gray-900">{job.culturalMatches}</td>
                  <td className="py-3 px-4 text-gray-900">{job.daysActive}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(job.urgency)}`}>
                      {job.urgency}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <SAPButton variant="ghost" size="sm" onClick={() => setCurrentView('edit')}>
                        Edit
                      </SAPButton>
                      <SAPButton variant="ghost" size="sm">
                        View
                      </SAPButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SAPCard>

      {/* Analytics Summary */}
      <div className="mt-8">
        <h4 className="sap-subheading mb-4">{currentLabels.analytics}</h4>
        <div className="sap-grid sap-grid-4 gap-4">
          <SAPCard>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4</div>
              <div className="text-sm text-gray-600">Total Jobs</div>
            </div>
          </SAPCard>
          <SAPCard>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">105</div>
              <div className="text-sm text-gray-600">Total Applications</div>
            </div>
          </SAPCard>
          <SAPCard>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">28</div>
              <div className="text-sm text-gray-600">Qualified Candidates</div>
            </div>
          </SAPCard>
          <SAPCard>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">19</div>
              <div className="text-sm text-gray-600">Cultural Matches</div>
            </div>
          </SAPCard>
        </div>
      </div>
    </div>
  )

  const renderJobForm = () => (
    <div className="sap-section">
      <div className="flex justify-between items-center mb-6">
        <h3 className="sap-heading">
          {currentView === 'create' ? currentLabels.createNewJob : 'Edit Job'}
        </h3>
        <SAPButton
          variant="ghost"
          onClick={() => setCurrentView('list')}
        >
          {currentLabels.cancel}
        </SAPButton>
      </div>

      <SAPCard>
        <div className="space-y-8">
          {/* Basic Information */}
          <div>
            <h4 className="sap-subheading mb-4">Basic Information</h4>
            <div className="sap-grid sap-grid-2 gap-6">
              <div>
                <label className="sap-label">{currentLabels.internalJobCode}</label>
                <SAPInput
                  value={jobForm.internalJobCode}
                  onChange={(e) => setJobForm({...jobForm, internalJobCode: e.target.value})}
                  placeholder="Enter internal job code"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.externalJobTitle}</label>
                <SAPInput
                  value={jobForm.externalJobTitle}
                  onChange={(e) => setJobForm({...jobForm, externalJobTitle: e.target.value})}
                  placeholder="Enter external job title"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.internalJobTitle}</label>
                <SAPInput
                  value={jobForm.internalJobTitle}
                  onChange={(e) => setJobForm({...jobForm, internalJobTitle: e.target.value})}
                  placeholder="Enter internal job title"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.jobCategory}</label>
                <SAPSelect
                  value={jobForm.jobCategory}
                  onChange={(e) => setJobForm({...jobForm, jobCategory: e.target.value as any})}
                  options={[
                    { value: 'engineering', label: 'Engineering' },
                    { value: 'design', label: 'Design' },
                    { value: 'marketing', label: 'Marketing' },
                    { value: 'sales', label: 'Sales' },
                    { value: 'operations', label: 'Operations' },
                    { value: 'hr', label: 'Human Resources' },
                    { value: 'finance', label: 'Finance' }
                  ]}
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.jobFamily}</label>
                <SAPSelect
                  value={jobForm.jobFamily}
                  onChange={(e) => setJobForm({...jobForm, jobFamily: e.target.value as any})}
                  options={[
                    { value: 'technical', label: 'Technical' },
                    { value: 'business', label: 'Business' },
                    { value: 'creative', label: 'Creative' },
                    { value: 'leadership', label: 'Leadership' }
                  ]}
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.jobLevel}</label>
                <SAPSelect
                  value={jobForm.jobLevel}
                  onChange={(e) => setJobForm({...jobForm, jobLevel: e.target.value as any})}
                  options={[
                    { value: 'entry', label: 'Entry Level' },
                    { value: 'junior', label: 'Junior' },
                    { value: 'mid', label: 'Mid Level' },
                    { value: 'senior', label: 'Senior' },
                    { value: 'principal', label: 'Principal' },
                    { value: 'executive', label: 'Executive' }
                  ]}
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.employmentType}</label>
                <SAPSelect
                  value={jobForm.employmentType}
                  onChange={(e) => setJobForm({...jobForm, employmentType: e.target.value as any})}
                  options={[
                    { value: 'full-time', label: 'Full-time' },
                    { value: 'part-time', label: 'Part-time' },
                    { value: 'contract', label: 'Contract' },
                    { value: 'internship', label: 'Internship' }
                  ]}
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.workArrangement}</label>
                <SAPSelect
                  value={jobForm.workArrangement}
                  onChange={(e) => setJobForm({...jobForm, workArrangement: e.target.value as any})}
                  options={[
                    { value: 'onsite', label: 'On-site' },
                    { value: 'remote', label: 'Remote' },
                    { value: 'hybrid', label: 'Hybrid' }
                  ]}
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.urgencyLevel}</label>
                <SAPSelect
                  value={jobForm.urgencyLevel}
                  onChange={(e) => setJobForm({...jobForm, urgencyLevel: e.target.value as any})}
                  options={[
                    { value: 'low', label: 'Low' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'high', label: 'High' },
                    { value: 'critical', label: 'Critical' }
                  ]}
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.targetStartDate}</label>
                <SAPInput
                  type="date"
                  value={jobForm.targetStartDate || ''}
                  onChange={(e) => setJobForm({...jobForm, targetStartDate: e.target.value})}
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.applicationDeadline}</label>
                <SAPInput
                  type="date"
                  value={jobForm.applicationDeadline || ''}
                  onChange={(e) => setJobForm({...jobForm, applicationDeadline: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="sap-subheading mb-4">Requirements</h4>
            <div className="sap-grid sap-grid-2 gap-6">
              <div>
                <label className="sap-label">{currentLabels.minimumExperienceYears}</label>
                <SAPInput
                  type="number"
                  value={jobForm.minimumExperienceYears}
                  onChange={(e) => setJobForm({...jobForm, minimumExperienceYears: parseInt(e.target.value)})}
                  placeholder="Enter minimum years"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.maximumExperienceYears}</label>
                <SAPInput
                  type="number"
                  value={jobForm.maximumExperienceYears || ''}
                  onChange={(e) => setJobForm({...jobForm, maximumExperienceYears: parseInt(e.target.value)})}
                  placeholder="Enter maximum years"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.requiredEducationLevel}</label>
                <SAPSelect
                  value={jobForm.requiredEducationLevel}
                  onChange={(e) => setJobForm({...jobForm, requiredEducationLevel: e.target.value as any})}
                  options={[
                    { value: 'high_school', label: 'High School' },
                    { value: 'bachelors', label: 'Bachelor\'s Degree' },
                    { value: 'masters', label: 'Master\'s Degree' },
                    { value: 'phd', label: 'PhD' }
                  ]}
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.requiredDegreeField}</label>
                <SAPInput
                  value={jobForm.requiredDegreeField || ''}
                  onChange={(e) => setJobForm({...jobForm, requiredDegreeField: e.target.value})}
                  placeholder="Enter required degree field"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.jlptLevelRequired}</label>
                <SAPSelect
                  value={jobForm.jlptLevelRequired || ''}
                  onChange={(e) => setJobForm({...jobForm, jlptLevelRequired: e.target.value as any})}
                  options={[
                    { value: '', label: 'Not Required' },
                    { value: 'N5', label: 'JLPT N5' },
                    { value: 'N4', label: 'JLPT N4' },
                    { value: 'N3', label: 'JLPT N3' },
                    { value: 'N2', label: 'JLPT N2' },
                    { value: 'N1', label: 'JLPT N1' }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Cultural Requirements */}
          <div>
            <h4 className="sap-subheading mb-4">Cultural Requirements (aiKODA Unique)</h4>
            <div className="sap-grid sap-grid-2 gap-6">
              <div>
                <label className="sap-label">{currentLabels.culturalIntelligenceMin} ({jobForm.culturalIntelligenceMin || 0}%)</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={jobForm.culturalIntelligenceMin || 0}
                  onChange={(e) => setJobForm({...jobForm, culturalIntelligenceMin: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.waHarmonyRequirement} ({jobForm.waHarmonyRequirement || 0}%)</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={jobForm.waHarmonyRequirement || 0}
                  onChange={(e) => setJobForm({...jobForm, waHarmonyRequirement: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.kaizenMindsetRequirement} ({jobForm.kaizenMindsetRequirement || 0}%)</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={jobForm.kaizenMindsetRequirement || 0}
                  onChange={(e) => setJobForm({...jobForm, kaizenMindsetRequirement: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.omotenashiServiceRequirement} ({jobForm.omotenashiServiceRequirement || 0}%)</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={jobForm.omotenashiServiceRequirement || 0}
                  onChange={(e) => setJobForm({...jobForm, omotenashiServiceRequirement: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.communicationStylePref}</label>
                <SAPSelect
                  value={jobForm.communicationStylePref || ''}
                  onChange={(e) => setJobForm({...jobForm, communicationStylePref: e.target.value as any})}
                  options={[
                    { value: '', label: 'No Preference' },
                    { value: 'direct', label: 'Direct' },
                    { value: 'indirect', label: 'Indirect' },
                    { value: 'contextual', label: 'Contextual' }
                  ]}
                />
              </div>
              
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={jobForm.crossCulturalExpRequired}
                    onChange={(e) => setJobForm({...jobForm, crossCulturalExpRequired: e.target.checked})}
                    className="rounded border-gray-300"
                  />
                  <span className="sap-label">{currentLabels.crossCulturalExpRequired}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Compensation */}
          <div>
            <h4 className="sap-subheading mb-4">Compensation & Benefits</h4>
            <div className="sap-grid sap-grid-2 gap-6">
              <div>
                <label className="sap-label">{currentLabels.salaryRangeMinimum}</label>
                <SAPInput
                  type="number"
                  value={jobForm.salaryRangeMinimum}
                  onChange={(e) => setJobForm({...jobForm, salaryRangeMinimum: parseInt(e.target.value)})}
                  placeholder="Enter minimum salary"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.salaryRangeMaximum}</label>
                <SAPInput
                  type="number"
                  value={jobForm.salaryRangeMaximum}
                  onChange={(e) => setJobForm({...jobForm, salaryRangeMaximum: parseInt(e.target.value)})}
                  placeholder="Enter maximum salary"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.salaryCurrency}</label>
                <SAPSelect
                  value={jobForm.salaryCurrency}
                  onChange={(e) => setJobForm({...jobForm, salaryCurrency: e.target.value as any})}
                  options={[
                    { value: 'JPY', label: 'Japanese Yen (JPY)' },
                    { value: 'USD', label: 'US Dollar (USD)' },
                    { value: 'EUR', label: 'Euro (EUR)' }
                  ]}
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.performanceBonusPercent}</label>
                <SAPInput
                  type="number"
                  value={jobForm.performanceBonusPercent || ''}
                  onChange={(e) => setJobForm({...jobForm, performanceBonusPercent: parseInt(e.target.value)})}
                  placeholder="Enter bonus percentage"
                />
              </div>
              
              <div className="col-span-2">
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={jobForm.salaryNegotiable}
                      onChange={(e) => setJobForm({...jobForm, salaryNegotiable: e.target.checked})}
                      className="rounded border-gray-300"
                    />
                    <span className="sap-label">{currentLabels.salaryNegotiable}</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={jobForm.stockOptionsAvailable}
                      onChange={(e) => setJobForm({...jobForm, stockOptionsAvailable: e.target.checked})}
                      className="rounded border-gray-300"
                    />
                    <span className="sap-label">{currentLabels.stockOptionsAvailable}</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={jobForm.visaSponsorshipAvailable}
                      onChange={(e) => setJobForm({...jobForm, visaSponsorshipAvailable: e.target.checked})}
                      className="rounded border-gray-300"
                    />
                    <span className="sap-label">{currentLabels.visaSponsorshipAvailable}</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={jobForm.relocationAssistance}
                      onChange={(e) => setJobForm({...jobForm, relocationAssistance: e.target.checked})}
                      className="rounded border-gray-300"
                    />
                    <span className="sap-label">{currentLabels.relocationAssistance}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h4 className="sap-subheading mb-4">Job Description</h4>
            <div className="space-y-4">
              <div>
                <label className="sap-label">{currentLabels.jobDescription}</label>
                <textarea
                  className="sap-input min-h-[120px]"
                  value={jobForm.jobDescription}
                  onChange={(e) => setJobForm({...jobForm, jobDescription: e.target.value})}
                  placeholder="Enter detailed job description"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.keyResponsibilities}</label>
                <textarea
                  className="sap-input min-h-[100px]"
                  value={jobForm.keyResponsibilities.join('\n')}
                  onChange={(e) => setJobForm({...jobForm, keyResponsibilities: e.target.value.split('\n').filter(r => r.trim())})}
                  placeholder="Enter key responsibilities (one per line)"
                />
              </div>
              
              <div>
                <label className="sap-label">{currentLabels.careerGrowthPath}</label>
                <textarea
                  className="sap-input min-h-[80px]"
                  value={jobForm.careerGrowthPath}
                  onChange={(e) => setJobForm({...jobForm, careerGrowthPath: e.target.value})}
                  placeholder="Describe career growth opportunities"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
          <SAPButton
            variant="ghost"
            onClick={() => setCurrentView('list')}
          >
            {currentLabels.cancel}
          </SAPButton>
          <SAPButton
            variant="secondary"
            onClick={handleSaveJob}
          >
            {currentLabels.saveJob}
          </SAPButton>
          <SAPButton
            variant="primary"
            onClick={handlePublishJob}
          >
            {currentLabels.publishJob}
          </SAPButton>
        </div>
      </SAPCard>
    </div>
  )

  return (
    <div className="sap-container">
      <div className="mb-8">
        <h2 className="sap-title">{currentLabels.title}</h2>
        <p className="sap-body text-gray-600">{currentLabels.subtitle}</p>
      </div>

      {currentView === 'list' ? renderJobList() : renderJobForm()}
    </div>
  )
}

