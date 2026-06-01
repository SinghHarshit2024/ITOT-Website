import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { placementData } from '../../data/placementData';

export const PlacementTable = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Desktop View */}
      <div className="hidden lg:block bg-white rounded-[32px] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden mb-12">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-6 text-left font-black uppercase tracking-widest text-sm text-gray-700">Company</th>
              <th className="px-8 py-6 text-left font-black uppercase tracking-widest text-sm text-gray-700">Trades Involved</th>
              <th className="px-8 py-6 text-center font-black uppercase tracking-widest text-sm text-gray-700">Applied</th>
              <th className="px-8 py-6 text-left font-black uppercase tracking-widest text-sm text-gray-700">Selection Breakdown</th>
              <th className="px-8 py-6 text-center font-black uppercase tracking-widest text-sm text-gray-700">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {placementData.map((item, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="hover:bg-amber-50/30 transition-colors"
              >
                <td className="px-6 py-8 align-top">
                  <div className="font-black text-gray-900 text-sm tracking-tight leading-tight uppercase max-w-[180px]">
                    {item.company}
                  </div>
                </td>
                <td className="px-8 py-8 align-top">
                  <div className="flex flex-wrap gap-2">
                    {item.trades.map((trade, tid) => (
                      <span key={tid} className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {trade}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-8 py-8 align-top text-center font-black text-gray-400">
                  {item.applied}
                </td>
                <td className="px-8 py-8 align-top">
                  <div className="space-y-2">
                    {item.selected.map((sel, sid) => (
                      <div key={sid} className="flex justify-between items-center text-xs border-b border-gray-50 pb-1">
                        <span className="font-medium text-gray-600">{sel.trade}</span>
                        <span className="font-black text-amber-600">{sel.count}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-8 py-8 align-top text-center">
                  <span className="inline-block px-4 py-2 rounded-xl bg-amber-500 text-black font-black text-base tracking-tight shadow-lg shadow-amber-500/20">
                    {item.total}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        {placementData.map((item, index) => {
          const isExpanded = expandedCards[index];
          const displaySelected = isExpanded ? item.selected : item.selected.slice(0, 3);
          const hasMore = item.selected.length > 3;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col h-full group"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600">Company Name</span>
                  <span className="text-[10px] font-black text-gray-300">#0{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-black text-gray-900 tracking-tight leading-tight uppercase mb-6 group-hover:text-amber-600 transition-colors min-h-[2.5rem]">
                  {item.company}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Applied</p>
                    <p className="text-xl font-black text-gray-900">{item.applied}</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100">
                    <p className="text-[9px] font-black uppercase tracking-widest text-amber-600 mb-1">Selected</p>
                    <p className="text-xl font-black text-amber-600">{item.total}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block border-b border-gray-50 pb-1">
                    Selection Breakdown
                  </span>
                  <div className="space-y-2 pr-2">
                    {displaySelected.map((sel, sid) => (
                      <div key={sid} className="flex justify-between items-center bg-gray-50/50 p-2 rounded-xl">
                        <span className="text-[11px] font-bold text-gray-600">{sel.trade}</span>
                        <span className="text-[11px] font-black text-amber-600">{sel.count}</span>
                      </div>
                    ))}
                    
                    {hasMore && (
                      <button 
                        onClick={() => toggleCard(index)}
                        className="w-full mt-2 py-2 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors"
                      >
                        {isExpanded ? (
                          <>View Less <ChevronUp className="w-3 h-3" /></>
                        ) : (
                          <>View More ({item.selected.length - 3}) <ChevronDown className="w-3 h-3" /></>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
