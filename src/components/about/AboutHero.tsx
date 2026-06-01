import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import Counter from '../Counter';
import { ImageWithSkeleton } from '../ui/Skeleton';

export const AboutHero = () => (
  <>
    <section className="relative pt-8 pb-12 bg-[#fdfdfc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm md:text-xs mb-4 block text-center md:text-left">Our Heritage & Future</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 leading-[0.9] px-4 md:px-0 text-center md:text-left">
              Best Technical Training in <span className="text-amber-500 underline decoration-2 underline-offset-8">Lucknow.</span>
            </h1>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -z-10 translate-x-1/2 blur-[100px] rounded-full" />
    </section>

    <section className="px-6 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square md:aspect-[16/9] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl relative"
            >
              <ImageWithSkeleton 
                src="/Images/college.jpeg" 
                alt="Campus" 
                className="w-full h-full object-cover transition-all duration-700" 
                aspectRatio="aspect-square md:aspect-[16/9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20" />
            </motion.div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-[10px] text-gray-400">Legacy of</h4>
                  <p className="font-black text-gray-900 leading-none">Excellence</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Empowering the next generation of industrial trainers through rigorous pedagogical training and cutting-edge technical workshops.
              </p>
            </motion.div>
            <div className="bg-amber-500 p-8 md:p-12 rounded-3xl md:rounded-[40px] text-black shadow-xl shadow-amber-500/10">
              <p className="text-4xl font-black mb-4"><Counter value="8+" /></p>
              <p className="font-bold tracking-tight text-xl leading-tight">Years of preparing world-class technical educators.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
