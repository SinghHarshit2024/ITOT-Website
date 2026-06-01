import { Briefcase } from 'lucide-react';

export const PlacementPolicy = () => (
  <section className="max-w-7xl mx-auto px-6 mb-20">
    <div className="bg-amber-50 border border-amber-100 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
      <div className="relative z-10 max-w-3xl">
        <h3 className="text-2xl font-black text-amber-900 mb-4 uppercase tracking-tight">Placement Policy</h3>
        <p className="text-amber-800/80 font-medium leading-relaxed mb-6">
          SSTRC ITOT Lucknow is committed to facilitating professional growth for all our CITS trainees. Our dedicated placement cell works tirelessly to bridge the gap between skilled instructors and leading industrial organizations across India.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-amber-900/60 font-black uppercase text-[10px] tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Professional Training
          </div>
          <div className="flex items-center gap-2 text-amber-900/60 font-black uppercase text-[10px] tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Industry Tie-ups
          </div>
          <div className="flex items-center gap-2 text-amber-900/60 font-black uppercase text-[10px] tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Career Guidance
          </div>
        </div>
      </div>
      <Briefcase className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 text-amber-500/10 -mr-12" />
    </div>
  </section>
);
