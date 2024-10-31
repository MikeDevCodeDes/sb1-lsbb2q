import React from 'react';
import { Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const sections = [
    {
      id: 'industry',
      title: 'Industry Updates',
      description: 'Latest news and announcements from the gaming industry',
      path: '/news/industry'
    },
    {
      id: 'interviews',
      title: 'Developer Interviews',
      description: 'In-depth conversations with game creators',
      path: '/news/interviews'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Newspaper className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">News</h1>
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

export default News;