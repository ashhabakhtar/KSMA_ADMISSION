'use client'

export default function CTA() {
  return (
    <section className="py-24 px-4 bg-brand-light border-y border-brand-frame/50">
      <div className="max-w-4xl mx-auto text-center bg-white border-4 border-brand-frame rounded-3xl p-12 md:p-20 shadow-frame relative overflow-hidden">
        {/* Background Decorative Blue Rings */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 border-[30px] border-brand-light rounded-full z-0"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-48 h-48 border-[20px] border-brand-accent/20 rounded-full z-0"></div>

        <div className="relative z-10 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-brand-navy mb-6 tracking-tight">
            Ready to Secure Your MBBS Future?
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto font-medium">
            Join the July 2026 intake. Trust in a globally recognized government institution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto relative z-10">
          <a 
            href="tel:+918810894778"
            className="bg-brand-light border-2 border-brand-frame text-brand-blue font-bold text-lg md:text-xl py-6 px-8 rounded-2xl hover:bg-white hover:border-brand-blue hover:shadow-frame transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span className="text-2xl">📞</span> Free Counselling
          </a>
          <a 
            href="https://wa.me/917267848657"
            className="bg-brand-blue text-white font-bold text-lg md:text-xl py-6 px-8 rounded-2xl shadow-md hover:bg-white hover:text-brand-blue hover:border-brand-blue border-2 border-transparent hover:shadow-frame transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Now
          </a>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-brand-frame relative z-10">
          <p className="text-lg md:text-xl font-bold text-slate-600 font-jakarta uppercase tracking-wide">
            +91 8810894778 | 5,000+ Profiles | 100% Visa | Admissions 2026
          </p>
        </div>
      </div>
    </section>
  )
}
