import { Brain, Target, Users, TrendingUp } from 'lucide-react'

const CulturalIntelligenceTest = ({ language }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {language === 'ja' ? '文化的知能テスト' : 'Cultural Intelligence Test'}
        </h1>
        <p className="text-muted-foreground">
          {language === 'ja' ? 'CQ47フレームワーク評価' : 'CQ47 Framework Assessment'}
        </p>
      </div>

      <div className="sap-card p-6">
        <h3 className="text-lg font-semibold mb-4">
          {language === 'ja' ? '47次元文化的知能評価' : '47-Dimension Cultural Intelligence Assessment'}
        </h3>
        <p className="text-muted-foreground">
          {language === 'ja' 
            ? '包括的な文化的知能評価により、日本のビジネス環境での適応能力を測定します'
            : 'Comprehensive cultural intelligence assessment measuring adaptation capabilities in Japanese business environment'
          }
        </p>
      </div>
    </div>
  )
}

export default CulturalIntelligenceTest

