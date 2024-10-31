import React from 'react';
import { UserPlus, Star } from 'lucide-react';

interface GamingBuddy {
  id: string;
  name: string;
  games: string[];
  platform: string;
  rating: number;
  status: string;
  avatar: string;
}

const FindBuddies = () => {
  const buddies: GamingBuddy[] = [
    {
      id: '1',
      name: 'PlayerOne',
      games: ['Elden Ring', 'CS2', 'Baldur\'s Gate 3'],
      platform: 'PC',
      rating: 4.8,
      status: 'Online',
      avatar: 'https://images.unsplash.com/photo-1542751371-adc38448a05e'
    },
    {
      id: '2',
      name: 'GameMaster',
      games: ['League of Legends', 'Valorant'],
      platform: 'PC',
      rating: 4.5,
      status: 'In Game',
      avatar: 'https://images.unsplash.com/photo-1542751110-97427bbecf20'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <UserPlus className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Find Gaming Buddies</h1>
      </div>

      <div className="mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Filter Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search by game..."
              className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
            <select className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
              <option>All Platforms</option>
              <option>PC</option>
              <option>PlayStation</option>
              <option>Xbox</option>
            </select>
            <select className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
              <option>All Regions</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {buddies.map((buddy) => (
          <div key={buddy.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex">
            <div className="w-1/3">
              <img
                src={buddy.avatar}
                alt={buddy.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-2/3 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{buddy.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{buddy.rating}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  buddy.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {buddy.status}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">Platform: {buddy.platform}</p>
                <div className="flex flex-wrap gap-2">
                  {buddy.games.map((game) => (
                    <span
                      key={game}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm"
                    >
                      {game}
                    </span>
                  ))}
                </div>
              </div>
              <button className="mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Send Friend Request
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindBuddies;