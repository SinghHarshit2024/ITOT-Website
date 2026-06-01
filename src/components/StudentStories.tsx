import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { ImageWithSkeleton } from './ui/Skeleton';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Amit Kumar",
    role: "Current CITS Student",
    content: "The pedagogical training here is top-notch. I feel confident about my future as a technical instructor. The hands-on workshop experience is truly transformative.",
    image: "https://i.pravatar.cc/150?u=amit",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Alumni, ITI Instructor",
    content: "ITOT Lucknow provided me with the bridge I needed between my technical skills and teaching ability. The faculty support is exceptional even after graduation.",
    image: "https://i.pravatar.cc/150?u=priya",
    rating: 5
  },
  {
    name: "Rahul Verma",
    role: "Electrical Trade Student",
    content: "The workshop facilities and hands-on training are better than any other institute in the region. I've learned more here in 6 months than in years of theory.",
    image: "https://i.pravatar.cc/150?u=rahul",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    role: "CSA Trade Student",
    content: "The CSA lab is equipped with modern software and top-tier infrastructure. The learning environment is very conducive for girl students as well.",
    image: "https://i.pravatar.cc/150?u=anjali",
    rating: 4
  },
  {
    name: "Vikram Singh",
    role: "Workshop Supervisor",
    content: "The discipline and industry-standard safety protocols taught here are exactly what modern factories look for. Truly an elite training center.",
    image: "https://i.pravatar.cc/150?u=vikram",
    rating: 5
  },
  {
    name: "Sneha Reddy",
    role: "Placement Lead",
    content: "Seeing our students get placed in top ITIs and industries is the biggest reward. SSTRC prepares them for real-world challenges effectively.",
    image: "https://i.pravatar.cc/150?u=sneha",
    rating: 5
  }
];

const TestimonialCard = memo(({ testimonial, isCenter, isSide, side }: { testimonial: Testimonial, isCenter: boolean, isSide: boolean, side?: 'left' | 'right' | 'none' }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        scale: isCenter ? 1 : 0.85,
        opacity: isCenter ? 1 : isSide ? 0.6 : 0,
        zIndex: isCenter ? 20 : 10,
        x: side === 'left' ? '-110%' : side === 'right' ? '110%' : '0%',
        filter: isCenter ? 'blur(0px)' : 'blur(2px)',
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 25,
      }}
      className={`absolute top-0 left-0 w-full md:w-[600px] lg:w-[650px] mx-auto right-0  flex flex-col pointer-events-none group`}
    >
      <div className={`
        relative  bg-white/70 backdrop-blur-3xl border border-white/60 
        rounded-[3rem] p-8 md:p-12 flex flex-col justify-between
        ${isCenter ? 'shadow-[0_40px_100px_-20px_rgba(217,119,6,0.15)] ring-1 ring-amber-500/10' : 'shadow-none'}
        transition-shadow duration-500 overflow-hidden
      `}>
        {/* Card Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
        
        {/* Elegant top decoration */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex gap-1">
            {[...Array(5)].map((_, idx) => (
              <Star 
                key={idx} 
                className={`w-4 h-4 md:w-5 md:h-5 ${idx < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-gray-200"}`}
              />
            ))}
          </div>
          <motion.div 
            animate={isCenter ? { rotate: [0, 10, 0] } : {}}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-amber-500/20"
          >
            <Quote size={40} className="md:w-16 md:h-16" />
          </motion.div>
        </div>

        <div className="relative z-10 flex-grow py-8 flex items-center">
          <p className="text-gray-800 text-lg md:text-2xl leading-relaxed font-bold tracking-tight italic">
            "{testimonial.content}"
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-5 mt-auto">
          <div className="relative group-hover:scale-105 transition-transform duration-500">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-amber-500/50 to-amber-200 opacity-0 group-hover:opacity-40 blur-[4px] transition-opacity" />
            <ImageWithSkeleton 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white relative z-10 shadow-lg"
              aspectRatio="aspect-square"
              containerClassName="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="font-black text-gray-900 uppercase tracking-tight text-base md:text-xl leading-none">
              {testimonial.name}
            </h4>
            <span className="text-[10px] md:text-xs font-black text-amber-600 uppercase tracking-[0.2em] mt-1.5">
              {testimonial.role}
            </span>
          </div>
        </div>
        
        {/* Subtle hover reflection */}
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />
      </div>
    </motion.div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default function StudentStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const getPosition = (index: number) => {
    const diff = (index - currentIndex + testimonials.length) % testimonials.length;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === testimonials.length - 1) return 'left';
    return 'hidden';
  };

  return (
    <section 
      className="py-24 relative overflow-hidden bg-[#fdfdfc] selection:bg-amber-100 selection:text-amber-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `radial-gradient(#d97706 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} 
        />
        
        {/* Soft grain layer */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-700 text-[10px] font-black uppercase tracking-[0.3em]">Testimonials</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black tracking-tight text-[#1a1a1a] leading-none mb-8 uppercase"
          >
            Success Stories from <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400">Our Brilliant Alumni</span>
          </motion.h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-600 to-amber-300 mx-auto rounded-full shadow-lg shadow-amber-500/20" />
        </div>

        {/* Layered Carousel Container */}
        <div className="relative h-[550px] md:h-[600px] flex justify-center items-center">
          <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            <AnimatePresence initial={false}>
              {testimonials.map((t, i) => {
                const pos = getPosition(i);
                if (pos === 'hidden') return null;
                return (
                  <TestimonialCard 
                    key={i} 
                    testimonial={t} 
                    isCenter={pos === 'center'} 
                    isSide={pos !== 'center'}
                    side={pos === 'left' ? 'left' : pos === 'right' ? 'right' : 'none'}
                  />
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls Overlay */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-30 px-4 md:px-0">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl flex items-center justify-center text-gray-900 hover:bg-amber-500 hover:scale-110 active:scale-95 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl flex items-center justify-center text-gray-900 hover:bg-amber-500 hover:scale-110 active:scale-95 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Enhanced Alumni Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative border-t border-gray-100 flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <div className="flex flex-col items-center md:items-start gap-4">
             <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="group relative">
                  <ImageWithSkeleton 
                    src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                    alt="Success student"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white hover:scale-110 hover:z-20 transition-all cursor-pointer shadow-lg relative z-10"
                    aspectRatio="aspect-square"
                    containerClassName="rounded-full overflow-visible"
                  />
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white bg-amber-800 flex items-center justify-center text-[10px] md:text-xs font-black text-amber-100 shadow-lg relative z-10">
                +1200
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Users className="w-4 h-4 text-amber-500" />
              <p className="text-xs font-black text-gray-600 uppercase tracking-widest whitespace-nowrap">
                Joined by <span className="text-black">1.2K+ Alumni</span> Worldwide
              </p>
            </div>
          </div>
          
          <div className="hidden lg:block h-12 w-px bg-gray-100" />
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-black text-gray-900 leading-none">95%</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">Placement Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-gray-900 leading-none">50+</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">ITIs Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-gray-900 leading-none">100%</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">Skill Growth</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
