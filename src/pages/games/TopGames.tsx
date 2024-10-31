import React from 'react';
import { Trophy } from 'lucide-react';
import GameCard from '../../components/GameCard';

const TopGames = () => {
  const games = [
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
    },
    {
      title: "The Witcher 3",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      genre: "RPG",
      rating: 9.6,
      releaseDate: "2015"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Trophy className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Top Games</h1>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Monthly Rankings</h2>
        <p className="text-gray-600">
          Our monthly rankings are based on player reviews, engagement statistics, and community feedback.
          These games represent the best gaming experiences available right now.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
    </div>
  );
};

export default TopGames;