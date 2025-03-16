import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSearch, FaTicketAlt, FaUserCircle } from 'react-icons/fa';
import IconWrapper from './IconWrapper';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'TEAM', path: '/team' },
    { name: 'SCHEDULE', path: '/schedule' },
    { name: 'NEWS', path: '/news' },
    { name: 'VIDEOS', path: '/videos' },
    { name: 'STATS', path: '/stats' },
    { name: 'FANS', path: '/fans' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-lions-blue shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/7/71/Detroit_Lions_logo.svg" 
                alt="Detroit Lions" 
                className="h-12 md:h-16"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr';
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white font-display font-bold hover:text-lions-silver transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-white hover:text-lions-silver transition-colors duration-200">
              <IconWrapper icon={FaSearch} size={20} />
            </button>
            <Link 
              to="/tickets" 
              className="bg-white text-lions-blue hover:bg-lions-silver hover:text-white transition-colors duration-200 px-4 py-2 rounded-md font-bold flex items-center"
            >
              <IconWrapper icon={FaTicketAlt} className="mr-2" />
              TICKETS
            </Link>
            <button className="text-white hover:text-lions-silver transition-colors duration-200">
              <IconWrapper icon={FaUserCircle} size={24} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IconWrapper icon={FaTimes} size={24} /> : <IconWrapper icon={FaBars} size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-lions-blue"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white font-display font-bold hover:text-lions-silver transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/tickets" 
                className="bg-white text-lions-blue hover:bg-lions-silver hover:text-white transition-colors duration-200 px-4 py-2 rounded-md font-bold flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <IconWrapper icon={FaTicketAlt} className="mr-2" />
                TICKETS
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 