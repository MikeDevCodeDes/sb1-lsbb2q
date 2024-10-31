import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ForumCategory {
  id: string;
  title: string;
  description: string;
  topics: number;
  posts: number;
  lastPost: string;
}

const Forum = () => {
  const categories: ForumCategory[] = [
    {
      id: '1',
      title: 'General Gaming',
      description: 'Discuss anything and everything about gaming',
      topics: 1250,
      posts: 5890,
      lastPost: '5 minutes ago'
    },
    {
      id: '2',
      title: 'PC Building',
      description: 'Share your builds and get advice',
      topics: 890,
      posts: 3450,
      lastPost: '15 minutes ago'
    },
    {
      id: '3',
      title: 'Game Reviews',
      description: 'User reviews and discussions',
      topics: 670,
      posts: 2890,
      lastPost: '1 hour ago'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <MessageSquare className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Community Forum</h1>
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold mb-2">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>{category.topics} topics</p>
                <p>{category.posts} posts</p>
                <p>Last post: {category.lastPost}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
          Create New Topic
        </button>
      </div>
    </div>
  );
};

export default Forum;