import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { NavLogo } from './navbar/NavLogo';
import { DesktopMenu } from './navbar/DesktopMenu';
import { MobileMenu } from './navbar/MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`relative w-full transition-all duration-300 ${isOpen ? 'bg-white' : (scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2 lg:py-2' : 'bg-white/50 py-2.5 lg:py-3')}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-20">
          <NavLogo isOpen={isOpen} />
          
          <DesktopMenu />

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              className="text-gray-900 focus:outline-none transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isQuickLinksOpen={isQuickLinksOpen}
        setIsQuickLinksOpen={setIsQuickLinksOpen}
        isAcademicsOpen={isAcademicsOpen}
        setIsAcademicsOpen={setIsAcademicsOpen}
      />
    </>
  );
};

export default Navbar;
