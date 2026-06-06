import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ErrorBoundary from '../ui/ErrorBoundary'

export default function PageLayout({ children, title }) {
  const { pathname } = useLocation()

  // Scroll to top on route change + set page title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (title) {
      document.title = `${title} | SkillHub Digital Agency`
    } else {
      document.title = 'SkillHub Digital Agency'
    }
  }, [pathname, title])

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <ErrorBoundary><Navbar /></ErrorBoundary>
      <main className="page-enter">
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
      <ErrorBoundary><Footer /></ErrorBoundary>
    </div>
  )
}
