import React from 'react';
import { Gift } from 'lucide-react';
import GameCard from '../../components/GameCard';

const Merchandise = () => {
  const merchandise = [
    {
      title: "Gaming Logo T-Shirt",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
      genre: "Apparel",
      rating: 4.5,
      price: "$24.99"
    },
    {
      title: "Collector's Edition Figurine",
      image: "https://images.unsplash.com/photo-1608889476518-738c9b1dcb40",
      genre: "Collectible",
      rating: 4.9,
      price: "$79.99"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Gift className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Gaming Merchandise</h1>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Show off your gaming pride with our collection of official merchandise.
          From clothing to collectibles, represent your favorite games in style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {merchandise.map((item) => (
          <GameCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Merchandise;