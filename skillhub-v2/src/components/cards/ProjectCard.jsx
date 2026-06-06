import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="card-light"
      style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'default' }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <span style={{ fontSize: 10, color: '#bbb', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>{project.year}</span>
          <div style={{ fontSize: 11, color: project.accent, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, marginTop: 2 }}>{project.category}</div>
        </div>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: project.accent, marginTop: 4, flexShrink: 0 }} />
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: '#0a0a0a', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
        {project.title}
      </h3>

      {/* Client */}
      <p style={{ fontSize: 12, color: '#aaa', fontStyle: 'italic' }}>{project.client}</p>

      {/* Description */}
      <p style={{ fontSize: 13.5, color: '#666', lineHeight: 1.7, flex: 1 }}>{project.description}</p>

      {/* Outcomes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {project.outcomes.map((o) => (
          <div key={o} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: '#444' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: project.accent, flexShrink: 0 }} />
            {o}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
        {project.tags.map((t) => (
          <span key={t} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 999, background: 'rgba(0,0,0,0.05)', color: '#666', letterSpacing: '0.06em' }}>{t}</span>
        ))}
      </div>
    </motion.div>
  )
}
