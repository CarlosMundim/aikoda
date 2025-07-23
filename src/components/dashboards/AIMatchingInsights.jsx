import { Brain, Target, TrendingUp, Users } from 'lucide-react'

const AIMatchingInsights = ({ language }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {language === 'ja' ? 'AIマッチング分析' : 'AI Matching Insights'}
        </h1>
        <p className="text-muted-foreground">
          {language === 'ja' ? '説明可能なAI推奨システム' : 'Explainable AI recommendation system'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="sap-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="sap-kpi-value">87%</div>
              <div className="sap-kpi-label">
                {language === 'ja' ? 'マッチング精度' : 'Matching Accuracy'}
              </div>
            </div>
            <Brain className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="sap-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="sap-kpi-value">156</div>
              <div className="sap-kpi-label">
                {language === 'ja' ? '今日のマッチング' : 'Today\'s Matches'}
              </div>
            </div>
            <Target className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="sap-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="sap-kpi-value">92%</div>
              <div className="sap-kpi-label">
                {language === 'ja' ? '文化的適合率' : 'Cultural Fit Rate'}
              </div>
            </div>
            <Users className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="sap-kpi-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="sap-kpi-value">+23%</div>
              <div className="sap-kpi-label">
                {language === 'ja' ? '成功率向上' : 'Success Rate Improvement'}
              </div>
            </div>
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>

      <div className="sap-card p-6">
        <h3 className="text-lg font-semibold mb-4">
          {language === 'ja' ? 'AIマッチングエンジン' : 'AI Matching Engine'}
        </h3>
        <p className="text-muted-foreground">
          {language === 'ja' 
            ? '47次元文化的知能フレームワークを使用した高精度マッチングシステム'
            : 'High-precision matching system using 47-dimension cultural intelligence framework'
          }
        </p>
      </div>
    </div>
  )
}

export default AIMatchingInsights

