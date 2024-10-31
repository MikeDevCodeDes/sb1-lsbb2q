import React from 'react';
import { Calendar } from 'lucide-react';

interface Event {
  id: string;
  name: string;
  game: string;
  date: string;
  venue: string;
  prizePool: string;
  image: string;
}

const EventCoverage = () => {
  const events: Event[] = [
    {
      id: '1',
      name: "The International 2024",
      game: "Dota 2",
      date: "August 2024",
      venue: "Seattle, USA",
      prizePool: "$20,000,000+",
      image: "https://images.unsplash.com/photo-1542751371-6533d4449c2f"
    },
    {
      id: '2',
      name: "League of Legends Worlds 2024",
      game: "League of Legends",
      date: "October 2024",
      venue: "Seoul, South Korea",
      prizePool: "$2,500,000",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Calendar className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Event Coverage</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-600">
          Stay up to date with major eSports tournaments and events.
          Get comprehensive coverage, schedules, and results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600"><span className="font-semibold">Game:</span> {event.game}</p>
                <p className="text-gray-600"><span className="font-semibold">Date:</span> {event.date}</p>
                <p className="text-gray-600"><span className="font-semibold">Venue:</span> {event.venue}</p>
                <p className="text-purple-600 font-semibold">Prize Pool: {event.prizePool}</p>
              </div>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                View Coverage →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCoverage;