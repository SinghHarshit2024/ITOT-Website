import { Target } from 'lucide-react';
import { ImageWithSkeleton } from '../ui/Skeleton';

export const DirectorMessage = () => (
  <section className="py-24 bg-amber-50/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white rounded-[60px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <div className="lg:w-1/3 bg-zinc-50 border-r border-zinc-100 flex items-center justify-center p-12 relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
           <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none" />
           <div className="text-center relative z-10">
              <div className="w-48 h-48 rounded-full border-4 border-amber-500 mx-auto mb-8 overflow-hidden">
                <ImageWithSkeleton 
                  src="/Images/DK.webp" 
                  alt="Director" 
                  className="w-full h-full object-cover object-top" 
                  aspectRatio="aspect-square"
                  containerClassName="rounded-full"
                />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-2">Shri D.K. Singh</h3>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Director, SSTRC Aliganj, Lucknow</p>
           </div>
        </div>
        <div className="lg:w-2/3 p-12 md:p-20 relative">
           <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
             <Target className="w-64 h-64 text-black" />
           </div>
           <div className="relative z-10">
             <p className="text-gray-700 text-2xl font-medium leading-relaxed italic mb-10">
               "Our mission is to empower the next generation of vocational instructors with global standards of skill and pedagogy. We believe that technical education is the backbone of national development, and our commitment is to provide an environment where every trainee can reach their full potential and lead with confidence."
             </p>
             <div className="space-y-6 text-gray-500">
                <p>
                  The State Staff Training & Research Centre (SSTRC) has been at the forefront of technical education, constantly evolving its methodology to align with the National Skills Development Corporation's goals. We emphasize practical exposure, ethical instruction, and innovative research in vocational training.
                </p>
                <p>
                  I invite you to be a part of this transformative journey where we combine traditional values with modern technology to create a brighter future for the youth of our country.
                </p>
             </div>
             <div className="mt-12">
                <p className="text-black font-black text-lg underline decoration-amber-500 decoration-4 underline-offset-4">Join our mission towards a Skilled India.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);
