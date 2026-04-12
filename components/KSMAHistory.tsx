export default function KSMAHistory() {
  const history = [
    {
      year: '1939',
      title: 'Founded',
      description: 'I.K. Akhunbaev Kyrgyz State Medical Academy established as Kyrgyz Medical Institute.',
      icon: '🏛️'
    },
    {
      year: '1955',
      title: 'Renamed',
      description: 'Became Kyrgyz State Medical Institute, expanding clinical programs.',
      icon: '📜'
    },
    {
      year: '1992',
      title: 'WHO Recognition',
      description: 'Listed in World Directory of Medical Schools.',
      icon: '🌍'
    },
    {
      year: '1997',
      title: 'Academy Status',
      description: 'Elevated to Academy status with research facilities.',
      icon: '🎓'
    },
    {
      year: '2005',
      title: 'Modern Campus',
      description: 'New campus with advanced anatomy labs and hospital.',
      icon: '🏥'
    },
    {
      year: '2023',
      title: 'NMC Approved',
      description: 'Recognized by National Medical Commission India.',
      icon: '🇮🇳'
    }
  ]

  return (
    <section className="py-24 px-4 bg-brand-light border-y border-brand-frame/50 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-6 text-slate-900">
            Legacy of <span className="text-brand-blue">Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-800 max-w-3xl mx-auto font-medium">
            85+ years of medical education. A government institution with global recognition.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-brand-frame rounded-full z-0 hidden md:block"></div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {history.map((event, i) => (
              <div key={i} className="group flex flex-col items-center text-center bg-white border-2 border-brand-frame shadow-soft p-8 rounded-2xl hover:shadow-frame hover:-translate-y-2 transition-all relative z-10">
                <div className="w-20 h-20 bg-brand-light rounded-2xl flex items-center justify-center mb-6 border-2 border-transparent group-hover:border-brand-frame transition-all text-3xl">
                  {event.icon}
                </div>
                <div className="text-3xl font-bold text-brand-blue mb-3 group-hover:scale-110 transition-transform">
                  {event.year}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{event.title}</h3>
                <p className="text-slate-700 leading-relaxed font-medium">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white shadow-soft px-10 py-6 rounded-full border-2 border-brand-frame">
            <span className="text-4xl">🏆</span>
            <div className="text-left">
              <div className="text-3xl font-bold text-brand-blue">5,000+</div>
              <div className="text-slate-700 font-medium tracking-wide">Indian Alumni Doctors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
