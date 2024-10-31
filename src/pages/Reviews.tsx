import React from 'react';
import { Star } from 'lucide-react';
import FeaturedReviews from '../components/FeaturedReviews';

const Reviews = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Star className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Reviews</h1>
      </div>
      <FeaturedReviews />
    </div>
  );
};

export default Reviews;