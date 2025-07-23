import { useState } from 'react'
import Link from "next/link"
import { 
  Building, 
  Users, 
  Target, 
  Brain, 
  Globe, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle
} from 'lucide-react'

const CompanyRegistrationWizard = ({ language, onLanguageToggle }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    size: '',
    location: '',
    website: '',
    description: '',
    culturalRequirements: {
      wa: 50,
      kaizen: 50,
      omotenashi: 50
    }
  })

  const steps = [
    {
      id: 1,
      icon: Building,
      title: {
        ja: '企業基本情報',
        en: 'Company Information'
      }
    },
    {
      id: 2,
      icon: Users,
      title: {
        ja: '組織情報',
        en: 'Organization Details'
      }
    },
    {
      id: 3,
      icon: Brain,
      title: {
        ja: '文化的要件',
        en: 'Cultural Requirements'
      }
    }
  ]

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

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container-padding">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold">
                  {language === 'ja' ? '企業登録' : 'Company Registration'}
                </span>
              </Link>
            </div>
            <button onClick={onLanguageToggle} className="language-toggle">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'ja' ? '日本語' : 'English'}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="container-padding py-8">
        <div className="max-w-4xl mx-auto">
          <div className="sap-card p-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              {language === 'ja' ? '企業登録フォーム' : 'Company Registration Form'}
            </h2>
            
            <div className="space-y-6">
              <div className="sap-form-group">
                <label className="sap-form-label">
                  {language === 'ja' ? '会社名' : 'Company Name'}
                </label>
                <input
                  type="text"
                  className="sap-input"
                  placeholder={language === 'ja' ? '株式会社サンプル' : 'Sample Corporation'}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="sap-form-group">
                  <label className="sap-form-label">
                    {language === 'ja' ? '業界' : 'Industry'}
                  </label>
                  <select className="sap-select">
                    <option value="">{language === 'ja' ? '選択してください' : 'Select industry'}</option>
                    <option value="it">{language === 'ja' ? 'IT・ソフトウェア' : 'IT & Software'}</option>
                    <option value="finance">{language === 'ja' ? '金融' : 'Finance'}</option>
                    <option value="manufacturing">{language === 'ja' ? '製造業' : 'Manufacturing'}</option>
                  </select>
                </div>
                
                <div className="sap-form-group">
                  <label className="sap-form-label">
                    {language === 'ja' ? '従業員数' : 'Company Size'}
                  </label>
                  <select className="sap-select">
                    <option value="">{language === 'ja' ? '選択してください' : 'Select size'}</option>
                    <option value="1-10">{language === 'ja' ? '1-10名' : '1-10 employees'}</option>
                    <option value="11-50">{language === 'ja' ? '11-50名' : '11-50 employees'}</option>
                    <option value="51-200">{language === 'ja' ? '51-200名' : '51-200 employees'}</option>
                    <option value="200+">{language === 'ja' ? '200名以上' : '200+ employees'}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <button onClick={prevStep} disabled={currentStep === 1} className="sap-button-secondary disabled:opacity-50">
                <ChevronLeft className="h-4 w-4 mr-2" />
                {language === 'ja' ? '前へ' : 'Previous'}
              </button>
              
              <Link to="/dashboard" className="sap-button-primary">
                {language === 'ja' ? '登録完了' : 'Complete Registration'}
                <CheckCircle className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyRegistrationWizard

