import React from 'react';
import { Cpu } from 'lucide-react';

interface BuildGuide {
  id: string;
  title: string;
  budget: string;
  description: string;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
  };
  image: string;
}

const BuildGuides = () => {
  const guides: BuildGuide[] = [
    {
      id: '1',
      title: 'Budget Gaming Build',
      budget: '$800',
      description: 'Perfect for 1080p gaming on a budget',
      specs: {
        cpu: 'AMD Ryzen 5 5600X',
        gpu: 'NVIDIA RTX 3060',
        ram: '16GB DDR4',
        storage: '1TB NVMe SSD'
      },
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c'
    },
    {
      id: '2',
      title: 'High-End Gaming Build',
      budget: '$2000',
      description: 'Ultimate 4K gaming experience',
      specs: {
        cpu: 'Intel i9-13900K',
        gpu: 'NVIDIA RTX 4080',
        ram: '32GB DDR5',
        storage: '2TB NVMe SSD'
      },
      image: 'https://images.unsplash.com/photo-1587202372162-638fa1791a43'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Cpu className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Build Guides</h1>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Follow our detailed guides to build your perfect gaming PC.
          Each guide includes component recommendations and step-by-step instructions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{guide.title}</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {guide.budget}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600"><span className="font-semibold">CPU:</span> {guide.specs.cpu}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">GPU:</span> {guide.specs.gpu}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">RAM:</span> {guide.specs.ram}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Storage:</span> {guide.specs.storage}</p>
              </div>
              <button className="mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                View Full Guide →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildGuides;