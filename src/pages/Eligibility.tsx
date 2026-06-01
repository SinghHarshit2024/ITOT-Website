import { motion } from 'motion/react';
import { CheckCircle, GraduationCap, Award, Briefcase } from 'lucide-react';

const Eligibility = () => {
  const criteria = [
    {
      title: "ITI Graduates",
      icon: <GraduationCap className="w-8 h-8 text-amber-500" />,
      description: "10th Class with 1/2 year NTC/NAC (ITI) passed in relevant trade.",
      bg: "bg-amber-50"
    },
    {
      title: "Degree Holders",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      description: "Degree in relevant trade from AICTE/UGC recognized Engineering College or University.",
      bg: "bg-blue-50"
    },
    {
      title: "Diploma Holders",
      icon: <Briefcase className="w-8 h-8 text-emerald-500" />,
      description: "03 years Diploma in relevant trade after Class 10 from AICTE/recognized Board of Technical Education.",
      bg: "bg-emerald-50"
    },
    {
      title: "Ex-Servicemen",
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
      description: "Ex-serviceman from Indian Armed Forces with 15 years of service in related field as per equivalency through DGT.",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
            ELIGIBILITY <span className="text-amber-600">CRITERIA</span>
          </h1>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Candidates seeking admission to CITS courses must fulfill the following eligibility requirements as prescribed by DGT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 bg-white group`}
            >
              <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 bg-white rounded-3xl shadow-lg border-l-8 border-amber-500"
        >
          <h4 className="text-xl font-bold text-gray-900 mb-2">Age Limit</h4>
          <p className="text-gray-600">
            Minimum age 18 years as on the first day of the academic session. There is no upper age limit for admission to CITS courses.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Eligibility;
