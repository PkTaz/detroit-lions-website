import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaTv, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import IconWrapper from '../components/IconWrapper';

interface Game {
  id: string;
  week: number;
  opponent: string;
  opponentLogo: string;
  date: string;
  time: string;
  location: string;
  isHome: boolean;
  broadcast: string;
  result?: {
    lionsScore: number;
    opponentScore: number;
    isWin: boolean;
  };
}

const SchedulePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'full' | 'preseason' | 'regular' | 'postseason'>('full');

  // Mock data for games
  const games: Game[] = [
    // Preseason
    {
      id: 'pre1',
      week: 1,
      opponent: 'New York Giants',
      opponentLogo: 'https://static.www.nfl.com/image/private/f_auto/league/t8yw6nxp4zhgkjiolj43',
      date: 'August 11, 2023',
      time: '7:00 PM ET',
      location: 'Ford Field, Detroit, MI',
      isHome: true,
      broadcast: 'Local',
      result: {
        lionsScore: 24,
        opponentScore: 17,
        isWin: true,
      },
    },
    {
      id: 'pre2',
      week: 2,
      opponent: 'Jacksonville Jaguars',
      opponentLogo: 'https://static.www.nfl.com/image/private/f_auto/league/qycnib8xpddtlgrfupkj',
      date: 'August 19, 2023',
      time: '1:00 PM ET',
      location: 'TIAA Bank Field, Jacksonville, FL',
      isHome: false,
      broadcast: 'Local',
      result: {
        lionsScore: 21,
        opponentScore: 28,
        isWin: false,
      },
    },
    {
      id: 'pre3',
      week: 3,
      opponent: 'Carolina Panthers',
      opponentLogo: 'https://static.www.nfl.com/image/private/f_auto/league/p3q8hpkbx06omrxolwqu',
      date: 'August 25, 2023',
      time: '8:00 PM ET',
      location: 'Bank of America Stadium, Charlotte, NC',
      isHome: false,
      broadcast: 'Local',
      result: {
        lionsScore: 33,
        opponentScore: 21,
        isWin: true,
      },
    },
    
    // Regular Season (past games with results)
    {
      id: 'reg1',
      week: 1,
      opponent: 'Kansas City Chiefs',
      opponentLogo: 'https://static.www.nfl.com/image/private/f_auto/league/ujshjqvmnxuqzscqkrgx',
      date: 'September 7, 2023',
      time: '8:20 PM ET',
      location: 'GEHA Field at Arrowhead Stadium, Kansas City, MO',
      isHome: false,
      broadcast: 'NBC',
      result: {
        lionsScore: 21,
        opponentScore: 20,
        isWin: true,
      },
    },
    {
      id: 'reg2',
      week: 2,
      opponent: 'Seattle Seahawks',
      opponentLogo: 'https://static.www.nfl.com/image/private/f_auto/league/qcbwgmunnvmxwd5ih9qa',
      date: 'September 17, 2023',
      time: '1:00 PM ET',
      location: 'Ford Field, Detroit, MI',
      isHome: true,
      broadcast: 'FOX',
      result: {
        lionsScore: 31,
        opponentScore: 13,
        isWin: true,
      },
    },
    
    // Regular Season (upcoming games)
    {
      id: 'reg16',
      week: 16,
      opponent: 'Minnesota Vikings',
      opponentLogo: 'https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz',
      date: 'December 24, 2023',
      time: '1:00 PM ET',
      location: 'U.S. Bank Stadium, Minneapolis, MN',
      isHome: false,
      broadcast: 'FOX',
    },
    {
      id: 'reg17',
      week: 17,
      opponent: 'Dallas Cowboys',
      opponentLogo: 'https://static.www.nfl.com/image/private/f_auto/league/ieid8hoygzdlmzgpfnms',
      date: 'December 30, 2023',
      time: '8:15 PM ET',
      location: 'AT&T Stadium, Arlington, TX',
      isHome: false,
      broadcast: 'ESPN',
    },
    {
      id: 'reg18',
      week: 18,
      opponent: 'Minnesota Vikings',
      opponentLogo: 'https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz',
      date: 'January 7, 2024',
      time: '1:00 PM ET',
      location: 'Ford Field, Detroit, MI',
      isHome: true,
      broadcast: 'FOX',
    },
  ];

  // Filter games based on active tab
  const filteredGames = games.filter((game) => {
    if (activeTab === 'full') return true;
    if (activeTab === 'preseason') return game.id.startsWith('pre');
    if (activeTab === 'regular') return game.id.startsWith('reg');
    if (activeTab === 'postseason') return game.id.startsWith('post');
    return true;
  });

  // Animation variants
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

  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      {/* Schedule Header */}
      <div className="bg-lions-blue py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-4">2023-2024 SCHEDULE</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-white/90 text-center max-w-3xl mx-auto text-lg">
            Follow the Detroit Lions throughout the season. Check game times, broadcast information, and results.
          </p>
        </div>
      </div>

      {/* Schedule Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-2 rounded-md font-bold transition-colors duration-200 ${
                activeTab === 'full' ? 'bg-lions-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab('full')}
            >
              Full Schedule
            </button>
            <button
              className={`px-4 py-2 rounded-md font-bold transition-colors duration-200 ${
                activeTab === 'preseason' ? 'bg-lions-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab('preseason')}
            >
              Preseason
            </button>
            <button
              className={`px-4 py-2 rounded-md font-bold transition-colors duration-200 ${
                activeTab === 'regular' ? 'bg-lions-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab('regular')}
            >
              Regular Season
            </button>
            <button
              className={`px-4 py-2 rounded-md font-bold transition-colors duration-200 ${
                activeTab === 'postseason' ? 'bg-lions-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab('postseason')}
            >
              Postseason
            </button>
          </div>
        </div>

        {/* Schedule List */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredGames.map((game) => (
            <motion.div
              key={game.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className={`p-4 ${game.result ? (game.result.isWin ? 'bg-green-100' : 'bg-red-100') : 'bg-blue-50'}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="inline-block bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                      {game.id.startsWith('pre') ? 'PRE' : 'WEEK'} {game.week}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {game.result ? 'Final' : 'Upcoming'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-gray-700 mb-2 flex items-center">
                      <IconWrapper icon={FaCalendarAlt} className="text-gray-500 mr-1" />
                      <span>{game.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  {/* Teams */}
                  <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                    <div className="flex flex-col items-center mr-0 md:mr-8 mb-4 md:mb-0">
                      <img src="/logo.svg" alt="Detroit Lions" className="w-16 h-16 mb-2" 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr';
                        }}
                      />
                      <span className="font-bold">Lions</span>
                      {game.result && (
                        <span className={`text-2xl font-bold ${game.result.isWin ? 'text-green-600' : 'text-gray-700'}`}>
                          {game.result.lionsScore}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col items-center mx-4">
                      <span className="text-xl font-bold mb-2">VS</span>
                      {game.result ? (
                        <span className={`text-sm font-bold ${game.result.isWin ? 'text-green-600' : 'text-red-600'}`}>
                          {game.result.isWin ? 'WIN' : 'LOSS'}
                        </span>
                      ) : (
                        <div className="flex items-center">
                          <IconWrapper icon={FaClock} className="text-gray-500 mr-1" />
                          <span className="text-gray-700">{game.time}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-center ml-0 md:ml-8 mt-4 md:mt-0">
                      <img src={game.opponentLogo} alt={game.opponent} className="w-16 h-16 mb-2" />
                      <span className="font-bold">{game.opponent}</span>
                      {game.result && (
                        <span className={`text-2xl font-bold ${!game.result.isWin ? 'text-green-600' : 'text-gray-700'}`}>
                          {game.result.opponentScore}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Game Info */}
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center">
                      <IconWrapper icon={FaMapMarkerAlt} className="text-gray-500 mr-2" />
                      <span>{game.location}</span>
                    </div>
                    <div className="flex items-center">
                      <IconWrapper icon={FaTv} className="text-gray-500 mr-2" />
                      <span>{game.broadcast}</span>
                    </div>
                    
                    <Link 
                      to="/tickets" 
                      className="mt-2 inline-flex items-center text-lions-blue hover:underline font-semibold"
                    >
                      <IconWrapper icon={FaTicketAlt} className="mr-2" /> Get Tickets
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Games */}
        {filteredGames.length === 0 && (
          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold mb-2">No games scheduled</h3>
            <p className="text-gray-600">Check back later for updates to the schedule.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage; 