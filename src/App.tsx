import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import HeroVideo from './components/HeroVideo';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Fees from './pages/Fees';
import Eligibility from './pages/Eligibility';
import Admission from './pages/Admission';
import Courses from './pages/Courses';
import Placement from './pages/Placement';
import Notices from './pages/Notices';
import ScrollToTop from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/fees" element={<PageTransition><Fees /></PageTransition>} />
          <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/eligibility" element={<PageTransition><Eligibility /></PageTransition>} />
          <Route path="/admission" element={<PageTransition><Admission /></PageTransition>} />
          <Route path="/courses" element={<PageTransition><Courses /></PageTransition>} />
          <Route path="/placement" element={<PageTransition><Placement /></PageTransition>} />
          <Route path="/notices" element={<PageTransition><Notices /></PageTransition>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfc] text-[#1a1a1a] font-sans">
      {isHome && <HeroVideo />}
      <div className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
        <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-8 opacity-100'}`}>
          <AnnouncementBar />
        </div>
        <Navbar />
      </div>
      <main className={`flex-grow ${isHome ? '' : 'pt-24 lg:pt-28'}`}>
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Preloader />
      <ScrollToTop />
      <Layout />
    </Router>
  );
}
