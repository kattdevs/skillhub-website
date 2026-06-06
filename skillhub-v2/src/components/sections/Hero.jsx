import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { stats } from '../../data/siteConfig'

function StatItem({ stat }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <div ref={ref}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(1.6rem,3.5vw,2.8rem)',
        letterSpacing: '-0.04em', color: '#0a0a0a', lineHeight: 1,
      }}>
        {inView ? <CountUp end={stat.value} duration={2} suffix={stat.suffix} /> : `0${stat.suffix}`}
      </div>
      <div style={{ fontSize: 10, color: '#999', letterSpacing: '0.14em', marginTop: 4, fontWeight: 500 }}>
        {stat.label}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{
      background: 'var(--bg)', minHeight: '100vh',
      paddingTop: '6rem', position: 'relative', overflow: 'hidden',
    }}>
      <div className="wrap">
        {/* ── Headline row ── */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1.5rem',
          paddingTop: '2.5rem',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: '1 1 260px' }}
          >
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(3.5rem,12vw,11rem)',
              letterSpacing: '-0.04em', lineHeight: .92,
              color: '#0a0a0a', textTransform: 'uppercase',
            }}>
              DIGITAL<br />AGENCY
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7, delay: .3 }}
            style={{
              display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
              gap: '1.5rem 2rem', paddingTop: '0.5rem',
              flex: '0 1 auto',
            }}
          >
            {stats.hero.map(s => <StatItem key={s.label} stat={s} />)}
          </motion.div>
        </div>

        {/* ── Hero image ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .9, delay: .2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: '2rem', position: 'relative',
            borderRadius: 'clamp(12px,2vw,24px)', overflow: 'hidden',
            height: 'clamp(260px,50vw,680px)',
          }}
        >
          <img
            src="/hero-structure.jpg" alt="SkillHub Digital Agency"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)',
          }} />

          {/* Caption pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .6 }}
            style={{
              position: 'absolute', bottom: 'clamp(14px,3vw,28px)',
              left: 'clamp(14px,3vw,28px)',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 12, padding: 'clamp(10px,1.5vw,14px) clamp(12px,2vw,18px)',
              maxWidth: 'min(320px, calc(100% - 80px))',
            }}
          >
            <div style={{
              fontSize: 10, fontWeight: 700, color: '#fff',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4,
            }}>
              BUILDING AFRICA'S DIGITAL FUTURE
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
              SkillHub partners with businesses, governments and institutions to design, build, secure and grow modern digital products.
            </div>
          </motion.div>

          <div style={{
            position: 'absolute',
            bottom: 'clamp(14px,3vw,28px)',
            right: 'clamp(14px,3vw,28px)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.4)' }} />
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Scroll
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
