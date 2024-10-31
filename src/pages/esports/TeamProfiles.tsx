import React from 'react';
import { Users } from 'lucide-react';

interface Team {
  id: string;
  name: string;
  game: string;
  region: string;
  achievements: string;
  image: string;
}

const TeamProfiles = () => {
  const teams: Team[] = [
    {
      id: '1',
      name: "T1",
      game: "League of Legends",
      region: "South Korea",
      achievements: "Multiple World Championships",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
    },
    {
      id: '2',
      name: "Natus Vincere",
      game: "CS2",
      region: "Europe",
      achievements: "Major Champions",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Users className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Team Profiles</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-600">
          Learn about the top eSports teams competing at the highest level.
          Discover their history, achievements, and current roster.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teams.map((team) => (
          <div key={team.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={team.image}
                alt={team.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{team.name}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600"><span className="font-semibold">Game:</span> {team.game}</p>
                <p className="text-gray-600"><span className="font-semibold">Region:</span> {team.region}</p>
                <p className="text-gray-600"><span className="font-semibold">Achievements:</span> {team.achievements}</p>
              </div>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                View Full Profile →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProfiles;