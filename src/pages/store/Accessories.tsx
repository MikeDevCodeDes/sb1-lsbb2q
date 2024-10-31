import React from 'react';
import { Headphones } from 'lucide-react';
import GameCard from '../../components/GameCard';

const Accessories = () => {
  const accessories = [
    {
      title: "DualSense Edge Controller",
      image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96",
      genre: "Controller",
      rating: 4.8,
      price: "$199.99"
    },
    {
      title: "Razer BlackShark V2 Pro",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      genre: "Headset",
      rating: 4.7,
      price: "$179.99"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Headphones className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Gaming Accessories</h1>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Explore our carefully curated collection of gaming accessories. From controllers to headsets,
          find the perfect gear to enhance your gaming experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accessories.map((accessory) => (
          <GameCard key={accessory.title} {...accessory} />
        ))}
      </div>
    </div>
  );
};

export default Accessories;