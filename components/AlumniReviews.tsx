export default function AlumniReviews() {
  const reviews = [
    {
      name: 'Dr. Aarav Sharma',
      year: 'KSMA 2019',
      review: 'KSMA gave me the foundation for FMGE success. Passed on first attempt! Clinical training was exceptional.',
      rating: 5,
      location: 'Mumbai, India'
    },
    {
      name: 'Dr. Priya Patel',
      year: 'KSMA 2021',
      review: 'Government protected fees saved my family ₹40 lakhs. Modern labs + English medium made learning easy.',
      rating: 5,
      location: 'Ahmedabad, India'
    },
    {
      name: 'Dr. Rahul Mehra',
      year: 'KSMA 2020',
      review: '5,000+ alumni network helped during internship. Bishkek is safe and beautiful city for students.',
      rating: 5,
      location: 'Delhi, India'
    },
    {
      name: 'Dr. Sneha Gupta',
      year: 'KSMA 2022',
      review: 'WHO/NMC approved degree accepted everywhere. KSMA faculty genuinely care about students.',
      rating: 5,
      location: 'Pune, India'
    }
  ]

  return (
    <section className="py-24 px-4 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-6 text-slate-900">
            Alumni Success Stories
          </h2>
          <p className="text-lg md:text-xl text-brand-blue max-w-2xl mx-auto font-bold tracking-wide">
            5,000+ Indian doctors trust their journey to KSMA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white border-2 border-brand-frame rounded-2xl p-8 hover:shadow-frame hover:border-brand-accent hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
              <div className="flex mb-4 gap-1">
                {[...Array(review.rating)].map((_, j) => (
                  <span key={j} className="text-amber-400 text-xl drop-shadow-sm">★</span>
                ))}
              </div>
              <p className="text-slate-800 font-medium leading-relaxed mb-6 italic flex-grow">
                "{review.review}"
              </p>
              <div className="border-t-2 border-brand-light pt-6 mt-auto">
                <h4 className="font-bold text-brand-blue text-lg">{review.name}</h4>
                <p className="text-sm text-slate-500 font-bold mt-1 uppercase tracking-wide">{review.year} | {review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
