import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
  slug: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  excerpt,
  imageUrl,
  date,
  category,
  slug,
}) => {
  const [imageError, setImageError] = useState(false);

  // Handle image loading errors
  const handleImageError = () => {
    setImageError(true);
  };

  // Default fallback image if the main image fails to load
  const fallbackImage = 'https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr';

  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/news/${slug}`} className="block">
        <div className="relative">
          <img 
            src={imageError ? fallbackImage : imageUrl} 
            alt={title} 
            className="w-full h-48 object-cover"
            onError={handleImageError}
          />
          <div className="absolute top-0 right-0 bg-lions-blue text-white text-xs font-bold px-3 py-1 m-2 rounded">
            {category}
          </div>
        </div>
        
        <div className="p-5">
          <div className="text-gray-500 text-sm mb-2">{date}</div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{title}</h3>
          <p className="text-gray-700 line-clamp-3 mb-4">{excerpt}</p>
          
          <div className="flex items-center text-lions-blue font-bold">
            Read More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
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
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsCard; 