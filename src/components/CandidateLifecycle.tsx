'use client'
import React, { useState } from 'react'
import { SAPCard, SAPButton, SAPSelect } from '@/components/SAP'

interface CandidateWorkflow {
  candidateId: string
  candidateName: string
  email: string
  nationality: string
  currentPosition: string
  culturalIntelligenceScore: number
  japaneseBusinessReadiness: number
  
  // Workflow stages
  applicationStage: WorkflowStage
  screeningStage: WorkflowStage
  culturalAssessmentStage: WorkflowStage
  clientMatchingStage: WorkflowStage
  interviewStage: WorkflowStage
  offerStage: WorkflowStage
  onboardingStage: WorkflowStage
  placementStage: WorkflowStage
  
  // Current status
  currentStage: 'application' | 'screening' | 'cultural_assessment' | 'client_matching' | 'interview' | 'offer' | 'onboarding' | 'placement' | 'completed' | 'rejected'
  overallProgress: number
  estimatedCompletionDate: string
  assignedRecruiter: string
  priority: 'low' | 'medium' | 'high' | 'urgent'
  
  // Cultural integration tracking
  culturalTrainingProgress: number
  languageAssessmentScore: number
  businessEtiquetteScore: number
  teamIntegrationScore: number
  
  // Client matching
  matchedClients: Array<{
    clientId: string
    clientName: string
    matchScore: number
    culturalFit: number
    skillsMatch: number
    salaryMatch: number
    status: 'pending' | 'interested' | 'interview_scheduled' | 'rejected' | 'offer_made'
  }>
  
  // Timeline
  timeline: Array<{
    date: string
    stage: string
    action: string
    status: 'completed' | 'in_progress' | 'pending' | 'failed'
    notes?: string
    assignedTo?: string
  }>
}

interface WorkflowStage {
  status: 'not_started' | 'in_progress' | 'completed' | 'failed' | 'skipped'
  startDate?: string
  completionDate?: string
  duration?: number
  assignedTo?: string
  notes?: string
  score?: number
  requirements: string[]
  deliverables: string[]
}

export default function CandidateLifecycle() {
  const [language, setLanguage] = useState<'en' | 'ja'>('en')
  const [selectedCandidate, setSelectedCandidate] = useState<string>('')
  const [viewMode, setViewMode] = useState<'overview' | 'detailed' | 'timeline'>('overview')
  const [filterStage, setFilterStage] = useState<string>('all')
  const [filterPriority, setFilterPriority] = useState<string>('all')

  // Mock candidate workflow data
  const [candidateWorkflows] = useState<CandidateWorkflow[]>([
    {
      candidateId: 'C001',
      candidateName: 'Taro Yamada',
      email: 'taro.yamada@example.com',
      nationality: 'Japanese',
      currentPosition: 'Senior Software Engineer',
      culturalIntelligenceScore: 85,
      japaneseBusinessReadiness: 92,
      
      applicationStage: {
        status: 'completed',
        startDate: '2024-01-15',
        completionDate: '2024-01-15',
        duration: 1,
        assignedTo: 'System',
        score: 95,
        requirements: ['Complete application form', 'Upload resume', 'Cultural preferences'],
        deliverables: ['Application form', 'Resume', 'Cover letter']
      },
      
      screeningStage: {
        status: 'completed',
        startDate: '2024-01-16',
        completionDate: '2024-01-18',
        duration: 2,
        assignedTo: 'Sarah Johnson',
        score: 88,
        requirements: ['Resume review', 'Initial phone screening', 'Skills assessment'],
        deliverables: ['Screening report', 'Skills evaluation', 'Recommendation']
      },
      
      culturalAssessmentStage: {
        status: 'completed',
        startDate: '2024-01-19',
        completionDate: '2024-01-22',
        duration: 3,
        assignedTo: 'Cultural Assessment Team',
        score: 85,
        requirements: ['Cultural intelligence test', 'Japanese business knowledge', 'Communication style assessment'],
        deliverables: ['Cultural profile', 'Assessment report', 'Integration recommendations']
      },
      
      clientMatchingStage: {
        status: 'in_progress',
        startDate: '2024-01-23',
        assignedTo: 'Matching Algorithm + Recruiter',
        requirements: ['Client requirements analysis', 'Cultural fit scoring', 'Skills matching'],
        deliverables: ['Match recommendations', 'Client presentations', 'Interview scheduling']
      },
      
      interviewStage: {
        status: 'not_started',
        requirements: ['Client interviews', 'Technical assessment', 'Cultural fit interview'],
        deliverables: ['Interview feedback', 'Technical evaluation', 'Cultural assessment']
      },
      
      offerStage: {
        status: 'not_started',
        requirements: ['Salary negotiation', 'Contract terms', 'Cultural integration plan'],
        deliverables: ['Offer letter', 'Contract', 'Integration timeline']
      },
      
      onboardingStage: {
        status: 'not_started',
        requirements: ['Cultural orientation', 'Company introduction', 'Team integration'],
        deliverables: ['Onboarding plan', 'Cultural training', 'Mentor assignment']
      },
      
      placementStage: {
        status: 'not_started',
        requirements: ['Successful placement', 'Initial performance review', 'Cultural adaptation'],
        deliverables: ['Placement confirmation', 'Performance report', 'Adaptation assessment']
      },
      
      currentStage: 'client_matching',
      overallProgress: 45,
      estimatedCompletionDate: '2024-02-15',
      assignedRecruiter: 'Sarah Johnson',
      priority: 'high',
      
      culturalTrainingProgress: 75,
      languageAssessmentScore: 88,
      businessEtiquetteScore: 92,
      teamIntegrationScore: 0,
      
      matchedClients: [
        {
          clientId: 'CL001',
          clientName: 'TechCorp Japan',
          matchScore: 92,
          culturalFit: 88,
          skillsMatch: 95,
          salaryMatch: 90,
          status: 'interested'
        },
        {
          clientId: 'CL002',
          clientName: 'Innovation Labs',
          matchScore: 87,
          culturalFit: 85,
          skillsMatch: 90,
          salaryMatch: 85,
          status: 'pending'
        }
      ],
      
      timeline: [
        {
          date: '2024-01-15',
          stage: 'Application',
          action: 'Application submitted',
          status: 'completed',
          notes: 'Complete application with all required documents'
        },
        {
          date: '2024-01-16',
          stage: 'Screening',
          action: 'Initial screening started',
          status: 'completed',
          assignedTo: 'Sarah Johnson'
        },
        {
          date: '2024-01-18',
          stage: 'Screening',
          action: 'Screening completed',
          status: 'completed',
          notes: 'Excellent technical skills, strong cultural awareness'
        },
        {
          date: '2024-01-19',
          stage: 'Cultural Assessment',
          action: 'Cultural assessment started',
          status: 'completed',
          assignedTo: 'Cultural Assessment Team'
        },
        {
          date: '2024-01-22',
          stage: 'Cultural Assessment',
          action: 'Assessment completed',
          status: 'completed',
          notes: 'High cultural intelligence score, ready for Japanese business environment'
        },
        {
          date: '2024-01-23',
          stage: 'Client Matching',
          action: 'Client matching in progress',
          status: 'in_progress',
          assignedTo: 'Sarah Johnson'
        }
      ]
    },
    {
      candidateId: 'C002',
      candidateName: 'Maria Rodriguez',
      email: 'maria.rodriguez@example.com',
      nationality: 'Spanish',
      currentPosition: 'Product Manager',
      culturalIntelligenceScore: 78,
      japaneseBusinessReadiness: 65,
      
      applicationStage: {
        status: 'completed',
        startDate: '2024-01-20',
        completionDate: '2024-01-20',
        duration: 1,
        assignedTo: 'System',
        score: 90,
        requirements: ['Complete application form', 'Upload resume', 'Cultural preferences'],
        deliverables: ['Application form', 'Resume', 'Cover letter']
      },
      
      screeningStage: {
        status: 'completed',
        startDate: '2024-01-21',
        completionDate: '2024-01-23',
        duration: 2,
        assignedTo: 'Mike Chen',
        score: 82,
        requirements: ['Resume review', 'Initial phone screening', 'Skills assessment'],
        deliverables: ['Screening report', 'Skills evaluation', 'Recommendation']
      },
      
      culturalAssessmentStage: {
        status: 'in_progress',
        startDate: '2024-01-24',
        assignedTo: 'Cultural Assessment Team',
        requirements: ['Cultural intelligence test', 'Japanese business knowledge', 'Communication style assessment'],
        deliverables: ['Cultural profile', 'Assessment report', 'Integration recommendations']
      },
      
      clientMatchingStage: {
        status: 'not_started',
        requirements: ['Client requirements analysis', 'Cultural fit scoring', 'Skills matching'],
        deliverables: ['Match recommendations', 'Client presentations', 'Interview scheduling']
      },
      
      interviewStage: {
        status: 'not_started',
        requirements: ['Client interviews', 'Technical assessment', 'Cultural fit interview'],
        deliverables: ['Interview feedback', 'Technical evaluation', 'Cultural assessment']
      },
      
      offerStage: {
        status: 'not_started',
        requirements: ['Salary negotiation', 'Contract terms', 'Cultural integration plan'],
        deliverables: ['Offer letter', 'Contract', 'Integration timeline']
      },
      
      onboardingStage: {
        status: 'not_started',
        requirements: ['Cultural orientation', 'Company introduction', 'Team integration'],
        deliverables: ['Onboarding plan', 'Cultural training', 'Mentor assignment']
      },
      
      placementStage: {
        status: 'not_started',
        requirements: ['Successful placement', 'Initial performance review', 'Cultural adaptation'],
        deliverables: ['Placement confirmation', 'Performance report', 'Adaptation assessment']
      },
      
      currentStage: 'cultural_assessment',
      overallProgress: 25,
      estimatedCompletionDate: '2024-02-28',
      assignedRecruiter: 'Mike Chen',
      priority: 'medium',
      
      culturalTrainingProgress: 40,
      languageAssessmentScore: 72,
      businessEtiquetteScore: 68,
      teamIntegrationScore: 0,
      
      matchedClients: [],
      
      timeline: [
        {
          date: '2024-01-20',
          stage: 'Application',
          action: 'Application submitted',
          status: 'completed',
          notes: 'International experience, strong product management background'
        },
        {
          date: '2024-01-21',
          stage: 'Screening',
          action: 'Initial screening started',
          status: 'completed',
          assignedTo: 'Mike Chen'
        },
        {
          date: '2024-01-23',
          stage: 'Screening',
          action: 'Screening completed',
          status: 'completed',
          notes: 'Good technical skills, needs cultural training'
        },
        {
          date: '2024-01-24',
          stage: 'Cultural Assessment',
          action: 'Cultural assessment started',
          status: 'in_progress',
          assignedTo: 'Cultural Assessment Team'
        }
      ]
    }
  ])

  const labels = {
    en: {
      title: "Candidate Lifecycle Management",
      subtitle: "Complete Candidate Journey Tracking",
      overview: "Overview",
      detailed: "Detailed View",
      timeline: "Timeline",
      candidateSelection: "Select Candidate",
      currentStage: "Current Stage",
      overallProgress: "Overall Progress",
      estimatedCompletion: "Estimated Completion",
      assignedRecruiter: "Assigned Recruiter",
      priority: "Priority",
      culturalScores: "Cultural Scores",
      culturalIntelligence: "Cultural Intelligence",
      japaneseBusinessReadiness: "Japanese Business Readiness",
      culturalTrainingProgress: "Cultural Training Progress",
      languageAssessment: "Language Assessment",
      businessEtiquette: "Business Etiquette",
      teamIntegration: "Team Integration",
      workflowStages: "Workflow Stages",
      application: "Application",
      screening: "Screening",
      culturalAssessment: "Cultural Assessment",
      clientMatching: "Client Matching",
      interview: "Interview",
      offer: "Offer",
      onboarding: "Onboarding",
      placement: "Placement",
      matchedClients: "Matched Clients",
      clientName: "Client Name",
      matchScore: "Match Score",
      culturalFit: "Cultural Fit",
      skillsMatch: "Skills Match",
      salaryMatch: "Salary Match",
      status: "Status",
      actions: "Actions",
      viewDetails: "View Details",
      scheduleInterview: "Schedule Interview",
      timelineEvents: "Timeline Events",
      date: "Date",
      stage: "Stage",
      action: "Action",
      notes: "Notes",
      assignedTo: "Assigned To",
      requirements: "Requirements",
      deliverables: "Deliverables",
      duration: "Duration",
      score: "Score",
      notStarted: "Not Started",
      inProgress: "In Progress",
      completed: "Completed",
      failed: "Failed",
      skipped: "Skipped"
    },
    ja: {
      title: "候補者ライフサイクル管理",
      subtitle: "完全な候補者ジャーニー追跡",
      overview: "概要",
      detailed: "詳細表示",
      timeline: "タイムライン",
      candidateSelection: "候補者選択",
      currentStage: "現在のステージ",
      overallProgress: "全体進捗",
      estimatedCompletion: "完了予定",
      assignedRecruiter: "担当リクルーター",
      priority: "優先度",
      culturalScores: "文化スコア",
      culturalIntelligence: "文化知能",
      japaneseBusinessReadiness: "日本ビジネス準備度",
      culturalTrainingProgress: "文化研修進捗",
      languageAssessment: "言語評価",
      businessEtiquette: "ビジネスエチケット",
      teamIntegration: "チーム統合",
      workflowStages: "ワークフローステージ",
      application: "応募",
      screening: "スクリーニング",
      culturalAssessment: "文化評価",
      clientMatching: "クライアントマッチング",
      interview: "面接",
      offer: "オファー",
      onboarding: "オンボーディング",
      placement: "配置",
      matchedClients: "マッチしたクライアント",
      clientName: "クライアント名",
      matchScore: "マッチスコア",
      culturalFit: "文化適合",
      skillsMatch: "スキルマッチ",
      salaryMatch: "給与マッチ",
      status: "ステータス",
      actions: "アクション",
      viewDetails: "詳細表示",
      scheduleInterview: "面接スケジュール",
      timelineEvents: "タイムラインイベント",
      date: "日付",
      stage: "ステージ",
      action: "アクション",
      notes: "ノート",
      assignedTo: "担当者",
      requirements: "要件",
      deliverables: "成果物",
      duration: "期間",
      score: "スコア",
      notStarted: "未開始",
      inProgress: "進行中",
      completed: "完了",
      failed: "失敗",
      skipped: "スキップ"
    }
  }

  const currentLabels = labels[language]

  const getStageStatus = (stage: WorkflowStage) => {
    switch (stage.status) {
      case 'completed': return { color: 'text-green-600 bg-green-100', label: currentLabels.completed }
      case 'in_progress': return { color: 'text-blue-600 bg-blue-100', label: currentLabels.inProgress }
      case 'failed': return { color: 'text-red-600 bg-red-100', label: currentLabels.failed }
      case 'skipped': return { color: 'text-gray-600 bg-gray-100', label: currentLabels.skipped }
      default: return { color: 'text-gray-600 bg-gray-100', label: currentLabels.notStarted }
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-100'
      case 'high': return 'text-orange-600 bg-orange-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const selectedCandidateData = candidateWorkflows.find(c => c.candidateId === selectedCandidate) || candidateWorkflows[0]

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Candidate Summary */}
      <SAPCard>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="sap-heading">{selectedCandidateData.candidateName}</h3>
            <p className="text-gray-600">{selectedCandidateData.currentPosition}</p>
            <p className="text-sm text-gray-500">{selectedCandidateData.email}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-gray-500">{currentLabels.priority}:</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedCandidateData.priority)}`}>
                {selectedCandidateData.priority}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {currentLabels.assignedRecruiter}: {selectedCandidateData.assignedRecruiter}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{selectedCandidateData.overallProgress}%</div>
            <div className="text-sm text-gray-600">{currentLabels.overallProgress}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{selectedCandidateData.culturalIntelligenceScore}</div>
            <div className="text-sm text-gray-600">{currentLabels.culturalIntelligence}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{selectedCandidateData.japaneseBusinessReadiness}</div>
            <div className="text-sm text-gray-600">{currentLabels.japaneseBusinessReadiness}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{selectedCandidateData.matchedClients.length}</div>
            <div className="text-sm text-gray-600">{currentLabels.matchedClients}</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>{currentLabels.overallProgress}</span>
            <span>{selectedCandidateData.overallProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${selectedCandidateData.overallProgress}%` }}
            ></div>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          {currentLabels.estimatedCompletion}: {selectedCandidateData.estimatedCompletionDate}
        </div>
      </SAPCard>

      {/* Workflow Stages */}
      <SAPCard>
        <h4 className="sap-subheading mb-4">{currentLabels.workflowStages}</h4>
        
        <div className="space-y-4">
          {[
            { key: 'applicationStage', label: currentLabels.application },
            { key: 'screeningStage', label: currentLabels.screening },
            { key: 'culturalAssessmentStage', label: currentLabels.culturalAssessment },
            { key: 'clientMatchingStage', label: currentLabels.clientMatching },
            { key: 'interviewStage', label: currentLabels.interview },
            { key: 'offerStage', label: currentLabels.offer },
            { key: 'onboardingStage', label: currentLabels.onboarding },
            { key: 'placementStage', label: currentLabels.placement }
          ].map((stage, idx) => {
            const stageData = selectedCandidateData[stage.key as keyof CandidateWorkflow] as WorkflowStage
            const statusInfo = getStageStatus(stageData)
            
            return (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    stageData.status === 'completed' ? 'bg-green-600 text-white' :
                    stageData.status === 'in_progress' ? 'bg-blue-600 text-white' :
                    'bg-gray-300 text-gray-600'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-medium">{stage.label}</div>
                    {stageData.assignedTo && (
                      <div className="text-sm text-gray-500">{currentLabels.assignedTo}: {stageData.assignedTo}</div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {stageData.score && (
                    <div className="text-right">
                      <div className="font-medium">{stageData.score}%</div>
                      <div className="text-xs text-gray-500">{currentLabels.score}</div>
                    </div>
                  )}
                  {stageData.duration && (
                    <div className="text-right">
                      <div className="font-medium">{stageData.duration}d</div>
                      <div className="text-xs text-gray-500">{currentLabels.duration}</div>
                    </div>
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
                    {statusInfo.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </SAPCard>

      {/* Cultural Scores */}
      <SAPCard>
        <h4 className="sap-subheading mb-4">{currentLabels.culturalScores}</h4>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>{currentLabels.culturalTrainingProgress}</span>
              <span>{selectedCandidateData.culturalTrainingProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${selectedCandidateData.culturalTrainingProgress}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>{currentLabels.languageAssessment}</span>
              <span>{selectedCandidateData.languageAssessmentScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${selectedCandidateData.languageAssessmentScore}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>{currentLabels.businessEtiquette}</span>
              <span>{selectedCandidateData.businessEtiquetteScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-500 h-2 rounded-full"
                style={{ width: `${selectedCandidateData.businessEtiquetteScore}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>{currentLabels.teamIntegration}</span>
              <span>{selectedCandidateData.teamIntegrationScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: `${selectedCandidateData.teamIntegrationScore}%` }}
              ></div>
            </div>
          </div>
        </div>
      </SAPCard>

      {/* Matched Clients */}
      {selectedCandidateData.matchedClients.length > 0 && (
        <SAPCard>
          <h4 className="sap-subheading mb-4">{currentLabels.matchedClients}</h4>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.clientName}</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.matchScore}</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.culturalFit}</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.skillsMatch}</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.status}</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">{currentLabels.actions}</th>
                </tr>
              </thead>
              <tbody>
                {selectedCandidateData.matchedClients.map((client, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{client.clientName}</td>
                    <td className="py-3 px-4">{client.matchScore}%</td>
                    <td className="py-3 px-4">{client.culturalFit}%</td>
                    <td className="py-3 px-4">{client.skillsMatch}%</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {client.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <SAPButton variant="ghost" size="sm">
                          {currentLabels.viewDetails}
                        </SAPButton>
                        <SAPButton variant="ghost" size="sm">
                          {currentLabels.scheduleInterview}
                        </SAPButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SAPCard>
      )}
    </div>
  )

  const renderTimeline = () => (
    <SAPCard>
      <h4 className="sap-subheading mb-4">{currentLabels.timelineEvents}</h4>
      
      <div className="space-y-4">
        {selectedCandidateData.timeline.map((event, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className={`w-3 h-3 rounded-full mt-2 ${
              event.status === 'completed' ? 'bg-green-500' :
              event.status === 'in_progress' ? 'bg-blue-500' :
              event.status === 'failed' ? 'bg-red-500' :
              'bg-gray-300'
            }`}></div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{event.action}</div>
                  <div className="text-sm text-gray-600">{event.stage}</div>
                  {event.notes && (
                    <div className="text-sm text-gray-500 mt-1">{event.notes}</div>
                  )}
                  {event.assignedTo && (
                    <div className="text-xs text-gray-400 mt-1">
                      {currentLabels.assignedTo}: {event.assignedTo}
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-500">{event.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SAPCard>
  )

  return (
    <div className="sap-container">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="sap-title">{currentLabels.title}</h2>
            <p className="sap-body text-gray-600">{currentLabels.subtitle}</p>
          </div>
          
          <div className="flex space-x-4">
            <SAPSelect
              value={selectedCandidate || candidateWorkflows[0].candidateId}
              onChange={(e) => setSelectedCandidate(e.target.value)}
              options={candidateWorkflows.map(c => ({
                value: c.candidateId,
                label: c.candidateName
              }))}
            />
            
            <SAPSelect
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value as any)}
              options={[
                { value: 'overview', label: currentLabels.overview },
                { value: 'detailed', label: currentLabels.detailed },
                { value: 'timeline', label: currentLabels.timeline }
              ]}
            />
          </div>
        </div>
        
        {/* View Mode Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { key: 'overview', label: currentLabels.overview },
            { key: 'detailed', label: currentLabels.detailed },
            { key: 'timeline', label: currentLabels.timeline }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setViewMode(tab.key as any)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === tab.key
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {viewMode === 'overview' && renderOverview()}
      {viewMode === 'timeline' && renderTimeline()}
      {viewMode === 'detailed' && renderOverview()}
    </div>
  )
}

