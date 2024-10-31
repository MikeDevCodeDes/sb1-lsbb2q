import React from 'react';
import { Cpu, Monitor, HardDrive } from 'lucide-react';

const PCBuildGuide = () => {
  const builds = [
    {
      title: "Budget Gaming Build",
      price: "$800",
      specs: [
        { icon: Cpu, name: "CPU", part: "AMD Ryzen 5 5600X" },
        { icon: Cpu, name: "GPU", part: "NVIDIA RTX 3060" },
        { icon: HardDrive, name: "Storage", part: "1TB NVMe SSD" },
        { icon: Monitor, name: "Monitor", part: "24\" 1080p 144Hz" }
      ]
    },
    {
      title: "High-End Gaming Build",
      price: "$2000",
      specs: [
        { icon: Cpu, name: "CPU", part: "Intel i9-13900K" },
        { icon: Cpu, name: "GPU", part: "NVIDIA RTX 4080" },
        { icon: HardDrive, name: "Storage", part: "2TB NVMe SSD" },
        { icon: Monitor, name: "Monitor", part: "27\" 1440p 240Hz" }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {builds.map((build) => (
        <div key={build.title} className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">{build.title}</h3>
            <span className="text-2xl font-bold text-purple-600">{build.price}</span>
          </div>
          <div className="space-y-4">
            {build.specs.map((spec) => (
              <div key={spec.name} className="flex items-center space-x-4">
                <spec.icon className="w-6 h-6 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">{spec.name}</p>
                  <p className="font-medium">{spec.part}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors">
            View Full Build
          </button>
        </div>
      ))}
    </div>
  );
};

export default PCBuildGuide;