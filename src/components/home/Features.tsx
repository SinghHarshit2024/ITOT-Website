import { motion } from 'motion/react';
import { GraduationCap, CheckCircle2, Clock, MapPin, Award, Building2 } from 'lucide-react';

export const Features = () => {
  const features = [
    { 
      icon: GraduationCap, 
      title: "Pedagogical Excellence", 
      desc: "Our CITS program is uniquely designed to master the art of teaching technical trades with modern tools." 
    },
    { 
      icon: CheckCircle2, 
      title: "Government Certification", 
      desc: "All our programs are NCVT affiliated and internationally recognized for quality and standards." 
    },
    { 
      icon: Clock, 
      title: "Flexible Learning", 
      desc: "Blended learning approach with intensive workshop sessions and comprehensive theory modules." 
    },
    { 
      icon: MapPin, 
      title: "Prime Location", 
      desc: "Located in the capital city of Uttar Pradesh with easy access and excellent connectivity." 
    },
    { 
      icon: Award, 
      title: "Excellent Placements", 
      desc: "Direct recruitment opportunities in premier ITIs and various technical training institutes." 
    },
    { 
      icon: Building2, 
      title: "Modern Infrastructure", 
      desc: "High-tech computer labs, sophisticated machinery, and comfortable campus amenities." 
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 text-black">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter mb-6">Why Choose ITOT Lucknow?</h2>
          <p className="text-gray-500 text-lg italic serif">We provide an environment where technical skills meet teaching excellence.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={feature.title}
              whileHover={{ y: -5 }}
              className="p-10 border border-gray-100 rounded-3xl hover:border-amber-200 transition-colors bg-white shadow-sm"
            >
              <feature.icon className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-black">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
