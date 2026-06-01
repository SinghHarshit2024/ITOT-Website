import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithSkeleton } from '../components/ui/Skeleton';
import { galleryImages, GALLERY_CATEGORIES } from '../data/galleryData';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Responsive items per page logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset to first page when filtering
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedImages = filteredImages.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="pt-12 pb-32 bg-[#fdfdfc]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Visual Journey</span>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter mb-8 max-w-4xl">
              Moments from <span className="text-amber-500 underline decoration-2 underline-offset-8">ITOT.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
              Explore our campus through a collection of memories, from intensive classroom sessions to vibrant cultural and sports events.
            </p>
          </motion.div>
        </header>

        {/* Filter Bar */}
        <div className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-gray-100 pb-8">
          <div className="flex flex-wrap gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                  : 'bg-white text-gray-400 hover:text-black border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-gray-400 text-sm font-bold flex items-center gap-2">
            <LayoutGrid size={16} />
            Showing {startIndex + 1}-{Math.min(endIndex, filteredImages.length)} of {filteredImages.length}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {displayedImages.map((img, idx) => (
              <motion.div 
                layout
                key={img.title + idx + currentPage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="relative group overflow-hidden rounded-[24px] md:rounded-[32px] cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all aspect-square"
              >
                <ImageWithSkeleton 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  aspectRatio="aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                  <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{img.category}</span>
                  <p className="text-white font-bold text-sm md:text-base tracking-tight leading-tight">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination UI */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-20 flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                className="p-3 rounded-full bg-white border border-gray-100 text-gray-500 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex items-center gap-2 mx-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-12 h-12 rounded-full text-sm font-bold transition-all ${
                      currentPage === page
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white text-gray-400 hover:text-black border border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className="p-3 rounded-full bg-white border border-gray-100 text-gray-500 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              Page {currentPage} of {totalPages}
            </p>
          </motion.div>
        )}

        {filteredImages.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-gray-400 font-bold text-xl">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
