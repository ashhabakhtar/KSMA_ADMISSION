'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  'https://www.ksmaedutech.in/images/gal/college1.jpg',
  'https://www.ksmaedutech.in/images/gal/college2.jpg',
  'https://www.ksmaedutech.in/images/gal/college3.jpg',
  'https://www.ksmaedutech.in/images/gal/college4.jpg',
  'https://www.ksmaedutech.in/images/gal/class1.jpg',
  'https://www.ksmaedutech.in/images/gal/class2.jpg',
  'https://www.ksmaedutech.in/images/gal/class3.jpg',
  'https://www.ksmaedutech.in/images/gal/lab9.jpg',
  'https://www.ksmaedutech.in/images/gal/lab7.jpg',
  'https://www.ksmaedutech.in/images/gal/lab5.jpg',
  'https://www.ksmaedutech.in/images/gal/lab4.jpg',
  'https://www.ksmaedutech.in/images/gal/student-activities.jpg',
  'https://www.ksmaedutech.in/images/gal/students-activities2.jpg',
  'https://www.ksmaedutech.in/images/gal/students-activities3.jpeg',
  'https://www.ksmaedutech.in/images/gal/mess1.jpeg',
  'https://www.ksmaedutech.in/images/gal/mess2.jpeg',
  'https://www.ksmaedutech.in/images/gal/mess3.jpeg',
  'https://www.ksmaedutech.in/images/gal/mess4.jpeg',
  'https://www.ksmaedutech.in/images/gal/mess-cook.jpeg',
  'https://www.ksmaedutech.in/images/gal/class5.jpeg',
  'https://www.ksmaedutech.in/images/gal/class6.jpeg',
  'https://www.ksmaedutech.in/images/gal/class7.jpeg',
  'https://www.ksmaedutech.in/images/gal/college5.jpg',
  'https://www.ksmaedutech.in/images/gal/col-inside-1.jpg',
  'https://www.ksmaedutech.in/images/gal/col-inside-2.jpg',
  'https://www.ksmaedutech.in/images/gal/col-inside-3.jpg',
  'https://www.ksmaedutech.in/images/gal/col-inside-4.jpg',
  'https://www.ksmaedutech.in/images/gal/col-inside-5.jpg',
  'https://www.ksmaedutech.in/images/gal/lab1.jpg',
  'https://www.ksmaedutech.in/images/gal/lab2.jpg',
  'https://www.ksmaedutech.in/images/gal/lab3.jpg',
  'https://www.ksmaedutech.in/images/gal/lab6.jpg',
  'https://www.ksmaedutech.in/images/gal/lab8.jpg'
]

export default function KSMAGallery() {
  const [showAll, setShowAll] = useState(false)
  const visibleImages = showAll ? images : images.slice(0, 8)

  useEffect(() => {
    // Small timeout to allow the DOM to update when showAll changes
    setTimeout(() => {
      gsap.utils.toArray<HTMLElement>('.gallery-item').forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        )
      })
      ScrollTrigger.refresh()
    }, 50)
  }, [showAll])

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-brand-light rounded-full z-0 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-12 text-slate-900 border-b-4 border-brand-frame inline-block pb-2">
          Discover <span className="text-brand-blue">KSMA</span>
        </h2>
        
        <div className="bg-brand-light border-4 border-brand-frame shadow-frame rounded-3xl p-8 mb-12 max-w-2xl mx-auto hover:-translate-y-1 transition-all duration-300">
          <a
            href="https://www.instagram.com/dr.lazyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-6 btn-primary border-none py-5 px-10 rounded-2xl w-full sm:w-auto hover:bg-brand-blue hover:text-white hover:shadow-premium"
          >
            <img 
              src="/KSMA_ADMISSION/insta-logo.avif" 
              alt="Instagram Logo" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-md bg-white p-1 border-2 border-brand-frame"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="font-bold text-lg md:text-xl text-white tracking-wide">Follow Our Story</span>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-white p-6 md:p-10 rounded-3xl border-2 border-brand-frame shadow-soft">
          {visibleImages.map((src, i) => (
            <div key={i} className="gallery-item group relative overflow-hidden rounded-2xl shadow-sm border-2 border-brand-frame hover:border-brand-accent transition-all duration-300 bg-brand-light aspect-video md:aspect-[4/3]">
              <img 
                src={src}
                alt={`KSMA Bishkek Campus ${i+1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'text-brand-blue');
                  e.currentTarget.parentElement!.innerHTML += '<span class="font-bold text-center p-2">Image Temporarily Unavailable</span>';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-bold text-white text-sm md:text-lg tracking-wide shadow-sm">KSMA Bishkek</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="btn-primary py-4 px-10 shadow-frame border-2 border-brand-frame"
          >
            {showAll ? 'Show Less' : `View All Photos (${images.length})`}
          </button>
        </div>

        <div className="mt-12 p-6 max-w-md mx-auto bg-brand-light rounded-2xl border-2 border-brand-frame font-bold text-brand-blue">
          <p className="text-base md:text-lg">
            Join the community <span className="text-slate-900 ml-2">@dr.lazyyy</span>
          </p>
        </div>
      </div>
    </section>
  )
}
