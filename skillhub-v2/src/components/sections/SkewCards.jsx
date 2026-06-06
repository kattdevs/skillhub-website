import { featuredServices } from '../../data/services'
import ServiceCard from '../cards/ServiceCard'

export default function SkewCards() {
  return (
    <section style={{ background: 'var(--bg)', padding: '5rem 0' }}>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '3rem' }}>
          <div style={{ width: 20, height: 1, background: '#888' }} />
          <span style={{ fontSize: 11, letterSpacing: '0.18em', color: '#888', textTransform: 'uppercase', fontWeight: 500 }}>THREE PILLARS</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
