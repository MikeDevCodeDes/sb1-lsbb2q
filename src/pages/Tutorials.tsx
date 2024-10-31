import React from 'react';
import { BookOpen } from 'lucide-react';

interface Tutorial {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  duration: string;
  author: string;
  description: string;
  image: string;
}

const Tutorials = () => {
  const tutorials: Tutorial[] = [
    {
      id: '1',
      title: 'Getting Started with PC Building',
      category: 'Hardware',
      difficulty: 'Beginner',
      duration: '45 minutes',
      author: 'TechGuru',
      description: 'Learn the basics of building your first gaming PC from scratch.',
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c'
    },
    {
      id: '2',
      title: 'Advanced Gaming Techniques',
      category: 'Gaming Skills',
      difficulty: 'Advanced',
      duration: '30 minutes',
      author: 'ProGamer',
      description: 'Master advanced techniques to improve your gaming performance.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <BookOpen className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Tutorials</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
                  {tutorial.category}
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  {tutorial.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
              <p className="text-gray-600 mb-4">{tutorial.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>By {tutorial.author}</span>
                <span>{tutorial.duration}</span>
              </div>
              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Start Tutorial
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;