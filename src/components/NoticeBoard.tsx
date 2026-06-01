import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Megaphone, ExternalLink, Download, Calendar } from 'lucide-react';

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
    linkType: 'link'
  },
  
];

const NoticeBoard: React.FC = () => {
  return (
    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full max-h-[600px]">
      {/* Header */}
      <div className="bg-amber-500 p-6 flex items-center gap-3">
        <Megaphone className="text-black w-6 h-6" />
        <h2 className="text-black font-black uppercase tracking-tight text-xl">Notice Board</h2>
      </div>

      {/* Notice List */}
      <div className="flex-grow overflow-y-auto custom-scrollbar p-6">
        <div className="space-y-6">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-4 border-l-2 border-gray-100 hover:border-amber-500 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">
                  <Calendar className="w-3 h-3 text-amber-500" />
                  {notice.date}
                </span>
                {notice.isNew && (
                  <span className="bg-red-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter animate-pulse">
                    New
                  </span>
                )}
              </div>
              
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-black font-bold text-sm leading-tight group-hover:text-amber-600 transition-colors">
                  {notice.title}
                </h3>

                <a
                  href={notice.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-amber-600 hover:text-black transition-colors whitespace-nowrap pt-0.5"
                >
                  {notice.linkType === 'pdf' ? (
                    <>
                      <Download className="w-2.5 h-2.5" /> PDF
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-2.5 h-2.5" /> More
                    </>
                  )}
                </a>
              </div>

              {index !== notices.length - 1 && (
                <div className="absolute -bottom-3 left-0 w-full h-[1px] bg-gray-50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer / More Link */}
      <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
        <Link 
          to="/notices" 
          className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-amber-600 transition-colors inline-block w-full"
        >
          View All Notices
        </Link>
      </div>
    </div>
  );
};

export default NoticeBoard;
