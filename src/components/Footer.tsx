import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        <div className="sm:col-span-2">
          <Link to="/" className="flex flex-col mb-6">
            <img src="/Images/logo.jpg" loading="lazy" alt="ITOT Logo" className="w-16 h-16 rounded-xl mb-4 object-cover border border-gray-800" />
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white leading-tight uppercase">
              STATE STAFF TRAINING & RESEARCH CENTRE
            </span>
            <span className="text-sm font-semibold tracking-wide text-amber-500 mt-1 uppercase">
              "ITOT, ALIGANJ, LUCKNOW"
            </span>
          </Link>
          <p className="mt-4 text-gray-400 max-w-md">
            Institute of Training of Trainers, Lucknow. Empowering trainers with technical expertise and pedagogical skills to shape the future of vocational education.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-amber-500">Navigation</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/placement" className="hover:text-white transition-colors">Placement</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-amber-500">Contact</h4>
          <address className="not-italic text-sm text-gray-400 space-y-2 text-left">
            <p>Aliganj, Lucknow, Uttar Pradesh, India</p>
            <p className="pt-2">Email: info@itotlucknow.edu</p>
            <p>Phone: +91 522 XXX XXXX</p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} STATE STAFF TRAINING & RESEARCH Centre. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
