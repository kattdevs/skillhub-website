import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { stats } from '../../data/siteConfig'

function StatItem({ stat }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <div ref={ref} style={{ marginBottom: '2rem' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.2rem,4vw,3rem)', letterSpacing: '-0.04em', color: '#0a0a0a', lineHeight: 1 }}>
        {inView ? <CountUp end={stat.value} duration={2} suffix={stat.suffix} /> : `0${stat.suffix}`}
      </div>
      <div style={{ fontSize: 11, color: '#999', letterSpacing: '0.14em', marginTop: 4, fontWeight: 500 }}>{stat.label}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '6rem', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        {/* Top row: headline + stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'flex-start', paddingTop: '3rem' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(5rem,14vw,11rem)', letterSpacing: '-0.04em', lineHeight: .92, color: '#0a0a0a', textTransform: 'uppercase' }}>
              DIGITAL<br />AGENCY
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .3 }}
            style={{ paddingTop: '1rem', minWidth: 200, textAlign: 'right' }}
          >
            {stats.hero.map(s => <StatItem key={s.label} stat={s} />)}
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .2, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: '2rem', position: 'relative', borderRadius: 24, overflow: 'hidden', height: 'clamp(400px,55vw,680px)' }}
        >
          <img src="/hero-structure.jpg" alt="SkillHub Digital Agency"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}
            style={{ position: 'absolute', bottom: 28, left: 28, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '12px 18px' }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>BUILDING AFRICA'S DIGITAL FUTURE</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', maxWidth: 260, lineHeight: 1.5 }}>SkillHub partners with businesses, governments and institutions to design, build, secure and grow modern digital products.</div>
          </motion.div>

          <div style={{ position: 'absolute', bottom: 28, right: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.4)' }} />
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Scroll</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
