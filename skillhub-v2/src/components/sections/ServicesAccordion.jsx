import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { services } from '../../data/services'
import { getIcon } from '../../utils/icons'
import SectionHeader from '../ui/SectionHeader'

function Row({ s, i }) {
  const [open, setOpen] = useState(false)
  const Icon = getIcon(s.iconName)

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: i * .04 }}>
      <div
        onClick={() => setOpen(!open)}
        style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'opacity .2s' }}
        onMouseEnter={e => e.currentTarget.style.opacity = '.7'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: '#bbb', minWidth: 24 }}>{s.num}</span>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: open ? '#0a0a0a' : 'rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .3s', flexShrink: 0 }}>
          <Icon size={18} color={open ? '#fff' : '#0a0a0a'} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1rem,2vw,1.2rem)', color: '#0a0a0a', letterSpacing: '-0.02em' }}>{s.title}</h3>
        </div>
        <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {open ? <Minus size={13} color="#0a0a0a" /> : <Plus size={13} color="#0a0a0a" />}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: .35 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', padding: '1.5rem 0 2rem 64px' }}>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>{s.tagline}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem 1.5rem' }}>
                {s.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#555' }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#0a0a0a', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ServicesAccordion() {
  return (
    <section id="services" className="sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <SectionHeader
          label="WHAT WE DO"
          title="OUR SERVICES"
          subtitle="Nine service verticals. One team. Everything your organisation needs to win digitally."
        />
        <div>
          {services.map((s, i) => <Row key={s.slug} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
