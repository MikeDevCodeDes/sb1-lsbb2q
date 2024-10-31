import React from 'react';
import { Play } from 'lucide-react';

interface VideoReview {
  id: string;
  title: string;
  game: string;
  reviewer: string;
  thumbnail: string;
  duration: string;
  views: string;
}

const VideoReviews = () => {
  const reviews: VideoReview[] = [
    {
      id: '1',
      title: "Elden Ring - A Masterpiece of Game Design",
      game: "Elden Ring",
      reviewer: "GameVault Reviews",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      duration: "15:24",
      views: "245K"
    },
    {
      id: '2',
      title: "Baldur's Gate 3 - The New Standard for RPGs",
      game: "Baldur's Gate 3",
      reviewer: "RPG Expert",
      thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
      duration: "18:36",
      views: "180K"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Play className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Video Reviews</h1>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Watch comprehensive video reviews from our team and trusted content creators.
          Get detailed insights into gameplay, graphics, and overall experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={review.thumbnail}
                alt={review.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {review.duration}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{review.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{review.reviewer}</span>
                <span>{review.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoReviews;