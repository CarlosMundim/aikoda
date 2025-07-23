'use client'

import { useEffect, useState } from 'react'

interface Candidate {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  nationality?: string
  location?: string
  position?: string
  experience?: number
}

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCandidates()
  }, [])

  async function fetchCandidates() {
    try {
      const response = await fetch('/api/candidates-foundation')
      if (response.ok) {
        const data = await response.json()
        setCandidates(data)
      } else {
        setError('Failed to load candidates')
      }
    } catch (err) {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Loading candidates...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#dc2626' }}>
        <p>Error: {error}</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#1e40af', margin: '0 0 0.5rem 0' }}>
          📋 Candidates
        </h1>
        <p style={{ color: '#64748b', margin: '0 0 1rem 0' }}>
          Foundation - Basic candidate listing
        </p>
        <a 
          href="/"
          style={{
            color: '#1e40af',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}
        >
          ← Back to Home
        </a>
      </div>

      {candidates.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem',
          backgroundColor: '#f8fafc',
          borderRadius: '0.5rem',
          border: '1px solid #e2e8f0'
        }}>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
            No candidates found. Database connection working - ready for data!
          </p>
        </div>
      ) : (
        <div style={{ 
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
        }}>
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#1e40af' }}>
                {candidate.firstName} {candidate.lastName}
              </h3>
              <p style={{ margin: '0.25rem 0', color: '#64748b', fontSize: '0.9rem' }}>
                📧 {candidate.email}
              </p>
              {candidate.phone && (
                <p style={{ margin: '0.25rem 0', color: '#64748b', fontSize: '0.9rem' }}>
                  📞 {candidate.phone}
                </p>
              )}
              {candidate.location && (
                <p style={{ margin: '0.25rem 0', color: '#64748b', fontSize: '0.9rem' }}>
                  📍 {candidate.location}
                </p>
              )}
              {candidate.position && (
                <p style={{ margin: '0.25rem 0', color: '#64748b', fontSize: '0.9rem' }}>
                  💼 {candidate.position}
                </p>
              )}
              {candidate.experience && (
                <p style={{ margin: '0.25rem 0', color: '#64748b', fontSize: '0.9rem' }}>
                  ⏱️ {candidate.experience} years experience
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}