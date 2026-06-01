import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X, GraduationCap, Clock, CheckCircle2, ArrowRight, Download, FileText, BookOpen, Book, ChevronUp } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
}

const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose }) => {
  const [showDownloads, setShowDownloads] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDownloads(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!course) return null;

  const downloadOptions = [
    { label: 'Syllabus', icon: FileText, url: course.studyMaterials?.syllabusUrl || '#', color: 'text-blue-600' },
    { label: 'TM BOOK PDF', icon: BookOpen, url: course.studyMaterials?.tmBookUrl || '#', color: 'text-amber-600' },
  ];

  if (course.studyMaterials?.ttBookUrls && course.studyMaterials.ttBookUrls.length > 0) {
    course.studyMaterials.ttBookUrls.forEach((url, idx) => {
      downloadOptions.push({
        label: course.studyMaterials!.ttBookUrls!.length > 1 ? `TT BOOK VOL ${idx + 1}` : 'TT BOOK PDF',
        icon: Book,
        url: url,
        color: 'text-green-600'
      });
    });
  } else {
    downloadOptions.push({ label: 'TT BOOK PDF', icon: Book, url: '#', color: 'text-green-600' });
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        className="relative w-full max-w-3xl bg-white rounded-3xl md:rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
      >
        <div className="md:w-2/5 bg-amber-500 p-6 md:p-12 text-black flex flex-col justify-between">
          <div className="hidden md:block">
             <GraduationCap className="w-12 h-12 md:w-16 md:h-16 mb-6 md:mb-8 opacity-40" />
             <h4 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none mb-6">Expert Pedagogy</h4>
             <p className="font-medium text-black/70 leading-relaxed mb-auto text-sm md:text-base">
               "Transforming vocational training into high-impact teaching careers."
             </p>
          </div>
          
          <div className="md:hidden flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 opacity-60" />
            </div>
            <div>
              <h4 className="text-lg font-black tracking-tight leading-none uppercase">Program Details</h4>
              <p className="text-[10px] font-bold opacity-60 mt-1 uppercase tracking-widest">SSTRC ITOT Lucknow</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              <div className="bg-black/5 p-4 rounded-2xl border border-black/10">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-1">Duration</p>
                <p className="font-bold flex items-center gap-2 text-xs md:text-base"><Clock className="w-3 h-3" /> {course.duration}</p>
              </div>
              <div className="bg-black/5 p-4 rounded-2xl border border-black/10">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-1">Eligibility</p>
                <p className="font-bold break-words leading-tight text-xs md:text-base">{course.eligibility}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-3/5 p-6 md:p-12 overflow-y-auto">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 p-3 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all z-20"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Program Specifications</span>
            <h3 className="text-3xl font-bold mb-8 tracking-tighter leading-tight text-black">{course.name}</h3>
            
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-base border-l-4 border-amber-500 pl-6 bg-amber-50/50 py-4">
                {course.description}
              </p>
              
              <div>
                <h5 className="font-bold text-black mb-4 flex items-center gap-3 underline decoration-amber-500 underline-offset-8">
                  Career Prospects
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {course.prospects.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                       <CheckCircle2 className="w-4 h-4 text-green-500" />
                       <span className="font-bold text-gray-700 text-sm">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div ref={containerRef} className="space-y-3 pt-4 relative">
                <AnimatePresence>
                  {showDownloads && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute bottom-full left-0 w-full mb-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-30"
                    >
                      <div className="flex flex-col gap-1">
                        {downloadOptions.map((opt, i) => (
                          <a 
                            key={i}
                            href={opt.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-all group"
                          >
                            <div className="flex items-center gap-3">
                              <opt.icon className={`w-4 h-4 ${opt.color}`} />
                              <span className="font-bold text-gray-700 text-xs">{opt.label}</span>
                            </div>
                            <Download className="w-3.5 h-3.5 text-gray-300 group-hover:text-amber-500 transition-colors" />
                          </a>
                        ))}
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  onClick={() => setShowDownloads(!showDownloads)}
                  className={`w-full py-4 font-black rounded-2xl transition-all flex items-center justify-center gap-3 group active:scale-95 z-20 relative ${showDownloads ? 'bg-amber-500 text-black shadow-none' : 'bg-white border-2 border-amber-500 text-amber-600 shadow-lg shadow-amber-500/10'}`}
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Download Study Material
                  {showDownloads ? <ChevronUp className="w-4 h-4" /> : null}
                </button>

                <Link 
                  to="/contact"
                  className="w-full py-4 bg-black text-white font-black text-center rounded-2xl hover:bg-gray-800 transition-all block group active:scale-95"
                  onClick={onClose}
                >
                  Admission Inquiry <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseDetailModal;
