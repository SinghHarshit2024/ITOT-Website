import React from 'react';
import { motion } from 'motion/react';

const AnnouncementBar = () => {
  const announcements = [
    "CITS ADMISSION NOTICE - SESSION 2026-27 is now available. Check the Notices section for details.",
    "Tentative Admissions schedule for CITS 2026-27 has been published.",
    "Welcome to SSTRC Lucknow - Excellence in Technical Education and Advanced Training Methodology.",
    "New Batch starting soon for various trades. Registration Open.",
    "SSTRC Lucknow: Pioneering Excellence in Technical Instruction across Uttar Pradesh."
  ];

  return (
    <div className="bg-amber-500 bg-linear-to-r from-amber-600 via-amber-500 to-amber-600 h-8 md:h-10 flex items-center overflow-hidden border-b border-black/10 relative z-[60] shadow-sm">
      <div className="flex items-center whitespace-nowrap min-w-full">
        <motion.div
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex items-center gap-20 text-[9px] sm:text-[10px] md:text-xs lg:text-[13px] font-black uppercase tracking-widest text-[#0d0f1a] pr-20"
        >
          {/* Repeat twice for seamless scroll */}
          {[...announcements, ...announcements].map((text, idx) => (
            <span key={idx} className="flex items-center gap-10 group">
              <span className="w-1.5 h-1.5 bg-black/30 rounded-full block" />
              {text}
            </span>
          ))}
        </motion.div>
      </div>
      
      {/* "New" Label fixed on the left */}
      <div className="absolute left-0 top-0 bottom-0 bg-[#0d0f1a] text-amber-500 px-4 md:px-6 flex items-center gap-2 text-[8px] sm:text-[9px] md:text-[11px] font-black uppercase tracking-widest border-r-2 border-amber-500/50 z-20 shadow-xl">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        Updates
      </div>
    </div>
  );
};

export default AnnouncementBar;
