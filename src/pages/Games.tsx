import React from 'react';
import { Gamepad2 } from 'lucide-react';
import GameCard from '../components/GameCard';

const Games = () => {
  const featuredGames = [
    {
      title: "Final Fantasy XVI",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd",
      genre: "Action RPG",
      rating: 9.2,
      releaseDate: "2024"
    },
    {
      title: "The Last of Us Part I",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
      genre: "Action Adventure",
      rating: 9.8,
      releaseDate: "2022"
    },
    {
      title: "Red Dead Redemption 2",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc",
      genre: "Action Adventure",
      rating: 9.7,
      releaseDate: "2018"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Gamepad2 className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Games</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredGames.slice(0, 2).map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Top Rated</h2>
          <GameCard {...featuredGames[2]} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-purple-100 rounded-lg p-6 hover:bg-purple-200 transition-colors">
          <h3 className="text-xl font-bold mb-2">Latest Releases</h3>
          <p className="text-gray-600">Discover the newest games hitting the market</p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 hover:bg-blue-200 transition-colors">
          <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
          <p className="text-gray-600">Preview upcoming game releases</p>
        </div>
        <div className="bg-green-100 rounded-lg p-6 hover:bg-green-200 transition-colors">
          <h3 className="text-xl font-bold mb-2">Top Rated</h3>
          <p className="text-gray-600">Explore the highest-rated games</p>
        </div>
        <div className="bg-yellow-100 rounded-lg p-6 hover:bg-yellow-200 transition-colors">
          <h3 className="text-xl font-bold mb-2">Game Guides</h3>
          <p className="text-gray-600">Find helpful tips and strategies</p>
        </div>
      </div>
    </div>
  );
};

export default Games;