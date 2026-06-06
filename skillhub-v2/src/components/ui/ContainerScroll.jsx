import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 0.5], [18, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1])

  return (
    <div ref={containerRef} style={{ padding: '6rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: 900, width: '100%', padding: '0 clamp(1.5rem,5vw,4rem)', textAlign: 'center', marginBottom: '2rem' }}>
        {titleComponent}
      </div>
      <motion.div
        style={{ rotate, scale, opacity, transformOrigin: 'top center', width: '100%', maxWidth: 900, padding: '0 clamp(1.5rem,5vw,4rem)' }}
      >
        <div style={{ height: 520, borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}
