export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#1e40af', margin: '0 0 1rem 0' }}>
          🐅 aiKODA Platform
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#64748b', margin: '0 0 2rem 0' }}>
          Foundation - Solid Base Architecture
        </p>
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: '#059669', margin: '0.5rem 0' }}>✅ Next.js App Running</p>
          <p style={{ color: '#059669', margin: '0.5rem 0' }}>✅ Foundation Branch</p>
          <p style={{ color: '#059669', margin: '0.5rem 0' }}>✅ Clean Architecture</p>
        </div>
        <a 
          href="/candidates" 
          style={{
            backgroundColor: '#1e40af',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            display: 'inline-block',
            fontWeight: '600'
          }}
        >
          View Candidates
        </a>
      </div>
    </div>
  )
}