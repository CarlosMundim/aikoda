import { useState } from 'react'
import Link from "next/link"
import { 
  User, 
  MapPin, 
  Briefcase, 
  Brain, 
  Heart, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle,
  Globe,
  Upload,
  Star,
  Target
} from 'lucide-react'

const CandidateRegistrationWizard = ({ language, onLanguageToggle }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    gender: '',
    
    // Address Information
    postalCode: '',
    prefecture: '',
    city: '',
    address: '',
    nearestStation: '',
    
    // Professional Background
    currentPosition: '',
    company: '',
    industry: '',
    experience: '',
    education: '',
    skills: [],
    languages: [],
    certifications: [],
    
    // Cultural Intelligence (CQ47 Framework)
    culturalDimensions: {
      wa: 50, // Harmony
      kaizen: 50, // Continuous Improvement
      omotenashi: 50, // Hospitality
      nemawashi: 50, // Consensus Building
      ringi: 50, // Decision Making
      senpai_kohai: 50, // Hierarchical Relationships
      // ... additional 41 dimensions
    },
    
    // Psychological Assessment (Big Five + HEXACO)
    psychologicalTraits: {
      openness: 50,
      conscientiousness: 50,
      extraversion: 50,
      agreeableness: 50,
      neuroticism: 50,
      honesty_humility: 50,
    },
    
    // Work Preferences
    preferredWorkStyle: '',
    teamRole: '',
    communicationStyle: '',
    conflictResolution: '',
    decisionMaking: '',
    adaptability: 50,
    
    // Global Mobility
    relocationWillingness: '',
    visaStatus: '',
    internationalExperience: '',
    culturalAdaptability: 50,
    
    // Documents
    resume: null,
    portfolio: null,
    certificates: []
  })

  const steps = [
    {
      id: 1,
      icon: User,
      title: {
        ja: '基本情報',
        en: 'Personal Information'
      },
      description: {
        ja: '個人情報と連絡先',
        en: 'Personal details and contact'
      }
    },
    {
      id: 2,
      icon: MapPin,
      title: {
        ja: '住所情報',
        en: 'Address Information'
      },
      description: {
        ja: '居住地と交通アクセス',
        en: 'Location and transportation'
      }
    },
    {
      id: 3,
      icon: Briefcase,
      title: {
        ja: '職歴・学歴',
        en: 'Professional Background'
      },
      description: {
        ja: '経験とスキル',
        en: 'Experience and skills'
      }
    },
    {
      id: 4,
      icon: Brain,
      title: {
        ja: '文化的知能',
        en: 'Cultural Intelligence'
      },
      description: {
        ja: 'CQ47フレームワーク',
        en: 'CQ47 Framework'
      }
    },
    {
      id: 5,
      icon: Heart,
      title: {
        ja: '心理的特性',
        en: 'Psychological Traits'
      },
      description: {
        ja: 'ビッグファイブ分析',
        en: 'Big Five Analysis'
      }
    },
    {
      id: 6,
      icon: FileText,
      title: {
        ja: '書類アップロード',
        en: 'Document Upload'
      },
      description: {
        ja: '履歴書と証明書',
        en: 'Resume and certificates'
      }
    }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNestedInputChange = (category, field, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '姓' : 'Last Name'}
                </label>
                <input
                  type="text"
                  className="sap-input"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder={language === 'ja' ? '山田' : 'Yamada'}
                />
              </div>
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '名' : 'First Name'}
                </label>
                <input
                  type="text"
                  className="sap-input"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder={language === 'ja' ? '太郎' : 'Taro'}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '姓（カナ）' : 'Last Name (Kana)'}
                </label>
                <input
                  type="text"
                  className="sap-input"
                  value={formData.lastNameKana}
                  onChange={(e) => handleInputChange('lastNameKana', e.target.value)}
                  placeholder="ヤマダ"
                />
              </div>
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '名（カナ）' : 'First Name (Kana)'}
                </label>
                <input
                  type="text"
                  className="sap-input"
                  value={formData.firstNameKana}
                  onChange={(e) => handleInputChange('firstNameKana', e.target.value)}
                  placeholder="タロウ"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? 'メールアドレス' : 'Email Address'}
                </label>
                <input
                  type="email"
                  className="sap-input"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="taro.yamada@example.com"
                />
              </div>
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '電話番号' : 'Phone Number'}
                </label>
                <input
                  type="tel"
                  className="sap-input"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="090-1234-5678"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '生年月日' : 'Date of Birth'}
                </label>
                <input
                  type="date"
                  className="sap-input"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '国籍' : 'Nationality'}
                </label>
                <select
                  className="sap-select"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                >
                  <option value="">{language === 'ja' ? '選択してください' : 'Select nationality'}</option>
                  <option value="japan">{language === 'ja' ? '日本' : 'Japan'}</option>
                  <option value="usa">{language === 'ja' ? 'アメリカ' : 'United States'}</option>
                  <option value="china">{language === 'ja' ? '中国' : 'China'}</option>
                  <option value="korea">{language === 'ja' ? '韓国' : 'South Korea'}</option>
                  <option value="other">{language === 'ja' ? 'その他' : 'Other'}</option>
                </select>
              </div>
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '性別' : 'Gender'}
                </label>
                <select
                  className="sap-select"
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                >
                  <option value="">{language === 'ja' ? '選択してください' : 'Select gender'}</option>
                  <option value="male">{language === 'ja' ? '男性' : 'Male'}</option>
                  <option value="female">{language === 'ja' ? '女性' : 'Female'}</option>
                  <option value="other">{language === 'ja' ? 'その他' : 'Other'}</option>
                  <option value="prefer_not_to_say">{language === 'ja' ? '回答しない' : 'Prefer not to say'}</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '郵便番号' : 'Postal Code'}
                </label>
                <input
                  type="text"
                  className="sap-input"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e.target.value)}
                  placeholder="123-4567"
                />
              </div>
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '都道府県' : 'Prefecture'}
                </label>
                <select
                  className="sap-select"
                  value={formData.prefecture}
                  onChange={(e) => handleInputChange('prefecture', e.target.value)}
                >
                  <option value="">{language === 'ja' ? '選択してください' : 'Select prefecture'}</option>
                  <option value="tokyo">{language === 'ja' ? '東京都' : 'Tokyo'}</option>
                  <option value="osaka">{language === 'ja' ? '大阪府' : 'Osaka'}</option>
                  <option value="kanagawa">{language === 'ja' ? '神奈川県' : 'Kanagawa'}</option>
                  <option value="aichi">{language === 'ja' ? '愛知県' : 'Aichi'}</option>
                </select>
              </div>
            </div>

            <div className="sap-form-group">
              <label className="sap-form-label">
                {language === 'ja' ? '市区町村' : 'City/Ward'}
              </label>
              <input
                type="text"
                className="sap-input"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder={language === 'ja' ? '渋谷区' : 'Shibuya-ku'}
              />
            </div>

            <div className="sap-form-group">
              <label className="sap-form-label">
                {language === 'ja' ? '住所' : 'Address'}
              </label>
              <input
                type="text"
                className="sap-input"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder={language === 'ja' ? '道玄坂1-2-3' : '1-2-3 Dogenzaka'}
              />
            </div>

            <div className="sap-form-group">
              <label className="sap-form-label">
                {language === 'ja' ? '最寄り駅' : 'Nearest Station'}
              </label>
              <input
                type="text"
                className="sap-input"
                value={formData.nearestStation}
                onChange={(e) => handleInputChange('nearestStation', e.target.value)}
                placeholder={language === 'ja' ? 'JR渋谷駅' : 'JR Shibuya Station'}
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '現在の職種' : 'Current Position'}
                </label>
                <input
                  type="text"
                  className="sap-input"
                  value={formData.currentPosition}
                  onChange={(e) => handleInputChange('currentPosition', e.target.value)}
                  placeholder={language === 'ja' ? 'ソフトウェアエンジニア' : 'Software Engineer'}
                />
              </div>
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '現在の会社' : 'Current Company'}
                </label>
                <input
                  type="text"
                  className="sap-input"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder={language === 'ja' ? '株式会社テクノロジー' : 'Technology Corp'}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '業界' : 'Industry'}
                </label>
                <select
                  className="sap-select"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                >
                  <option value="">{language === 'ja' ? '選択してください' : 'Select industry'}</option>
                  <option value="it">{language === 'ja' ? 'IT・ソフトウェア' : 'IT & Software'}</option>
                  <option value="finance">{language === 'ja' ? '金融' : 'Finance'}</option>
                  <option value="manufacturing">{language === 'ja' ? '製造業' : 'Manufacturing'}</option>
                  <option value="healthcare">{language === 'ja' ? '医療・ヘルスケア' : 'Healthcare'}</option>
                  <option value="education">{language === 'ja' ? '教育' : 'Education'}</option>
                </select>
              </div>
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '経験年数' : 'Years of Experience'}
                </label>
                <select
                  className="sap-select"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                >
                  <option value="">{language === 'ja' ? '選択してください' : 'Select experience'}</option>
                  <option value="0-1">{language === 'ja' ? '0-1年' : '0-1 years'}</option>
                  <option value="2-3">{language === 'ja' ? '2-3年' : '2-3 years'}</option>
                  <option value="4-5">{language === 'ja' ? '4-5年' : '4-5 years'}</option>
                  <option value="6-10">{language === 'ja' ? '6-10年' : '6-10 years'}</option>
                  <option value="10+">{language === 'ja' ? '10年以上' : '10+ years'}</option>
                </select>
              </div>
            </div>

            <div className="sap-form-group">
              <label className="sap-form-label">
                {language === 'ja' ? '最終学歴' : 'Education'}
              </label>
              <select
                className="sap-select"
                value={formData.education}
                onChange={(e) => handleInputChange('education', e.target.value)}
              >
                <option value="">{language === 'ja' ? '選択してください' : 'Select education'}</option>
                <option value="high_school">{language === 'ja' ? '高等学校卒業' : 'High School'}</option>
                <option value="vocational">{language === 'ja' ? '専門学校卒業' : 'Vocational School'}</option>
                <option value="bachelor">{language === 'ja' ? '大学卒業' : 'Bachelor\'s Degree'}</option>
                <option value="master">{language === 'ja' ? '大学院修士課程修了' : 'Master\'s Degree'}</option>
                <option value="phd">{language === 'ja' ? '大学院博士課程修了' : 'PhD'}</option>
              </select>
            </div>

            <div className="sap-form-group">
              <label className="sap-form-label">
                {language === 'ja' ? 'スキル（カンマ区切り）' : 'Skills (comma separated)'}
              </label>
              <textarea
                className="sap-textarea"
                value={formData.skills.join(', ')}
                onChange={(e) => handleInputChange('skills', e.target.value.split(', ').filter(s => s.trim()))}
                placeholder={language === 'ja' ? 'JavaScript, React, Node.js, Python' : 'JavaScript, React, Node.js, Python'}
                rows={3}
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {language === 'ja' ? 'CQ47文化的知能フレームワーク' : 'CQ47 Cultural Intelligence Framework'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ja' 
                  ? '以下の文化的次元について、あなたの適応度を評価してください（0-100）'
                  : 'Rate your adaptation level for each cultural dimension (0-100)'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { key: 'wa', label: { ja: '和（調和）', en: 'Wa (Harmony)' } },
                { key: 'kaizen', label: { ja: '改善（継続的改善）', en: 'Kaizen (Continuous Improvement)' } },
                { key: 'omotenashi', label: { ja: 'おもてなし（接客）', en: 'Omotenashi (Hospitality)' } },
                { key: 'nemawashi', label: { ja: '根回し（合意形成）', en: 'Nemawashi (Consensus Building)' } },
                { key: 'ringi', label: { ja: '稟議（意思決定）', en: 'Ringi (Decision Making)' } },
                { key: 'senpai_kohai', label: { ja: '先輩後輩（階層関係）', en: 'Senpai-Kohai (Hierarchical Relations)' } }
              ].map((dimension) => (
                <div key={dimension.key} className="cultural-dimension-card">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-medium">
                      {dimension.label[language]}
                    </label>
                    <span className="text-primary font-semibold">
                      {formData.culturalDimensions[dimension.key]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={formData.culturalDimensions[dimension.key]}
                    onChange={(e) => handleNestedInputChange('culturalDimensions', dimension.key, parseInt(e.target.value))}
                    className="psychological-trait-slider"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{language === 'ja' ? '低い' : 'Low'}</span>
                    <span>{language === 'ja' ? '高い' : 'High'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {language === 'ja' ? '心理的特性分析' : 'Psychological Traits Analysis'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ja' 
                  ? 'ビッグファイブ性格特性について自己評価してください'
                  : 'Self-assess your Big Five personality traits'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  key: 'openness', 
                  label: { ja: '開放性', en: 'Openness' },
                  description: { ja: '新しい経験への開放性', en: 'Openness to new experiences' }
                },
                { 
                  key: 'conscientiousness', 
                  label: { ja: '誠実性', en: 'Conscientiousness' },
                  description: { ja: '責任感と組織性', en: 'Responsibility and organization' }
                },
                { 
                  key: 'extraversion', 
                  label: { ja: '外向性', en: 'Extraversion' },
                  description: { ja: '社交性とエネルギー', en: 'Sociability and energy' }
                },
                { 
                  key: 'agreeableness', 
                  label: { ja: '協調性', en: 'Agreeableness' },
                  description: { ja: '他者への配慮', en: 'Consideration for others' }
                },
                { 
                  key: 'neuroticism', 
                  label: { ja: '神経症的傾向', en: 'Neuroticism' },
                  description: { ja: 'ストレス耐性', en: 'Stress tolerance' }
                },
                { 
                  key: 'honesty_humility', 
                  label: { ja: '正直・謙虚性', en: 'Honesty-Humility' },
                  description: { ja: '誠実さと謙虚さ', en: 'Sincerity and modesty' }
                }
              ].map((trait) => (
                <div key={trait.key} className="cultural-dimension-card">
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <label className="font-medium">
                        {trait.label[language]}
                      </label>
                      <span className="text-primary font-semibold">
                        {formData.psychologicalTraits[trait.key]}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {trait.description[language]}
                    </p>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={formData.psychologicalTraits[trait.key]}
                    onChange={(e) => handleNestedInputChange('psychologicalTraits', trait.key, parseInt(e.target.value))}
                    className="psychological-trait-slider"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{language === 'ja' ? '低い' : 'Low'}</span>
                    <span>{language === 'ja' ? '高い' : 'High'}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '希望する働き方' : 'Preferred Work Style'}
                </label>
                <select
                  className="sap-select"
                  value={formData.preferredWorkStyle}
                  onChange={(e) => handleInputChange('preferredWorkStyle', e.target.value)}
                >
                  <option value="">{language === 'ja' ? '選択してください' : 'Select work style'}</option>
                  <option value="remote">{language === 'ja' ? 'リモートワーク' : 'Remote Work'}</option>
                  <option value="hybrid">{language === 'ja' ? 'ハイブリッド' : 'Hybrid'}</option>
                  <option value="office">{language === 'ja' ? 'オフィス勤務' : 'Office Work'}</option>
                </select>
              </div>
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? 'チームでの役割' : 'Team Role'}
                </label>
                <select
                  className="sap-select"
                  value={formData.teamRole}
                  onChange={(e) => handleInputChange('teamRole', e.target.value)}
                >
                  <option value="">{language === 'ja' ? '選択してください' : 'Select team role'}</option>
                  <option value="leader">{language === 'ja' ? 'リーダー' : 'Leader'}</option>
                  <option value="collaborator">{language === 'ja' ? 'コラボレーター' : 'Collaborator'}</option>
                  <option value="specialist">{language === 'ja' ? 'スペシャリスト' : 'Specialist'}</option>
                  <option value="supporter">{language === 'ja' ? 'サポーター' : 'Supporter'}</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {language === 'ja' ? '書類アップロード' : 'Document Upload'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ja' 
                  ? '履歴書、職務経歴書、その他の証明書をアップロードしてください'
                  : 'Upload your resume, portfolio, and other certificates'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="sap-card p-6 border-dashed border-2 border-muted-foreground/25 hover:border-primary/50 transition-colors">
                <div className="text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="font-medium mb-2">
                    {language === 'ja' ? '履歴書' : 'Resume'}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'ja' ? 'PDF, DOC, DOCX (最大5MB)' : 'PDF, DOC, DOCX (Max 5MB)'}
                  </p>
                  <button className="sap-button-primary">
                    {language === 'ja' ? 'ファイルを選択' : 'Choose File'}
                  </button>
                </div>
              </div>

              <div className="sap-card p-6 border-dashed border-2 border-muted-foreground/25 hover:border-primary/50 transition-colors">
                <div className="text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="font-medium mb-2">
                    {language === 'ja' ? 'ポートフォリオ' : 'Portfolio'}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'ja' ? 'PDF, ZIP (最大10MB)' : 'PDF, ZIP (Max 10MB)'}
                  </p>
                  <button className="sap-button-secondary">
                    {language === 'ja' ? 'ファイルを選択' : 'Choose File'}
                  </button>
                </div>
              </div>
            </div>

            <div className="sap-card p-6 border-dashed border-2 border-muted-foreground/25">
              <div className="text-center">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h4 className="font-medium mb-2">
                  {language === 'ja' ? '資格証明書' : 'Certificates'}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'ja' ? '複数ファイル可 (各最大5MB)' : 'Multiple files allowed (Max 5MB each)'}
                </p>
                <button className="sap-button-ghost">
                  {language === 'ja' ? 'ファイルを追加' : 'Add Files'}
                </button>
              </div>
            </div>

            <div className="sap-form-group">
              <label className="sap-form-label">
                {language === 'ja' ? '追加情報・自己PR' : 'Additional Information / Self-PR'}
              </label>
              <textarea
                className="sap-textarea"
                rows={4}
                placeholder={language === 'ja' 
                  ? 'あなたの強みや特技、志望動機などを自由に記入してください'
                  : 'Please describe your strengths, special skills, motivation, etc.'
                }
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container-padding">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold">
                  {language === 'ja' ? '候補者登録' : 'Candidate Registration'}
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={onLanguageToggle}
                className="language-toggle"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {language === 'ja' ? '日本語' : 'English'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-padding py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = currentStep > step.id
                
                return (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                      isCompleted 
                        ? 'bg-primary border-primary text-primary-foreground' 
                        : isActive 
                          ? 'border-primary text-primary' 
                          : 'border-muted-foreground text-muted-foreground'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <Icon className="h-5 w-5" />
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-full h-0.5 mx-4 transition-colors ${
                        isCompleted ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                )
              })}
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                {steps[currentStep - 1].title[language]}
              </h2>
              <p className="text-muted-foreground">
                {steps[currentStep - 1].description[language]}
              </p>
            </div>
          </div>

          {/* Step Content */}
          <div className="sap-card p-8 mb-8">
            {renderStepContent()}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="sap-button-secondary disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              {language === 'ja' ? '前へ' : 'Previous'}
            </button>

            <div className="text-sm text-muted-foreground">
              {language === 'ja' 
                ? `ステップ ${currentStep} / ${steps.length}`
                : `Step ${currentStep} of ${steps.length}`
              }
            </div>

            {currentStep === steps.length ? (
              <Link to="/dashboard" className="sap-button-primary">
                {language === 'ja' ? '登録完了' : 'Complete Registration'}
                <CheckCircle className="h-4 w-4 ml-2" />
              </Link>
            ) : (
              <button
                onClick={nextStep}
                className="sap-button-primary"
              >
                {language === 'ja' ? '次へ' : 'Next'}
                <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateRegistrationWizard

