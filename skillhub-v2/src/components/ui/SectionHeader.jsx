import { motion } from 'framer-motion'

/**
 * SectionHeader
 * @param {string} label   - small uppercase label (e.g. "WHAT WE DO")
 * @param {string} title   - large heading text (supports \n for line breaks)
 * @param {string} subtitle - optional body text on right/below
 * @param {boolean} dark   - use dark (white text) variant
 * @param {boolean} centered - center align
 */
export default function SectionHeader({ label, title, subtitle, dark = false, centered = false }) {
  const textColor = dark ? '#fff' : '#0a0a0a'
  const mutedColor = dark ? '#555' : '#888'
  const align = centered ? 'center' : 'left'

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: align }}
      >
        {label && (
          <div className={dark ? 's-label-dark' : 's-label'} style={centered ? { justifyContent: 'center' } : {}}>
            <span>{label}</span>
          </div>
        )}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2.5rem,5vw,4rem)',
          letterSpacing: '-0.04em',
          color: textColor,
          lineHeight: 1,
          textTransform: 'uppercase',
          whiteSpace: 'pre-line',
        }}>
          {title}
        </h2>
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 15, color: mutedColor, maxWidth: 340, lineHeight: 1.7, textAlign: centered ? 'center' : 'right' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
