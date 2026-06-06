const items = ['WEBSITE DESIGN', 'APP DEVELOPMENT', 'CYBERSECURITY', 'CLOUD SERVICES', 'DATA ANALYTICS', 'DIGITAL MARKETING', 'LMS & E-LEARNING', 'CREATIVE DESIGN', 'DIGITAL TRANSFORMATION']
const repeated = [...items, ...items]

export default function Marquee() {
  return (
    <div style={{ background: '#0a0a0a', padding: '18px 0', overflow: 'hidden', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
      <div className="ticker-inner" style={{ display: 'flex', gap: 0, width: 'max-content' }}>
        {repeated.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', color: '#fff', whiteSpace: 'nowrap', padding: '0 2rem' }}>{item}</span>
            <span style={{ color: '#444', fontSize: 16 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
