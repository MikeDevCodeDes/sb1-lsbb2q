import React from 'react';
import { Trophy } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tournament: string;
  image: string;
}

const ESportsNews = () => {
  const news: NewsItem[] = [
    {
      id: '1',
      title: "League of Legends World Championship Sets New Viewership Record",
      excerpt: "The latest international tournament breaks previous records with over 5 million concurrent viewers.",
      date: "March 15, 2024",
      tournament: "LoL Worlds 2024",
      image: "https://images.unsplash.com/photo-1542751371-6533d4449c2f"
    },
    {
      id: '2',
      title: "VALORANT Champions Tour Announces Major Format Changes",
      excerpt: "New tournament structure aims to provide more opportunities for emerging teams.",
      date: "March 14, 2024",
      tournament: "VCT 2024",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Trophy className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">eSports News</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-600">
          Stay updated with the latest news from the competitive gaming world.
          From tournament results to team updates, we cover everything eSports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.map((item) => (
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
                  {item.tournament}
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

export default ESportsNews;