import { History, ShieldCheck, Award, Target, GraduationCap, Users, CheckCircle2 } from 'lucide-react';

export const AboutHistory = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6 text-amber-500">
              <History className="w-6 h-6" />
              <span className="font-bold uppercase tracking-widest text-xs">Our Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight text-black">A Legacy Built on Skill</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Established with a vision to standardize vocational training across Uttar Pradesh, SSTRC Lucknow (formerly ITOT) has evolved into a premier institute under the Directorate of Training and Employment (UP). 
              </p>
              <p>
                Since its inception, the Centre has been a beacon of excellence, focusing on the "Trainer of Trainers" philosophy. We believe that the quality of industrial output is directly proportional to the quality of vocational instruction.
              </p>
              <p>
                Our institution played a pivotal role in the implementation of the National Skills Qualifications Framework (NSQF) in the region, ensuring our trainees are competitive on a national stage. We continue to adapt our curriculum to meet the demands of Industry 4.0.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <ShieldCheck className="w-10 h-10 text-amber-500 mb-4" />
              <h4 className="font-bold text-xl mb-2 text-black">NCVT Affiliated</h4>
              <p className="text-gray-500 text-sm">Recognized by the National Council for Vocational Training for maintaining national standards.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <Award className="w-10 h-10 text-amber-500 mb-4" />
              <h4 className="font-bold text-xl mb-2 text-black">ISO 9001:2015</h4>
              <p className="text-gray-500 text-sm">Maintaining international standards in training quality management systems.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-black text-white p-8 md:p-10 rounded-3xl md:rounded-[40px]">
                <Target className="w-12 h-12 text-amber-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-400 text-sm leading-relaxed italic">
                  "To be a global center of excellence in vocational pedagogy, fostering a new generation of trainers who inspire industrial innovation and sustainable growth."
                </p>
              </div>
              <div className="bg-amber-100 p-8 md:p-10 rounded-3xl md:rounded-[40px] border border-amber-200">
                <GraduationCap className="w-12 h-12 text-amber-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
                <p className="text-amber-800/80 text-sm leading-relaxed font-medium">
                  To deliver high-quality competency-based educational programs that blend deep technical mastery with cutting-edge instructional techniques for future-ready educators.
                </p>
              </div>
            </div>
            <div className="pt-0 md:pt-12 space-y-6">
              <div className="bg-gray-100 p-8 md:p-10 rounded-3xl md:rounded-[40px]">
                <Users className="w-12 h-12 text-amber-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-black">Our Impact</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Successfully training thousands of instructors who are now shaping the future of technical education in ITIs and private industries across India.
                </p>
              </div>
              <div className="bg-amber-500 p-8 md:p-10 rounded-3xl md:rounded-[40px]">
                <CheckCircle2 className="w-12 h-12 text-black mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-black">Digital Mandate</h3>
                <p className="text-black/80 text-sm leading-relaxed font-bold italic">
                  Achieving 100% digitization of our training modules, enabling hybrid learning models for all vocational trades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
