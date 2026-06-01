import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Minimum 2 seconds loading for visual impact

    // Also wait for window load event
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      // Already loaded
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center rotate-12">
                <span className="text-black font-black text-3xl -rotate-12">I</span>
              </div>
              <div className="text-white">
                <h1 className="text-3xl font-black tracking-tighter leading-none uppercase">SSTRC Lucknow</h1>
                <p className="text-amber-500 text-[9px] uppercase font-bold tracking-[0.2em] mt-1">"ITOT, Aliganj, Lucknow"</p>
              </div>
            </motion.div>

            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
                className="absolute top-0 left-0 h-full bg-amber-500"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mt-6 text-center"
            >
              Setting up excellence
            </motion.p>
          </div>
          
          <motion.div 
            className="absolute bottom-12 left-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">System Online</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
