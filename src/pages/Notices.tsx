import React from 'react';
import { motion } from 'motion/react';
import { Megaphone, ExternalLink, Download, Calendar, ArrowRight } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  date: string;
  isNew: boolean;
  link: string;
  linkType: 'pdf' | 'link';
}

const notices: Notice[] = [
  {
    id: 1,
    title: "CITS ADMISSION NOTICE - SESSION 2026-27",
    date: "17 April 2026",
    isNew: true,
    link: "/Documents/Notice/admission.pdf",
    linkType: 'pdf'
  },
  {
    id: 2,
    title: "Tentative Admissions schedule for CITS 2026-27",
    date: "1 April 2026",
    isNew: false,
    link: "/Documents/Notice/tentative.pdf",
    linkType: 'pdf' // Changed to PDF as common for notices
  }
];

const Notices: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfdfc] py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-[10px]">Information Hub</span>
            <div className="w-12 h-[1px] bg-amber-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase leading-none">
            NEWS & <span className="text-amber-500">EVENTS</span>
          </h1>
          <p className="mt-6 text-gray-500 max-w-xl text-lg">
            Stay updated with the latest announcements, schedules, and happenings at SSTRC ITOT Lucknow.
          </p>
        </motion.div>

        <div className="space-y-4">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full text-nowrap">
                      <Calendar className="w-3 h-3 text-amber-500" />
                      {notice.date}
                    </div>
                    {notice.isNew && (
                      <span className="bg-red-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter animate-pulse text-nowrap">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg md:text-2xl font-black text-black leading-tight group-hover:text-amber-600 transition-colors uppercase tracking-tight">
                    {notice.title}
                  </h3>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href={notice.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-black text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-amber-500 transition-all group/btn whitespace-nowrap"
                  >
                    {notice.linkType === 'pdf' ? (
                      <>
                        <Download className="w-3 h-3 md:w-4 md:h-4" /> <span className="hidden sm:inline">Download</span> PDF
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /> <span className="hidden sm:inline">Read</span> More
                      </>
                    )}
                    <ArrowRight className="hidden md:block w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;
