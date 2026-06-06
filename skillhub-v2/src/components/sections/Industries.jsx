import { motion } from 'framer-motion'
import { industries } from '../../data/siteConfig'
import { getIcon } from '../../utils/icons'
import SectionHeader from '../ui/SectionHeader'

export default function Industries() {
  return (
    <section id="industries" className="sec" style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <SectionHeader
          label="WHO WE SERVE"
          title="INDUSTRIES"
          subtitle="Public, private, and civil sectors - solutions tailored to your unique context."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 2, background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 20, overflow: 'hidden' }}>
          {industries.map((ind, i) => {
            const Icon = getIcon(ind.iconName)
            return (
              <motion.div key={ind.label}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * .04 }}
                style={{ background: '#fff', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14, transition: 'background .2s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.background = '#f5f4f0'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                <Icon size={20} color="#0a0a0a" strokeWidth={1.5} />
                <span style={{ fontSize: 13.5, color: '#333', lineHeight: 1.4, fontWeight: 500 }}>{ind.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
