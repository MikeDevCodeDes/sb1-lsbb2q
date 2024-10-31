import React from 'react';
import { Flame } from 'lucide-react';

const TrendingGames = () => {
  const games = [
    {
      title: "Elden Ring",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      genre: "Action RPG",
      rating: 9.8
    },
    {
      title: "Cyberpunk 2077",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      genre: "Action RPG",
      rating: 9.2
    },
    {
      title: "God of War",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      genre: "Action Adventure",
      rating: 9.9
    }
  ];

  return (
    <section>
      <div className="flex items-center space-x-2 mb-8">
        <Flame className="w-6 h-6 text-red-500" />
        <h2 className="text-2xl font-bold">Trending Now</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <div
            key={game.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{game.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{game.genre}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {game.rating}/10
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingGames;