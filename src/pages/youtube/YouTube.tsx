import React from 'react';
import { Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const YouTube = () => {
  const sections = [
    {
      id: 'influencers',
      title: 'Influencer Spotlights',
      description: 'Discover popular gaming content creators and their unique content',
      path: '/youtube/influencers'
    },
    {
      id: 'content',
      title: 'Content Hub',
      description: 'Browse curated gaming videos from across YouTube',
      path: '/youtube/content'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Youtube className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">YouTube</h1>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Explore gaming content from top creators and discover new channels.
          From reviews to walkthroughs, find the best gaming content on YouTube.
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

export default YouTube;