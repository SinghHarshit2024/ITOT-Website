import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomeCourses = () => {
  const featuredCourses = [
    { title: "Computer Software Application (CSA)", id: '01', desc: "Mastering the art of software instruction and digital pedagogy." },
    { title: "Computer Hardware and Networking Maintenance (CHNM)", id: '02', desc: "Technical expertise in hardware systems and network teaching." },
    { title: "Electrician", id: '03', desc: "Empowering instructors for complex electrical systems and safety." }
  ];

  return (
    <section className="py-24 bg-[#f9f9f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8">
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-[10px]">Flagship Trades</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-center md:text-left text-black uppercase leading-tight">Our <span className="text-amber-500">Courses.</span></h2>
          </div>
          <Link to="/courses" className="w-full md:w-auto text-center md:text-left text-[10px] font-black uppercase tracking-[0.2em] bg-black text-white px-8 py-4 rounded-full hover:bg-amber-500 hover:text-black transition-all">
            View All Courses
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map((course, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 group cursor-pointer hover:border-amber-500 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 -mr-12 -mt-12 rounded-full group-hover:bg-amber-500/10 transition-colors" />
              <div className="w-14 h-14 bg-gray-100 text-gray-400 rounded-2xl flex items-center justify-center mb-8 font-black text-lg group-hover:bg-amber-500 group-hover:text-black transition-all">
                {course.id}
              </div>
              <h3 
                onClick={(e) => {
                  e.stopPropagation();
                  const target = e.currentTarget;
                  if (target.classList.contains('truncate')) {
                    target.classList.remove('truncate');
                    target.classList.add('whitespace-normal');
                  } else {
                    target.classList.add('truncate');
                    target.classList.remove('whitespace-normal');
                  }
                }}
                className="text-xl font-black mb-4 text-black group-hover:text-amber-600 transition-all duration-300 tracking-tight leading-snug uppercase truncate cursor-help"
                title="Click to view full trade name"
              >
                {course.title}
              </h3>
              <p className="text-gray-500 mb-10 leading-relaxed text-[13px] font-medium">
                {course.desc}
              </p>
              <Link to="/courses" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-black group-hover:gap-5 transition-all">
                Explore Courses <ArrowRight className="w-4 h-4 text-amber-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
