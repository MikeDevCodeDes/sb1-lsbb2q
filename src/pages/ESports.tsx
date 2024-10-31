import React from 'react';
import { Trophy } from 'lucide-react';

const ESports = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Trophy className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">eSports</h1>
      </div>
      <p className="text-gray-600">eSports content coming soon...</p>
    </div>
  );
};

export default ESports;