import React from 'react';
import { Sparkles } from 'lucide-react';
import GameCard from '../../components/GameCard';

const LatestGames = () => {
  const games = [
    {
      title: "Final Fantasy XVI",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd",
      genre: "Action RPG",
      rating: 9.2,
      releaseDate: "2024"
    },
    {
      title: "Star Wars: Outlaws",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      genre: "Action Adventure",
      rating: 9.0,
      releaseDate: "2024"
    },
    {
      title: "Dragon's Dogma 2",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
      genre: "Action RPG",
      rating: 8.9,
      releaseDate: "2024"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Sparkles className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Latest Games</h1>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Spotlight Features</h2>
        <p className="text-gray-600">
          Discover the newest releases and upcoming titles that are making waves in the gaming community.
          Each game featured here brings something unique to the table.
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

export default LatestGames;