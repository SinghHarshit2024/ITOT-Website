import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Globe,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  const contactOptions = [
    {
      icon: Phone,
      title: "Direct Call",
      info: "+91 522 232 XXXX",
      subInfo: "Mon-Fri, 10am - 6pm",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      info: "info@itotlucknow.edu.in",
      subInfo: "Response within 24 hours",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: MessageCircle,
      title: "Admission Inquiry",
      info: "admissions@itot.in",
      subInfo: "For prospective students",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <div className="bg-[#fdfdfc] overflow-x-hidden">
      {/* Hero Header */}
      <section className="pt-12 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto md:mx-0 text-center md:text-left"
          >
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-6 block">Contact Us</span>
            <h1 className="text-2xl md:text-5xl font-bold tracking-tighter leading-[0.9] mb-10 text-black px-4 md:px-0">
              Let's shape your <span className="text-amber-500 underline decoration-2 underline-offset-8">Career</span> Path.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Whether you are a prospective student or a recruitment partner, we are here to provide the support and information you need.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Contact Options Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactOptions.map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white border border-gray-100 rounded-[32px] hover:shadow-xl hover:shadow-amber-500/5 transition-all group text-center flex flex-col items-center"
              >
                <div className={`w-14 h-14 ${opt.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <opt.icon className="w-6 h-6" />
                </div>
                <h4 className="font-black text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-3">{opt.title}</h4>
                <p className="text-xl font-black text-black mb-1">{opt.info}</p>
                <p className="text-gray-400 text-sm font-medium">{opt.subInfo}</p>
              </motion.div>
            ))}
          </div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] md:rounded-[60px] border border-gray-100 shadow-2xl shadow-gray-200/40 relative overflow-hidden mb-12 min-h-[400px] md:min-h-[500px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0763!2d80.9388!3d26.9003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d478143a57%3A0xe9c3167a5035f8fc!2sGovernment+Institute+of+Training+of+Trainers+(ITOT)%2C+Aliganj%2C+Lucknow!5e0!3m2!1sen!2sin!4v1714591500000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="ITOT Lucknow Location"
              className="relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 w-full h-[400px] md:h-[500px]"
            />
            <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl border border-white/20 shadow-xl hidden md:block">
              <p className="text-[9px] font-black uppercase tracking-widest text-amber-600 mb-1">Campus Map</p>
              <p className="font-black text-xs text-black">SSTRC ITOT ALIGANJ</p>
            </div>
          </motion.div>

          {/* Visit Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 md:p-16 bg-gray-900 rounded-[40px] md:rounded-[64px] text-white relative overflow-hidden"
          >
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-black italic mb-6 tracking-tighter">Visit Campus</h3>
                <div className="flex gap-4 items-start max-w-md">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <p className="text-gray-400 text-lg font-medium leading-relaxed">
                    State Staff Training and Research Centre, Kapoorthala Road, Aliganj, Lucknow, UP 226024
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[32px] border border-white/10">
                <div className="flex gap-4 items-center mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-500" />
                  </div>
                  <h4 className="font-black uppercase tracking-widest text-xs">Operating Hours</h4>
                </div>
                <p className="text-3xl font-black text-amber-500 mb-2 italic">Mon - Fri</p>
                <p className="text-gray-400 text-xl font-bold italic">10:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

