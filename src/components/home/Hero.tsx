import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithSkeleton } from '../ui/Skeleton';
import { homeImages } from '../../data/homeData';

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % homeImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero-section" className="relative bg-[#fdfdfc] overflow-hidden pt-0">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-amber-50/50 rounded-full blur-[100px] lg:blur-[120px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-amber-100/30 skew-x-12 -translate-x-24 hidden lg:block pointer-events-none" />
      
      <div className="relative z-45 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-16 items-center w-full py-4 sm:py-6 md:py-8 lg:py-0 lg:min-h-[85vh]">
        
        {/* Image Column - Top on Mobile, Right on Desktop */}
        <div className="w-full order-1 lg:order-2 mb-8 sm:mb-10 lg:mb-0 lg:flex lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:max-w-[420px] lg:aspect-square"
          >
            {/* Image Container with Responsive Heights */}
            <div 
              id="hero-image-slider" 
              className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-full rounded-2xl lg:rounded-2xl overflow-hidden shadow-2xl bg-gray-50 mb-6 lg:mb-0"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <ImageWithSkeleton 
                    src={homeImages[currentIndex].url} 
                    alt={homeImages[currentIndex].title}
                    className="w-full h-full object-cover"
                    aspectRatio="h-full"
                  />
                  {/* Subtle aesthetic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20" />
                </motion.div>
              </AnimatePresence>

              {/* Progress bar overlay for the current slide */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 z-20">
                <motion.div
                  key={currentIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="h-full bg-amber-500"
                />
              </div>
            </div>

            {/* Slider Indicators - Integrated for all screens below image */}
            <div className="flex items-center justify-center gap-3 mt-6 lg:mt-8">
              {homeImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 lg:h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-10 lg:w-12 bg-amber-500' : 'w-2 lg:w-3 bg-gray-200 hover:bg-gray-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Content Column - Below image on mobile, Left on Desktop */}
        <div className="w-full order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 mb-4 lg:mb-6">
              <div className="w-8 h-[1px] bg-amber-500 hidden sm:block" />
              <span className="text-amber-600 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em]">
                Empowering Future Educators
              </span>
            </div>
            
          <h1 id="hero-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-[1.1] lg:leading-[1.1] tracking-tighter mb-6 lg:mb-8 uppercase">
              STATE STAFF TRAINING & <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">RESEARCH Centre</span>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-500 mt-3 font-bold tracking-[0.2em] sm:tracking-[0.3em] leading-none">"ITOT, ALIGANJ, LUCKNOW"</div>
            </h1>
            
            <p className="text-gray-600 text-sm md:text-base lg:text-base max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-12 font-medium leading-relaxed">
              Transforming skilled technicians into master educators through industry-leading pedagogical training and advanced technical education in the heart of Uttar Pradesh.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4 lg:mb-8">
              <Link 
                 to="/about" 
                 className="w-full sm:w-auto px-8 lg:px-8 py-4 lg:py-4 bg-amber-500 text-black rounded-xl text-[10px] lg:text-[11px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3 group shadow-xl shadow-amber-500/20"
              >
                Explore Institute <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                 to="/courses" 
                 className="w-full sm:w-auto px-8 lg:px-8 py-4 lg:py-4 bg-white text-black border border-gray-200 rounded-xl text-[10px] lg:text-[11px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                View Courses
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
