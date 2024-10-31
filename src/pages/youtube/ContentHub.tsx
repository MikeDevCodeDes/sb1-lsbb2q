import React from 'react';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  creator: string;
  views: string;
  duration: string;
  thumbnail: string;
  category: string;
}

const ContentHub = () => {
  const videos: Video[] = [
    {
      id: '1',
      title: 'Top 10 Upcoming Games of 2024',
      creator: 'GamePro',
      views: '250K',
      duration: '15:30',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
      category: 'Lists'
    },
    {
      id: '2',
      title: 'Ultimate Gaming Setup Guide',
      creator: 'TechReviewer',
      views: '180K',
      duration: '12:45',
      thumbnail: 'https://images.unsplash.com/photo-1542751110-97427bbecf20',
      category: 'Guides'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Play className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Content Hub</h1>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Your one-stop destination for the best gaming content. From reviews to tutorials,
          find videos that inform and entertain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {video.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{video.creator}</span>
                <span>{video.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentHub;