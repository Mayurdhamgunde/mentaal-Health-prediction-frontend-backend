// const About = () => {
//     return (
//       <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
//         <h1 className="text-4xl font-bold mb-8">About Us</h1>
//         <p className="text-lg">This is the About Us page content.</p>
//       </div>
//     );
//   };
  
//   export default About;

// import React from 'react';
// import { 
//   Brain, 
//   BarChart, 
//   Shield, 
//   Users, 
//   Activity, 
//   Database,
//   Award,
//   ScrollText
// } from 'lucide-react';

// const AboutSection = ({ title, content, icon: Icon }) => (
//   <div className="flex flex-col items-center text-center p-6">
//     <div className="p-4 bg-blue-100 rounded-full mb-4">
//       <Icon className="w-8 h-8 text-blue-600" />
//     </div>
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p className="text-gray-600">{content}</p>
//   </div>
// );

// const TechCard = ({ title, description, icon: Icon }) => (
//   <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
//     <div className="flex items-center gap-3 mb-3">
//       <div className="p-2 bg-purple-100 rounded-lg">
//         <Icon className="w-5 h-5 text-purple-600" />
//       </div>
//       <h4 className="font-semibold text-lg">{title}</h4>
//     </div>
//     <p className="text-gray-600 text-sm">{description}</p>
//   </div>
// );

// const AboutUs = () => {
//   const stats = [
//     { value: "95%", label: "Prediction Accuracy" },
//     { value: "100+", label: "Features Analyzed" },
//     { value: "24/7", label: "Monitoring" },
//     { value: "Secure", label: "Data Handling" }
//   ];

//   const techStack = [
//     {
//       icon: Brain,
//       title: "Random Forest Classifier",
//       description: "Advanced machine learning model trained on comprehensive mental health data for accurate predictions."
//     },
//     {
//       icon: Database,
//       title: "Standardized Processing",
//       description: "Robust data preprocessing with StandardScaler ensuring consistent and reliable predictions."
//     },
//     {
//       icon: Activity,
//       title: "Real-time Analysis",
//       description: "Flask-powered API enabling instant mental health assessments and predictions."
//     },
//     {
//       icon: Shield,
//       title: "Secure Infrastructure",
//       description: "CORS-enabled backend with comprehensive error handling and logging systems."
//     }
//   ];

//   return (
//     <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 bg-gray-50">
//       {/* Hero Section */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//           Pioneering Mental Health Prediction
//         </h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Using advanced machine learning and data analytics to revolutionize mental health assessment 
//           and support with our AI-powered prediction system.
//         </p>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
//         {stats.map((stat, index) => (
//           <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
//             <div className="text-gray-600">{stat.label}</div>
//           </div>
//         ))}
//       </div>

//       {/* Main Features */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//         <AboutSection 
//           icon={Brain}
//           title="AI-Powered Analysis"
//           content="Advanced machine learning algorithms process multiple mental health indicators for accurate predictions."
//         />
//         <AboutSection 
//           icon={BarChart}
//           title="Data-Driven Insights"
//           content="Comprehensive analysis of mental health patterns using standardized data processing techniques."
//         />
//         <AboutSection 
//           icon={Award}
//           title="High Accuracy"
//           content="Our random forest classifier achieves exceptional accuracy in mental health predictions."
//         />
//         <AboutSection 
//           icon={ScrollText}
//           title="Detailed Reporting"
//           content="Generate comprehensive mental health assessments with confidence scores and detailed insights."
//         />
//       </div>

//       {/* Technical Stack */}
//       <div className="mb-16">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {techStack.map((tech, index) => (
//             <TechCard key={index} {...tech} />
//           ))}
//         </div>
//       </div>

//       {/* Mission Statement */}
//       <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-sm">
//         <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
//         <p className="text-gray-700 max-w-3xl mx-auto">
//           We're committed to making mental health assessment more accessible and accurate through 
//           innovative technology. Our AI-powered system combines clinical expertise with advanced 
//           machine learning to provide reliable mental health predictions and support.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React, { useState } from 'react';
import { 
  Brain, 
  BarChart, 
  Shield, 
  Users, 
  Activity, 
  Database,
  Award,
  ScrollText,
  CheckCircle,
  Clock,
  Code,
  Heart,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const AboutSection = ({ title, content, icon: Icon }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
    <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </div>
);

const TechCard = ({ title, description, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-xl p-8 transition-all duration-500 ${
        isHovered ? 'shadow-2xl scale-105' : 'shadow-md'
      } cursor-pointer border-2 border-transparent hover:border-blue-100`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg transition-colors duration-300 ${
          isHovered ? 'bg-blue-100' : 'bg-purple-100'
        }`}>
          <Icon className={`w-6 h-6 transition-colors duration-300 ${
            isHovered ? 'text-blue-600' : 'text-purple-600'
          }`} />
        </div>
        <h4 className="font-semibold text-xl">{title}</h4>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const TeamMember = ({ name, role, image }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
      <Users className="w-12 h-12 text-blue-600" />
    </div>
    <h4 className="text-xl font-semibold text-center mb-2">{name}</h4>
    <p className="text-gray-600 text-center">{role}</p>
  </div>
);

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
    <div className="p-3 bg-blue-100 rounded-full">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const AboutUs = () => {
  const stats = [
    { value: "95%", label: "Prediction Accuracy", icon: CheckCircle },
    { value: "100+", label: "Features Analyzed", icon: Database },
    { value: "24/7", label: "Monitoring", icon: Clock },
    { value: "100%", label: "Secure", icon: Shield }
  ];

  const techStack = [
    {
      icon: Brain,
      title: "Random Forest Classifier",
      description: "Advanced machine learning model using ensemble methods for highly accurate mental health predictions."
    },
    {
      icon: Code,
      title: "Python & Flask Backend",
      description: "Robust API infrastructure with comprehensive error handling and real-time processing capabilities."
    },
    {
      icon: Activity,
      title: "Real-time Analysis",
      description: "Instant mental health assessments with advanced data preprocessing and standardization."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security with CORS protection and encrypted data transmission."
    }
  ];

  const teamMembers = [
    { name: "Dr. Sarah Johnson", role: "Lead Data Scientist" },
    { name: "Michael Chen", role: "ML Engineer" },
    { name: "Dr. Emily Williams", role: "Mental Health Expert" },
    { name: "Alex Thompson", role: "Backend Developer" },
    { name: "Alex Thompson", role: "Backend Developer" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block p-2 px-4 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
            Transforming Mental Healthcare
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Pioneering Mental Health
            <span className="text-blue-600"> Prediction</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Using advanced machine learning and data analytics to revolutionize mental health assessment 
            and support with our AI-powered prediction system.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <stat.icon className="w-8 h-8 text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-center">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Our Core Features</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Leveraging cutting-edge technology to provide comprehensive mental health analysis and support.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AboutSection 
              icon={Brain}
              title="AI Analysis"
              content="State-of-the-art machine learning algorithms for accurate mental health predictions."
            />
            <AboutSection 
              icon={BarChart}
              title="Data Insights"
              content="Advanced analytics providing deep understanding of mental health patterns."
            />
            <AboutSection 
              icon={Heart}
              title="Personalized Care"
              content="Tailored recommendations based on individual mental health profiles."
            />
            <AboutSection 
              icon={ScrollText}
              title="Detailed Reports"
              content="Comprehensive assessments with actionable insights and recommendations."
            />
          </div>
        </div>

        {/* Technical Stack */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Technology Stack</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Built with cutting-edge technologies to ensure reliability, security, and accuracy.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <TechCard key={index} {...tech} />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Expert professionals dedicated to advancing mental health technology.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Have questions about our mental health prediction system? We're here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <ContactInfo 
              icon={Mail}
              title="Email Us"
              content="contact@mentalhealth.ai"
            />
            <ContactInfo 
              icon={Phone}
              title="Call Us"
              content="+1 (555) 123-4567"
            />
            <ContactInfo 
              icon={MapPin}
              title="Visit Us"
              content="123 Innovation Drive, Tech City"
            />
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            We're committed to making mental health assessment more accessible and accurate through 
            innovative technology. Our AI-powered system combines clinical expertise with advanced 
            machine learning to provide reliable mental health predictions and support, ensuring 
            everyone has access to the care they need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

