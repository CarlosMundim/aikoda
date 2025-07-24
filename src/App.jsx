import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Brain, 
  Globe, 
  Award,
  BarChart3,
  UserCheck,
  Building,
  MapPin,
  Calendar,
  Star,
  Target,
  Zap,
  Heart,
  Shield,
  CheckCircle
} from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en')
  }

  const text = {
    en: {
      title: 'iWORKZ Cultural Intelligence Platform',
      subtitle: 'Revolutionizing Talent Management in Japan',
      dashboard: 'Dashboard',
      candidates: 'Candidates',
      companies: 'Companies',
      jobs: 'Jobs',
      analytics: 'Analytics',
      totalCandidates: 'Total Candidates',
      activeJobs: 'Active Jobs',
      successfulMatches: 'Successful Matches',
      culturalFitScore: 'Cultural Fit Score',
      recentRegistrations: 'Recent Candidate Registrations',
      topCompanies: 'Top Companies',
      culturalIntelligence: 'Cultural Intelligence Assessment',
      aiMatching: 'AI-Powered Matching',
      performanceMetrics: 'Performance Metrics',
      candidateRegistration: 'Candidate Registration',
      companyRegistration: 'Company Registration',
      jobPosting: 'Job Posting',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      experience: 'Years of Experience',
      skills: 'Skills',
      culturalAdaptability: 'Cultural Adaptability',
      communicationStyle: 'Communication Style',
      teamwork: 'Teamwork Preference',
      register: 'Register',
      companyName: 'Company Name',
      industry: 'Industry',
      size: 'Company Size',
      description: 'Description',
      jobTitle: 'Job Title',
      department: 'Department',
      requirements: 'Requirements',
      benefits: 'Benefits',
      postJob: 'Post Job',
      viewProfile: 'View Profile',
      schedule: 'Schedule Interview',
      excellent: 'Excellent',
      good: 'Good',
      average: 'Average',
      direct: 'Direct',
      collaborative: 'Collaborative',
      independent: 'Independent',
      team: 'Team-oriented'
    },
    ja: {
      title: 'iWORKZ 文化的知能プラットフォーム',
      subtitle: '日本の人材管理を革新する',
      dashboard: 'ダッシュボード',
      candidates: '候補者',
      companies: '企業',
      jobs: '求人',
      analytics: '分析',
      totalCandidates: '総候補者数',
      activeJobs: 'アクティブな求人',
      successfulMatches: '成功したマッチング',
      culturalFitScore: '文化的適合スコア',
      recentRegistrations: '最近の候補者登録',
      topCompanies: 'トップ企業',
      culturalIntelligence: '文化的知能評価',
      aiMatching: 'AI駆動マッチング',
      performanceMetrics: 'パフォーマンス指標',
      candidateRegistration: '候補者登録',
      companyRegistration: '企業登録',
      jobPosting: '求人投稿',
      firstName: '名',
      lastName: '姓',
      email: 'メール',
      phone: '電話',
      location: '所在地',
      experience: '経験年数',
      skills: 'スキル',
      culturalAdaptability: '文化的適応性',
      communicationStyle: 'コミュニケーションスタイル',
      teamwork: 'チームワーク志向',
      register: '登録',
      companyName: '会社名',
      industry: '業界',
      size: '会社規模',
      description: '説明',
      jobTitle: '職種',
      department: '部署',
      requirements: '要件',
      benefits: '福利厚生',
      postJob: '求人投稿',
      viewProfile: 'プロフィール表示',
      schedule: '面接予約',
      excellent: '優秀',
      good: '良好',
      average: '平均',
      direct: '直接的',
      collaborative: '協調的',
      independent: '独立的',
      team: 'チーム志向'
    }
  }

  const t = text[language]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-900">{t.title}</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="font-medium"
              >
                {language === 'en' ? '日本語' : 'English'}
              </Button>
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">U</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.subtitle}</h2>
          <p className="text-gray-600">
            {language === 'en' 
              ? 'Advanced AI-powered cultural intelligence platform for seamless talent integration in Japan'
              : '日本でのシームレスな人材統合のための高度なAI駆動文化的知能プラットフォーム'
            }
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">{t.dashboard}</TabsTrigger>
            <TabsTrigger value="candidates">{t.candidates}</TabsTrigger>
            <TabsTrigger value="companies">{t.companies}</TabsTrigger>
            <TabsTrigger value="jobs">{t.jobs}</TabsTrigger>
            <TabsTrigger value="analytics">{t.analytics}</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.totalCandidates}</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,247</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.activeJobs}</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">+5 new this week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.successfulMatches}</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">342</div>
                  <p className="text-xs text-muted-foreground">87% success rate</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.culturalFitScore}</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94%</div>
                  <p className="text-xs text-muted-foreground">+2% improvement</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t.recentRegistrations}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'Tanaka Hiroshi', role: 'Software Engineer', fit: 92 },
                    { name: 'Smith John', role: 'Product Manager', fit: 88 },
                    { name: 'Yamada Yuki', role: 'Designer', fit: 95 },
                    { name: 'Johnson Sarah', role: 'Data Analyst', fit: 91 }
                  ].map((candidate, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-sm font-medium">
                            {candidate.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{candidate.name}</p>
                          <p className="text-xs text-gray-500">{candidate.role}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">{candidate.fit}% fit</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t.topCompanies}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'Tech Solutions Inc.', jobs: 12, matches: 45 },
                    { name: 'Global Dynamics', jobs: 8, matches: 32 },
                    { name: 'Innovation Labs', jobs: 15, matches: 58 },
                    { name: 'Future Systems', jobs: 6, matches: 23 }
                  ].map((company, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Building className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">{company.name}</p>
                          <p className="text-xs text-gray-500">{company.jobs} active jobs</p>
                        </div>
                      </div>
                      <Badge>{company.matches} matches</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Candidates Tab */}
          <TabsContent value="candidates" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t.candidateRegistration}</CardTitle>
                  <CardDescription>Register new candidates for cultural intelligence assessment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{t.firstName}</Label>
                      <Input id="firstName" placeholder="Enter first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{t.lastName}</Label>
                      <Input id="lastName" placeholder="Enter last name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">{t.email}</Label>
                    <Input id="email" type="email" placeholder="Enter email address" />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                  <div>
                    <Label htmlFor="location">{t.location}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tokyo">Tokyo</SelectItem>
                        <SelectItem value="osaka">Osaka</SelectItem>
                        <SelectItem value="kyoto">Kyoto</SelectItem>
                        <SelectItem value="yokohama">Yokohama</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">{t.experience}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="skills">{t.skills}</Label>
                    <Textarea id="skills" placeholder="Enter key skills and competencies" />
                  </div>
                  <Button className="w-full">{t.register}</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t.culturalIntelligence}</CardTitle>
                  <CardDescription>Cultural adaptation and communication preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label>{t.culturalAdaptability}</Label>
                    <div className="mt-2">
                      <Progress value={85} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Low</span>
                        <span>High</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label>{t.communicationStyle}</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="direct">{t.direct}</SelectItem>
                        <SelectItem value="collaborative">{t.collaborative}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>{t.teamwork}</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="independent">{t.independent}</SelectItem>
                        <SelectItem value="team">{t.team}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <Badge variant="outline" className="justify-center py-2">
                      <Heart className="h-3 w-3 mr-1" />
                      Wa (和)
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      <Zap className="h-3 w-3 mr-1" />
                      Kaizen
                    </Badge>
                    <Badge variant="outline" className="justify-center py-2">
                      <Shield className="h-3 w-3 mr-1" />
                      Omotenashi
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Companies Tab */}
          <TabsContent value="companies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.companyRegistration}</CardTitle>
                <CardDescription>Register your company to access our talent pool</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="companyName">{t.companyName}</Label>
                  <Input id="companyName" placeholder="Enter company name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="industry">{t.industry}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="size">{t.size}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="200+">200+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">{t.description}</Label>
                  <Textarea id="description" placeholder="Describe your company culture and values" />
                </div>
                <Button className="w-full">{t.register}</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Jobs Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.jobPosting}</CardTitle>
                <CardDescription>Create job postings with cultural intelligence requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="jobTitle">{t.jobTitle}</Label>
                    <Input id="jobTitle" placeholder="Enter job title" />
                  </div>
                  <div>
                    <Label htmlFor="department">{t.department}</Label>
                    <Input id="department" placeholder="Enter department" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="requirements">{t.requirements}</Label>
                  <Textarea id="requirements" placeholder="Enter job requirements and qualifications" />
                </div>
                <div>
                  <Label htmlFor="benefits">{t.benefits}</Label>
                  <Textarea id="benefits" placeholder="Enter benefits and compensation details" />
                </div>
                <Button className="w-full">{t.postJob}</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t.aiMatching}</CardTitle>
                  <CardDescription>AI-powered candidate matching insights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cultural Fit</span>
                      <span className="text-sm font-medium">94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Skills Match</span>
                      <span className="text-sm font-medium">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Experience Level</span>
                      <span className="text-sm font-medium">91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Communication Style</span>
                      <span className="text-sm font-medium">89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t.performanceMetrics}</CardTitle>
                  <CardDescription>Platform performance and success rates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">87%</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">32</div>
                      <div className="text-xs text-gray-500">Avg. Days to Hire</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">94%</div>
                      <div className="text-xs text-gray-500">Cultural Fit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">96%</div>
                      <div className="text-xs text-gray-500">Retention Rate</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Platform performing above industry standards</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App

