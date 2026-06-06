import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { getIcon } from '../../utils/icons'

// --- SVG decorations adapted from reference ---------------------------------

const WaveDecoration = ({ color = 'rgba(255,255,255,0.15)', side = 'left' }) => (
  <svg
    width="100"
    height="1100"
    viewBox="0 0 129 1387"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      top: -80,
      [side]: side === 'left' ? -8 : -8,
      zIndex: 1,
      opacity: 1,
      pointerEvents: 'none',
    }}
  >
    <path
      d="M11.2131 11L106.283 106.07M106.283 106.07L117.279 117.066M106.283 106.07L22.2962 190.003M106.283 106.07L116.688 95.6708M11.2962 200.997L22.2962 190.003M22.2962 190.003L11.2529 178.96M22.2962 190.003L106.323 274.03M106.323 274.03L117.319 285.026M106.323 274.03L22.4537 357.846M106.323 274.03L116.728 263.631M11.3361 368.957L22.4537 357.846M22.4537 357.846L11.5493 346.901M22.4537 357.846L106.44 442.149M106.44 442.149L117.416 453.166M106.44 442.149L22.2962 525.925M106.44 442.149L116.865 431.769M11.2756 536.897L22.2962 525.925M22.2962 525.925L11.2737 514.861M22.2962 525.925L106.165 610.109M106.165 610.109L117.14 621.126M106.165 610.109L11 704.857M106.165 610.109L116.59 599.729M11.2131 683L106.283 778.07M106.283 778.07L117.279 789.066M106.283 778.07L22.2962 862.003M106.283 778.07L116.688 767.671M11.2962 872.997L22.2962 862.003M22.2962 862.003L11.2529 850.96M22.2962 862.003L106.323 946.03M106.323 946.03L117.319 957.026M106.323 946.03L22.4537 1029.85M106.323 946.03L116.728 935.631M11.3361 1040.96L22.4537 1029.85M22.4537 1029.85L11.5493 1018.9M22.4537 1029.85L106.44 1114.15M106.44 1114.15L117.416 1125.17M106.44 1114.15L22.2962 1197.92M106.44 1114.15L116.865 1103.77M11.2756 1208.9L22.2962 1197.92M22.2962 1197.92L11.2737 1186.86M22.2962 1197.92L106.165 1282.11M106.165 1282.11L117.14 1293.13M106.165 1282.11L11 1376.86M106.165 1282.11L116.59 1271.73"
      stroke={color}
      strokeWidth="31"
    />
  </svg>
)

const CrossDecoration = ({ color = 'rgba(255,255,255,0.12)', style: extraStyle = {} }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 130 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      zIndex: 1,
      pointerEvents: 'none',
      ...extraStyle,
    }}
  >
    <path d="M11 11L118.899 119M11.101 119L119 11" stroke={color} strokeWidth="28" />
  </svg>
)

// --- Main ServiceCard --------------------------------------------------------

/**
 * ServiceCard
 * Inspired by the reference pricing card design.
 * Uses SkillHub dark palette - no purple/blue overrides.
 *
 * @param {object} service  - from services data
 * @param {boolean} featured - larger display variant
 */
export default function ServiceCard({ service, featured = false }) {
  const Icon = getIcon(service.iconName)
  const isWaves = service.pattern === 'waves'

  // Build gradient from service data
  const bgGradient = `linear-gradient(135deg, ${service.gradientFrom} 0%, ${service.gradientTo} 100%)`

  // Decoration color - always white-toned to match site palette
  const decoColor = 'rgba(255,255,255,0.10)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      style={{ height: '100%' }}
    >
      <Link
        to={`/services`}
        state={{ highlight: service.slug }}
        className="svc-card"
        style={{
          minHeight: featured ? 480 : 420,
          background: bgGradient,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 20,
          color: '#fff',
          textDecoration: 'none',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* -- Wave / Cross decorations (from reference) -- */}
        {isWaves ? (
          <>
            <WaveDecoration color={decoColor} side="left" />
            <WaveDecoration color={decoColor} side="right" />
          </>
        ) : (
          <>
            <CrossDecoration color={decoColor} style={{ top: -20, left: -20, animation: 'spin 12s linear infinite' }} />
            <CrossDecoration color={decoColor} style={{ bottom: '30%', right: -24, animation: 'spin 9s linear infinite reverse' }} />
            <CrossDecoration color={decoColor} style={{ bottom: '8%', left: -10, animation: 'spin 15s linear infinite' }} />
          </>
        )}

        {/* -- Card content (layered above decorations) -- */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            gap: '0.75rem',
            flex: 1,
          }}
        >
          {/* Service number */}
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.16em' }}>
            {service.num}
          </span>

          {/* Icon */}
          <div style={{ width: 44, height: 44, borderRadius: 13, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={20} color="#fff" />
          </div>

          {/* Title - large, Syne bold like reference heading */}
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
            lineHeight: 1.05,
            color: '#fff',
            letterSpacing: '-0.02em',
            marginTop: '0.5rem',
          }}>
            {service.title}
          </h3>

          {/* Tagline - bold body text like reference paragraph */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: 'clamp(0.82rem, 1.5vw, 0.95rem)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.65,
            flex: 1,
          }}>
            {service.tagline}
          </p>

          {/* CTA button - white pill like reference "contact" button */}
          <div style={{ marginTop: 'auto' }}>
            <div
              style={{
                height: 48,
                width: '100%',
                background: 'rgba(255,255,255,0.92)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                color: '#0a0a0a',
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: '0.1em',
                transition: 'background .2s',
              }}
            >
              EXPLORE SERVICE <ArrowRight size={13} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
