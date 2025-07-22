import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Globe, 
  Users, 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  Target,
  Lightbulb,
  MessageCircle,
  Award,
  Building,
  UserCheck,
  Clock,
  DollarSign,
  Languages,
  Sparkles
} from 'lucide-react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('dual') // 'dual', 'japanese', 'english'
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState({})

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-iworkz-indigo rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">iW</span>
              </div>
              <span className="text-xl font-bold text-iworkz-indigo">iWORKZ</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-gray-700 hover:text-iworkz-indigo transition-colors">Platform</a>
              <a href="#cq47" className="text-gray-700 hover:text-iworkz-indigo transition-colors">CQ47</a>
              <a href="#success" className="text-gray-700 hover:text-iworkz-indigo transition-colors">Success Stories</a>
              <a href="#founders" className="text-gray-700 hover:text-iworkz-indigo transition-colors">Leadership</a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('japanese')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                    language === 'japanese' ? 'bg-iworkz-indigo text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  日本語
                </button>
                <button
                  onClick={() => setLanguage('dual')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                    language === 'dual' ? 'bg-iworkz-indigo text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  両言語
                </button>
                <button
                  onClick={() => setLanguage('english')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                    language === 'english' ? 'bg-iworkz-indigo text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  EN
                </button>
              </div>
              <button className="bg-iworkz-indigo text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                {language === 'japanese' ? 'デモを予約' : 'Book Demo'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dual Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-iworkz-sakura rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-iworkz-indigo rounded-full opacity-10 animate-cultural-flow"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Japanese Hero (60% emphasis) */}
            <motion.div 
              className={`${language === 'english' ? 'hidden' : 'block'} space-y-8`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center bg-iworkz-sakura/20 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-iworkz-indigo mr-2" />
                  <span className="text-sm font-medium text-iworkz-indigo font-japanese">
                    日本初の文化インテリジェンス・プラットフォーム
                  </span>
                </div>
                
                <h1 className="text-dual-hero-jp font-japanese text-gray-900 leading-tight">
                  国境を越えた働き方。<br />
                  <span className="text-iworkz-indigo">誤解のない調和</span>を実現
                </h1>
                
                <p className="text-dual-subtitle-jp font-japanese text-gray-600 leading-relaxed">
                  外国人労働者の早期離職を防ぐ、企業向け文化インテリジェンス・プラットフォーム。
                  CQ47フレームワークとAIエージェントによる、チーム内のすれ違いを未然に防ぐソリューション。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-iworkz-indigo text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all hover-cultural flex items-center justify-center">
                    <span className="font-japanese font-medium">無料デモを体験</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border-2 border-iworkz-indigo text-iworkz-indigo px-8 py-4 rounded-lg hover:bg-iworkz-indigo hover:text-white transition-all">
                    <span className="font-japanese font-medium">導入事例を見る</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* English Hero (40% emphasis) */}
            <motion.div 
              className={`${language === 'japanese' ? 'hidden' : 'block'} space-y-8`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center bg-iworkz-ochre/20 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-iworkz-indigo mr-2" />
                  <span className="text-sm font-medium text-iworkz-indigo font-english">
                    World's First Cultural Intelligence Platform
                  </span>
                </div>
                
                <h1 className="text-dual-hero-en font-english text-gray-900 leading-tight">
                  Work without borders.<br />
                  <span className="text-iworkz-indigo">Harmony without</span> misunderstanding.
                </h1>
                
                <p className="text-dual-subtitle-en font-english text-gray-600 leading-relaxed">
                  Eliminate foreign worker attrition through cultural intelligence. 
                  Our CQ47 framework and AI agents prevent team breakdowns before they happen.
                </p>
                
                <div className="grid grid-cols-3 gap-4 py-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-iworkz-indigo">87%</div>
                    <div className="text-sm text-gray-600">Retention Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-iworkz-indigo">40%</div>
                    <div className="text-sm text-gray-600">Attrition Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-iworkz-indigo">3x</div>
                    <div className="text-sm text-gray-600">Faster Integration</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-iworkz-indigo text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all hover-cultural flex items-center justify-center">
                    <span className="font-english font-medium">Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border-2 border-iworkz-indigo text-iworkz-indigo px-8 py-4 rounded-lg hover:bg-iworkz-indigo hover:text-white transition-all">
                    <span className="font-english font-medium">View Case Studies</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Intelligence Demonstration */}
      <section id="cq47" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'japanese' ? (
                <span className="font-japanese">CQ47フレームワーク</span>
              ) : (
                <span className="font-english">The CQ47 Framework</span>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'japanese' ? (
                <span className="font-japanese">
                  47次元の文化インテリジェンス評価により、チームの適合性を科学的に予測
                </span>
              ) : (
                <span className="font-english">
                  47-dimension cultural intelligence assessment that scientifically predicts team compatibility
                </span>
              )}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              animate={isVisible.cq47 ? "animate" : "initial"}
            >
              {[
                {
                  icon: MessageCircle,
                  title: language === 'japanese' ? '相互作用行動' : 'Interactional Behaviour',
                  desc: language === 'japanese' ? 'ターンテイキング、対立スタイル、権力距離、信頼シグナル' : 'Turn-taking, conflict style, power distance, trust signaling'
                },
                {
                  icon: Brain,
                  title: language === 'japanese' ? '認知的知覚' : 'Cognitive Perception',
                  desc: language === 'japanese' ? '曖昧さ耐性、論理-感情の重み付け、リスクフレーミング' : 'Ambiguity tolerance, logic-emotion weighting, risk framing'
                },
                {
                  icon: Languages,
                  title: language === 'japanese' ? '言語的流暢性' : 'Linguistic Fluency',
                  desc: language === 'japanese' ? 'コードスイッチング、間接性、フォーマル対カジュアル' : 'Code-switching, indirectness, formal vs. casual gradients'
                },
                {
                  icon: Building,
                  title: language === 'japanese' ? '組織規範' : 'Organizational Norms',
                  desc: language === 'japanese' ? '階層ナビゲーション、タスク所有権、報酬感度' : 'Hierarchy navigation, task ownership, reward sensitivity'
                },
                {
                  icon: Heart,
                  title: language === 'japanese' ? '社会感情知能' : 'Socio-emotional Intelligence',
                  desc: language === 'japanese' ? '恥の回復力、共感デコーディング、沈黙の解釈' : 'Shame resilience, empathy decoding, silence interpretation'
                }
              ].map((dimension, index) => (
                <motion.div
                  key={index}
                  className="cq-dimension hover-cultural"
                  variants={fadeInUp}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-iworkz-indigo/10 p-3 rounded-lg">
                      <dimension.icon className="w-6 h-6 text-iworkz-indigo" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{dimension.title}</h3>
                      <p className="text-gray-600 text-sm">{dimension.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="enterprise-card p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible.cq47 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-iworkz-indigo rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'japanese' ? 'リアルタイム適合性分析' : 'Real-time Compatibility Analysis'}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {language === 'japanese' ? 'チーム調和スコア' : 'Team Harmony Score'}
                  </span>
                  <span className="font-bold text-iworkz-indigo">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-iworkz-indigo h-2 rounded-full" style={{width: '94%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {language === 'japanese' ? '文化的適応予測' : 'Cultural Adaptation Prediction'}
                  </span>
                  <span className="font-bold text-green-600">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {language === 'japanese' ? '統合タイムライン' : 'Integration Timeline'}
                  </span>
                  <span className="font-bold text-iworkz-ochre">45 days</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-iworkz-ochre h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-iworkz-indigo text-white py-3 rounded-lg hover:bg-blue-800 transition-colors">
                {language === 'japanese' ? 'CQ47デモを体験' : 'Experience CQ47 Demo'}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Metrics & ROI */}
      <section id="success" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'japanese' ? (
                <span className="font-japanese">実証された成果</span>
              ) : (
                <span className="font-english">Proven Results</span>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'japanese' ? (
                <span className="font-japanese">
                  日本の企業が実際に達成した、測定可能なビジネス成果
                </span>
              ) : (
                <span className="font-english">
                  Measurable business outcomes achieved by Japanese enterprises
                </span>
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: TrendingUp,
                value: '40%',
                label: language === 'japanese' ? '離職率削減' : 'Attrition Reduction',
                color: 'text-green-600'
              },
              {
                icon: Clock,
                value: '50-70%',
                label: language === 'japanese' ? 'オンボーディング時間短縮' : 'Onboarding Time Reduction',
                color: 'text-blue-600'
              },
              {
                icon: DollarSign,
                value: '¥18M',
                label: language === 'japanese' ? '年間コスト削減' : 'Annual Cost Savings',
                color: 'text-iworkz-ochre'
              },
              {
                icon: UserCheck,
                value: '4.7/5',
                label: language === 'japanese' ? '従業員満足度' : 'Employee Satisfaction',
                color: 'text-iworkz-indigo'
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="enterprise-card p-6 text-center hover-cultural"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.success ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 ${metric.color.replace('text-', 'bg-')}/10 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                <div className="text-gray-600 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Case Study Highlights */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                company: language === 'japanese' ? '建設会社（関東）' : 'Construction Firm (Kanto)',
                workers: '120 Filipino & Vietnamese welders',
                results: [
                  { metric: '38%', desc: language === 'japanese' ? '早期離職率削減' : 'drop in early turnover' },
                  { metric: '26%', desc: language === 'japanese' ? 'コミュニケーション改善' : 'communication improvement' },
                  { metric: '100%', desc: language === 'japanese' ? 'エンゲージメント率' : 'engagement rate' }
                ]
              },
              {
                company: language === 'japanese' ? '介護事業者（関東）' : 'Elder Care Provider (Kanto)',
                workers: 'Indonesian & Nepalese caregivers',
                results: [
                  { metric: '35%', desc: language === 'japanese' ? '誤解による事故削減' : 'fewer miscommunication incidents' },
                  { metric: '2x', desc: language === 'japanese' ? 'オンボーディング完了率' : 'faster onboarding completion' },
                  { metric: '50%', desc: language === 'japanese' ? 'HR業務負荷軽減' : 'HR workload reduction' }
                ]
              },
              {
                company: language === 'japanese' ? 'BPO/派遣会社' : 'BPO/Dispatch Company',
                workers: 'A/B test comparison',
                results: [
                  { metric: '<10%', desc: language === 'japanese' ? '90日以内離職率' : 'resignation within 90 days' },
                  { metric: '4.6/5', desc: language === 'japanese' ? '候補者満足度' : 'candidate satisfaction' },
                  { metric: '3x', desc: language === 'japanese' ? '従来手法比改善' : 'better than traditional method' }
                ]
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                className="enterprise-card p-6 hover-cultural"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.success ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="mb-4">
                  <h3 className="font-bold text-gray-900 mb-2">{study.company}</h3>
                  <p className="text-sm text-gray-600">{study.workers}</p>
                </div>
                <div className="space-y-3">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-iworkz-indigo">{result.metric}</span>
                      <span className="text-sm text-gray-600 text-right flex-1 ml-4">{result.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Credibility */}
      <section id="founders" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'japanese' ? (
                <span className="font-japanese">企業級リーダーシップ</span>
              ) : (
                <span className="font-english">Enterprise Leadership</span>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'japanese' ? (
                <span className="font-japanese">
                  グローバル人材業界のエキスパートによる、実証済みの経験と専門知識
                </span>
              ) : (
                <span className="font-english">
                  Proven expertise from global talent industry veterans
                </span>
              )}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Kenji Yoshidome',
                title: language === 'japanese' ? '共同創設者・事業責任者' : 'Co-founder & Business Lead',
                background: language === 'japanese' ? 
                  '株式会社アウトソーシング（売上5,000億円）にて17年間、グローバルM&A戦略を統括。WBB（Work Beyond Borders）構想の立案者。' :
                  '17 years overseeing global M&A strategy at Outsourcing Inc. ($5B revenue). Architect of WBB (Work Beyond Borders) initiative.',
                expertise: language === 'japanese' ? 
                  '日本・ASEAN・欧州の労働法制と人材流動化スキームに精通' :
                  'Expert in Japanese, ASEAN, and European labor laws and workforce mobilization',
                icon: Building
              },
              {
                name: 'Carlos Mundim',
                title: language === 'japanese' ? '共同創設者・最高戦略責任者' : 'Co-founder & Chief Strategist',
                background: language === 'japanese' ? 
                  'Lightpath Systems K.K.創設者。非人間知能（NHI）オーケストレーション、量子認知フレームワークの専門家。' :
                  'Founder of Lightpath Systems K.K. Expert in non-human intelligence (NHI) orchestration and quantum cognition frameworks.',
                expertise: language === 'japanese' ? 
                  'aiKODAオーケストレーション・フレームワーク、iWORKZプラットフォームの開発者' :
                  'Creator of aiKODA orchestration framework and iWORKZ platform',
                icon: Brain
              },
              {
                name: 'Jeanette Dennisson',
                title: language === 'japanese' ? '文化インテリジェンス・アーキテクト' : 'Cultural Intelligence Architect',
                background: language === 'japanese' ? 
                  '聖マリアンナ医科大学言語学教授。医療・STEM教育における応用言語学の専門家。' :
                  'Professor of Linguistics at St. Marianna University School of Medicine. Expert in applied linguistics for medical and STEM education.',
                expertise: language === 'japanese' ? 
                  '多文化コミュニケーション・システム、AI強化言語モデリングの国際的権威' :
                  'International authority on multicultural communication systems and AI-enhanced language modeling',
                icon: Languages
              }
            ].map((founder, index) => (
              <motion.div
                key={index}
                className="enterprise-card p-8 hover-cultural"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.founders ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-iworkz-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <founder.icon className="w-8 h-8 text-iworkz-indigo" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                  <p className="text-iworkz-indigo font-medium">{founder.title}</p>
                </div>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>{founder.background}</p>
                  <p className="font-medium text-gray-800">{founder.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-iworkz-indigo to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {language === 'japanese' ? (
                <span className="font-japanese">今すぐ文化的調和を実現</span>
              ) : (
                <span className="font-english">Transform Your Global Workforce Today</span>
              )}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {language === 'japanese' ? (
                <span className="font-japanese">
                  3ヶ月以内にROIを実現。外国人労働者の離職率を30-50%削減。
                </span>
              ) : (
                <span className="font-english">
                  Achieve ROI within 3 months. Reduce foreign worker attrition by 30-50%.
                </span>
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-iworkz-indigo px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover-cultural font-medium">
                {language === 'japanese' ? '無料デモを予約' : 'Book Free Demo'}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-iworkz-indigo transition-all">
                {language === 'japanese' ? '導入資料をダウンロード' : 'Download Implementation Guide'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-iworkz-indigo rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">iW</span>
                </div>
                <span className="text-xl font-bold">iWORKZ</span>
              </div>
              <p className="text-gray-400 text-sm">
                {language === 'japanese' ? 
                  '国境を越えた働き方。誤解のない調和を実現。' :
                  'Work without borders. Harmony without misunderstanding.'
                }
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'japanese' ? 'プラットフォーム' : 'Platform'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">CQ47 Framework</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Onboarding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integration APIs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'japanese' ? 'リソース' : 'Resources'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'japanese' ? '導入事例' : 'Case Studies'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'japanese' ? 'ドキュメント' : 'Documentation'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'japanese' ? 'サポート' : 'Support'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'japanese' ? 'ブログ' : 'Blog'}
                </a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'japanese' ? '会社情報' : 'Company'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'japanese' ? '私たちについて' : 'About Us'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'japanese' ? 'キャリア' : 'Careers'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'japanese' ? 'お問い合わせ' : 'Contact'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'japanese' ? 'プライバシー' : 'Privacy'}
                </a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 iWORKZ. All rights reserved. | Powered by Cultural Intelligence</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

