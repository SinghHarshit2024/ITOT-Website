import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, academicsLinks, quickLinks, contactLink } from '../../data/navData';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isQuickLinksOpen: boolean;
  setIsQuickLinksOpen: (val: boolean) => void;
  isAcademicsOpen: boolean;
  setIsAcademicsOpen: (val: boolean) => void;
}

export const MobileMenu = ({
  isOpen,
  setIsOpen,
  isQuickLinksOpen,
  setIsQuickLinksOpen,
  isAcademicsOpen,
  setIsAcademicsOpen
}: MobileMenuProps) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/85 backdrop-blur-xl ml-auto w-[320px] h-[100dvh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.1)] relative border-l border-white/20 will-change-transform overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Premium Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10  blur-[80px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-600/5  blur-[60px] -ml-24 -mb-24" />
            
            {/* Drawer top section (Header Area) */}
            <div className="flex items-center justify-between px-8 py-8 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-1.5 overflow-hidden">
                  <img src="/Images/logo.jpg" loading="lazy" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-tighter text-black uppercase leading-none">SSTRC Lucknow</span>
                  <span className="text-[8px] font-bold text-amber-600 uppercase tracking-widest mt-1">ITOT, Aliganj</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 bg-white/50 backdrop-blur-md rounded-full text-gray-900 border border-white/60 shadow-sm hover:bg-amber-500 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 flex flex-col px-6 py-4 space-y-2 overflow-y-auto relative z-10 scrollbar-hide">
              <div className="mb-4 px-2">
                <h3 className="text-[9px] font-black tracking-[0.3em] text-gray-400 uppercase">Navigation</h3>
              </div>

              {[
                ...navLinks.slice(0, 3).map(l => ({ ...l, isDropdown: false, type: 'nav' })),
                { name: "Academics", isDropdown: true, type: 'academics', path: '', icon: (navLinks[0] as any).icon === undefined ? undefined : (navLinks[0] as any).icon }, // Dummy icon placeholder
                ...navLinks.slice(3).map(l => ({ ...l, isDropdown: false, type: 'nav' })),
                { name: "Quick Links", isDropdown: true, type: 'quick', path: '', icon: (navLinks[0] as any).icon === undefined ? undefined : (navLinks[0] as any).icon }, // Dummy icon placeholder
                { ...contactLink, isDropdown: false, type: 'nav' }
              ].map((link, idx) => {
                // Re-fixing the icon logic safely
                let Icon = (link as any).icon;
                
                return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  {link.isDropdown ? (
                    <div className="space-y-1">
                      <button 
                        onClick={() => {
                          if (link.name === 'Academics') setIsAcademicsOpen(!isAcademicsOpen);
                          if (link.name === 'Quick Links') setIsQuickLinksOpen(!isQuickLinksOpen);
                        }}
                        className={`flex items-center gap-4 w-full p-4 text-[15px] font-bold tracking-tight transition-all duration-300 rounded-2xl group relative overflow-hidden ${((link.name === 'Academics' && isAcademicsOpen) || (link.name === 'Quick Links' && isQuickLinksOpen)) ? 'text-amber-700 bg-amber-500/10 shadow-[inner_0_0_20px_rgba(245,158,11,0.05)]' : 'text-gray-700 hover:text-amber-600 hover:bg-white'}`}
                      >
                        {Icon && <Icon className={`w-5 h-5 transition-transform duration-500 ${((link.name === 'Academics' && isAcademicsOpen) || (link.name === 'Quick Links' && isQuickLinksOpen)) ? 'text-amber-600 scale-110' : 'text-gray-400 group-hover:text-amber-500'}`} />}
                        <span className="flex-1 text-left uppercase tracking-tight">{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${(link.name === 'Academics' ? isAcademicsOpen : isQuickLinksOpen) ? 'rotate-180 text-amber-600' : 'text-gray-300 group-hover:text-amber-400'}`} />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {((link.name === 'Academics' && isAcademicsOpen) || (link.name === 'Quick Links' && isQuickLinksOpen)) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden bg-white/40 backdrop-blur-sm rounded-2xl mx-1 shadow-sm border border-white/50"
                          >
                            <div className="flex flex-col gap-1 py-3 px-4">
                              {(link.name === 'Academics' ? academicsLinks : quickLinks).map((qLink) => (
                                qLink.path.startsWith('http') ? (
                                  <a 
                                    key={qLink.name}
                                    href={qLink.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between p-3 rounded-xl text-[13px] font-bold text-gray-500 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <span className="uppercase tracking-widest">{qLink.name}</span>
                                    <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                  </a>
                                ) : (
                                  <Link
                                    key={qLink.name}
                                    to={qLink.path}
                                    className={`flex items-center p-3 rounded-xl text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${location.pathname === qLink.path ? 'text-amber-700 bg-amber-50' : 'text-gray-500 hover:text-amber-600 hover:bg-amber-50'}`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {qLink.name}
                                  </Link>
                                )
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center gap-4 w-full p-4 text-[15px] font-bold tracking-tight transition-all duration-300 rounded-2xl group relative overflow-hidden ${location.pathname === link.path ? 'text-amber-700 bg-amber-500/10 shadow-sm' : 'text-gray-700 hover:text-amber-600 hover:bg-white'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {Icon && <Icon className={`w-5 h-5 transition-transform duration-500 ${location.pathname === link.path ? 'text-amber-600 scale-110' : 'text-gray-400 group-hover:text-amber-500'}`} />}
                      <span className="flex-1 text-left uppercase tracking-tight">{link.name}</span>
                      {location.pathname === link.path && (
                        <motion.div layoutId="activeTag" className="absolute right-4 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                      )}
                    </Link>
                  )}
                </motion.div>
              )})}
              
              {/* Bottom Drawer Section (Premium Institute Info Card) */}
              <div className="pt-8 pb-4 mt-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-6 bg-gradient-to-br from-amber-50/80 to-white/80 backdrop-blur-md rounded-[2rem] border border-amber-100/50 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full -mr-12 -mt-12" />
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-4">
                      <img src="/Images/logo.jpg" loading="lazy" alt="SSTRC Logo" className="w-full h-full object-contain" />
                    </div>
                    <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-tighter leading-tight mb-1">
                      STATE STAFF TRAINING & RESEARCH CENTRE
                    </h4>
                    <p className="text-[9px] font-black text-amber-600 uppercase tracking-widest mb-3 italic">
                      ITOT, ALIGANJ, LUCKNOW
                    </p>
                    <div className="flex items-center gap-1.5 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                      <div className="w-1 h-1 rounded-full bg-amber-400" />
                      Uttar Pradesh, India
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
