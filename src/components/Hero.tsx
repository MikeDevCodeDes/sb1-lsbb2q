import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[600px] bg-gradient-to-r from-gray-900 to-purple-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          opacity: '0.3'
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Gateway to Gaming Excellence
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover the latest games, reviews, and insights from the gaming community.
            Join us in exploring the future of interactive entertainment.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => navigate('/games')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Games
            </button>
            <button 
              onClick={() => navigate('/community')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;