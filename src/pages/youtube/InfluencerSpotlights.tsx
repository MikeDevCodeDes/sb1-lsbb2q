import React from 'react';
import { Users } from 'lucide-react';

interface Influencer {
  id: string;
  name: string;
  channel: string;
  subscribers: string;
  focus: string;
  image: string;
}

const InfluencerSpotlights = () => {
  const influencers: Influencer[] = [
    {
      id: '1',
      name: 'GamePro',
      channel: '@GamePro',
      subscribers: '2.5M',
      focus: 'Game Reviews & Analysis',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e'
    },
    {
      id: '2',
      name: 'SpeedRunner',
      channel: '@SpeedRunner',
      subscribers: '1.8M',
      focus: 'Speedruns & Tutorials',
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Users className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Influencer Spotlights</h1>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Meet the content creators shaping gaming culture. These influencers bring unique perspectives
          and entertainment to millions of viewers worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {influencers.map((influencer) => (
          <div key={influencer.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={influencer.image}
                alt={influencer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{influencer.name}</h3>
              <div className="space-y-2">
                <p className="text-purple-600">{influencer.channel}</p>
                <p className="text-gray-600">{influencer.subscribers} subscribers</p>
                <p className="text-gray-600">Focus: {influencer.focus}</p>
              </div>
              <button className="mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                View Channel →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerSpotlights;