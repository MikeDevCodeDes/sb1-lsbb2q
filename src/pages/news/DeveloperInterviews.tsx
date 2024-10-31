import React from 'react';
import { MessageSquare } from 'lucide-react';

interface Interview {
  id: string;
  developer: string;
  role: string;
  company: string;
  image: string;
  excerpt: string;
}

const DeveloperInterviews = () => {
  const interviews: Interview[] = [
    {
      id: '1',
      developer: "Jane Smith",
      role: "Lead Designer",
      company: "Epic Games",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      excerpt: "Discussing the future of open-world game design"
    },
    {
      id: '2',
      developer: "John Doe",
      role: "Technical Director",
      company: "CD Projekt Red",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      excerpt: "Behind the scenes of next-gen gaming technology"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <MessageSquare className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Developer Interviews</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-600">
          Gain insights from the minds behind your favorite games. Our exclusive interviews
          with industry professionals reveal the creative processes and future of gaming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {interviews.map((interview) => (
          <div
            key={interview.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/3">
              <img
                src={interview.image}
                alt={interview.developer}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <h3 className="text-xl font-bold mb-2">{interview.developer}</h3>
              <div className="text-gray-600 mb-4">
                <p>{interview.role}</p>
                <p className="text-purple-600">{interview.company}</p>
              </div>
              <p className="text-gray-700 mb-4">{interview.excerpt}</p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Read Interview →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperInterviews;