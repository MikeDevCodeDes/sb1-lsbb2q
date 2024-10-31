import React from 'react';
import { Calendar } from 'lucide-react';
import GameCard from './GameCard';

const ReleaseCalendar = () => {
  const upcomingGames = [
    {
      title: "Final Fantasy XVI",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      genre: "RPG",
      rating: 9.5,
      releaseDate: "June 2024",
      price: "$69.99"
    },
    {
      title: "Star Wars: Outlaws",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      genre: "Action Adventure",
      rating: 9.0,
      releaseDate: "August 2024",
      price: "$59.99"
    }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <Calendar className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold">Upcoming Releases</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingGames.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReleaseCalendar;