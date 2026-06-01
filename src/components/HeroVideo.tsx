import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const navigate = useNavigate();

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleExploreMore = () => {
    // Navigate to Admission page smoothly
    navigate('/admission');
    // Also scroll to top since it's a new page (though ScrollToTop component should handle this)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Optimization: Use Intersection Observer to lazy load and control playback
    // This reduces initial load time and saves CPU/Memory when not in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Hero section is visible, start loading and playing
            setShouldLoad(true);
            if (videoRef.current) {
              videoRef.current.play().catch((error) => {
                // Autoplay might be blocked by browser policy until user interaction
                console.log("Autoplay prevented:", error.message);
              });
            }
          } else {
            // Hero section is not visible, pause to save resources
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the section is visible
        rootMargin: '100px', // Start loading slightly before it enters viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* 
        Video element performance optimizations:
        - preload="none": Prevents data transfer until explicitly requested
        - loading detection: Only rendered/src set when entering viewport (shouldLoad)
        - manual play/pause: Controlled by Intersection Observer
      */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ${
          shouldLoad ? 'opacity-80' : 'opacity-0'
        }`}
      >
        {shouldLoad && (
          <>
            {/* Optimized WebM format with MP4 fallback as requested */}
            {/* Note: Ensure /video/CV.webm exists for better performance */}
            <source src="/video/CV.webm" type="video/webm" />
            <source src="/video/CV.mp4" type="video/mp4" />
          </>
        )}
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Welcome to SSTRC Lucknow
          </h1>
          <p className="mb-10 text-lg text-gray-200 sm:text-xl md:text-2xl">
            Excellence in Technical Education and Advanced Training Methodology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleExploreMore}
              className="rounded-full bg-amber-500 bg-linear-to-r from-amber-600 via-amber-500 to-amber-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
            >
            
              Explore More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-white"
        onClick={scrollToContent}
      >
        <ChevronDown size={48} className="opacity-80" />
      </motion.div>
    </section>
  );
};

export default HeroVideo;
