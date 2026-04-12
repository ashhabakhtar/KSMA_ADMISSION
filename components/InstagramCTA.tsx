'use client'

export default function InstagramCTA() {
  return (
    <a
      href="https://www.instagram.com/dr.lazyyy"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-24 left-6 md:left-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-all duration-300 hover:shadow-pink-500/50"
      aria-label="Follow KSMA on Instagram"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="18" cy="6" r="1"></circle>
      </svg>
    </a>
  )
}
