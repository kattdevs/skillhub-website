import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import { ArrowRight } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <PageLayout title="Page Not Found">
      <section style={{ background: 'var(--bg)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '6rem' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(6rem,20vw,14rem)', letterSpacing: '-0.06em', color: 'rgba(0,0,0,0.06)', lineHeight: 1 }}>404</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.04em', color: '#0a0a0a', marginTop: '-1rem', marginBottom: '1rem' }}>
              Page not found
            </h1>
            <p style={{ fontSize: 16, color: '#888', maxWidth: 360, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="btn-dark" style={{ padding: '13px 28px', borderRadius: 999, fontSize: 13, letterSpacing: '0.06em' }}>
                GO HOME <ArrowRight size={13} />
              </Link>
              <Link to="/contact" className="btn-outline-dark" style={{ padding: '13px 28px', borderRadius: 999, fontSize: 13, letterSpacing: '0.06em' }}>
                CONTACT US
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
