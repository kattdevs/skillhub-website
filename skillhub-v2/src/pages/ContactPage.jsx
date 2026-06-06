import { motion } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import Contact from '../components/sections/Contact'
import Booking from '../components/sections/Booking'
import { siteConfig } from '../data/siteConfig'

function ContactHero() {
  return (
    <section style={{ background: '#0a0a0a', paddingTop: '10rem', paddingBottom: '5rem' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="s-label-dark"><span>GET IN TOUCH</span></div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(3.5rem,10vw,8rem)', letterSpacing: '-0.04em', lineHeight: .92, color: '#fff', textTransform: 'uppercase', marginBottom: '2rem' }}>
            LET'S BUILD<br />TOGETHER.
          </h1>
          <p style={{ fontSize: 18, color: '#555', maxWidth: 480, lineHeight: 1.75 }}>
            Whether you have a fully defined brief or just an idea - we'd love to hear from you. Our team typically responds within one business day.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      <ContactHero />
      <Contact />
      <Booking />
    </PageLayout>
  )
}
