import React from 'react';
import { Cpu } from 'lucide-react';
import PCBuildGuide from '../components/PCBuildGuide';

const PCBuilds = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Cpu className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">PC Builds</h1>
      </div>
      <div className="prose max-w-none mb-8">
        <p className="text-xl text-gray-600">
          Find the perfect gaming PC build for your budget and needs. Our guides are updated monthly
          with the latest components and best value recommendations.
        </p>
      </div>
      <PCBuildGuide />
    </div>
  );
};

export default PCBuilds;