import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { siteConfig } from '../../data/siteConfig'

const EMAILJS_SERVICE_ID      = 'YOUR_SERVICE_ID'
const EMAILJS_CONTACT_TEMPLATE = 'YOUR_CONTACT_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY      = 'YOUR_PUBLIC_KEY'

const budgets = ['Under R10,000','R10,000 - R50,000','R50,000 - R150,000','R150,000+','Prefer not to say']
const svcs    = ['Website Design & Development','Software & App Development','LMS & E-Learning','Cybersecurity','Cloud Services','Data Analytics','Digital Marketing','Creative Design','General Enquiry']
const inp = { padding:'12px 16px', borderRadius:10, fontSize:14, width:'100%' }
const lbl = { display:'block', fontSize:11, color:'#999', marginBottom:6, textTransform:'uppercase', letterSpacing:'0.1em' }

export default function Contact() {
  const [form, setForm] = useState({ name:'',email:'',phone:'',company:'',message:'',service:'',budget:'' })
  const [status, setStatus] = useState('idle')
  const set = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault(); setStatus('sending')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE, { ...form, to_email: siteConfig.email, reply_to: form.email }, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm({ name:'',email:'',phone:'',company:'',message:'',service:'',budget:'' })
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="sec" style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="s-label"><span>GET IN TOUCH</span></div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem,5vw,4rem)', letterSpacing: '-0.04em', color: '#0a0a0a', lineHeight: 1, textTransform: 'uppercase' }}>
              LET'S BUILD<br />YOUR DIGITAL<br />FUTURE
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 280 }}>
            {[
              { icon: Mail, label: 'EMAIL', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Phone, label: 'PHONE', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g,'')}` },
              { icon: MapPin, label: 'LOCATION', value: siteConfig.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: '#fff', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={14} color="#0a0a0a" strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontSize: 10, color: '#bbb', letterSpacing: '0.12em' }}>{label}</div>
                  {href ? <a href={href} style={{ fontSize: 13.5, color: '#555', textDecoration: 'none' }}>{value}</a>
                        : <span style={{ fontSize: 13.5, color: '#555' }}>{value}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: '#fff', borderRadius: 24, padding: 32, border: '1px solid rgba(0,0,0,0.07)' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <CheckCircle size={28} color="#fff" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: '#0a0a0a', marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: '#888', fontSize: 14, lineHeight: 1.7, maxWidth: 300, margin: '0 auto 1.5rem' }}>Thank you! We'll get back to you within 1-2 business days.</p>
                <button onClick={() => setStatus('idle')} className="btn-outline-dark" style={{ padding: '9px 22px', borderRadius: 999, fontSize: 12, letterSpacing: '0.06em' }}>SEND ANOTHER</button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12 }}>
                  <div><label style={lbl}>Full Name *</label><input name="name" value={form.name} onChange={set} required placeholder="Jane Smith" style={inp} /></div>
                  <div><label style={lbl}>Email *</label><input type="email" name="email" value={form.email} onChange={set} required placeholder="jane@company.com" style={inp} /></div>
                  <div><label style={lbl}>Phone</label><input name="phone" value={form.phone} onChange={set} placeholder="+27 XX XXX XXXX" style={inp} /></div>
                  <div><label style={lbl}>Organisation</label><input name="company" value={form.company} onChange={set} placeholder="Your Company" style={inp} /></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12 }}>
                  <div><label style={lbl}>Service Needed</label>
                    <select name="service" value={form.service} onChange={set} style={inp}>
                      <option value="">Select...</option>
                      {svcs.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div><label style={lbl}>Budget</label>
                    <select name="budget" value={form.budget} onChange={set} style={inp}>
                      <option value="">Select...</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
                <div><label style={lbl}>Message *</label>
                  <textarea name="message" value={form.message} onChange={set} required rows={4} placeholder="Tell us about your project, goals, and timeline..." style={{ ...inp, resize: 'none' }} />
                </div>
                {status === 'error' && <p style={{ color: '#e44', fontSize: 12 }}>Something went wrong. Email {siteConfig.email} directly.</p>}
                <button type="submit" disabled={status === 'sending'} className="btn-dark"
                  style={{ padding: '14px', borderRadius: 12, fontSize: 13, letterSpacing: '0.06em', opacity: status === 'sending' ? .6 : 1 }}>
                  {status === 'sending' ? <><Loader2 size={14} className="spin" /> SENDING...</> : <><Send size={14} /> SEND ENQUIRY</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
