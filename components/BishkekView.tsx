export default function BishkekView() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center border-y-4 border-brand-frame">
      <div className="absolute inset-0">
        <img 
          src="/bishkek_mountain_view.png" 
          alt="Beautiful Bishkek City with Majestic Mountains" 
          className="w-full h-full object-cover transition-transform duration-[10000ms] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block px-6 py-2 bg-brand-blue/90 rounded-full mb-6 border border-white/20 backdrop-blur-sm">
          <span className="text-white font-bold tracking-widest uppercase text-sm">Location</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-inter font-extrabold text-white mb-6 drop-shadow-xl">
          Welcome to <span className="text-brand-accent">Bishkek</span>
        </h2>
        <p className="text-lg md:text-2xl text-slate-200 font-medium drop-shadow-lg leading-relaxed max-w-3xl mx-auto">
          A vibrant, modern capital surrounded by the majestic Tian Shan mountains. 
          Experience a beautiful and safe environment for your medical journey.
        </p>
      </div>
    </section>
  )
}
