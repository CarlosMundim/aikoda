import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  BarChart3,
  Shield,
  Zap,
  Award
} from 'lucide-react'

const LandingPage = ({ language, onLanguageToggle }) => {
  const [animatedStats, setAnimatedStats] = useState({
    accuracy: 0,
    reduction: 0,
    savings: 0,
    candidates: 0
  })

  // Animate statistics on page load
  useEffect(() => {
    const animateStats = () => {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setAnimatedStats({
          accuracy: Math.floor(87 * progress),
          reduction: Math.floor(50 * progress),
          savings: Math.floor(30 * progress),
          candidates: Math.floor(1247 * progress)
        })

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }

    const timer = setTimeout(animateStats, 500)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: Brain,
      title: {
        ja: '47次元文化的知能',
        en: '47-Dimension Cultural Intelligence'
      },
      description: {
        ja: '独自のCQ47フレームワークで文化的適合性を87%の精度で予測',
        en: 'Proprietary CQ47 framework predicts cultural fit with 87% accuracy'
      }
    },
    {
      icon: Target,
      title: {
        ja: 'AIバイアス検出',
        en: 'AI Bias Detection'
      },
      description: {
        ja: '公平な採用を保証する説明可能なAIアルゴリズム',
        en: 'Explainable AI algorithms ensuring fair and unbiased hiring'
      }
    },
    {
      icon: TrendingUp,
      title: {
        ja: '予測分析',
        en: 'Predictive Analytics'
      },
      description: {
        ja: '採用成功率と従業員定着率をリアルタイムで予測',
        en: 'Real-time prediction of hiring success and employee retention'
      }
    },
    {
      icon: Users,
      title: {
        ja: '心理的プロファイリング',
        en: 'Psychological Profiling'
      },
      description: {
        ja: 'ビッグファイブとチーム役割分析による包括的評価',
        en: 'Comprehensive assessment using Big Five and team role analysis'
      }
    }
  ]

  const testimonials = [
    {
      company: {
        ja: '大手建設会社',
        en: 'Major Construction Firm'
      },
      result: {
        ja: '早期離職率38%削減',
        en: '38% reduction in early turnover'
      },
      quote: {
        ja: '文化的適合性の予測精度が驚異的です。チーム統合が劇的に改善されました。',
        en: 'The cultural fit prediction accuracy is remarkable. Team integration has improved dramatically.'
      }
    },
    {
      company: {
        ja: '介護サービス企業',
        en: 'Elder Care Provider'
      },
      result: {
        ja: '生産性65%向上',
        en: '65% productivity improvement'
      },
      quote: {
        ja: 'AIマッチングにより、適切な候補者を迅速に特定できるようになりました。',
        en: 'AI matching has enabled us to quickly identify the right candidates.'
      }
    },
    {
      company: {
        ja: 'IT派遣会社',
        en: 'IT Dispatch Company'
      },
      result: {
        ja: '採用コスト30%削減',
        en: '30% reduction in hiring costs'
      },
      quote: {
        ja: '文化的知能分析により、長期的な成功を予測できるようになりました。',
        en: 'Cultural intelligence analysis helps us predict long-term success.'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">
                  {language === 'ja' ? 'aiKODAプラットフォーム' : 'aiKODA Platform'}
                </h1>
                <p className="text-xs text-muted-foreground">
                  {language === 'ja' ? 'エンタープライズ文化的知能' : 'Enterprise Cultural Intelligence'}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                {language === 'ja' ? '機能' : 'Features'}
              </a>
              <a href="#results" className="text-sm font-medium hover:text-primary transition-colors">
                {language === 'ja' ? '実績' : 'Results'}
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
                {language === 'ja' ? '導入事例' : 'Case Studies'}
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onLanguageToggle}
                className="language-toggle"
                aria-label={language === 'ja' ? '言語を切り替え' : 'Switch language'}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {language === 'ja' ? '日本語' : 'English'}
                </span>
              </button>
              
              <Link to="/dashboard" className="sap-button-primary">
                {language === 'ja' ? 'プラットフォームを開始' : 'Start Platform'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <div className="dual-language-container mb-8">
              <h1 className="japanese-text text-4xl lg:text-6xl font-bold text-balance">
                日本市場向け次世代文化的知能プラットフォーム
              </h1>
              <p className="english-text text-2xl lg:text-4xl font-semibold text-muted-foreground">
                Next-Generation Cultural Intelligence Platform for Japan
              </p>
            </div>
            
            <div className="dual-language-container mb-12">
              <p className="japanese-text text-xl text-muted-foreground max-w-3xl mx-auto">
                47次元文化的知能フレームワークとAI心理分析により、採用成功率87%、離職率50%削減を実現
              </p>
              <p className="english-text text-lg text-muted-foreground max-w-3xl mx-auto">
                Achieve 87% hiring success rate and 50% turnover reduction with 47-dimension cultural intelligence and AI psychological analysis
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/candidate-registration" className="sap-button-primary text-lg px-8 py-4">
                {language === 'ja' ? '候補者登録を開始' : 'Start Candidate Registration'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/company-registration" className="sap-button-secondary text-lg px-8 py-4">
                {language === 'ja' ? '企業登録' : 'Company Registration'}
              </Link>
            </div>

            {/* Animated Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="sap-kpi-card text-center">
                <div className="sap-kpi-value">{animatedStats.accuracy}%</div>
                <div className="sap-kpi-label">
                  {language === 'ja' ? '文化的適合予測精度' : 'Cultural Fit Accuracy'}
                </div>
              </div>
              <div className="sap-kpi-card text-center">
                <div className="sap-kpi-value">{animatedStats.reduction}%</div>
                <div className="sap-kpi-label">
                  {language === 'ja' ? '離職率削減' : 'Turnover Reduction'}
                </div>
              </div>
              <div className="sap-kpi-card text-center">
                <div className="sap-kpi-value">{animatedStats.savings}%</div>
                <div className="sap-kpi-label">
                  {language === 'ja' ? '採用コスト削減' : 'Cost Savings'}
                </div>
              </div>
              <div className="sap-kpi-card text-center">
                <div className="sap-kpi-value">{animatedStats.candidates.toLocaleString()}</div>
                <div className="sap-kpi-label">
                  {language === 'ja' ? '登録候補者数' : 'Registered Candidates'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="dual-language-container">
              <h2 className="japanese-text text-3xl lg:text-4xl font-bold">
                革新的な機能
              </h2>
              <p className="english-text text-xl text-muted-foreground">
                Innovative Features That Transform Hiring
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="sap-card p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">
                        {feature.title[language]}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description[language]}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20">
        <div className="container-padding">
          <div className="text-center mb-16">
            <div className="dual-language-container">
              <h2 className="japanese-text text-3xl lg:text-4xl font-bold">
                実証された成果
              </h2>
              <p className="english-text text-xl text-muted-foreground">
                Proven Results Across Industries
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="sap-card p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">
                    {testimonial.result[language]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-4">
                  {testimonial.company[language]}
                </h3>
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.quote[language]}"
                </blockquote>
                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <div className="dual-language-container mb-8">
              <h2 className="japanese-text text-3xl lg:text-4xl font-bold">
                今すぐ始めましょう
              </h2>
              <p className="english-text text-xl opacity-90">
                Transform Your Hiring Process Today
              </p>
            </div>
            
            <div className="dual-language-container mb-8">
              <p className="japanese-text text-lg opacity-90">
                文化的知能プラットフォームで採用の未来を体験してください
              </p>
              <p className="english-text opacity-80">
                Experience the future of hiring with cultural intelligence
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard" className="sap-button bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                {language === 'ja' ? 'デモを開始' : 'Start Demo'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/company-registration" className="sap-button border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                {language === 'ja' ? '企業として登録' : 'Register as Company'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container-padding">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">
                {language === 'ja' ? 'aiKODAプラットフォーム' : 'aiKODA Platform'}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'ja' 
                ? '© 2024 aiKODA Platform. 日本市場向けエンタープライズ文化的知能ソリューション。'
                : '© 2024 aiKODA Platform. Enterprise Cultural Intelligence Solution for Japan.'
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

