import { testimonials } from '../../data/testimonials'
import TestimonialCard from '../cards/TestimonialCard'
import SectionHeader from '../ui/SectionHeader'

export default function Testimonials() {
  return (
    <section className="sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <SectionHeader
          label="CLIENT VOICES"
          title={"WHAT OUR\nCLIENTS SAY"}
          subtitle="Results that speak louder than promises."
        />
        <div className="grid-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
