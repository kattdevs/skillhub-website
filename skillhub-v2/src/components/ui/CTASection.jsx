import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  title = "Ready to build\nyour digital future?",
  subtitle = "Let's talk about what SkillHub can do for your organisation.",
  primaryLabel = 'START A PROJECT',
  primaryHref = '/contact',
  secondaryLabel = 'VIEW SERVICES',
  secondaryHref = '/services',
  dark = true,
}) {
  const bg = dark ? '#0a0a0a' : '#fff'
  const textCol = dark ? '#fff' : '#0a0a0a'
  const mutedCol = dark ? '#555' : '#888'

  return (
    <section style={{ background: bg, padding: '7rem 0' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,7vw,6rem)', letterSpacing: '-0.04em', color: textCol, lineHeight: .95, whiteSpace: 'pre-line' }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontSize: 16, color: mutedCol, maxWidth: 420, lineHeight: 1.75 }}>{subtitle}</p>
          )}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to={primaryHref} className={dark ? 'btn-white' : 'btn-dark'} style={{ padding: '14px 32px', borderRadius: 999, fontSize: 13, letterSpacing: '0.08em' }}>
              {primaryLabel} <ArrowRight size={14} />
            </Link>
            {secondaryLabel && (
              <Link to={secondaryHref} className={dark ? 'btn-outline-dark' : 'btn-outline-dark'} style={{ padding: '14px 32px', borderRadius: 999, fontSize: 13, letterSpacing: '0.08em', borderColor: dark ? 'rgba(255,255,255,0.2)' : undefined, color: dark ? '#fff' : undefined }}>
                {secondaryLabel}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
