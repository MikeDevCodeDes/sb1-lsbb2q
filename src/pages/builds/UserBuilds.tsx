import React from 'react';
import { Users } from 'lucide-react';

interface UserBuild {
  id: string;
  user: string;
  title: string;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
  };
  image: string;
  likes: number;
  comments: number;
}

const UserBuilds = () => {
  const builds: UserBuild[] = [
    {
      id: '1',
      user: 'TechEnthusiast',
      title: 'RGB Dream Build',
      specs: {
        cpu: 'AMD Ryzen 9 7950X',
        gpu: 'NVIDIA RTX 4090',
        ram: '64GB DDR5',
        storage: '4TB NVMe SSD'
      },
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c',
      likes: 245,
      comments: 58
    },
    {
      id: '2',
      user: 'PCMasterRace',
      title: 'Minimalist Power',
      specs: {
        cpu: 'Intel i7-13700K',
        gpu: 'NVIDIA RTX 4080',
        ram: '32GB DDR5',
        storage: '2TB NVMe SSD'
      },
      image: 'https://images.unsplash.com/photo-1587202372162-638fa1791a43',
      likes: 189,
      comments: 42
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Users className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">User Builds</h1>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Explore amazing custom PC builds from our community.
          Get inspired and share your own build with fellow enthusiasts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {builds.map((build) => (
          <div key={build.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={build.image}
                alt={build.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{build.title}</h3>
                  <p className="text-gray-600">by {build.user}</p>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{build.likes} likes</span>
                  <span>{build.comments} comments</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600"><span className="font-semibold">CPU:</span> {build.specs.cpu}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">GPU:</span> {build.specs.gpu}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">RAM:</span> {build.specs.ram}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Storage:</span> {build.specs.storage}</p>
              </div>
              <button className="mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                View Build Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBuilds;