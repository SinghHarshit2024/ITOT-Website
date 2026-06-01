import { motion } from 'motion/react';
import { 
  Wallet, 
  Users, 
  Home as HomeIcon, 
  Utensils, 
  ShieldCheck, 
  ArrowUpRight,
  Info
} from 'lucide-react';

const Fees = () => {
  const feeCategories = [
    {
      title: "General & OBC Training",
      subtitle: "Craft Instructor Training Scheme (CITS)",
      icon: Users,
      total: "₹4,360",
      description: "Standard annual fee module covering full pedagogical training and workshop access.",
      breakdown: [
        { label: "Instructional Fees", value: "₹2,800" },
        { label: "Safety Uniform Set", value: "₹1,560" }
      ],
      accent: "bg-amber-500"
    },
    {
      title: "SC & ST Training",
      subtitle: "Government Subsidized Program",
      icon: ShieldCheck,
      total: "₹2,860",
      description: "Reserved category fee module with significant subsidies on core instructional training.",
      breakdown: [
        { label: "Instructional Fees", value: "₹1,300" },
        { label: "Safety Uniform Set", value: "₹1,560" }
      ],
      accent: "bg-black"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f6] font-sans selection:bg-amber-200">
      {/* Decorative Header Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[80%] bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] select-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                <div className="w-10 h-[1px] bg-amber-500" />
                <span className="text-amber-600 text-[10px] font-black uppercase tracking-[0.4em]">Investment in Future</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-8 text-black uppercase">
                Industry-Level Excellence <br /> <span className="text-amber-500">Without Barriers.</span>
              </h1>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium max-w-none lg:whitespace-nowrap mx-auto lg:mx-0">
                A transparent, merit-focused fee structure designed to empower the next generation of master educators.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Fee Cards */}
      <section className="pb-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {feeCategories.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white rounded-[40px] border border-gray-200/60 overflow-hidden shadow-2xl shadow-black/[0.03] hover:shadow-black/[0.08] transition-all duration-700"
              >
                <div className="p-8 md:p-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div className="bg-[#f8f8f6] px-4 py-2 rounded-full border border-gray-100 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-black text-black uppercase tracking-widest">Active 2025-26</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-black tracking-tight text-black mb-2 uppercase">{item.title}</h3>
                    <p className="text-amber-600 text-[10px] font-bold uppercase tracking-widest mb-4">{item.subtitle}</p>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-sm">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {item.breakdown.map((row, idx) => (
                      <div key={idx} className="flex justify-between items-end">
                        <div className="space-y-1">
                          <p className="text-gray-400 font-black text-[9px] uppercase tracking-widest">{row.label}</p>
                          <div className="w-32 h-[2px] bg-gray-50" />
                        </div>
                        <p className="text-black font-black text-xl tracking-tight">{row.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mt-4 px-8 md:px-10 py-10 flex items-center justify-between ${item.accent} transition-colors`}>
                  <div className="space-y-1">
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${i === 0 ? 'text-black/60' : 'text-white/60'}`}>Consolidated Yearly Amount</p>
                    <p className={`text-4xl font-black tracking-tighter ${i === 0 ? 'text-black' : 'text-white'}`}>{item.total}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subsidiary Bento Items */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              { 
                title: "Hostel Accommodations", 
                icon: HomeIcon, 
                desc: "Separate campus residences for male and female trainees with full security.",
                status: "State Norms" 
              },
              { 
                title: "Dining & Mess Services", 
                icon: Utensils, 
                desc: "Hygienic community dining calculated on actual monthly vegetable/grain costs.",
                status: "Market Rates" 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/40 backdrop-blur-md p-10 rounded-[32px] border border-gray-200/50 flex flex-col sm:flex-row gap-8 items-center group hover:bg-white transition-all duration-500 shadow-sm"
              >
                <div className="w-14 h-14 bg-amber-50 group-hover:bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h4 className="text-lg font-black text-black mb-1 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-gray-500 text-xs font-semibold leading-relaxed max-w-xs">{item.desc}</p>
                </div>
                <div className="px-6 py-3 rounded-xl border border-gray-100 bg-[#fbfbf9] text-center">
                  <p className="text-[14px] font-black text-black tracking-tight">{item.status}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Institutional Compliance Notice */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-[32px] bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black flex-shrink-0 animate-pulse">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-black uppercase tracking-widest text-xs text-amber-500 mb-1">Financial Compliance</h5>
                <p className="text-sm text-gray-400 font-medium max-w-xl">Fees are subject to UP Government Gazetted updates. Uniform compliance is mandatory for all workshop sessions under NSQF safety standards.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Fees;

