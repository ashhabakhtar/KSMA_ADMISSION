"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function RegulatoryUpdate() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          pin: true
        }
      })

      tl.fromTo('.roadmap-step', 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.2, duration: 1 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const timeline = [
    { date: '1939', event: 'KSMA Founded', status: '✅ Complete' },
    { date: '1992', event: 'WHO Listed', status: '✅ Complete' },
    { date: '2023', event: 'NMC Recognition', status: '✅ Complete' },
    { date: 'July 2026', event: 'New Regulations', status: '🔒 Protected' },
    { date: '2027+', event: 'FMGE Success', status: '📈 Ongoing' }
  ]

  return (
    <section ref={containerRef} className="py-16 px-4 relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto glass-card p-12 md:p-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-inter font-bold bg-gradient-to-r from-oxygen-blue to-purple-400 bg-clip-text text-transparent mb-6">
            July 2026 Update
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            KSMA is <span className="font-bold text-oxygen-blue">FULLY PROTECTED</span> under new regulations.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-oxygen-blue/30 to-purple-400/30 z-0"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-12">
              {timeline.slice(0, 3).map((step, i) => (
                <div key={i} className="roadmap-step flex items-start space-x-6 p-6 glassmorphism rounded-2xl hover:shadow-oxygen-blue/50 transition-all">
                  <div className="w-16 h-16 bg-oxygen-blue/20 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-oxygen-blue/50">
                    <span className="text-2xl font-bold">{step.date}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-oxygen-blue">{step.event}</h4>
                    <div className="text-sm font-medium px-3 py-1 bg-green-500/20 text-green-300 rounded-full inline-block">
                      {step.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-12">
              {timeline.slice(3).map((step, i) => (
                <div key={i} className="roadmap-step flex items-start space-x-6 p-6 glassmorphism rounded-2xl hover:shadow-oxygen-blue/50 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-yellow-400/50">
                    <span className="text-2xl font-bold">{step.date}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-yellow-400">{step.event}</h4>
                    <div className="text-sm font-medium px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full inline-block">
                      {step.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            <span className="font-bold text-oxygen-blue text-2xl">Government Protected Tuition Fees</span> – Locked in for 2026 compliance.
          </p>
          <button className="btn-primary text-lg px-12 py-6">
            Verify My Eligibility →
          </button>
        </div>
      </div>
    </section>
  )
}
