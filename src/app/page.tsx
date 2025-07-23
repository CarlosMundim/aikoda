export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0' }}>🐅</h1>
        <h2 style={{ fontSize: '2rem', color: '#1e40af', margin: '0 0 1rem 0' }}>
          Tiger Foundation SUCCESS!
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#64748b', margin: '0 0 2rem 0' }}>
          Solid base deployed - ready for Manus frontend magic!
        </p>
        <div style={{ 
          backgroundColor: '#dcfce7', 
          color: '#166534',
          padding: '1rem',
          borderRadius: '0.5rem',
          margin: '0 auto',
          maxWidth: '400px'
        }}>
          ✅ Next.js running<br/>
          ✅ Foundation branch<br/>
          ✅ No ESLint errors<br/>
          ✅ Ready for walls!
        </div>
      </div>
    </div>
  )
}