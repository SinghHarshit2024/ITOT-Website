import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export const PlacementHero = () => (
  <section className="relative h-[250px] lg:h-[320px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        className="w-full h-full object-cover opacity-20"
        loading="lazy"
        alt="Placement backdrop"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
    </div>
    
    <div className="relative z-10 text-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold tracking-widest uppercase mb-4"
      >
        <Briefcase className="w-3 h-3" />
        Career Success
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl lg:text-6xl font-black tracking-tighter text-gray-900 mb-4 uppercase"
      >
        Placement <span className="text-amber-600">Details</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto font-medium"
      >
        Session 2024-25: Empowering our trainees with career opportunities in leading industries.
      </motion.p>
    </div>
  </section>
);
