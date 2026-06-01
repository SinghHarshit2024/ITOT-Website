import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SkeletonProps {
  className?: string;
  variant?: 'pulse' | 'shimmer';
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = "", 
  variant = 'shimmer' 
}) => {
  return (
    <div 
      className={`relative overflow-hidden bg-gray-200 rounded-lg ${className}`}
    >
      {variant === 'shimmer' && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      )}
      {variant === 'pulse' && (
        <div className="absolute inset-0 animate-pulse bg-gray-300/50" />
      )}
    </div>
  );
};

export const CardSkeleton = () => (
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col gap-4">
    <Skeleton className="w-full aspect-video rounded-2xl" />
    <div className="space-y-3">
      <Skeleton className="w-1/3 h-4" />
      <Skeleton className="w-full h-8" />
      <Skeleton className="w-2/3 h-4" />
    </div>
    <div className="flex justify-between items-center pt-4">
      <Skeleton className="w-1/4 h-6" />
      <Skeleton className="w-1/4 h-10 rounded-xl" />
    </div>
  </div>
);

export const CourseCardSkeleton = () => (
  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
    <Skeleton className="w-full h-64" />
    <div className="p-8 space-y-4">
      <div className="flex justify-between">
        <Skeleton className="w-20 h-6 rounded-full" />
        <Skeleton className="w-16 h-6 rounded-full" />
      </div>
      <Skeleton className="w-3/4 h-8" />
      <Skeleton className="w-full h-12" />
      <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-32 h-12 rounded-2xl" />
      </div>
    </div>
  </div>
);

export const SectionTitleSkeleton = () => (
  <div className="flex flex-col items-center gap-4 mb-12">
    <Skeleton className="w-32 h-6 rounded-full" />
    <Skeleton className="w-64 h-12 md:h-16" />
    <Skeleton className="w-24 h-2 rounded-full" />
  </div>
);

export const TableSkeleton = ({ rows = 5 }: { rows?: number }) => (
  <div className="w-full bg-white rounded-3xl border border-gray-100 overflow-hidden">
    <div className="bg-gray-50 h-16 w-full flex items-center px-6 gap-4">
      <Skeleton className="w-12 h-6" />
      <Skeleton className="w-1/3 h-6" />
      <Skeleton className="w-1/4 h-6" />
      <Skeleton className="w-20 h-6 ml-auto" />
    </div>
    <div className="p-6 space-y-6">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="w-12 h-8" />
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-32 h-8 ml-auto" />
        </div>
      ))}
    </div>
  </div>
);

export const ProfileSkeleton = () => (
  <div className="flex flex-col items-center gap-6">
    <Skeleton className="w-48 h-48 md:w-64 md:h-64 rounded-full" variant="pulse" />
    <div className="space-y-3 flex flex-col items-center">
      <Skeleton className="w-32 h-4" />
      <Skeleton className="w-48 h-8" />
    </div>
  </div>
);

export const ListSkeleton = ({ count = 3 }: { count?: number }) => (
  <div className="space-y-4 w-full">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl bg-white">
        <Skeleton className="w-24 h-3 rounded-full" />
        <Skeleton className="w-full h-5 rounded-full" />
      </div>
    ))}
  </div>
);

export const CardGridSkeleton = ({ count = 6, columns = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" }: { count?: number, columns?: string }) => (
  <div className={`grid gap-6 ${columns}`}>
    {Array.from({ length: count }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  containerClassName = "",
  aspectRatio = "aspect-square"
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${containerClassName}`}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
          >
            <Skeleton className="w-full h-full rounded-none" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.1
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={className}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
