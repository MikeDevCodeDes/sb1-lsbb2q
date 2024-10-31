import React from 'react';
import { MessageSquare } from 'lucide-react';

const DeveloperInterviews = () => {
  const interviews = [
    {
      developer: "Jane Smith",
      role: "Lead Designer",
      company: "Epic Games",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      excerpt: "Discussing the future of open-world game design"
    },
    {
      developer: "John Doe",
      role: "Technical Director",
      company: "CD Projekt Red",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      excerpt: "Behind the scenes of next-gen gaming technology"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <MessageSquare className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold">Developer Insights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interviews.map((interview) => (
            <div
              key={interview.developer}
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
    </section>
  );
};

export default DeveloperInterviews;