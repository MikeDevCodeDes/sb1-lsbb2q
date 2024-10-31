import React from 'react';
import { Youtube } from 'lucide-react';

const YouTube = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Youtube className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">YouTube</h1>
      </div>
      <p className="text-gray-600">YouTube content coming soon...</p>
    </div>
  );
};

export default YouTube;