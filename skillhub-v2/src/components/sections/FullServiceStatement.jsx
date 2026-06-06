import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function FullServiceStatement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const color1 = useTransform(scrollYProgress, [0, 0.5], ['#0a0a0a', '#0a0a0a'])
  const color2 = useTransform(scrollYProgress, [0, 0.4, 0.8], ['#ccc', '#999', '#0a0a0a'])

  return (
    <section ref={ref} style={{ background: 'var(--bg)', padding: '7rem 0', overflow: 'hidden' }}>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '2rem' }}>
          <div style={{ width: 20, height: 1, background: '#888' }} />
          <span style={{ fontSize: 11, letterSpacing: '0.18em', color: '#888', textTransform: 'uppercase', fontWeight: 500 }}>Full Service</span>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.9rem,6.5vw,6.5rem)', letterSpacing: '-0.04em', lineHeight: 1.0, textTransform: 'uppercase' }}>
          <motion.span style={{ color: color1, display: 'block' }}>
            A FULL-SERVICE<br />DIGITAL PARTNER,<br />SKILLHUB COMBINES
          </motion.span>
          <motion.span style={{ color: color2, display: 'block', marginTop: '0.15em' }}>
            ENGINEERING,<br />SECURITY, DATA AND<br />CREATIVE EXPERTISE.
          </motion.span>
        </div>
      </div>
    </section>
  )
}
