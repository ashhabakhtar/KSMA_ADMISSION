'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skip hero-title animation - keep visible
      gsap.from('.hero-stat', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: "back.out(1.7)"
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden bg-brand-light">
      {/* Background abstract shape in light blues */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 -skew-x-12 transform origin-top-right z-0 hidden lg:block opacity-70"></div>

      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-inter font-bold leading-tight mb-6 text-slate-900">
              KSMA MBBS
              <span className="block text-4xl md:text-5xl text-brand-blue mt-2">Admission 2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-800 font-medium max-w-lg leading-relaxed">
              WHO/NMC Approved | <span className="font-bold text-brand-accent">5,000+</span> Alumni
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="hero-stat text-center p-4 rounded-xl bg-white border-2 border-brand-frame shadow-soft">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue">24.9K</div>
              <div className="text-sm text-slate-600 font-medium">Total Investment $</div>
            </div>
            <div className="hero-stat text-center p-4 rounded-xl bg-white border-2 border-brand-frame shadow-soft">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue">1939</div>
              <div className="text-sm text-slate-600 font-medium">Established</div>
            </div>
            <div className="hero-stat text-center p-4 rounded-xl bg-white border-2 border-brand-frame shadow-soft">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue">6 Years</div>
              <div className="text-sm text-slate-600 font-medium">MBBS Program</div>
            </div>
          </div>

          <form action="https://formsubmit.co/admissionksmabishkek@gmail.com" method="POST" className="bg-white p-8 md:p-10 max-w-md rounded-2xl shadow-frame border-2 border-brand-frame relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-accent rounded-t-xl"></div>
            <h3 className="text-2xl font-inter font-bold mb-6 text-center text-slate-900">Secure Your Seat Now</h3>
            <div className="space-y-4">
              <input type="hidden" name="_subject" value="New Admission Enquiry from Website!" />
              <input type="hidden" name="_template" value="table" />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                required
                className="w-full p-4 rounded-xl bg-brand-light border-2 border-brand-frame focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 focus:outline-none transition-all text-slate-800 placeholder-slate-500 font-medium"
              />
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                required
                className="w-full p-4 rounded-xl bg-brand-light border-2 border-brand-frame focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 focus:outline-none transition-all text-slate-800 placeholder-slate-500 font-medium"
              />
              <input 
                type="tel" 
                name="whatsapp_number"
                placeholder="WhatsApp Number" 
                required
                className="w-full p-4 rounded-xl bg-brand-light border-2 border-brand-frame focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 focus:outline-none transition-all text-slate-800 placeholder-slate-500 font-medium"
              />
              <select 
                name="neet_score"
                required
                aria-label="NEET Score"
                className="w-full p-4 rounded-xl bg-brand-light border-2 border-brand-frame focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 focus:outline-none transition-all text-slate-800 font-medium"
              >
                <option value="">NEET Score</option>
                <option>600+</option>
                <option>500-599</option>
                <option>400-499</option>
                <option>Below 400</option>
              </select>
              <button type="submit" className="btn-primary w-full mt-2">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-full flex flex-col justify-center">
          <div className="bg-white rounded-3xl p-4 shadow-frame border-4 border-white mx-auto w-full max-w-md relative z-10 transform lg:translate-x-8">
            <div className="w-full aspect-[4/5] bg-brand-light rounded-2xl flex items-center justify-center mb-0 overflow-hidden relative border-2 border-brand-frame">
              <img src="/hero-students.png" alt="Medical Students at KSMA" className="w-full h-full object-cover" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-brand-light');
              }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-1">Empowering Future Doctors</h3>
                <p className="text-brand-light font-medium text-sm">Join a legacy of medical excellence.</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Blue Elements */}
          <div className="absolute top-1/4 -right-12 w-32 h-32 bg-brand-accent/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-12 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="fixed top-6 right-6 z-40">
        <div className="bg-white px-6 py-3 flex items-center gap-3 shadow-frame rounded-full border-2 border-brand-frame">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
          <span className="font-bold text-brand-blue text-sm tracking-wide uppercase">Admissions Open 2026</span>
        </div>
      </div>
    </section>
  )
}
