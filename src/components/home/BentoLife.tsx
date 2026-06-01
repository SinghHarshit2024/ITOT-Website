import { motion } from 'motion/react';
import { Zap, Utensils, Coffee } from 'lucide-react';
import { ImageWithSkeleton } from '../ui/Skeleton';

export const BentoLife = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-min md:auto-rows-[300px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-8 bg-gray-50 rounded-[40px] p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group border border-gray-100 shadow-sm min-h-[350px] md:min-h-0"
        >
          <ImageWithSkeleton 
            src="/Images/img1.jpeg" 
            alt="Life"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 md:transition-all md:duration-700"
            containerClassName="absolute inset-0"
            aspectRatio="h-full"
          />
          <div className="relative z-10">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Student Life</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-black max-w-xl leading-none">
              Growth Beyond <br /> the Classroom.
            </h2>
            <p className="text-gray-600 mt-6 max-w-lg text-base md:text-lg">
              At ITOT, training isn't just about technical trades. It's about building a community of future educators who lead with confidence.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-1 lg:col-span-4 bg-amber-500 rounded-[40px] p-10 flex flex-col items-center justify-center text-center text-black"
        >
          <Zap className="w-16 h-16 mb-6 animate-pulse" />
          <h3 className="text-3xl font-bold tracking-tighter leading-none mb-4">Hands-on Mastery</h3>
          <p className="font-medium opacity-80">90% of our curriculum focuses on practical implementation in real workshops.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-1 lg:col-span-4 bg-black rounded-[40px] overflow-hidden relative group"
        >
          <ImageWithSkeleton 
            src="/Images/classes/class13.webp" 
            alt="Workshop"
            loading="lazy"
            className="w-full h-full object-cover opacity-80 md:transition-transform md:duration-700"
            aspectRatio="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end z-20">
            <p className="text-white font-bold tracking-tight">Modern Labs</p>
            <p className="text-gray-400 text-sm">Equipped with the latest industry-standard tools.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-8 bg-[#fdfdfc] rounded-[40px] border border-gray-100 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 group shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex-shrink-0 grid grid-cols-2 gap-4">
            <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 transition-transform group-hover:rotate-6">
              <Utensils className="w-8 h-8" />
            </div>
            <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 transition-transform group-hover:-rotate-6">
              <Coffee className="w-8 h-8" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold tracking-tighter text-black mb-4">On-Campus Residences</h3>
            <p className="text-gray-500 leading-relaxed max-w-xl ">
              Safe and hygienic hostel facilities with modern amenities to ensure students can focus entirely on their growth.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["24/7 Security", "Common Room", "Medical Support", "Playground"].map((item) => (
                <span key={item} className="px-4 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-full border border-gray-100 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-100 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
