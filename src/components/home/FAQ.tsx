import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs } from '../../data/homeData';

export const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#f9f9f7]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20 text-black">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Help Center</span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter mb-6 px-4">Commonly Asked <br /> Questions.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-[32px] overflow-hidden border transition-all duration-300 ${activeFaq === idx ? 'border-amber-500 bg-white shadow-xl shadow-amber-500/5' : 'border-gray-200 bg-white/50 hover:bg-white'}`}
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full px-8 py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-bold tracking-tight transition-colors ${activeFaq === idx ? 'text-amber-600' : 'text-black'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === idx ? 'bg-amber-500 text-black rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-amber-50 text-amber-500'}`}>
                  {activeFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-50 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 font-medium">Still have questions? <Link to="/contact" className="text-amber-500 font-bold hover:underline">Contact Admissions</Link></p>
        </div>
      </div>
    </section>
  );
};
