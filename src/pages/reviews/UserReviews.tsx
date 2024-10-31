import React from 'react';
import { Users } from 'lucide-react';
import GameCard from '../../components/GameCard';

const UserReviews = () => {
  const reviews = [
    {
      title: "Elden Ring",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      genre: "Action RPG",
      rating: 9.8,
      reviewCount: 1250
    },
    {
      title: "Baldur's Gate 3",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
      genre: "RPG",
      rating: 9.7,
      reviewCount: 980
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Users className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">User Reviews</h1>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Your voice matters! Share your thoughts and experiences about the games you've played.
          Help fellow gamers make informed decisions with your honest reviews.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
    </div>
  );
};

export default UserReviews;