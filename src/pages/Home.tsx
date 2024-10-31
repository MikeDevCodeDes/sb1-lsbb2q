import React from 'react';
import VideoHero from '../components/VideoHero';
import FeaturedGrid from '../components/FeaturedGrid';
import TrendingGames from '../components/TrendingGames';
import AIGameRecommender from '../components/AIGameRecommender';
import NewsSection from '../components/NewsSection';
import DeveloperInterviews from '../components/DeveloperInterviews';

const Home = () => {
  return (
    <main className="min-h-screen">
      <VideoHero />
      <div className="space-y-16 pb-16">
        <FeaturedGrid />
        <div className="container mx-auto px-4">
          <TrendingGames />
        </div>
        <AIGameRecommender />
        <div className="container mx-auto px-4">
          <NewsSection />
        </div>
        <DeveloperInterviews />
      </div>
    </main>
  );
};

export default Home;