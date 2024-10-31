import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const sections = [
    {
      id: 'user-reviews',
      title: 'User Reviews',
      description: 'Read and share authentic gaming experiences from our community',
      path: '/reviews/user'
    },
    {
      id: 'video-reviews',
      title: 'Video Reviews',
      description: 'Watch in-depth video reviews from trusted gaming experts',
      path: '/reviews/video'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Star className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Reviews</h1>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Discover honest and comprehensive game reviews from both our community and expert reviewers.
          Make informed decisions about your next gaming purchase.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.path}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-bold mb-2">{section.title}</h2>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Reviews;