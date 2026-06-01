import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { ImageWithSkeleton } from '../ui/Skeleton';
import { leadershipMessages } from '../../data/homeData';

export const Leadership = () => (
  <section className="py-16 lg:py-24 bg-[#fdfdfb]">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16 text-black">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-amber-500 font-bold uppercase tracking-widest text-[10px] mb-4 block"
        >
          Our Visionary Team
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold tracking-tighter text-black leading-tight"
        >
          Message from the <br /> Administration
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leadershipMessages.map((leader, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm transition-all group"
          >
            <div className="p-4 pb-0">
              <div className="aspect-[4/5] relative overflow-hidden rounded-[24px] shadow-md">
                <ImageWithSkeleton 
                  src={leader.image} 
                  alt={leader.role}
                  className="w-full h-full object-cover transition-all duration-700"
                  aspectRatio="aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 z-20" />
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <p className="text-amber-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2">{leader.role}</p>
                  <p className="text-white font-black text-xl md:text-2xl tracking-tight leading-none">{leader.name}</p>
                </div>
              </div>
            </div>
            <div className="p-6 relative min-h-[160px] flex flex-col justify-center">
              <Quote className="w-8 h-8 text-amber-500/10 absolute top-4 right-6 rotate-180" />
              <p className="text-gray-600 text-sm md:text-base leading-relaxed italic relative z-10">
                "{leader.quote}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
