import { MessageSquare, Brain, Target, Users } from 'lucide-react'

const InterviewPreparation = ({ language }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {language === 'ja' ? '面接準備' : 'Interview Preparation'}
        </h1>
        <p className="text-muted-foreground">
          {language === 'ja' ? 'AI面接ガイダンスと準備ツール' : 'AI interview guidance and preparation tools'}
        </p>
      </div>

      <div className="sap-card p-6">
        <h3 className="text-lg font-semibold mb-4">
          {language === 'ja' ? 'AI面接コーチング' : 'AI Interview Coaching'}
        </h3>
        <p className="text-muted-foreground">
          {language === 'ja' 
            ? '文化的知能に基づく個別面接準備とリアルタイムガイダンス'
            : 'Personalized interview preparation and real-time guidance based on cultural intelligence'
          }
        </p>
      </div>
    </div>
  )
}

export default InterviewPreparation

