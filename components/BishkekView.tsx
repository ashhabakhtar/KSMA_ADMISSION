export default function BishkekView() {
  const galleryImages = [
    'https://image.shutterstock.com/image-photo/burana-tower-kyrgyzstan-near-town-tokmok-260nw-2531947737.jpg',
    'https://image.shutterstock.com/image-photo/kyrgyzstan-bishkek-july-11-2025-riverside-260nw-2665799543.jpg',
    'https://image.shutterstock.com/image-photo/historical-building-golden-dome-flag-kyrgyz-260nw-2583744991.jpg',
    'https://image.shutterstock.com/image-photo/nooruz-celebration-crowd-people-on-ala-260nw-2591892801.jpg'
  ]

  return (
    <section className="bg-brand-light py-24 px-4 border-y border-brand-frame/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Text and CTA */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          <div className="inline-block px-4 py-1.5 bg-brand-blue/10 rounded-full border border-brand-blue/20 w-fit">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-xs">Destination</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-inter font-extrabold text-slate-900 leading-tight">
            EXPLORE MORE ABOUT <br className="hidden sm:block" />
            <span className="text-brand-accent">KYRGYZSTAN</span>
          </h2>
          
          {/* Pickup Line */}
          <div className="pl-6 border-l-4 border-brand-accent my-4 bg-white/50 py-4 pr-4 rounded-r-xl shadow-sm">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 italic">
              “Study MBBS.<br />
              <span className="text-brand-blue">Live the Beauty of Kyrgyzstan.</span>”
            </p>
          </div>
          
          <p className="text-lg text-slate-700 font-medium leading-relaxed max-w-xl">
            A vibrant culture, safe modern cities like Bishkek, and breathtaking landscapes surrounded by the majestic Tian Shan mountains. Your ideal home to pursue an exceptional medical education while exploring the heart of Central Asia.
          </p>
          
          <div className="pt-4">
            <a 
              href="https://www.shutterstock.com/search/kyrgyzstan-architecture-and-landscapes?image_type=photo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-primary px-8 py-4 rounded-xl shadow-premium hover:-translate-y-1 transition-transform border-none font-bold text-lg"
            >
              <span>View More Gallery</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Half View Gallery Template */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 md:pt-12">
              <img 
                src={galleryImages[1]} 
                alt="Kyrgyzstan Nature" 
                className="w-full h-56 md:h-64 object-cover rounded-2xl shadow-soft border-[3px] border-white hover:scale-[1.02] transition-transform duration-300" 
              />
              <img 
                src={galleryImages[2]} 
                alt="Kyrgyzstan Lake" 
                className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-soft border-[3px] border-white hover:scale-[1.02] transition-transform duration-300" 
              />
            </div>
            <div className="flex flex-col gap-4">
              <img 
                src={galleryImages[0]} 
                alt="Bishkek City" 
                className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-soft border-[3px] border-white hover:scale-[1.02] transition-transform duration-300" 
              />
              <img 
                src={galleryImages[3]} 
                alt="Kyrgyzstan Mountains" 
                className="w-full h-56 md:h-64 object-cover rounded-2xl shadow-soft border-[3px] border-white hover:scale-[1.02] transition-transform duration-300" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
