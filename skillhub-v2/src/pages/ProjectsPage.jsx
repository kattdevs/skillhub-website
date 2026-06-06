import { useState } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import ProjectCard from '../components/cards/ProjectCard'
import CTASection from '../components/ui/CTASection'
import { projects } from '../data/projects'

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

function ProjectsHero() {
  return (
    <section style={{ background: '#0a0a0a', paddingTop: '10rem', paddingBottom: '5rem' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="s-label-dark"><span>OUR WORK</span></div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem,9vw,8rem)', letterSpacing: '-0.04em', lineHeight: .92, color: '#fff', textTransform: 'uppercase', marginBottom: '2rem' }}>
            PROJECTS &<br />PORTFOLIO
          </h1>
          <p style={{ fontSize: 18, color: '#555', maxWidth: 520, lineHeight: 1.75 }}>
            A selection of projects that demonstrate our approach: strategy-led, technically rigorous, and built for lasting impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <PageLayout title="Projects & Portfolio">
      <ProjectsHero />

      <section className="sec" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          {/* Category filters */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 999,
                  fontSize: 12,
                  letterSpacing: '0.06em',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  background: activeCategory === cat ? '#0a0a0a' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#666',
                  transition: 'all .2s',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: '#aaa', padding: '4rem 0', fontSize: 15 }}>No projects in this category yet.</p>
          )}
        </div>
      </section>

      <CTASection
        title="Your project\ncould be next."
        subtitle="We'd love to hear about what you're building. Let's start a conversation."
        primaryLabel="START A PROJECT"
        primaryHref="/contact"
        secondaryLabel="VIEW OUR SERVICES"
        secondaryHref="/services"
      />
    </PageLayout>
  )
}
