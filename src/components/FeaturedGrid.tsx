import React from 'react';
import { Newspaper, Calendar, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const FeaturedGrid = () => {
  const featuredItems: FeaturedItem[] = [
    {
      id: '1',
      title: 'Next-Gen Console War Heats Up',
      description: 'Major manufacturers reveal their plans for the next generation of gaming.',
      image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128',
      category: 'Latest News',
      link: '/news/industry'
    },
    {
      id: '2',
      title: 'Elden Ring DLC Announced',
      description: 'FromSoftware reveals massive expansion coming this summer.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
      category: 'Popular Games',
      link: '/games/top-games'
    },
    {
      id: '3',
      title: 'eSports World Championship',
      description: 'Global tournament brings together top teams from around the world.',
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20',
      category: 'Upcoming Events',
      link: '/esports/events'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Latest News':
        return Newspaper;
      case 'Popular Games':
        return Trophy;
      case 'Upcoming Events':
        return Calendar;
      default:
        return ArrowRight;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredItems.map((item) => {
          const Icon = getCategoryIcon(item.category);
          
          return (
            <Link
              key={item.id}
              to={item.link}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-semibold text-purple-500">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-purple-600 font-semibold">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedGrid;