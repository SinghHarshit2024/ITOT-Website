import { Building2, Cpu, Lightbulb, ShieldCheck } from 'lucide-react';

export const Infrastructure = () => (
  <section className="py-24 bg-[#f9f9f7]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20 text-black">
        <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">World Class Facilities</span>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tighter">Superior Infrastructure</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { icon: Building2, title: "Modern Campus", desc: "Sprawling campus with eco-friendly architecture and smart classrooms." },
           { icon: Cpu, title: "Advanced Labs", desc: "Equipped with latest PLCs, CNC machines, and diagnostic equipment." },
           { icon: Lightbulb, title: "Innovation Hub", desc: "Dedicated space for student research and technical experimentation." },
           { icon: ShieldCheck, title: "Secure Stay", desc: "Separate secure hostels for men and women with all basic amenities." }
         ].map((item, i) => (
           <div key={item.title} className="bg-white p-10 rounded-[32px] border border-gray-100 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-black transition-colors">
               <item.icon className="w-6 h-6" />
             </div>
             <h4 className="font-bold text-xl mb-4 text-black">{item.title}</h4>
             <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
           </div>
         ))}
      </div>
    </div>
  </section>
);
