import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from 'react-intersection-observer'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '5,000', suffix: '+', label: 'Alumni Doctors', color: 'brand-blue' },
  { value: '1,200', suffix: '+', label: 'Indian Students', color: 'brand-accent' },
  { value: '24.9', suffix: 'K', label: 'Total Cost $', color: 'slate-600' },
  { value: '100', suffix: '%', label: 'NMC Approved', color: 'brand-blue' },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (!inView || !ref.current) return

    const ctx = gsap.context(() => {
      stats.forEach((_, i) => {
        gsap.to(ref.current!.children[i], {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          delay: i * 0.1
        })
      })
    })

    return () => ctx.revert()
  }, [inView])

  return (
    <section ref={inViewRef} className="py-20 px-4 relative bg-brand-light border-y border-brand-frame/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" ref={ref}>
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="bg-white border-2 border-brand-frame shadow-soft rounded-2xl p-8 text-center group hover:shadow-frame hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              style={{ scale: 0.8, opacity: 0 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent/30 group-hover:bg-brand-accent transition-colors"></div>
              <div className={`text-4xl md:text-5xl font-bold mb-3 text-${stat.color}`}>
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-base md:text-lg font-medium text-slate-800 group-hover:text-brand-blue transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
