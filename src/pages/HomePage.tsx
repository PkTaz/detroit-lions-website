import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaTicketAlt, FaTrophy, FaUserFriends } from 'react-icons/fa';
import IconWrapper from '../components/IconWrapper';

const HomePage: React.FC = () => {
  
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);


  const newsArticles = [
    {
      id: '1',
      title: 'Lions Secure Playoff Spot with Dominant Victory',
      excerpt: 'The Detroit Lions have clinched a playoff berth with a commanding win over their division rivals, showcasing their offensive prowess and defensive resilience.',
      imageUrl: 'https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/e9uxwvx4ergpvtzaiash.jpg',
      date: 'December 18, 2023',
      category: 'Game Recap',
      slug: 'lions-secure-playoff-spot',
    },
    {
      id: '2',
      title: 'Rookie Sensation Breaks Franchise Record',
      excerpt: 'The Lions\' first-round draft pick has shattered a long-standing franchise record, establishing himself as a cornerstone for the team\'s future success.',
      imageUrl: 'https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/br7it68mo38emwaveozo.jpg',
      date: 'December 15, 2023',
      category: 'Player Spotlight',
      slug: 'rookie-breaks-record',
    },
    {
      id: '3',
      title: 'Lions Announce Community Initiative for Detroit Schools',
      excerpt: 'The Detroit Lions organization has unveiled a new community program aimed at supporting local schools with resources, mentorship, and educational opportunities.',
      imageUrl: 'https://static.clubs.nfl.com/image/upload/t_editorial_landscape_3_4_desktop/f_auto/lions/ka7vtsm4rgdsj9s05upm.jpg',
      date: 'December 12, 2023',
      category: 'Community',
      slug: 'lions-community-initiative',
    },
  ];

  // Featured quick links
  const quickLinks = [
    {
      title: 'Game Schedule',
      description: 'View upcoming games and mark your calendar',
      icon: <IconWrapper icon={FaCalendarAlt} size={36} className="text-white" />,
      link: '/schedule',
      bgColor: 'bg-lions-blue',
    },
    {
      title: 'Get Tickets',
      description: 'Secure your seats at Ford Field',
      icon: <IconWrapper icon={FaTicketAlt} size={36} className="text-white" />,
      link: '/tickets',
      bgColor: 'bg-blue-700',
    },
    {
      title: 'Team Roster',
      description: 'Meet the players and coaching staff',
      icon: <IconWrapper icon={FaUserFriends} size={36} className="text-white" />,
      link: '/team/roster',
      bgColor: 'bg-gray-800',
    },
    {
      title: 'Stats & Records',
      description: 'Explore team and player statistics',
      icon: <IconWrapper icon={FaTrophy} size={36} className="text-white" />,
      link: '/stats',
      bgColor: 'bg-lions-blue',
    },
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Handler for playing the video
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="DETROIT LIONS"
        subtitle="One Pride. One Team. One Goal."
        ctaText="GET TICKETS"
        ctaLink="/tickets"
        secondaryCtaText="WATCH HIGHLIGHTS"
        secondaryCtaLink="/videos"
        backgroundImage="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2IydDJsYXMxZm9peWc1aXBleTNoa2FkcHk2NTZ6bnFjM3QxM3BrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K59L76z3Apfwc8Iahi/giphy.gif"
        backgroundVideo="/lions-video.mp4"
        overlayColor="rgba(0, 0, 0, 0.65)"
        showStripes={false}
      />

      {/* Quick Links Section - Redesigned */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">LIONS GAMEDAY CENTRAL</h2>
            <div className="w-20 h-1 bg-lions-blue mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">Everything you need to support the Detroit Lions on gameday and beyond.</p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Game Schedule Card */}
            <motion.div variants={itemVariants}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-full transform transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-lions-blue to-blue-700 opacity-90 z-10"></div>
                <img 
                  src="https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/qyovjq5qmwxmch0d9vz4.jpg" 
                  alt="Game Schedule"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 flex flex-col items-center text-center p-8 h-full">
                  <div className="bg-white p-4 rounded-full mb-5 shadow-md">
                    <IconWrapper icon={FaCalendarAlt} size={36} className="text-lions-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Game Schedule</h3>
                  <p className="text-white/90 mb-6">View upcoming games and mark your calendar for the next Lions matchup</p>
                  <Link
                    to="/schedule"
                    className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-white text-lions-blue font-bold rounded-full transition-all duration-300 hover:bg-opacity-90"
                  >
                    View Schedule
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Get Tickets Card */}
            <motion.div variants={itemVariants}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-full transform transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-800 opacity-90 z-10"></div>
                <img 
                  src="https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/e9uxwvx4ergpvtzaiash.jpg" 
                  alt="Get Tickets"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 flex flex-col items-center text-center p-8 h-full">
                  <div className="bg-white p-4 rounded-full mb-5 shadow-md">
                    <IconWrapper icon={FaTicketAlt} size={36} className="text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Get Tickets</h3>
                  <p className="text-white/90 mb-6">Secure your seats at Ford Field and be part of the Lions pride</p>
                  <Link
                    to="/tickets"
                    className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-bold rounded-full transition-all duration-300 hover:bg-opacity-90"
                  >
                    Purchase Tickets
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Team Roster Card */}
            <motion.div variants={itemVariants}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-full transform transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90 z-10"></div>
                <img 
                  src="https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/br7it68mo38emwaveozo.jpg" 
                  alt="Team Roster"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 flex flex-col items-center text-center p-8 h-full">
                  <div className="bg-white p-4 rounded-full mb-5 shadow-md">
                    <IconWrapper icon={FaUserFriends} size={36} className="text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Team Roster</h3>
                  <p className="text-white/90 mb-6">Meet the players and coaching staff of the Detroit Lions</p>
                  <Link
                    to="/team/roster"
                    className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-white text-gray-800 font-bold rounded-full transition-all duration-300 hover:bg-opacity-90"
                  >
                    See the Team
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Stats & Records Card */}
            <motion.div variants={itemVariants}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-full transform transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-lions-blue to-blue-900 opacity-90 z-10"></div>
                <img 
                  src="https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/moyjbxpncqgtcjmds33q.jpg" 
                  alt="Stats & Records"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 flex flex-col items-center text-center p-8 h-full">
                  <div className="bg-white p-4 rounded-full mb-5 shadow-md">
                    <IconWrapper icon={FaTrophy} size={36} className="text-lions-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Stats & Records</h3>
                  <p className="text-white/90 mb-6">Explore team and player statistics from past and present</p>
                  <Link
                    to="/stats"
                    className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-white text-lions-blue font-bold rounded-full transition-all duration-300 hover:bg-opacity-90"
                  >
                    View Stats
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Section - updated with YouTube embed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">FEATURED VIDEO</h2>
            <div className="w-20 h-1 bg-lions-blue mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl">
              {isVideoPlaying ? (
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/HA-EUJfcpQA?autoplay=1"
                  title="Detroit Lions Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  {/* Video thumbnail with play button overlay */}
                  <div className="absolute inset-0 bg-gray-800">
                    <img 
                      src="https://img.youtube.com/vi/HA-EUJfcpQA/maxresdefault.jpg" 
                      alt="Detroit Lions Video Thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      className="w-20 h-20 bg-lions-blue rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                      onClick={handlePlayVideo}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-10 w-10 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold mb-2">Inside the Den: Episode 1</h3>
              <p className="text-gray-600">Go behind the scenes with the Detroit Lions in this exclusive video.</p>
              <a 
                href="https://www.youtube.com/watch?v=HA-EUJfcpQA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-lions-blue hover:underline"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">LATEST NEWS</h2>
              <div className="w-20 h-1 bg-lions-blue"></div>
            </div>
            <Link 
              to="/news" 
              className="text-lions-blue font-bold hover:underline flex items-center"
            >
              View All News
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(0, 3).map((article, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr';
                    }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-lions-blue font-semibold mb-1">{article.date}</p>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link to={`/news/${article.id}`} className="text-lions-blue font-bold hover:underline">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Game Banner */}
      <section className="py-12 bg-lions-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">NEXT GAME: LIONS VS BALTIMORE RAVENS</h2>
              <p className="text-white/90 text-lg">Time: TBD • Location: Ford Field</p>
            </div>
            <Link 
              to="/tickets" 
              className="bg-white text-lions-blue hover:bg-lions-silver hover:text-white transition-colors duration-300 px-8 py-3 rounded-md font-bold text-lg"
            >
              GET TICKETS
            </Link>
          </div>
        </div>
      </section>

      {/* Fan Zone Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">FAN ZONE</h2>
            <div className="w-20 h-1 bg-lions-blue mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">Connect with other Lions fans, share your passion, and stay engaged with exclusive content and opportunities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/moyjbxpncqgtcjmds33q.jpg" 
                  alt="Lions Fans at Ford Field" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fan Gallery</h3>
                <p className="text-gray-600 mb-4">Share your gameday photos and see the best fan moments from around Ford Field.</p>
                <Link to="/fans/gallery" className="text-lions-blue font-bold hover:underline">View Gallery</Link>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/qyovjq5qmwxmch0d9vz4.jpg" 
                  alt="Lions Podcast Network" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lions Podcasts</h3>
                <p className="text-gray-600 mb-4">Listen to official team podcasts with player interviews, analysis, and behind-the-scenes content.</p>
                <Link to="/media/podcasts" className="text-lions-blue font-bold hover:underline">Listen Now</Link>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/o1tuvjhygctbdlawhm3f.jpg" 
                  alt="Detroit Lions Merchandise" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lions Pro Shop</h3>
                <p className="text-gray-600 mb-4">Get the latest Lions gear, jerseys, and collectibles from the official team store.</p>
                <Link to="/shop" className="text-lions-blue font-bold hover:underline">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">JOIN THE PRIDE</h2>
            <p className="mb-8 text-gray-300">Sign up for the official Lions newsletter and get exclusive content, special offers, and more delivered straight to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-l-md sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-lions-blue hover:bg-blue-700 text-white px-6 py-3 rounded-r-md sm:rounded-l-none font-bold transition-colors duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
            
            <p className="mt-4 text-sm text-gray-400">By subscribing, you agree to our privacy policy and consent to receive updates from the Detroit Lions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 