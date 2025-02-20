
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-white shadow-md relative">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="h-5 w-5 bg-black rounded-full mr-2"></div>
        <span className="font-bold text-lg tracking-wide">BRAND LOGO</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="font-medium hover:text-purple-700 transition duration-300">HOME</Link>
        <Link to="/about" className="font-medium hover:text-purple-700 transition duration-300">ABOUT US</Link>
        <Link to="/services" className="font-medium hover:text-purple-700 transition duration-300">SERVICES</Link>
        <Link to="/login" className="bg-purple-700 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-800 transition duration-300">
          LOGIN
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center focus:outline-none focus:ring-2 focus:ring-purple-400 p-2 rounded-md"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu & Overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-40 z-40 transition-opacity duration-300"
            onClick={toggleMenu}
          ></div>

          {/* Mobile Menu */}
          <div className="absolute top-16 left-0 right-0 bg-white z-50 shadow-lg rounded-b-lg md:hidden transition-transform duration-300 transform scale-y-100 origin-top">
            <div className="flex flex-col p-6 gap-4">
              <Link to="/" className="font-medium py-3 hover:text-purple-700 transition duration-300">HOME</Link>
              <Link to="/about" className="font-medium py-3 hover:text-purple-700 transition duration-300">ABOUT US</Link>
              <Link to="/services" className="font-medium py-3 hover:text-purple-700 transition duration-300">SERVICES</Link>
              <Link to="/login" className="bg-purple-700 text-white px-6 py-2 rounded-md font-medium text-center hover:bg-purple-800 transition duration-300">
                LOGIN
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;


