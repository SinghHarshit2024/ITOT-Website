import { motion } from 'motion/react';
import { BookOpen, Users, Award, Building2 } from 'lucide-react';
import Counter from '../Counter';

export const Stats = () => {
  const stats = [
    { icon: BookOpen, label: "Specialized Trades", value: "15+" },
    { icon: Users, label: "Current Students", value: "1200+" },
    { icon: Award, label: "Success Rate", value: "98%" },
    { icon: Building2, label: "Years of Legacy", value: "8+" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 text-center bg-gray-50 rounded-3xl"
            >
              <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-1 tracking-tighter">
                <Counter value={stat.value} />
              </h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
