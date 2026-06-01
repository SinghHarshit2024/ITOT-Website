import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithSkeleton } from '../ui/Skeleton';

export const CampusGallery = () => {
  const galleryImages = [
    "class01", "class02", "class03", "class04", "class05", "class06",
    "class07", "class08", "class09", "class10", "class11", "class12"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-[10px] mb-3 block">Campus Experience</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-black uppercase">Life at Campus</h2>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500 max-w-md text-sm md:text-base font-medium">
              A glimpse into the daily activities, workshops, and vibrant student life at our institute.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {galleryImages.map((imgName, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.1 }}
              className="group relative aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50"
            >
              <ImageWithSkeleton 
                src={`/Images/classes/${imgName}.webp`} 
                alt={`Campus life - ${imgName}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                aspectRatio="aspect-square"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/gallery" className="text-xs font-black uppercase tracking-[0.2em] text-amber-600 hover:text-black transition-colors flex items-center gap-2">
            View Extended Gallery <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
