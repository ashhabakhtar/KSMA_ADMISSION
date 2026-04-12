'use client'

export default function CallCTA() {
  return (
    <a
      href="tel:+918810894778"
      className="fixed bottom-6 left-6 md:left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-all duration-300 hover:shadow-green-500/50"
      aria-label="Call KSMA Admission"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    </a>
  )
}
