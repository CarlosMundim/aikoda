import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  BarChart3, 
  Brain, 
  Users, 
  Target, 
  Search, 
  Briefcase, 
  MessageSquare,
  Settings,
  Menu,
  X,
  Globe,
  ChevronDown,
  Bell,
  User
} from 'lucide-react'

const DashboardLayout = ({ children, language, onLanguageToggle, user, onUserChange }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const location = useLocation()

  // Navigation items with dual-language support
  const navigationItems = [
    {
      id: 'dashboard',
      path: '/dashboard',
      icon: BarChart3,
      label: {
        ja: 'エグゼクティブダッシュボード',
        en: 'Executive Dashboard'
      },
      description: {
        ja: 'リアルタイム分析とKPI',
        en: 'Real-time Analytics & KPIs'
      }
    },
    {
      id: 'ai-matching',
      path: '/dashboard/ai-matching',
      icon: Brain,
      label: {
        ja: 'AIマッチング分析',
        en: 'AI Matching Insights'
      },
      description: {
        ja: '説明可能なAI推奨',
        en: 'Explainable AI Recommendations'
      }
    },
    {
      id: 'cultural-intelligence',
      path: '/dashboard/cultural-intelligence',
      icon: Users,
      label: {
        ja: '文化的知能レポート',
        en: 'Cultural Intelligence Reports'
      },
      description: {
        ja: 'チーム文化分析',
        en: 'Team Cultural Analysis'
      }
    },
    {
      id: 'diversity-metrics',
      path: '/dashboard/diversity-metrics',
      icon: Target,
      label: {
        ja: 'ダイバーシティ指標',
        en: 'Diversity Metrics'
      },
      description: {
        ja: 'インクルージョン分析',
        en: 'Inclusion Analytics'
      }
    },
    {
      id: 'matching-engine',
      path: '/dashboard/matching-engine',
      icon: Search,
      label: {
        ja: 'AIマッチングエンジン',
        en: 'AI Matching Engine'
      },
      description: {
        ja: '候補者マッチング',
        en: 'Candidate Matching'
      }
    },
    {
      id: 'candidate-discovery',
      path: '/dashboard/candidate-discovery',
      icon: Users,
      label: {
        ja: '候補者発見',
        en: 'Candidate Discovery'
      },
      description: {
        ja: '高度な検索とフィルタリング',
        en: 'Advanced Search & Filtering'
      }
    },
    {
      id: 'job-posting',
      path: '/dashboard/job-posting',
      icon: Briefcase,
      label: {
        ja: '求人投稿システム',
        en: 'Job Posting System'
      },
      description: {
        ja: '文化的要件付き求人',
        en: 'Jobs with Cultural Requirements'
      }
    },
    {
      id: 'interview-preparation',
      path: '/dashboard/interview-preparation',
      icon: MessageSquare,
      label: {
        ja: '面接準備',
        en: 'Interview Preparation'
      },
      description: {
        ja: 'AI面接ガイダンス',
        en: 'AI Interview Guidance'
      }
    }
  ]

  const isActivePath = (path) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard'
    }
    return location.pathname.startsWith(path)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="sap-dashboard">
      {/* Header */}
      <header className="sap-dashboard-header">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Mobile menu button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden sap-button-ghost p-2"
            aria-label={language === 'ja' ? 'メニューを開く' : 'Open menu'}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-foreground">
                {language === 'ja' ? 'aiKODAプラットフォーム' : 'aiKODA Platform'}
              </h1>
              <p className="text-xs text-muted-foreground">
                {language === 'ja' ? 'エンタープライズ文化的知能' : 'Enterprise Cultural Intelligence'}
              </p>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
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

            {/* Notifications */}
            <button className="sap-button-ghost p-2 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 sap-button-ghost p-2"
              >
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 sap-card shadow-lg z-50">
                  <div className="p-4 border-b">
                    <p className="text-sm font-medium">
                      {language === 'ja' ? 'デモユーザー' : 'Demo User'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      demo@aikoda.com
                    </p>
                  </div>
                  <div className="p-2">
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-accent rounded-md">
                      {language === 'ja' ? 'プロフィール' : 'Profile'}
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-accent rounded-md">
                      {language === 'ja' ? '設定' : 'Settings'}
                    </button>
                    <hr className="my-2" />
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-accent rounded-md text-destructive">
                      {language === 'ja' ? 'ログアウト' : 'Sign out'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`sap-dashboard-sidebar ${sidebarOpen ? 'block' : 'hidden'} lg:block fixed lg:static inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out lg:transform-none`}>
          {/* Mobile sidebar header */}
          <div className="lg:hidden flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">
              {language === 'ja' ? 'ナビゲーション' : 'Navigation'}
            </h2>
            <button
              onClick={closeSidebar}
              className="sap-button-ghost p-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = isActivePath(item.path)
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={closeSidebar}
                  className={`sap-nav-item ${isActive ? 'active' : ''} w-full justify-start`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">
                      {item.label[language]}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {item.description[language]}
                    </div>
                  </div>
                </Link>
              )
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Settings className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {language === 'ja' ? 'システム設定' : 'System Settings'}
                </p>
                <p className="text-xs text-muted-foreground">
                  v2.0.0
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-30 bg-black/50"
            onClick={closeSidebar}
          />
        )}

        {/* Main Content */}
        <main className="sap-dashboard-main flex-1">
          <div className="sap-dashboard-content">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

