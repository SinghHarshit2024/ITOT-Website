import { CheckCircle2 } from 'lucide-react';

export const QualityPolicy = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
         <div>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Commitment to Quality</span>
            <h2 className="text-4xl font-bold tracking-tighter mb-8 text-black">Our Quality Policy</h2>
            <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-[40px] text-gray-900 shadow-xl shadow-zinc-500/5 relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
               <div className="absolute inset-0 bg-gradient-to-tr from-white/80 to-transparent pointer-events-none" />
               <p className="text-xl leading-relaxed italic border-l-4 border-amber-500 pl-6 mb-8 text-gray-700 relative z-10">
                 "To provide consistent, high-quality vocational training through continuous improvement of our processes, infrastructure, and faculty expertise, ensuring total satisfaction of our stakeholders."
               </p>
               <ul className="space-y-4">
                  {[
                    "Continuous assessment of training effectiveness.",
                    "Upgradation of labs as per latest industrial tech.",
                    "Faculty development through national workshops.",
                    "Transparent and merit-based admission process."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" />
                      {item}
                    </li>
                  ))}
               </ul>
            </div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Skill Acquisition", desc: "Equipping trainees with hands-on technical skills." },
              { title: "Methodology", desc: "Teaching advanced pedagogical techniques for instructors." },
              { title: "Innovation", desc: "Encouraging problem-solving through project-based learning." },
              { title: "Employability", desc: "Ensuring 100% placement readiness for our graduates." }
            ].map((obj, i) => (
              <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-200 hover:bg-white hover:shadow-lg transition-all relative overflow-hidden group" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '15px 15px' }}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent group-hover:opacity-0 transition-opacity" />
                <h4 className="font-bold text-black mb-2 relative z-10">{obj.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed relative z-10">{obj.desc}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  </section>
);
