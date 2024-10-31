import React from 'react';
import { Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const Builds = () => {
  const sections = [
    {
      id: 'guides',
      title: 'Build Guides',
      description: 'Step-by-step guides for building your perfect gaming PC',
      path: '/builds/guides'
    },
    {
      id: 'showcase',
      title: 'User Builds',
      description: 'Browse and share custom PC builds from our community',
      path: '/builds/showcase'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Monitor className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">PC Builds</h1>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Whether you're building your first gaming PC or upgrading your current setup,
          our comprehensive guides and community showcases will help you create the perfect build.
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

export default Builds;