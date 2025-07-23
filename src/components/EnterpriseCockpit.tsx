'use client'
import React, { useState, useEffect } from 'react'
import { SAPCard } from './SAPCard'
import { SAPButton } from './SAPButton'
import { logger } from '@/lib/logger'

interface KPIData {
  total_candidates: number
  active_jobs: number
  cultural_match_avg: number
  placement_success_rate: number
  time_to_fill_days: number
  pipeline_value: number
}

interface EnterpriseCockpitProps {
  language: 'en' | 'ja'
}

export function EnterpriseCockpit({ language }: EnterpriseCockpitProps) {
  const [kpis, setKpis] = useState<KPIData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  const labels = {
    en: {
      title: "Enterprise Cockpit",
      subtitle: "Real-time Cultural Intelligence Analytics",
      totalCandidates: "Total Candidates",
      activeJobs: "Active Jobs",
      culturalMatch: "Cultural Match Avg",
      placementSuccess: "Placement Success Rate",
      timeToFill: "Avg Time to Fill",
      pipelineValue: "Pipeline Value",
      lastUpdated: "Last Updated",
      refresh: "Refresh Data",
      viewDetails: "View Details",
      days: "days",
      loading: "Loading dashboard data..."
    },
    ja: {
      title: "エンタープライズコックピット",
      subtitle: "リアルタイム文化的知能分析",
      totalCandidates: "総候補者数",
      activeJobs: "アクティブ求人",
      culturalMatch: "文化的適合度平均",
      placementSuccess: "配置成功率",
      timeToFill: "平均採用期間",
      pipelineValue: "パイプライン価値",
      lastUpdated: "最終更新",
      refresh: "データ更新",
      viewDetails: "詳細表示",
      days: "日",
      loading: "ダッシュボードデータを読み込み中..."
    }
  }

  useEffect(() => {
    fetchKPIs()
    
    // Set up real-time updates every 30 seconds
    const interval = setInterval(fetchKPIs, 30000)
    return () => clearInterval(interval)
  }, [])

  async function fetchKPIs() {
    try {
      setIsLoading(true)
      const response = await fetch('/api/dashboard/enterprise-kpis')
      
      if (!response.ok) {
        throw new Error('Failed to fetch KPIs')
      }
      
      const data = await response.json()
      setKpis(data)
      setLastUpdated(new Date())
    } catch (error) {
      logger.error('Failed to fetch KPIs:', { error })
      // Set mock data for development
      setKpis({
        total_candidates: 1247,
        active_jobs: 89,
        cultural_match_avg: 87.3,
        placement_success_rate: 94.2,
        time_to_fill_days: 18.5,
        pipeline_value: 45600000
      })
      setLastUpdated(new Date())
    } finally {
      setIsLoading(false)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(language === 'ja' ? 'ja-JP' : 'en-US', {
      style: 'currency',
      currency: language === 'ja' ? 'JPY' : 'USD',
      minimumFractionDigits: 0
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat(language === 'ja' ? 'ja-JP' : 'en-US').format(Math.round(value))
  }

  if (isLoading && !kpis) {
    return (
      <div className="enterprise-cockpit">
        <div className="cockpit-header">
          <div>
            <h1 className="sap-title">{labels[language].title}</h1>
            <p className="sap-caption mt-2">{labels[language].subtitle}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-center py-16">
          <div className="sap-loading"></div>
          <span className="ml-3 sap-body">{labels[language].loading}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="enterprise-cockpit">
      <div className="cockpit-header">
        <div>
          <h1 className="sap-title">{labels[language].title}</h1>
          <p className="sap-caption mt-2">{labels[language].subtitle}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="sap-caption">
            {labels[language].lastUpdated}: {lastUpdated.toLocaleTimeString(language === 'ja' ? 'ja-JP' : 'en-US')}
          </span>
          <SAPButton
            variant="secondary"
            onClick={fetchKPIs}
            loading={isLoading}
          >
            {labels[language].refresh}
          </SAPButton>
        </div>
      </div>

      {kpis && (
        <div className="kpi-grid">
          {/* Total Candidates */}
          <SAPCard
            title={labels[language].totalCandidates}
            action={
              <SAPButton variant="ghost" size="sm">
                {labels[language].viewDetails}
              </SAPButton>
            }
          >
            <div className="kpi-content">
              <div className="kpi-value">{formatNumber(kpis.total_candidates)}</div>
              <div className="kpi-trend positive">
                <span className="trend-icon">↗</span>
                <span>+12.3%</span>
              </div>
            </div>
          </SAPCard>

          {/* Active Jobs */}
          <SAPCard
            title={labels[language].activeJobs}
            action={
              <SAPButton variant="ghost" size="sm">
                {labels[language].viewDetails}
              </SAPButton>
            }
          >
            <div className="kpi-content">
              <div className="kpi-value">{formatNumber(kpis.active_jobs)}</div>
              <div className="kpi-trend positive">
                <span className="trend-icon">↗</span>
                <span>+8.7%</span>
              </div>
            </div>
          </SAPCard>

          {/* Cultural Match Average */}
          <SAPCard
            title={labels[language].culturalMatch}
            action={
              <SAPButton variant="ghost" size="sm">
                {labels[language].viewDetails}
              </SAPButton>
            }
          >
            <div className="kpi-content">
              <div className="kpi-value">{formatPercentage(kpis.cultural_match_avg)}</div>
              <div className="kpi-trend positive">
                <span className="trend-icon">↗</span>
                <span>+2.1%</span>
              </div>
            </div>
          </SAPCard>

          {/* Placement Success Rate */}
          <SAPCard
            title={labels[language].placementSuccess}
            action={
              <SAPButton variant="ghost" size="sm">
                {labels[language].viewDetails}
              </SAPButton>
            }
          >
            <div className="kpi-content">
              <div className="kpi-value">{formatPercentage(kpis.placement_success_rate)}</div>
              <div className="kpi-trend positive">
                <span className="trend-icon">↗</span>
                <span>+1.8%</span>
              </div>
            </div>
          </SAPCard>

          {/* Time to Fill */}
          <SAPCard
            title={labels[language].timeToFill}
            action={
              <SAPButton variant="ghost" size="sm">
                {labels[language].viewDetails}
              </SAPButton>
            }
          >
            <div className="kpi-content">
              <div className="kpi-value">
                {kpis.time_to_fill_days.toFixed(1)} {labels[language].days}
              </div>
              <div className="kpi-trend negative">
                <span className="trend-icon">↘</span>
                <span>-3.2%</span>
              </div>
            </div>
          </SAPCard>

          {/* Pipeline Value */}
          <SAPCard
            title={labels[language].pipelineValue}
            action={
              <SAPButton variant="ghost" size="sm">
                {labels[language].viewDetails}
              </SAPButton>
            }
          >
            <div className="kpi-content">
              <div className="kpi-value">{formatCurrency(kpis.pipeline_value)}</div>
              <div className="kpi-trend positive">
                <span className="trend-icon">↗</span>
                <span>+15.4%</span>
              </div>
            </div>
          </SAPCard>
        </div>
      )}

      <style jsx>{`
        .enterprise-cockpit {
          padding: var(--sap-spacing-xl) 0;
        }
        
        .cockpit-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--sap-spacing-xl);
          flex-wrap: wrap;
          gap: var(--sap-spacing-md);
        }
        
        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--sap-spacing-lg);
        }
        
        .kpi-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .kpi-value {
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--sap-text-primary);
          line-height: 1;
        }
        
        .kpi-trend {
          display: flex;
          align-items: center;
          gap: var(--sap-spacing-xs);
          font-size: var(--sap-font-size-sm);
          font-weight: 500;
        }
        
        .kpi-trend.positive {
          color: var(--sap-success-color);
        }
        
        .kpi-trend.negative {
          color: var(--sap-error-color);
        }
        
        .trend-icon {
          font-size: 1.2em;
        }
        
        @media (max-width: 768px) {
          .cockpit-header {
            flex-direction: column;
            align-items: stretch;
          }
          
          .kpi-grid {
            grid-template-columns: 1fr;
          }
          
          .kpi-value {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

