import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, User } from 'lucide-react'
import { navLinks } from '../../data/siteConfig'
import { useScrolled } from '../../hooks/useScrolled'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(20)
  const { pathname } = useLocation()

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '12px 0' }}
    >
      <div className="wrap">
        <div
          className="nav-pill"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            borderRadius: 999,
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.1)' : undefined,
            transition: 'box-shadow .3s',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, color: '#fff' }}>S</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#0a0a0a', letterSpacing: '-0.02em' }}>SkillHub</span>
          </Link>

          {/* Desktop nav */}
          <nav className="d-nav" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navLinks.map((l) => {
              const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  style={{
                    padding: '7px 14px',
                    fontSize: 12,
                    color: active ? '#0a0a0a' : '#666',
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                    fontWeight: active ? 700 : 500,
                    borderRadius: 999,
                    background: active ? 'rgba(0,0,0,0.06)' : 'transparent',
                    transition: 'color .2s, background .2s',
                  }}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="d-cta" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link to="/contact" className="btn-dark" style={{ padding: '8px 20px', borderRadius: 999, fontSize: 13 }}>
              <User size={13} /> GET STARTED
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="m-toggle"
            style={{ display: 'none', width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,0,0,0.06)', border: 'none', cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              style={{ marginTop: 8, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 20, padding: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
            >
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '12px 16px', color: pathname === l.href ? '#0a0a0a' : '#666', textDecoration: 'none', fontSize: 13, letterSpacing: '0.06em', borderBottom: '1px solid rgba(0,0,0,0.05)', fontWeight: pathname === l.href ? 700 : 500 }}
                >
                  {l.label}
                </Link>
              ))}
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-outline-dark" style={{ flex: 1, padding: '11px 0', borderRadius: 999, fontSize: 12, textAlign: 'center', letterSpacing: '0.06em' }}>CONTACT</Link>
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-dark" style={{ flex: 1, padding: '11px 0', borderRadius: 999, fontSize: 12, textAlign: 'center', letterSpacing: '0.06em' }}>GET STARTED</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
