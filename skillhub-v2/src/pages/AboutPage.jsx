import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import CTASection from '../components/ui/CTASection'
import Testimonials from '../components/sections/Testimonials'
import Industries from '../components/sections/Industries'
import { team } from '../data/team'
import { stats } from '../data/siteConfig'

function Stat({ s }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem,6vw,4rem)', letterSpacing: '-0.04em', color: '#fff' }}>
        {inView ? <CountUp end={s.value} duration={2} suffix={s.suffix} /> : `0${s.suffix}`}
      </div>
      <div style={{ fontSize: 12, color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
    </div>
  )
}

function AboutHero() {
  return (
    <section style={{ background: '#0a0a0a', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="s-label-dark"><span>WHO WE ARE</span></div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(3.5rem,10vw,8rem)', letterSpacing: '-0.04em', lineHeight: .92, color: '#fff', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
            INNOVATE.<br />SECURE.<br />TRANSFORM.<br />GROW.
          </h1>
          <p style={{ fontSize: 18, color: '#555', maxWidth: 560, lineHeight: 1.75, marginBottom: '3rem' }}>
            SkillHub Digital Agency is the technology and digital transformation division of SkillHub International - built to help organisations across Africa lead in the digital era.
          </p>
          <Link to="/contact" className="btn-white" style={{ padding: '13px 28px', borderRadius: 999, fontSize: 13, letterSpacing: '0.06em' }}>
            WORK WITH US <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '2rem', marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {stats.hero.map(s => <Stat key={s.label} s={s} />)}
        </div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="sec" style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="s-label"><span>OUR STORY</span></div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.2rem)', letterSpacing: '-0.04em', color: '#0a0a0a', lineHeight: 1.05, textTransform: 'uppercase' }}>
              BUILT FOR<br />AFRICA'S DIGITAL<br />FUTURE
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
            <p style={{ fontSize: 16, color: '#555', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              SkillHub Digital Agency was founded with a clear mission: to give African organisations access to world-class digital expertise - without the complexity, cost, or geographic limitations of international agencies.
            </p>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              We combine engineering rigour with creative excellence and deep local market insight. Our multidisciplinary team works across nine service verticals, giving clients a single accountable partner for their entire digital journey.
            </p>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.85 }}>
              From government departments and listed corporates to NGOs, universities, and growth-stage startups - we have served clients across more than 15 countries and delivered over 120 projects.
            </p>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2 }}
          style={{ marginTop: '4rem', borderRadius: 24, overflow: 'hidden', aspectRatio: '21/9', position: 'relative' }}>
          <img src="/about-visual.jpg" alt="SkillHub team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }} />
        </motion.div>
      </div>
    </section>
  )
}

function VisionMission() {
  return (
    <section style={{ background: '#0a0a0a', padding: '7rem 0' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20 }}>
            <div style={{ fontSize: 10, color: '#555', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 16 }}>OUR VISION</div>
            <p style={{ fontSize: 16, color: '#aaa', lineHeight: 1.8, fontStyle: 'italic' }}>
              To be Africa's leading digital transformation agency, empowering organisations through innovative technology, cybersecurity, cloud, data, learning, and marketing solutions that create lasting impact.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}
            style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20 }}>
            <div style={{ fontSize: 10, color: '#555', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 16 }}>OUR MISSION</div>
            <p style={{ fontSize: 16, color: '#aaa', lineHeight: 1.8, fontStyle: 'italic' }}>
              To deliver world-class digital solutions that enable organisations to innovate, grow, compete, and succeed in a rapidly evolving digital world.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2 }}
            style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20 }}>
            <div style={{ fontSize: 10, color: '#555', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 16 }}>OUR VALUES</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Excellence in every deliverable', 'Transparency with every client', 'Innovation as standard practice', 'Security as a foundation', 'Impact as the measure of success'].map(v => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#555', flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: '#666' }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section className="sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <div className="s-label"><span>OUR PEOPLE</span></div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem,5vw,4rem)', letterSpacing: '-0.04em', color: '#0a0a0a', lineHeight: 1, textTransform: 'uppercase', marginBottom: '4rem' }}>
          LEADERSHIP TEAM
        </h2>
        <div className="grid-4">
          {team.map((member, i) => (
            <motion.div key={member.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Avatar */}
              <div style={{ width: '100%', aspectRatio: '1', borderRadius: 20, background: `linear-gradient(135deg, ${member.accent}22, ${member.accent}44)`, border: `1px solid ${member.accent}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', color: member.accent }}>{member.initials}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: '#0a0a0a', letterSpacing: '-0.02em' }}>{member.name}</h3>
                <div style={{ fontSize: 11, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '3px 0 8px' }}>{member.role}</div>
                <p style={{ fontSize: 13, color: '#777', lineHeight: 1.7 }}>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <PageLayout title="About Us">
      <AboutHero />
      <Story />
      <VisionMission />
      <Team />
      <Testimonials />
      <Industries />
      <CTASection
        title="Let's build\nsomething great."
        subtitle="We'd love to learn about your organisation and explore how SkillHub can help."
        primaryLabel="GET IN TOUCH"
        primaryHref="/contact"
        secondaryLabel="EXPLORE SERVICES"
        secondaryHref="/services"
      />
    </PageLayout>
  )
}
