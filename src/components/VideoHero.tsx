import React from 'react';
import { Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoHero = () => {
  return (
    <div className="relative h-[600px] -mt-16 pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-900 opacity-75"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-gaming-logo-3d-animation-380-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Gateway to Gaming Excellence
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover the latest games, connect with fellow gamers, and stay updated
            with the latest in gaming culture.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/games"
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Play className="w-5 h-5" />
              <span>Explore Games</span>
            </Link>
            <Link
              to="/connect"
              className="flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              <span>Join Community</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-8 bg-white rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;