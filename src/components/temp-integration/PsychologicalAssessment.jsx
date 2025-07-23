import { Brain, Heart, Users, Target } from 'lucide-react'

const PsychologicalAssessment = ({ language }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {language === 'ja' ? '心理的評価' : 'Psychological Assessment'}
        </h1>
        <p className="text-muted-foreground">
          {language === 'ja' ? 'ビッグファイブ性格分析' : 'Big Five Personality Analysis'}
        </p>
      </div>

      <div className="sap-card p-6">
        <h3 className="text-lg font-semibold mb-4">
          {language === 'ja' ? '包括的心理プロファイリング' : 'Comprehensive Psychological Profiling'}
        </h3>
        <p className="text-muted-foreground">
          {language === 'ja' 
            ? 'ビッグファイブ、HEXACO、チーム役割分析による詳細な心理的特性評価'
            : 'Detailed psychological trait assessment using Big Five, HEXACO, and team role analysis'
          }
        </p>
      </div>
    </div>
  )
}

export default PsychologicalAssessment

