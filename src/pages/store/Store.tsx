import React from 'react';
import { ShoppingCart, Gamepad2, Headphones, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const Store = () => {
  const sections = [
    {
      id: 'games',
      title: 'Games',
      icon: Gamepad2,
      description: 'Browse our collection of the latest and greatest games',
      path: '/store/games'
    },
    {
      id: 'accessories',
      title: 'Accessories',
      icon: Headphones,
      description: 'Find the perfect gaming gear and accessories',
      path: '/store/accessories'
    },
    {
      id: 'merchandise',
      title: 'Merchandise',
      icon: Gift,
      description: 'Show your gaming pride with official merchandise',
      path: '/store/merch'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <ShoppingCart className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Store</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.path}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-4">
              <section.icon className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Store;