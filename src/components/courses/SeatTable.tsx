import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { seatData } from '../../data/coursesData';

interface SeatTableProps {
  onExplore: (tradeName: string, searchName?: string) => void;
}

export const SeatTable = ({ onExplore }: SeatTableProps) => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleExpand = (id: number) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-[32px] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden mb-12">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-6 text-left font-black uppercase tracking-widest text-sm text-gray-700 w-16">SR.</th>
              <th className="px-8 py-6 text-left font-black uppercase tracking-widest text-sm text-gray-700">Trade Name</th>
              <th className="px-8 py-6 text-left font-black uppercase tracking-widest text-sm text-gray-700">Applicable CTS / ITI Trade</th>
              <th className="px-8 py-6 text-center font-black uppercase tracking-widest text-sm text-gray-700 w-44">Capacity</th>
              <th className="px-8 py-6 text-center font-black uppercase tracking-widest text-sm text-gray-700 w-32">Explore</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm">
            {seatData.map((item, index) => (
              <motion.tr 
                key={item.sr}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="group hover:bg-amber-50/30 transition-colors"
              >
                <td className="px-6 py-8 align-top font-bold text-gray-400 text-base">
                  {String(item.sr).padStart(2, '0')}
                </td>
                <td className="px-8 py-8 align-top">
                  <div className="font-black text-gray-900 text-base tracking-tight leading-tight uppercase max-w-[200px]">
                    {item.trade}
                  </div>
                </td>
                <td className="px-8 py-8 align-top">
                  <div className={`text-gray-600 font-medium leading-relaxed max-w-xl ${item.applicable === '-' ? 'text-center w-full' : ''}`}>
                    {item.applicable}
                  </div>
                </td>
                <td className="px-8 py-8 align-top">
                  <div className="flex flex-col items-center">
                    <span className="px-4 py-2 rounded-xl bg-amber-50 text-amber-700 font-black text-sm tracking-tight border border-amber-100">
                      {item.capacity}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-8 align-top">
                  <div className="flex justify-center">
                    <button 
                      onClick={() => onExplore(item.trade, item.searchName)}
                      className="p-3 bg-gray-900 text-white rounded-xl hover:bg-amber-500 hover:text-black transition-all group/btn flex items-center justify-center"
                      title="View Course Details"
                    >
                      <BookOpen className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile & Tablet Card View */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        {seatData.map((item, index) => {
          const isExpanded = expandedItems[item.sr];
          const isLongText = item.applicable.length > 100;
          const displayText = isExpanded ? item.applicable : item.applicable.slice(0, 100) + (isLongText ? "..." : "");

          return (
            <motion.div
              key={item.sr}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/40 border border-gray-100 relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="text-[10px] font-black tracking-widest text-gray-200 group-hover:text-amber-200 transition-colors">
                  #{String(item.sr).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 mb-1 block">Trade Program</span>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-tight uppercase group-hover:text-amber-600 transition-colors">
                    {item.trade}
                  </h3>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block border-b border-gray-50 pb-1 w-fit">
                    Applicable CTS / ITI Trade
                  </span>
                  <div className="flex flex-col">
                    <p className={`text-gray-600 text-sm font-medium leading-relaxed ${item.applicable === '-' ? 'text-center w-full block' : ''}`}>
                      {displayText}
                    </p>
                    {isLongText && (
                      <button 
                        onClick={() => toggleExpand(item.sr)}
                        className="text-amber-600 text-[10px] font-black uppercase tracking-widest mt-2 flex items-center gap-1 hover:text-amber-700 transition-colors w-fit"
                      >
                        {isExpanded ? "Show Less" : "See More"}
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-50">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Capacity</span>
                    <span className="inline-block px-3 py-1 rounded-lg bg-amber-50 text-amber-700 font-bold text-[11px] border border-amber-100">
                      {item.capacity}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => onExplore(item.trade, item.searchName)}
                    className="inline-flex items-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all active:scale-95"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
