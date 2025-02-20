// import { Link } from 'react-router-dom';
// import mentalHealthImage from '../assets/react.svg';

// const Home = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16">
//       <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
//         <div className="w-full md:w-1/2 space-y-6">
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//             <span className="block">MENTAL</span>
//             <span className="block text-orange-500">HEALTH</span>
//           </h1>
          
//           <p className="text-gray-700">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//             Sed diam nonummy nibh euismod tincidunt ut laoreet 
//             dolore magna aliquam erat volutpat. Ut wisi enim ad 
//             minim veniam, quis nostrud exerci.
//           </p>
          
//           <div className="pt-4">
//             <Link to="/services" className="bg-purple-700 text-white px-8 py-3 rounded-full font-medium inline-block">
//               READ MORE
//             </Link>
//           </div>
          
//           <div className="flex gap-2 pt-4">
//             <div className="h-2 w-2 bg-purple-700 rounded-full"></div>
//             <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
//             <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
        
//         <div className="w-full md:w-1/2 relative">
//           <div className="relative z-10">
//             <img 
//               src={mentalHealthImage} 
//               alt="Mental Health Illustration" 
//               className="w-full h-auto"
//             />
//           </div>
          
//           {/* Decorative Elements */}
//           <div className="absolute top-12 right-12 bg-purple-700 text-white p-2 rounded-md z-0">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//           </div>
          
//           <div className="absolute top-24 right-48 text-orange-500 font-bold text-xl">+</div>
//           <div className="absolute bottom-36 left-12 text-orange-500 font-bold text-xl">+</div>
//           <div className="absolute top-48 right-4 text-orange-500 font-bold text-xl">+</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import { Link } from 'react-router-dom';
import mentalHealthImage from '../assets/react.svg';

const Home = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="block">MENTAL</span>
            <span className="block text-orange-500">HEALTH</span>
          </h1>
          
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed diam nonummy nibh euismod tincidunt ut laoreet 
            dolore magna aliquam erat volutpat. Ut wisi enim ad 
            minim veniam, quis nostrud exerci.
          </p>
          
          <div className="pt-4">
            <Link 
              to="/services" 
              className="bg-purple-700 text-white px-8 py-3 rounded-full font-medium inline-block hover:bg-purple-800 transition duration-300"
            >
              READ MORE
            </Link>
          </div>
          
          <div className="flex justify-center md:justify-start gap-2 pt-4">
            <div className="h-2 w-2 bg-purple-700 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10">
            <img 
              src={mentalHealthImage} 
              alt="Mental Health Illustration" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;

