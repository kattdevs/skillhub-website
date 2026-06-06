import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  { num: '01', title: 'End-to-End Solutions', body: 'From strategy and design to implementation, support, and optimisation - complete digital solutions under one roof. No hand-offs, no gaps.' },
  { num: '02', title: 'Innovation-Focused', body: 'We leverage the latest technologies and best practices to deliver future-ready solutions that keep your organisation ahead of the curve.' },
  { num: '03', title: 'Security & Reliability', body: 'We prioritise cybersecurity, data protection, and system reliability in every project - because trust is the foundation of everything we build.' },
  { num: '04', title: 'Client-Centred', body: 'We work closely with our clients to develop solutions aligned with their goals, budget, and long-term vision. Your success is our benchmark.' },
]

export default function FeatureSection() {
  return (
    <section id="why-us" style={{ background: '#fff', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}
            className="feature-sticky"
            style={{ position: 'sticky', top: '6rem' }}
          >
            <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '3/4', position: 'relative' }}>
              <img src="/feature-mono.jpg" alt="SkillHub capability" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>

          {/* Right: features */}
          <div>
            <div className="s-label"><span>WHY SKILLHUB</span></div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em', color: '#0a0a0a', lineHeight: 1.05, textTransform: 'uppercase', marginBottom: '3rem' }}>
              WHY CHOOSE US
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {features.map((f, i) => (
                <motion.div key={f.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}
                  style={{ padding: '2rem 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: '#ccc', marginTop: 3, minWidth: 24 }}>{f.num}</span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: '#0a0a0a', letterSpacing: '-0.02em', marginBottom: 8 }}>{f.title}</h3>
                      <p style={{ fontSize: 14, color: '#888', lineHeight: 1.75 }}>{f.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .4 }} style={{ marginTop: '2.5rem' }}>
              <Link to="/contact" className="btn-dark" style={{ padding: '13px 28px', borderRadius: 999, fontSize: 13, letterSpacing: '0.06em' }}>
                START A PROJECT <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
