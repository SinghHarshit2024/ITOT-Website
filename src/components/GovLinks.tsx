import React, { memo } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Building2, Globe, ArrowUpRight } from 'lucide-react';
import { ImageWithSkeleton } from './ui/Skeleton';

interface GovLink {
  name: string;
  url: string;
  logo: string;
  description: string;
  icon: React.ElementType;
  bgGradient: string;
}

const govLinks: GovLink[] = [
  {
    name: "NCVT MIS",
    url: "https://www.ncvtmis.gov.in/",
    logo: "https://www.ncvtmis.gov.in/Static/Images/Logo.png",
    description: "National Council for Vocational Training",
    icon: ShieldCheck,
    bgGradient: "from-amber-500/10 to-amber-400/5"
  },
  {
    name: "DGT",
    url: "https://www.dgt.gov.in/",
    logo: "https://dgt.gov.in/sites/default/files/DGT_Logo_0.png",
    description: "Directorate General of Training",
    icon: Zap,
    bgGradient: "from-amber-600/10 to-amber-500/5"
  },
  {
    name: "UP GOVT",
    url: "https://up.gov.in/",
    logo: "https://up.gov.in/images/up-logo.png",
    description: "Government of Uttar Pradesh",
    icon: Building2,
    bgGradient: "from-amber-400/10 to-amber-300/5"
  },
  {
    name: "SKILL INDIA",
    url: "https://www.skillindiadigital.gov.in/home",
    logo: "https://www.skillindiadigital.gov.in/assets/images/skill-india-logo.png",
    description: "Skill India Digital Hub",
    icon: Globe,
    bgGradient: "from-amber-500/10 to-orange-400/5"
  }
];

const GovCard = memo(({ link, index }: { link: GovLink; index: number }) => {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative flex flex-col p-8 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] transition-all duration-500 overflow-hidden will-change-transform"
    >
      {/* Decorative Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${link.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Glossy Reflective Shine */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-size duration-1000 ease-in-out pointer-events-none" 
        style={{ transitionProperty: 'left' }}
      />

      {/* Top Section: Icon and Logo indicator */}
      <div className="flex justify-between items-center mb-10 relative z-10">
        <div className="w-14 h-14 bg-white/90 rounded-2xl flex items-center justify-center p-3 shadow-sm border border-white/60 group-hover:border-amber-200/50 transition-colors">
          <link.icon className="w-7 h-7 text-amber-600 group-hover:text-amber-500 transition-colors" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/80 p-1 shadow-sm border border-white/60 overflow-hidden hidden sm:block">
            <ImageWithSkeleton 
              src={link.logo} 
              alt={link.name} 
              className="w-full h-full object-contain"
              aspectRatio="aspect-square"
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-amber-600" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex-grow">
        <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight uppercase group-hover:text-amber-700 transition-colors">
          {link.name}
        </h3>
        <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] leading-snug max-w-[200px]">
          {link.description}
        </p>
      </div>

      {/* Subtle Illustration Accent (Blush Style) */}
      <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-700 pointer-events-none transform -rotate-12 group-hover:rotate-0 scale-90 group-hover:scale-110">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-600 fill-current">
          <path d="M41.3,-71.4C52.7,-64.1,59.3,-48.6,65.3,-33.9C71.3,-19.2,76.7,-5.4,75.4,8.1C74.1,21.6,66,34.8,55.4,45.4C44.8,56,31.7,64.1,17.2,69.5C2.7,74.9,-13.2,77.7,-27.1,73.1C-41,68.5,-52.8,56.5,-61.8,43.2C-70.8,29.9,-77,14.9,-77.5,-0.3C-78,-15.5,-72.8,-30.9,-63.3,-43.3C-53.8,-55.7,-40,-65.2,-25.9,-70.6C-11.8,-76,2.5,-77.4,17.2,-71.4C31.9,-65.4,46.9,-52.1,58.3,-44.8Z" transform="translate(100 100)" />
        </svg>
      </div>
    </motion.a>
  );
});

GovCard.displayName = 'GovCard';

const GovLinks: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdfdfc] relative overflow-hidden border-y border-gray-100">
      {/* Background Aesthetic Blobs (Static Gradients for performance) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/[0.04] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/[0.03] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#d97706 1px, transparent 1px)`, backgroundSize: '48px 48px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10">
          <div className="text-center md:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6"
            >
              <Globe className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-amber-700 text-[10px] font-black uppercase tracking-[0.3em]">Official Gateways</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 leading-[0.9] uppercase"
            >
              Government <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400">Hub.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4 text-center md:text-right"
          >
            <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em] leading-relaxed max-w-sm">
              Direct access to regulatory vocational portals across the nation.
            </p>
            <div className="w-12 h-1 bg-amber-500/50 rounded-full ml-auto hidden md:block" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {govLinks.map((link, idx) => (
            <GovCard key={link.name} link={link} index={idx} />
          ))}
        </div>
        
        {/* Footer Stats/Info Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-10 border-t border-gray-100/60 flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Recognition</span>
            <span className="text-xs font-bold text-gray-400">NCVT Affiliated</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Standard</span>
            <span className="text-xs font-bold text-gray-400">DGT Certified</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Operation</span>
            <span className="text-xs font-bold text-gray-400">UP Govt Managed</span>
          </div>
        </motion.div>
      </div>
  </section>
  );
};

export default GovLinks;
