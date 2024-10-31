import React from 'react';
import { Star } from 'lucide-react';

const FeaturedReviews = () => {
  const reviews = [
    {
      title: "DualSense Edge Controller",
      type: "Controller",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      summary: "Premium build quality with exceptional customization options"
    },
    {
      title: "Razer BlackShark V2 Pro",
      type: "Headset",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      summary: "Wireless excellence with supreme comfort"
    }
  ];

  return (
    <section>
      <div className="flex items-center space-x-2 mb-8">
        <Star className="w-6 h-6 text-yellow-500" />
        <h2 className="text-2xl font-bold">Featured Reviews</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div
            key={review.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-2/5">
              <img
                src={review.image}
                alt={review.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{review.title}</h3>
                  <span className="text-gray-600 text-sm">{review.type}</span>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {review.rating}/5
                </span>
              </div>
              <p className="text-gray-600">{review.summary}</p>
              <button className="mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Read Full Review →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedReviews;