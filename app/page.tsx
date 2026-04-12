'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import AlumniReviews from '@/components/AlumniReviews'
import TrustSignals from '@/components/TrustSignals'
import CTA from '@/components/CTA'
import KSMAHistory from '@/components/KSMAHistory'

import KSMAGallery from '@/components/KSMAGallery'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <KSMAGallery />
      <AlumniReviews />
      <KSMAHistory />
      <TrustSignals />
      <CTA />
    </>
  )
}
