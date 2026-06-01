import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info } from 'lucide-react';
import { ALL_COURSES } from '../constants';
import { Course } from '../types';
import CourseDetailModal from '../components/CourseDetailModal';
import { CoursesHero } from '../components/courses/CoursesHero';
import { SeatTable } from '../components/courses/SeatTable';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleExplore = (tradeName: string, searchName?: string) => {
    const course = ALL_COURSES.find(c => 
      c.name.toLowerCase() === (searchName || tradeName).toLowerCase() ||
      c.name.toLowerCase().includes((searchName || tradeName).toLowerCase())
    );
    if (course) {
      setSelectedCourse(course);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <CoursesHero />

      <section className="max-w-7xl mx-auto px-6 py-6 lg:py-10 relative z-20">
        <SeatTable onExplore={handleExplore} />

        {/* Note Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 p-8 bg-amber-50 rounded-3xl border border-amber-100/50 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-amber-100 shrink-0">
            <Info className="w-8 h-8 text-amber-600" />
          </div>
          <div>
            <h4 className="font-black text-gray-900 uppercase tracking-tight mb-1">Important Information</h4>
            <p className="text-gray-600 text-sm font-medium leading-relaxed">
              The seat capacity is distributed into multiple units of 25 seats each. The applicable CTS trades provide the basis for admission eligibility into these specific CITS training modules.
            </p>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        <CourseDetailModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      </AnimatePresence>
    </div>
  );
};

export default Courses;
