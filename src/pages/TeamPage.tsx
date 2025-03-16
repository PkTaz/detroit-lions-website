import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter } from 'react-icons/fa';
import IconWrapper from '../components/IconWrapper';

interface Player {
  id: string;
  name: string;
  number: string;
  position: string;
  height: string;
  weight: string;
  age: number;
  college: string;
  experience: string;
  imageUrl: string;
}

const TeamPage: React.FC = () => {
  const [activePosition, setActivePosition] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Mock data for players
  const players: Player[] = [
    {
      id: '1',
      name: 'Jared Goff',
      number: '16',
      position: 'QB',
      height: '6-4',
      weight: '217',
      age: 29,
      college: 'California',
      experience: '8th Season',
      imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3046779.png',
    },
    {
      id: '2',
      name: 'Amon-Ra St. Brown',
      number: '14',
      position: 'WR',
      height: '6-0',
      weight: '202',
      age: 24,
      college: 'USC',
      experience: '3rd Season',
      imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4374302.png',
    },
    {
      id: '3',
      name: 'Aidan Hutchinson',
      number: '97',
      position: 'DE',
      height: '6-7',
      weight: '264',
      age: 23,
      college: 'Michigan',
      experience: '2nd Season',
      imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4362478.png',
    },
    {
      id: '4',
      name: 'Penei Sewell',
      number: '58',
      position: 'OT',
      height: '6-5',
      weight: '335',
      age: 23,
      college: 'Oregon',
      experience: '3rd Season',
      imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241474.png',
    },
    {
      id: '5',
      name: 'Frank Ragnow',
      number: '77',
      position: 'C',
      height: '6-5',
      weight: '311',
      age: 27,
      college: 'Arkansas',
      experience: '6th Season',
      imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3115394.png',
    },
    {
      id: '6',
      name: 'David Montgomery',
      number: '5',
      position: 'RB',
      height: '5-11',
      weight: '224',
      age: 26,
      college: 'Iowa State',
      experience: '5th Season',
      imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4047173.png',
    },
    {
      id: '7',
      name: 'Sam LaPorta',
      number: '87',
      position: 'TE',
      height: '6-3',
      weight: '245',
      age: 22,
      college: 'Iowa',
      experience: '1st Season',
      imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4362075.png',
    },
    {
      id: '8',
      name: 'Alex Anzalone',
      number: '34',
      position: 'LB',
      height: '6-3',
      weight: '232',
      age: 29,
      college: 'Florida',
      experience: '7th Season',
      imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3052888.png',
    },
    {
      id: '9',
      name: 'Brian Branch',
      number: '32',
      position: 'DB',
      height: '6-0',
      weight: '190',
      age: 22,
      college: 'Alabama',
      experience: '1st Season',
      imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4602400.png',
    },
  ];

  // Position filter options
  const positions = ['All', 'QB', 'RB', 'WR', 'TE', 'OL', 'DL', 'LB', 'DB', 'ST'];

  // Filter players based on position and search query
  const filteredPlayers = players.filter((player) => {
    const matchesPosition = activePosition === 'All' || player.position === activePosition;
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPosition && matchesSearch;
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
      {/* Team Header */}
      <div className="bg-lions-blue py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-4">DETROIT LIONS ROSTER</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-white/90 text-center max-w-3xl mx-auto text-lg">
            Meet the players who represent the heart and soul of Detroit Lions football. Our roster features a blend of veteran leadership and young talent, all united by a commitment to excellence.
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Position Filter */}
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <h3 className="text-gray-700 font-bold mb-2 flex items-center">
                <IconWrapper icon={FaFilter} className="mr-2" /> Filter by Position
              </h3>
              <div className="flex flex-wrap gap-2">
                {positions.map((position) => (
                  <button
                    key={position}
                    className={`px-3 py-1 rounded-full text-sm font-bold transition-colors duration-200 ${
                      activePosition === position
                        ? 'bg-lions-blue text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setActivePosition(position)}
                  >
                    {position}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="w-full md:w-64">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search players..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lions-blue"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <IconWrapper icon={FaSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Player Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPlayers.map((player) => (
            <motion.div
              key={player.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="relative">
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute top-0 left-0 bg-lions-blue text-white text-2xl font-bold p-2">
                  {player.number}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">{player.name}</h3>
                  <p className="text-white/90">{player.position}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Height</p>
                    <p className="font-bold">{player.height}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Weight</p>
                    <p className="font-bold">{player.weight} lbs</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Age</p>
                    <p className="font-bold">{player.age}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Experience</p>
                    <p className="font-bold">{player.experience}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500 text-sm">College</p>
                  <p className="font-bold">{player.college}</p>
                </div>
                <button className="mt-4 w-full bg-lions-blue hover:bg-blue-700 text-white font-bold py-2 rounded transition-colors duration-200">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPlayers.length === 0 && (
          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold mb-2">No players found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage; 