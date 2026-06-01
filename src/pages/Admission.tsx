import { motion } from 'motion/react';
import { Layers, GraduationCap, CheckCircle2 } from 'lucide-react';
import AdmissionTimeline from '../components/AdmissionTimeline';

const Admission = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] selection:bg-amber-100 selection:text-amber-900">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(#d97706 0.5px, transparent 0.5px)`, 
            backgroundSize: '24px 24px' 
          }} 
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-700 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8"
            >
              <Layers className="w-3.5 h-3.5" />
              Academic Journey 2026-27
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 mb-8 uppercase leading-[1.1]">
              Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">Process</span>
            </h1>
            
            <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-10 shadow-lg shadow-amber-500/20" />
            
            <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-12">
              Embark on a transformative journey with us. Our admission process is designed 
              to identify talent, integrity, and passion for excellence.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { icon: <CheckCircle2 className="w-4 h-4" />, text: "Merit Based" },
                { icon: <CheckCircle2 className="w-4 h-4" />, text: "Transparent" },
                { icon: <CheckCircle2 className="w-4 h-4" />, text: "Skill Centric" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-bold text-gray-400 group">
                  <div className="text-amber-500">{item.icon}</div>
                  <span className="group-hover:text-gray-900 transition-colors uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative pb-40 bg-white shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.03)]">
        {/* Top Shape Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%] pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="opacity-100"></path>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 pt-24 text-center mb-20">
          <div className="inline-flex items-center gap-2 text-amber-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-px bg-amber-500/30" />
            The Road to SSTRC
            <span className="w-8 h-px bg-amber-500/30" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">Step-by-Step Guide</h2>
        </div>
        
        <AdmissionTimeline />

        {/* Bottom Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-[#111827]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.33A600.21,600.21,0,0,1,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-[#111827] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden ring-1 ring-white/10">
            {/* Background pattern in CTA */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full -mr-64 -mt-64" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl shadow-amber-500/40">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">Begin Your Professional Journey</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 font-medium">
                Applications for the 2026-27 session are now open. Secure your future at ITOT Aliganj, the premier Staff Training & Research Centre.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://www.nimionlineadmission.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-amber-500 text-gray-900 font-bold rounded-2xl hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95"
                >
                  Apply via NIMI Portal
                </a>
                <a 
                  href="/Documents/Notice/prospectus.pdf" 
                  className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Prospectus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;

