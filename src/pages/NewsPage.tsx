import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NewsCard from '../components/NewsCard';
import { FaSearch, FaFilter } from 'react-icons/fa';
import IconWrapper from '../components/IconWrapper';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
  slug: string;
}

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Mock data for news articles
  const newsArticles: NewsArticle[] = [
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
    {
      id: '4',
      title: 'Injury Update: Key Players Expected to Return Next Week',
      excerpt: 'Head coach Dan Campbell has provided a positive update on several injured players, with multiple starters expected to return to practice ahead of the crucial divisional matchup.',
      imageUrl: 'https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/moyjbxpncqgtcjmds33q.jpg',
      date: 'December 10, 2023',
      category: 'Team News',
      slug: 'injury-update-key-players',
    },
    {
      id: '5',
      title: 'Lions Sign Veteran Defensive Tackle to Bolster Line',
      excerpt: 'In a move to strengthen their defensive front, the Detroit Lions have signed a veteran defensive tackle with impressive credentials and playoff experience.',
      imageUrl: 'https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/qyovjq5qmwxmch0d9vz4.jpg',
      date: 'December 8, 2023',
      category: 'Team News',
      slug: 'lions-sign-veteran-dt',
    },
    {
      id: '6',
      title: 'Behind the Scenes: A Day in the Life of the Lions Training Facility',
      excerpt: 'Get an exclusive look inside the Detroit Lions training facility and see how players and coaches prepare for gameday with state-of-the-art technology and personalized training regimens.',
      imageUrl: 'https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/o1tuvjhygctbdlawhm3f.jpg',
      date: 'December 5, 2023',
      category: 'Feature',
      slug: 'behind-the-scenes-training-facility',
    },
    {
      id: '7',
      title: 'Lions Quarterback Named NFC Offensive Player of the Month',
      excerpt: 'After a stellar stretch of games leading the Lions to multiple victories, the team\'s quarterback has been recognized as the NFC Offensive Player of the Month.',
      imageUrl: 'https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/e9uxwvx4ergpvtzaiash.jpg',
      date: 'December 2, 2023',
      category: 'Awards',
      slug: 'quarterback-player-of-month',
    },
    {
      id: '8',
      title: 'Lions Host Annual Food Drive Before Thanksgiving Game',
      excerpt: 'The Detroit Lions continued their tradition of giving back to the community by hosting their annual food drive before the Thanksgiving Day game, collecting thousands of items for local food banks.',
      imageUrl: 'https://static.clubs.nfl.com/image/upload/t_editorial_landscape_3_4_desktop/f_auto/lions/ka7vtsm4rgdsj9s05upm.jpg',
      date: 'November 28, 2023',
      category: 'Community',
      slug: 'annual-food-drive',
    },
    {
      id: '9',
      title: 'Offensive Line Analysis: How the Lions Dominated in the Trenches',
      excerpt: 'A detailed breakdown of how the Detroit Lions offensive line has become one of the NFL\'s best units, paving the way for both an explosive passing attack and dominant ground game.',
      imageUrl: 'https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/lions/br7it68mo38emwaveozo.jpg',
      date: 'November 25, 2023',
      category: 'Analysis',
      slug: 'offensive-line-analysis',
    },
  ];

  // Filter articles based on category and search query
  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories from articles
  const categories = ['All', ...Array.from(new Set(newsArticles.map(article => article.category)))];

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
      {/* News Header */}
      <div className="bg-lions-blue py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-4">DETROIT LIONS NEWS</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-white/90 text-center max-w-3xl mx-auto text-lg">
            Stay up to date with the latest Detroit Lions news, team updates, community activities, and player highlights.
          </p>
        </div>
      </div>

      {/* Articles List */}
      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Category Filter */}
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <h3 className="text-gray-700 font-bold mb-2 flex items-center">
                <IconWrapper icon={FaFilter} className="mr-2" /> Filter by Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 rounded-full text-sm font-bold transition-colors duration-200 ${
                      activeCategory === category
                        ? 'bg-lions-blue text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="w-full md:w-64">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lions-blue"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <IconWrapper icon={FaSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
            >
              <NewsCard {...article} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage; 