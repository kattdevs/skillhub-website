import PageLayout from '../components/layout/PageLayout'
import Hero from '../components/sections/Hero'
import Marquee from '../components/sections/Marquee'
import FullServiceStatement from '../components/sections/FullServiceStatement'
import SkewCards from '../components/sections/SkewCards'
import ServicesAccordion from '../components/sections/ServicesAccordion'
import FeatureSection from '../components/sections/FeatureSection'
import About from '../components/sections/About'
import Testimonials from '../components/sections/Testimonials'
import Industries from '../components/sections/Industries'
import Booking from '../components/sections/Booking'
import Contact from '../components/sections/Contact'
import ErrorBoundary from '../components/ui/ErrorBoundary'

function S({ children }) {
  return <ErrorBoundary>{children}</ErrorBoundary>
}

export default function HomePage() {
  return (
    <PageLayout title="Building Digital Solutions. Driving Innovation.">
      <S><Hero /></S>
      <S><Marquee /></S>
      <S><FullServiceStatement /></S>
      <S><SkewCards /></S>
      <S><ServicesAccordion /></S>
      <S><FeatureSection /></S>
      <S><About /></S>
      <S><Testimonials /></S>
      <S><Industries /></S>
      <S><Booking /></S>
      <S><Contact /></S>
    </PageLayout>
  )
}
