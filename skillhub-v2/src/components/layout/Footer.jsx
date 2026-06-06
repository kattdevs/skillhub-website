import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteConfig, footerServiceLinks, footerCompanyLinks } from '../../data/siteConfig'

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', color: '#fff' }}>
      {/* Big CTA */}
      <div className="wrap" style={{ padding: '8rem clamp(1.5rem,5vw,4rem) 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(3rem,10vw,8rem)', letterSpacing: '-0.04em', lineHeight: .95, color: '#fff', textTransform: 'lowercase', marginBottom: '2.5rem' }}>
            Let's build<br />your digital<br />future.
          </h2>
          <Link to="/contact" className="btn-white" style={{ padding: '14px 32px', borderRadius: 999, fontSize: 13, letterSpacing: '0.08em' }}>
            START A PROJECT →
          </Link>
        </motion.div>
      </div>

      {/* Footer nav */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="wrap" style={{ padding: '4rem clamp(1.5rem,5vw,4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '3rem', marginBottom: '4rem' }}>
            {/* Brand */}
            <div>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, textDecoration: 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: '#0a0a0a' }}>S</span>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#fff' }}>SkillHub</span>
              </Link>
              <p style={{ fontSize: 13, color: '#444', lineHeight: 1.75 }}>Technology and digital transformation division of SkillHub International.</p>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontSize: 10, color: '#444', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>SERVICES</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {footerServiceLinks.map((s) => (
                  <li key={s.label}>
                    <Link to={s.href} style={{ fontSize: 13.5, color: '#555', textDecoration: 'none', transition: 'color .2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = '#555'}
                    >{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ fontSize: 10, color: '#444', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>COMPANY</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {footerCompanyLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} style={{ fontSize: 13.5, color: '#555', textDecoration: 'none', transition: 'color .2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = '#555'}
                    >{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontSize: 10, color: '#444', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>CONTACT</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li><a href={`mailto:${siteConfig.email}`} style={{ fontSize: 13.5, color: '#555', textDecoration: 'none' }}>{siteConfig.email}</a></li>
                <li><span style={{ fontSize: 13.5, color: '#444' }}>{siteConfig.phone}</span></li>
                <li><span style={{ fontSize: 13.5, color: '#444' }}>{siteConfig.location}</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
            <p style={{ fontSize: 11, color: '#333', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{siteConfig.copyright}</p>
            <p style={{ fontSize: 11, color: '#333', letterSpacing: '0.08em' }}>INNOVATE · SECURE · TRANSFORM · GROW</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
