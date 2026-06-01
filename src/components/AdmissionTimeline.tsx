import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  UserPlus, 
  FileEdit, 
  Trophy, 
  ListOrdered, 
  MousePointer2, 
  ShieldCheck, 
  GraduationCap,
  ChevronRight
} from 'lucide-react';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  authority: string;
  icon: React.ReactNode;
}

const steps: TimelineStep[] = [
  {
    id: 1,
    title: "Notification Published",
    description: "Official admission notice is released by DGT on the NIMI portal and news outlets.",
    authority: "DGT / NIMI",
    icon: <Bell className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Online Registration",
    description: "Candidates fill out their applications and upload required documents on the portal.",
    authority: "Candidate",
    icon: <UserPlus className="w-6 h-6" />
  },
  {
    id: 3,
    title: "AICET Examination",
    description: "All India Common Entrance Test is conducted at various designated exam centers.",
    authority: "NIMI / DGT",
    icon: <FileEdit className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Publication of Results",
    description: "Individual scores and merit ranks are published based on entrance exam performance.",
    authority: "DGT",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Trade Merit List Display",
    description: "Detailed trade-wise and category-wise merit lists are displayed for all applicants.",
    authority: "NIMI",
    icon: <ListOrdered className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Online Counselling & Choice Filling",
    description: "Shortlisted candidates select their preferred institutes and trades in order of priority.",
    authority: "Candidate",
    icon: <MousePointer2 className="w-6 h-6" />
  },
  {
    id: 7,
    title: "Document Verification",
    description: "Original documents are verified at designated centers for finalized seat allocation.",
    authority: "Verification Center",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 8,
    title: "Final Admission & Classes",
    description: "Payment of fees and final reporting at the allotted institute for session commencement.",
    authority: "Allotted Institute",
    icon: <GraduationCap className="w-6 h-6" />
  }
];

const AdmissionTimeline: React.FC = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Central Vertical Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 hidden lg:block -translate-x-1/2 rounded-full" />
          
          {/* Continuous Glowing Line (Desktop) */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-amber-500 to-amber-600 hidden lg:block -translate-x-1/2 shadow-[0_0_15px_rgba(245,158,11,0.5)] rounded-full z-10"
          />

          {/* Left Vertical Line (Mobile/Tablet) */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gray-100 lg:hidden rounded-full" />
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-8 top-0 w-1 bg-gradient-to-b from-amber-500 to-amber-600 lg:hidden shadow-[0_0_15px_rgba(245,158,11,0.5)] rounded-full z-10"
          />

          {/* Steps */}
          <div className="space-y-0 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className="relative lg:min-h-[350px] py-12 lg:py-0">
                  {/* Desktop Layout - Zig Zag */}
                  <div className={`hidden lg:flex items-center justify-between w-full h-full ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    
                    {/* Content Card Side */}
                    <div className="w-[45%]">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative"
                      >
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-700" />
                        
                        <div className="relative bg-white/80 backdrop-blur-2xl border border-amber-500/10 rounded-[2.5rem] p-10 shadow-2xl shadow-amber-900/5 group-hover:border-amber-500/40 transition-all duration-500 overflow-hidden">
                          {/* Decorative background number */}
                          <span className="absolute -bottom-6 -right-6 text-9xl font-black text-gray-900/[0.03] italic pointer-events-none group-hover:text-amber-500/[0.05] transition-colors duration-500 uppercase">
                            {step.id}
                          </span>

                          <div className="relative z-10 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-xl shadow-amber-500/30 group-hover:rotate-[10deg] transition-transform duration-500">
                                {step.icon}
                              </div>
                              <div className="text-right flex flex-col items-end">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full mb-2">
                                  Step {step.id}
                                </span>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500/50" />
                                  {step.authority}
                                </span>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors uppercase tracking-tight">
                                {step.title}
                              </h3>
                              <p className="text-gray-500 leading-relaxed font-medium">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Connected Line/Circle (Desktop Card Connector) */}
                        <div className={`absolute top-1/2 -translate-y-1/2 hidden xl:block ${isEven ? 'left-full ml-4' : 'right-full mr-4'}`}>
                          <div className="w-8 h-px bg-amber-500/30" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Central Badge */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden lg:block">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 
                        }}
                        className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-xl border-[6px] border-white shadow-2xl shadow-amber-500/20 ring-1 ring-gray-100"
                      >
                        {step.id}
                      </motion.div>
                    </div>

                    {/* Empty Space Side (For zig-zag) */}
                    <div className="w-[45%]" />
                  </div>

                  {/* Mobile/Tablet Layout (Single Column) */}
                  <div className="lg:hidden pl-12 md:pl-24 pr-4">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="group relative bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 active:scale-[0.98] transition-transform"
                    >
                      {/* Step Number Bubble (Mobile) */}
                      <div className="absolute -left-12 md:-left-24 top-1/2 -translate-y-1/2 z-20">
                        <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-sm border-4 border-white shadow-xl ring-1 ring-gray-100">
                          {step.id}
                        </div>
                      </div>

                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-5">
                          <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                            {step.icon}
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 block mb-1">Authority: {step.authority}</span>
                            <h3 className="text-xl font-black text-gray-900 uppercase leading-none">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA / Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <Link 
            to="/fees"
            className="inline-flex items-center gap-4 px-8 py-5 bg-gray-900 text-white rounded-[2rem] shadow-2xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 font-black uppercase tracking-tight text-lg">Next Academic Session Starts Soon</span>
            <ChevronRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-8 text-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">
            Integrity • Excellence • Professionalism
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionTimeline;
