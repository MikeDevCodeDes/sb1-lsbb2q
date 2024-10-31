import React from 'react';
import { ShoppingCart } from 'lucide-react';
import GameCard from '../components/GameCard';

const Store = () => {
  const storeGames = [
    {
      title: "Elden Ring",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      genre: "Action RPG",
      rating: 9.8,
      price: "$59.99"
    },
    {
      title: "God of War Ragnarök",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      genre: "Action Adventure",
      rating: 9.7,
      price: "$69.99"
    },
    {
      title: "Horizon Forbidden West",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
      genre: "Action RPG",
      rating: 9.3,
      price: "$49.99"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <ShoppingCart className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Store</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {storeGames.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
    </div>
  );
};

export default Store;