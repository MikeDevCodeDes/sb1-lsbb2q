import React from 'react';
import { Newspaper } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const IndustryUpdates = () => {
  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: "Next-Gen Console Reveals Coming Soon",
      excerpt: "Major console manufacturers hint at upcoming reveals for their next generation gaming systems.",
      date: "March 15, 2024",
      category: "Hardware",
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128"
    },
    {
      id: '2',
      title: "Major Update Announced for Popular MMO",
      excerpt: "Massive content update brings new regions, quests, and gameplay mechanics.",
      date: "March 14, 2024",
      category: "Updates",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Newspaper className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Industry Updates</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-600">
          Stay informed with the latest industry updates that shape the gaming landscape.
          From major announcements to technological advancements, we keep you in the loop.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {item.category}
                </span>
                <span className="text-gray-500 text-sm">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryUpdates;