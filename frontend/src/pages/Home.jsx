

// import { Link } from 'react-router-dom';
// import mentalHealthImage from '../assets/react.svg';

// const Home = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16">
//       <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//             <span className="block">MENTAL</span>
//             <span className="block text-orange-500">HEALTH</span>
//           </h1>
          
//           <p className="text-gray-600 leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//             Sed diam nonummy nibh euismod tincidunt ut laoreet 
//             dolore magna aliquam erat volutpat. Ut wisi enim ad 
//             minim veniam, quis nostrud exerci.
//           </p>
          
//           <div className="pt-4">
//             <Link 
//               to="/services" 
//               className="bg-purple-700 text-white px-8 py-3 rounded-full font-medium inline-block hover:bg-purple-800 transition duration-300"
//             >
//               READ MORE
//             </Link>
//           </div>
          
//           <div className="flex justify-center md:justify-start gap-2 pt-4">
//             <div className="h-2 w-2 bg-purple-700 rounded-full"></div>
//             <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
//             <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
        
//         {/* Right Section */}
//         <div className="w-full md:w-1/2 relative">
//           <div className="relative z-10">
//             <img 
//               src={mentalHealthImage} 
//               alt="Mental Health Illustration" 
//               className="w-full h-auto object-cover rounded-lg"
//             />
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { Link } from 'react-router-dom';
import mentalHealthImage from '../assets/mentalHealthimg.jpeg';
import { Brain, Sparkles, ChevronRight, Activity, Wand2, Globe, Lightbulb, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-15 bg-gradient-to-br from-slate-50 via-purple-100 to-blue-200">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-2"
          >
            <Brain className="text-purple-800" size={28} />
            <span className="text-sm font-medium bg-purple-200 text-purple-800 px-3 py-1 rounded-full">AI-Powered Wellness</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="block flex items-center">MENTAL</span>
            <span className="block text-orange-600 flex items-center gap-2">
              HEALTH <Sparkles className="text-yellow-500" size={36} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-700 leading-relaxed text-lg"
           >
            <span className="font-semibold">
              Transform your mental wellness journey with our
            </span>{" "}
            <span className="italic font-mono text-purple-800">AI-driven approach</span>.
            <span className="font-semibold">
            {" "}We combine cutting-edge technology with evidence-based therapeutic methods
              to provide personalized support tailored to your unique needs and goals.
              Our platform makes professional mental health resources accessible,
              affordable, and effective for everyone.
            </span>
          </motion.p>



          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-6"
          >
            <Link
              to="/services"
              className="bg-purple-800 text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-purple-900 transition-all duration-300 shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 hover:translate-y-[-2px]"
              aria-label="Explore our mental health services"
            >
              EXPLORE SERVICES <ChevronRight size={16} />
            </Link>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-8 flex gap-6 justify-center md:justify-start flex-wrap"
          >
            <div className="flex flex-col items-center md:items-start hover:scale-105 transition-transform duration-300">
              <Activity className="text-blue-600 mb-2" size={20} />
              <span className="text-sm text-gray-700">Personalized</span>
            </div>
            <div className="flex flex-col items-center md:items-start hover:scale-105 transition-transform duration-300">
              <Wand2 className="text-purple-600 mb-2" size={20} />
              <span className="text-sm text-gray-700">AI-Enhanced</span>
            </div>
            <div className="flex flex-col items-center md:items-start hover:scale-105 transition-transform duration-300">
              <Globe className="text-green-600 mb-2" size={20} />
              <span className="text-sm text-gray-700">Global Reach</span>
            </div>
            <div className="flex flex-col items-center md:items-start hover:scale-105 transition-transform duration-300">
              <Lightbulb className="text-yellow-600 mb-2" size={20} />
              <span className="text-sm text-gray-700">Innovative</span>
            </div>
            <div className="flex flex-col items-center md:items-start hover:scale-105 transition-transform duration-300">
              <Rocket className="text-red-600 mb-2" size={20} />
              <span className="text-sm text-gray-700">Fast Growth</span>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full md:w-1/2 relative mt-12 md:mt-0"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 rounded-2xl blur-xl opacity-50"></div>
          <motion.div 
            className="relative z-10"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <img
              src={mentalHealthImage}
              alt="Interactive mental health support platform visualization with AI-powered therapeutic elements"
              className="w-full h-auto object-fill rounded-md bg-white p-0.5 shadow-lg"
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg z-20 hidden md:flex items-center gap-3"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="bg-purple-100 p-2 rounded-full">
              <Brain className="text-purple-800" size={20} />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-800">Smart Mental Care</div>
              <div className="text-xs text-gray-600">AI-powered solutions</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

