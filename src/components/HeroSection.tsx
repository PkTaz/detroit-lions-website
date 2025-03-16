import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlayColor?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  showStripes?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  backgroundVideo,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  secondaryCtaText,
  secondaryCtaLink,
  showStripes = false,
}) => {
  return (
    <div 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={!backgroundVideo ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {/* Video Background (if provided) */}
      {backgroundVideo && (
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={backgroundVideo}
        >
          {/* Fallback to image if video can't play */}
          {backgroundImage && <img src={backgroundImage} alt="Background fallback" className="absolute w-full h-full object-cover" />}
        </video>
      )}

      {/* Video Credit */}
      {backgroundVideo && (
        <a 
          href="https://www.youtube.com/watch?v=s365rWolEbM" 
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-40 text-white/70 hover:text-white text-sm md:text-base font-display transition-colors duration-300"
        >
          Video by HypeDetroit
        </a>
      )}

      {/* Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ backgroundColor: overlayColor }}
      />

      {/* Animated diagonal stripes - only shown if showStripes is true */}
      {showStripes && (
        <div className="absolute inset-0 z-20 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0, 118, 182, 0.8) 20px, rgba(0, 118, 182, 0.8) 40px)',
            backgroundSize: '200% 200%',
            animation: 'moveStripes 30s linear infinite',
          }} />
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-30 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {ctaText && ctaLink && (
            <Link 
              to={ctaLink} 
              className="bg-lions-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
            >
              {ctaText}
            </Link>
          )}
          
          {secondaryCtaText && secondaryCtaLink && (
            <Link 
              to={secondaryCtaLink} 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
            >
              {secondaryCtaText}
            </Link>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </motion.div>

      {/* Custom CSS for the diagonal stripes animation */}
      <style>{`
        @keyframes moveStripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection; 