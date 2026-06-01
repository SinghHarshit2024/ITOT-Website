import { Link } from 'react-router-dom';

interface NavLogoProps {
  isOpen?: boolean;
}

export const NavLogo = ({ isOpen }: NavLogoProps) => (
  <Link to="/" className="flex items-center gap-2 lg:gap-4">
    <div className="relative group">
      <img 
        src="/Images/logo.jpg" 
        alt="ITOT Logo" 
        loading="lazy"
        className="w-12 h-12 lg:w-16 lg:h-16 object-contain relative z-10"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            const fallback = parent.querySelector('.logo-fallback');
            if (fallback) fallback.classList.remove('hidden');
          }
        }}
      />
      {/* Fallback Logo if image is missing */}
      <div className="logo-fallback hidden w-12 h-12 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 transition-transform">
        <span className="text-black font-black text-[10px] lg:text-xs">SSTRC</span>
      </div>
    </div>
    <div className="flex flex-col text-left">
      <span className={`text-[10px] lg:text-[14px] font-black tracking-tighter leading-none uppercase whitespace-nowrap transition-colors ${isOpen ? 'text-black' : 'text-black'}`}>
        STATE STAFF TRAINING & RESEARCH CENTRE
      </span>
      <span className="text-[8px] lg:text-[10px] font-bold tracking-tight text-amber-600 leading-tight mt-0.5 opacity-80 uppercase">
        "ITOT, ALIGANJ, LUCKNOW"
      </span>
    </div>
  </Link>
);
