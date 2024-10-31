import React from 'react';
import { Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const sections = [
    {
      title: 'Main Sections',
      links: [
        { name: 'Games', path: '/games' },
        { name: 'News', path: '/news' },
        { name: 'Store', path: '/store' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Builds', path: '/builds' },
        { name: 'YouTube', path: '/youtube' }
      ]
    },
    {
      title: 'Games',
      links: [
        { name: 'Top Games', path: '/games/top-games' },
        { name: 'Latest Games', path: '/games/latest' },
        { name: 'Release Calendar', path: '/games/releases' },
        { name: 'Game Trailers', path: '/games/trailers' }
      ]
    },
    {
      title: 'Store',
      links: [
        { name: 'Games Store', path: '/store/games' },
        { name: 'Accessories', path: '/store/accessories' },
        { name: 'Merchandise', path: '/store/merch' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Use', path: '/terms' },
        { name: 'Contact Us', path: '/contact' }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Map className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Sitemap</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;