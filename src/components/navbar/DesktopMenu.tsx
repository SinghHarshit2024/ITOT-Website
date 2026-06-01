import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { navLinks, academicsLinks, quickLinks, contactLink } from '../../data/navData';

export const DesktopMenu = () => {
  const location = useLocation();

  return (
    <div className="hidden lg:flex items-center gap-8 h-full">
      <ul className="flex gap-8 items-center h-full">
        {navLinks.slice(0, 3).map((link) => (
          <li key={link.name} className="flex items-center">
            <Link
              to={link.path}
              className={`h-12 flex items-center text-sm font-medium transition-colors hover:text-amber-500 ${location.pathname === link.path ? 'text-amber-600' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* Academics Dropdown */}
        <li className="relative group flex items-center">
          <button 
            className="h-12 flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-amber-500 group-hover:text-amber-500"
          >
            Academics <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
          </button>
          
          <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {academicsLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`flex items-center px-4 py-2 text-xs font-semibold hover:bg-amber-50 transition-colors ${location.pathname === link.path ? 'text-amber-600 bg-amber-50' : 'text-gray-700 hover:text-amber-600'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </li>

        {navLinks.slice(3).map((link) => (
          <li key={link.name} className="flex items-center">
            <Link
              to={link.path}
              className={`h-12 flex items-center text-sm font-medium transition-colors hover:text-amber-500 ${location.pathname === link.path ? 'text-amber-600' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        
        {/* Quick Links Dropdown */}
        <li className="relative group flex items-center">
          <button 
            className="h-12 flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-amber-500 group-hover:text-amber-500"
          >
            Quick Links <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
          </button>
          
          <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {quickLinks.map((link) => (
              <a 
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                {link.name}
                <ExternalLink className="w-3 h-3 opacity-40" />
              </a>
            ))}
          </div>
        </li>

        <li className="flex items-center">
          <Link
            to={contactLink.path}
            className={`h-12 flex items-center text-sm font-medium transition-colors hover:text-amber-500 ${location.pathname === contactLink.path ? 'text-amber-600' : 'text-gray-600'}`}
          >
            {contactLink.name}
          </Link>
        </li>
      </ul>
    </div>
  );
};
