import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'
import ServiceCard from '../components/cards/ServiceCard'
import CTASection from '../components/ui/CTASection'
import Marquee from '../components/sections/Marquee'
import { services } from '../data/services'
import { getIcon } from '../utils/icons'

// -- Hero banner ---------------------------------------------------------------
function ServicesHero() {
  return (
    <section style={{ background: 'var(--bg)', paddingTop: '10rem', paddingBottom: '5rem' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="s-label"><span>WHAT WE DO</span></div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem,9vw,8rem)', letterSpacing: '-0.04em', lineHeight: .92, color: '#0a0a0a', textTransform: 'uppercase', marginBottom: '2rem' }}>
            OUR<br />SERVICES
          </h1>
          <p style={{ fontSize: 18, color: '#666', maxWidth: 560, lineHeight: 1.75 }}>
            Nine service verticals. One integrated team. Everything your organisation needs to build, secure, grow, and lead in the digital era.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// -- Cards grid ----------------------------------------------------------------
function ServicesGrid() {
  return (
    <section style={{ background: 'var(--bg)', paddingBottom: '4rem' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// -- Detailed service rows ------------------------------------------------------
function ServiceDetail({ service, index }) {
  const Icon = getIcon(service.iconName)
  const isEven = index % 2 === 0

  return (
    <motion.div
      id={service.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      style={{
        padding: '5rem 0',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Info */}
          <div style={{ order: isEven ? 0 : 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={22} color="#fff" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, color: '#bbb', letterSpacing: '0.16em', textTransform: 'uppercase' }}>{service.num} / 09</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.03em', color: '#0a0a0a', lineHeight: 1.05, marginBottom: '1rem' }}>
              {service.title}
            </h2>
            <p style={{ fontSize: 15, color: '#666', lineHeight: 1.8, marginBottom: '2rem' }}>
              {service.description}
            </p>

            {/* Benefits */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>KEY BENEFITS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {service.benefits.map((b) => (
                  <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={11} color="#fff" />
                    </div>
                    <span style={{ fontSize: 14, color: '#444' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/contact" className="btn-dark" style={{ padding: '12px 24px', borderRadius: 999, fontSize: 13, letterSpacing: '0.06em' }}>
              ENQUIRE ABOUT THIS SERVICE <ArrowRight size={13} />
            </Link>
          </div>

          {/* What's included */}
          <div style={{ order: isEven ? 1 : 0 }}>
            <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 20, padding: '2rem' }}>
              <div style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>WHAT'S INCLUDED</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {service.items.map((item, i) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: i < service.items.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#0a0a0a', flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: '#444' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <PageLayout title="Services">
      <ServicesHero />
      <Marquee />
      <ServicesGrid />

      {/* Divider */}
      <div style={{ background: 'var(--bg)', padding: '4rem 0 0' }}>
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
            <div style={{ width: 20, height: 1, background: '#888' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.18em', color: '#888', textTransform: 'uppercase', fontWeight: 500 }}>SERVICE DETAILS</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em', color: '#0a0a0a', lineHeight: 1 }}>
            EXPLORE EACH SERVICE
          </h2>
        </div>
      </div>

      {/* Detailed rows */}
      <div style={{ background: 'var(--bg)' }}>
        {services.map((service, i) => (
          <ServiceDetail key={service.slug} service={service} index={i} />
        ))}
      </div>

      <CTASection
        title={"Ready to get\nstarted?"}
        subtitle="Tell us about your project and we'll recommend the right service combination for your goals."
        primaryLabel="BOOK A FREE CALL"
        primaryHref="/contact"
        secondaryLabel="VIEW OUR PROJECTS"
        secondaryHref="/projects"
      />
    </PageLayout>
  )
}

