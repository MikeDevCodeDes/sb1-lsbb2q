import React from 'react';
import { Users, Gamepad2, MessageCircle } from 'lucide-react';

const Connect = () => {
  const features = [
    {
      icon: Users,
      title: 'Find Gaming Partners',
      description: 'Connect with players who share your interests'
    },
    {
      icon: Gamepad2,
      title: 'Game Sessions',
      description: 'Organize and join gaming sessions'
    },
    {
      icon: MessageCircle,
      title: 'Chat Rooms',
      description: 'Join game-specific chat rooms'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Users className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Connect</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white rounded-xl shadow-lg p-6 text-center">
            <feature.icon className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Get Started</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Gaming Interests</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="e.g., RPG, FPS, Strategy"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Platform</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
              <option>PC</option>
              <option>PlayStation</option>
              <option>Xbox</option>
              <option>Nintendo Switch</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
          >
            Find Gaming Partners
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connect;