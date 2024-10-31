import React from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      title: "Next-Gen Console Reveals Coming Soon",
      category: "Hardware",
      date: "2 hours ago",
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      excerpt: "Major console manufacturers hint at upcoming reveals for their next generation gaming systems."
    },
    {
      title: "Major Update Announced for Popular MMO",
      category: "Updates",
      date: "4 hours ago",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      excerpt: "Massive content update brings new regions, quests, and gameplay mechanics to the beloved MMO."
    },
    {
      title: "E-Sports Tournament Sets New Viewership Record",
      category: "E-Sports",
      date: "6 hours ago",
      image: "https://images.unsplash.com/photo-1542751371-6533d4449c2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      excerpt: "The latest international tournament breaks previous viewership records with over 5 million concurrent viewers."
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Newspaper className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold">Latest News</h2>
        </div>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
          <span>View All News</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {item.category}
                </span>
                <span className="text-gray-500 text-sm">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center space-x-1">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;