export default function AcademicPage() {
  const curriculum = [
    { year: 1, subjects: 'Anatomy, Physiology, Biochemistry', clinical: false },
    { year: 2, subjects: 'Pathology, Microbiology, Pharmacology', clinical: false },
    { year: 3, subjects: 'Community Medicine, Ophthalmology, ENT', clinical: true },
    { year: 4, subjects: 'Medicine, Surgery, Pediatrics, Orthopedics', clinical: true },
    { year: 5, subjects: 'Obstetrics & Gynecology, Dermatology', clinical: true },
    { year: 6, subjects: 'Internship & Thesis', clinical: true }
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-inter font-bold text-center mb-24 bg-gradient-to-r from-oxygen-blue to-white bg-clip-text text-transparent">
          6-Year MBBS Curriculum
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {curriculum.map((semester, i) => (
            <div key={i} className="glass-card p-8 hover:scale-105 transition-all group">
              <div className="text-4xl mb-6">{semester.year}Yr</div>
              <h3 className="text-2xl font-bold mb-4 text-oxygen-blue">{semester.subjects}</h3>
              <div className={`px-4 py-2 rounded-full text-sm font-bold ${semester.clinical ? 'bg-green-500/20 text-green-400 border-green-400/50' : 'bg-gray-700/50 text-gray-400'}`}>
                {semester.clinical ? 'Clinical Rotation' : 'Pre-Clinical'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
