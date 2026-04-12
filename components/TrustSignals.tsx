export default function TrustSignals() {
  return (
    <section className="py-24 px-4 bg-white border-t border-brand-frame/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
        {/* ROI Comparison Table */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-brand-frame shadow-soft">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">KSMA vs Private Colleges</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-brand-frame">
                  <th className="pb-4 pr-4 font-bold text-slate-500 uppercase text-xs tracking-wider">Parameter</th>
                  <th className="pb-4 text-center font-bold text-brand-blue uppercase text-xs tracking-wider">KSMA</th>
                  <th className="pb-4 text-center font-bold text-slate-400 uppercase text-xs tracking-wider">Private</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-frame/50 hover:bg-brand-light transition-colors">
                  <td className="py-5 pr-4 font-bold text-slate-700">Total Cost</td>
                  <td className="text-center font-bold text-emerald-600 text-lg">$24.9K</td>
                  <td className="text-center font-semibold text-rose-400">$75L+</td>
                </tr>
                <tr className="border-b border-brand-frame/50 hover:bg-brand-light transition-colors">
                  <td className="py-5 pr-4 font-bold text-slate-700">FMGE Pass Rate</td>
                  <td className="text-center font-bold text-emerald-600 text-lg">31.56%</td>
                  <td className="text-center font-medium text-slate-400">15-20%</td>
                </tr>
                <tr className="hover:bg-brand-light transition-colors">
                  <td className="py-5 pr-4 font-bold text-slate-700">Govt Protection</td>
                  <td className="text-center font-bold text-emerald-600">✅ Yes</td>
                  <td className="text-center font-medium text-slate-400">❌ No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-brand-frame shadow-soft md:col-span-2">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Complete Investment Breakdown</h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              { label: 'Year 1 Tuition + Hostel', amount: '$4,200', color: 'brand-blue' },
              { label: 'Years 2-6 Tuition', amount: '$18,000', color: 'emerald-600' },
              { label: 'Food (5 Years)', amount: '$2,100', color: 'brand-accent' },
              { label: 'One-Time Charges', amount: '$600', color: 'slate-800' }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-6 bg-brand-light rounded-2xl border-2 border-brand-frame hover:border-brand-accent hover:shadow-frame transition-all group">
                <span className="font-bold text-slate-700">{item.label}</span>
                <span className={`font-bold text-2xl text-${item.color}`}>
                  {item.amount}
                </span>
              </div>
            ))}
            <div className="md:col-span-2 p-8 bg-gradient-to-r from-brand-accent to-brand-blue rounded-2xl shadow-frame border-2 border-brand-frame text-center mt-4">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">TOTAL: $24,900</div>
              <div className="text-brand-light font-bold tracking-wide uppercase text-sm">Government Locked Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
