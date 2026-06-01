import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { ImageWithSkeleton } from '../ui/Skeleton';
import { dignitaries } from '../../data/homeData';

export const Dignitaries = () => (
  <section className="py-24 bg-[#fdfaf6] relative overflow-hidden">
    {/* Decorative Background Elements */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/[0.03] -skew-x-12 translate-x-1/2 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-amber-500/[0.02] rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-4 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block"
          >
            Government Leadership
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl xl:text-5xl font-black tracking-tighter text-black leading-[1.1] mb-8 uppercase"
          >
            Honoring <br /> Visionary <br /> <span className="text-amber-500">Mentors.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
          >
            Under the guidance of our esteemed national and state leaders, we strive to make India the skill capital of the world through excellence in vocational training.
          </motion.p>
          
          <div className="hidden lg:flex items-center gap-4 text-amber-600 font-bold text-xs tracking-widest uppercase mt-12 bg-amber-50 w-fit px-6 py-3 rounded-full border border-amber-100">
            <ShieldCheck className="w-4 h-4" /> Skill India Mission
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {dignitaries.map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`flex flex-col items-center group ${i === 1 ? 'md:mt-24' : ''}`}
              >
                <div className="relative w-48 h-48 md:w-72 md:h-72 bg-white rounded-full p-1.5 border-2 border-amber-500/20 shadow-xl overflow-hidden mb-8">
                  <ImageWithSkeleton 
                    src={leader.image} 
                    alt={leader.name}
                    className={`w-full h-full object-cover rounded-full transition-all duration-1000 ${
                      leader.name.includes('Modi') ? 'object-top' : ''
                    }`}
                    aspectRatio="aspect-square"
                    containerClassName="rounded-full"
                  />
                </div>
                <div className="text-center">
                  <span className="text-amber-500 font-black uppercase tracking-[0.2em] text-[10px] block mb-2">{leader.role}</span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-black uppercase leading-tight">{leader.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
