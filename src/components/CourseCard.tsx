import React from 'react';
import { motion } from 'motion/react';
import { Clock, GraduationCap, BookOpen, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onOpen: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onOpen }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div 
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer p-8 md:p-10 bg-white border border-gray-100 rounded-[32px] md:rounded-[40px] hover:border-amber-500 hover:shadow-[0_20px_50px_rgba(245,158,11,0.1)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 -mr-12 -mt-12 rounded-full group-hover:bg-amber-500/10 transition-colors" />
      
      <div>
        <div className="flex justify-between items-start mb-12">
          <div className="w-12 h-12 bg-gray-100 text-gray-400 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-300 group-hover:text-amber-500 transition-colors">
            Program Details
          </div>
        </div>
        
        <h3 
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className={`text-xl md:text-2xl font-black mb-6 text-black leading-snug tracking-tight group-hover:text-amber-600 transition-all duration-300 uppercase cursor-help ${isExpanded ? 'whitespace-normal' : 'truncate'}`}
          title={isExpanded ? "Click to collapse" : "Click to view full trade name"}
        >
          {course.name}
        </h3>
      
      <div className="space-y-4 mb-12">
        <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-gray-400">
          <Clock className="w-4 h-4 text-amber-500" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-gray-400">
          <GraduationCap className="w-4 h-4 text-amber-500" />
          <span className="truncate">{course.eligibility}</span>
        </div>
      </div>
    </div>
    
    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-black pt-6 border-t border-gray-50 group-hover:border-amber-100 transition-colors">
      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
    </div>
  </motion.div>
  );
};

export default CourseCard;
