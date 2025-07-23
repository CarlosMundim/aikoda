import { Search, Users, Filter, Target } from 'lucide-react'

const CandidateDiscovery = ({ language }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {language === 'ja' ? '候補者発見' : 'Candidate Discovery'}
        </h1>
        <p className="text-muted-foreground">
          {language === 'ja' ? '高度な検索とフィルタリング' : 'Advanced search and filtering'}
        </p>
      </div>

      <div className="sap-card p-6">
        <h3 className="text-lg font-semibold mb-4">
          {language === 'ja' ? 'スマート検索' : 'Smart Search'}
        </h3>
        <p className="text-muted-foreground">
          {language === 'ja' 
            ? '文化的適合性、スキル、経験に基づく高度な候補者検索システム'
            : 'Advanced candidate search system based on cultural fit, skills, and experience'
          }
        </p>
      </div>
    </div>
  )
}

export default CandidateDiscovery

