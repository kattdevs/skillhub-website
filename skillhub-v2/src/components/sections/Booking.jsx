import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_BOOKING_TEMPLATE = 'YOUR_BOOKING_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const slots = ['09:00','09:30','10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30']
const svcs   = ['Website Design & Development','Software & App Development','LMS & E-Learning','Cybersecurity Solutions','Cloud Services','Data Analytics & BI','Digital Transformation','Digital Marketing','Creative Design & Branding','General Enquiry']
const inp = { padding:'12px 16px', borderRadius:10, fontSize:14, width:'100%' }
const lbl = { display:'block', fontSize:11, color:'#999', marginBottom:6, textTransform:'uppercase', letterSpacing:'0.1em' }

export default function Booking() {
  const [form, setForm] = useState({ name:'',email:'',phone:'',company:'',service:'',date:'',time:'',notes:'' })
  const [status, setStatus] = useState('idle')
  const today = new Date().toISOString().split('T')[0]
  const set = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault(); setStatus('sending')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_BOOKING_TEMPLATE, { ...form, to_email:'hello@skillhub.africa' }, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm({ name:'',email:'',phone:'',company:'',service:'',date:'',time:'',notes:'' })
    } catch { setStatus('error') }
  }

  return (
    <section id="booking" className="sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: '4rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="s-label"><span>BOOK A CALL</span></div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em', color: '#0a0a0a', lineHeight: 1.05, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              LET'S TALK ABOUT YOUR DIGITAL FUTURE
            </h2>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: '2rem' }}>
              Book a free 30-minute discovery call. No obligation, no pressure - just a conversation about your goals.
            </p>
            {[{ icon: Calendar, text: 'Free 30-minute discovery call' }, { icon: Clock, text: 'Mon-Fri, 9am-4pm SAST' }, { icon: CheckCircle, text: 'Tailored recommendations for your organisation' }].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: '#f5f4f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={15} color="#0a0a0a" />
                </div>
                <span style={{ fontSize: 14, color: '#666' }}>{text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}
            style={{ background: 'var(--bg)', borderRadius: 24, padding: 32, border: '1px solid rgba(0,0,0,0.07)' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <CheckCircle size={26} color="#fff" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#0a0a0a', marginBottom: 8 }}>Booking Confirmed!</h3>
                <p style={{ color: '#888', fontSize: 14, lineHeight: 1.7, maxWidth: 260, margin: '0 auto 1.5rem' }}>We'll send a calendar invite to your email shortly.</p>
                <button onClick={() => setStatus('idle')} className="btn-outline-dark" style={{ padding: '9px 22px', borderRadius: 999, fontSize: 12, letterSpacing: '0.06em' }}>BOOK ANOTHER</button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div><label style={lbl}>Full Name *</label><input name="name" value={form.name} onChange={set} required placeholder="Jane Smith" style={inp} /></div>
                  <div><label style={lbl}>Email *</label><input type="email" name="email" value={form.email} onChange={set} required placeholder="jane@company.com" style={inp} /></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div><label style={lbl}>Phone</label><input name="phone" value={form.phone} onChange={set} placeholder="+27 XX XXX XXXX" style={inp} /></div>
                  <div><label style={lbl}>Organisation</label><input name="company" value={form.company} onChange={set} placeholder="Your Company" style={inp} /></div>
                </div>
                <div><label style={lbl}>Service *</label>
                  <select name="service" value={form.service} onChange={set} required style={inp}>
                    <option value="">Select a service...</option>
                    {svcs.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div><label style={lbl}>Date *</label><input type="date" name="date" value={form.date} onChange={set} min={today} required style={inp} /></div>
                  <div><label style={lbl}>Time *</label>
                    <select name="time" value={form.time} onChange={set} required style={inp}>
                      <option value="">Select time...</option>
                      {slots.map(t => <option key={t} value={t}>{t} SAST</option>)}
                    </select>
                  </div>
                </div>
                <div><label style={lbl}>Notes</label><textarea name="notes" value={form.notes} onChange={set} rows={3} placeholder="Tell us about your project..." style={{ ...inp, resize: 'none' }} /></div>
                {status === 'error' && <p style={{ color: '#e44', fontSize: 12 }}>Something went wrong. Please try again.</p>}
                <button type="submit" disabled={status === 'sending'} className="btn-dark"
                  style={{ padding: '14px', borderRadius: 12, fontSize: 13, letterSpacing: '0.06em', opacity: status === 'sending' ? .6 : 1 }}>
                  {status === 'sending' ? <><Loader2 size={14} className="spin" /> SENDING...</> : 'CONFIRM BOOKING →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
