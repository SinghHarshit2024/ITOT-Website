import { motion } from 'motion/react';
import { Users, GraduationCap, Building2 } from 'lucide-react';

export const PlacementStats = () => (
  <section className="max-w-7xl mx-auto px-6 mb-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gray-900 p-8 rounded-[32px] text-white flex flex-col justify-between"
      >
        <Users className="w-8 h-8 text-amber-500 mb-4" />
        <div>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Total Trainees Applied</p>
          <h3 className="text-4xl font-black italic">1462</h3>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-amber-500 p-8 rounded-[32px] text-black flex flex-col justify-between"
      >
        < GraduationCap className="w-8 h-8 text-black mb-4" />
        <div>
          <p className="text-black/60 text-[10px] font-black uppercase tracking-widest mb-1">Total Selected</p>
          <h3 className="text-4xl font-black italic">250</h3>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-xl shadow-gray-200/40 flex flex-col justify-between"
      >
        <Building2 className="w-8 h-8 text-amber-600 mb-4" />
        <div>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Partner Companies</p>
          <h3 className="text-4xl font-black italic text-gray-900">06</h3>
        </div>
      </motion.div>
    </div>
  </section>
);
