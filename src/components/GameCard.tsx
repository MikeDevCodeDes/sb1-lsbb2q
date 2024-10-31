import React from 'react';
import { Star } from 'lucide-react';

interface GameCardProps {
  title: string;
  image: string;
  genre: string;
  rating: number;
  releaseDate?: string;
  price?: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, image, genre, rating, releaseDate, price }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 overflow-hidden bg-gray-100">
        {!imageError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <Star className="w-12 h-12" />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">{genre}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="font-semibold">{rating}/10</span>
          </div>
        </div>
        {(releaseDate || price) && (
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
            {releaseDate && (
              <span className="text-sm text-gray-500">
                Release: {releaseDate}
              </span>
            )}
            {price && (
              <span className="text-lg font-bold text-green-600">
                {price}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;