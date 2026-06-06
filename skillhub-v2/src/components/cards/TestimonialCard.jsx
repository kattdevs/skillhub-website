import { motion } from 'framer-motion'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: 20,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        transition: 'box-shadow .3s, transform .3s',
      }}
      whileHover={{ y: -4 }}
    >
      {/* Quote mark */}
      <div style={{ fontFamily: 'Georgia, serif', fontSize: 48, lineHeight: 1, color: testimonial.accentColor, opacity: 0.6, marginBottom: -8 }}>"</div>

      {/* Quote text */}
      <p style={{ fontSize: 14.5, color: '#444', lineHeight: 1.8, flex: 1, fontStyle: 'italic' }}>
        {testimonial.quote}
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: `linear-gradient(135deg, ${testimonial.accentColor}33, ${testimonial.accentColor}66)`,
          border: `1px solid ${testimonial.accentColor}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: testimonial.accentColor }}>
            {testimonial.avatar}
          </span>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13.5, color: '#0a0a0a' }}>{testimonial.name}</div>
          <div style={{ fontSize: 11.5, color: '#999' }}>{testimonial.role} · {testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  )
}
