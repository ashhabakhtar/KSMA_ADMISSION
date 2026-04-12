'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: '🏛️',
    title: '1939 Heritage',
    description: '85+ years medical excellence tradition.',
    color: 'brand-blue'
  },
  {
    icon: '📚',
    title: '6-Year MBBS',
    description: 'NMC compliant with clinical rotations.',
    color: 'slate-800'
  },
  {
    icon: '💰',
    title: '$24.9K Total',
    description: 'Government protected - 70% less than India.',
    color: 'brand-blue'
  },
  {
    icon: '🌍',
    title: 'WHO/NMC Approved',
    description: 'Global FMGE recognition guaranteed.',
    color: 'brand-accent'
  },
  {
    icon: '⚡',
    title: 'July 2026 Secure',
    description: 'Regulatory protected tuition rates.',
    color: 'slate-800'
  },
  {
    icon: '👨‍⚕️',
    title: '5,000+ Alumni',
    description: 'Proven track record of doctor success.',
    color: 'brand-blue'
  },
  {
    icon: '🏥',
    title: 'Modern Labs',
    description: 'Anatomy + clinical training facilities.',
    color: 'brand-accent'
  },
  {
    icon: '✈️',
    title: '100% Visa',
    description: 'Guaranteed visa processing success.',
    color: 'brand-blue'
  }
]

export default function Features() {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.feature-card').forEach((card, i) => {
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-frame rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-slate-900 mb-6">
            Why Choose <span className="text-brand-blue">KSMA 2026?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto font-medium">
            A legacy of medical excellence combined with guaranteed regulatory protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="feature-card bg-white border-2 border-brand-frame shadow-sm rounded-2xl p-8 hover:shadow-frame hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-5xl mb-6 bg-brand-light w-20 h-20 rounded-xl flex items-center justify-center border-2 border-transparent group-hover:border-brand-frame transition-colors">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 text-${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
