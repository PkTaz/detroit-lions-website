import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaChevronUp } from 'react-icons/fa';
import IconWrapper from './IconWrapper';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    {
      title: 'TEAM',
      links: [
        { name: 'Roster', path: '/team/roster' },
        { name: 'Coaches', path: '/team/coaches' },
        { name: 'Front Office', path: '/team/front-office' },
        { name: 'History', path: '/team/history' },
        { name: 'Ford Field', path: '/team/ford-field' },
      ]
    },
    {
      title: 'FANS',
      links: [
        { name: 'Fan Zone', path: '/fans/fan-zone' },
        { name: 'Community', path: '/fans/community' },
        { name: 'Events', path: '/fans/events' },
        { name: 'Cheerleaders', path: '/fans/cheerleaders' },
        { name: 'Shop', path: '/fans/shop' },
      ]
    },
    {
      title: 'MEDIA',
      links: [
        { name: 'News', path: '/media/news' },
        { name: 'Videos', path: '/media/videos' },
        { name: 'Photos', path: '/media/photos' },
        { name: 'Podcasts', path: '/media/podcasts' },
        { name: 'Mobile App', path: '/media/mobile-app' },
      ]
    },
    {
      title: 'STADIUM',
      links: [
        { name: 'Tickets', path: '/stadium/tickets' },
        { name: 'Seating Chart', path: '/stadium/seating-chart' },
        { name: 'Parking', path: '/stadium/parking' },
        { name: 'Concessions', path: '/stadium/concessions' },
        { name: 'Stadium Guide', path: '/stadium/guide' },
      ]
    },
  ];

  return (
    <footer className="bg-lions-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Back to top button */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={scrollToTop}
            className="bg-lions-blue hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300 focus:outline-none"
            aria-label="Back to top"
          >
            <IconWrapper icon={FaChevronUp} size={20} />
          </button>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-bold text-lg mb-4 text-lions-blue">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="hover:text-lions-blue transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social media and newsletter */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-display font-bold text-lg mb-4">CONNECT WITH US</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/detroitlions" target="_blank" rel="noopener noreferrer" className="bg-lions-blue hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                  <IconWrapper icon={FaFacebookF} size={18} />
                </a>
                <a href="https://twitter.com/lions" target="_blank" rel="noopener noreferrer" className="bg-lions-blue hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                  <IconWrapper icon={FaTwitter} size={18} />
                </a>
                <a href="https://instagram.com/detroitlions" target="_blank" rel="noopener noreferrer" className="bg-lions-blue hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                  <IconWrapper icon={FaInstagram} size={18} />
                </a>
                <a href="https://youtube.com/detroitlions" target="_blank" rel="noopener noreferrer" className="bg-lions-blue hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                  <IconWrapper icon={FaYoutube} size={18} />
                </a>
                <a href="https://tiktok.com/@detroitlions" target="_blank" rel="noopener noreferrer" className="bg-lions-blue hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                  <IconWrapper icon={FaTiktok} size={18} />
                </a>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <h3 className="font-display font-bold text-lg mb-4">SUBSCRIBE TO LIONS NEWSLETTER</h3>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full md:w-64"
                />
                <button 
                  type="submit" 
                  className="bg-lions-blue hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Detroit Lions. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacy-policy" className="hover:text-lions-blue transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-lions-blue transition-colors duration-200">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-lions-blue transition-colors duration-200">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 