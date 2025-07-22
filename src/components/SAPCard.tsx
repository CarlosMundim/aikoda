import React from 'react'

interface SAPCardProps {
  title?: string
  children: React.ReactNode
  className?: string
  action?: React.ReactNode
  loading?: boolean
}

export function SAPCard({ title, children, className = '', action, loading = false }: SAPCardProps) {
  return (
    <div className={`sap-card ${className}`}>
      {title && (
        <div className="sap-card-header">
          <h3 className="sap-card-title">{title}</h3>
          {action && <div className="sap-card-action">{action}</div>}
          {loading && <div className="sap-loading"></div>}
        </div>
      )}
      <div className="sap-card-content">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="sap-loading"></div>
            <span className="ml-2 sap-caption">Loading...</span>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

export default SAPCard

