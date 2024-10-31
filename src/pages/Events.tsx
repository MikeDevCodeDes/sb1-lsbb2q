import React from 'react';
import { Calendar } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
  image: string;
}

const Events = () => {
  const events: Event[] = [
    {
      id: '1',
      title: 'Gaming Convention 2024',
      date: 'June 15-17, 2024',
      location: 'Los Angeles Convention Center',
      type: 'Convention',
      description: 'The biggest gaming event of the year featuring new releases and developer panels.',
      image: 'https://images.unsplash.com/photo-1542751371-6533d4449c2f'
    },
    {
      id: '2',
      title: 'Esports Tournament Finals',
      date: 'July 8-9, 2024',
      location: 'Madison Square Garden',
      type: 'Tournament',
      description: 'Championship finals featuring top teams competing for the grand prize.',
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Calendar className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Gaming Events</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {event.type}
                </span>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600"><span className="font-semibold">Date:</span> {event.date}</p>
                <p className="text-gray-600"><span className="font-semibold">Location:</span> {event.location}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;