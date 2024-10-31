import React from 'react';
import { Calendar } from 'lucide-react';
import GameCard from '../../components/GameCard';

interface MonthlyReleases {
  month: string;
  games: {
    title: string;
    image: string;
    genre: string;
    rating: number;
    releaseDate: string;
    price: string;
  }[];
}

const ReleaseCalendar = () => {
  const releases: MonthlyReleases[] = [
    {
      month: "March 2024",
      games: [
        {
          title: "Dragon's Dogma 2",
          image: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
          genre: "Action RPG",
          rating: 8.9,
          releaseDate: "March 22, 2024",
          price: "$69.99"
        }
      ]
    },
    {
      month: "April 2024",
      games: [
        {
          title: "Star Wars: Outlaws",
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
          genre: "Action Adventure",
          rating: 9.0,
          releaseDate: "April 15, 2024",
          price: "$69.99"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Calendar className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Release Calendar</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-600">
          Stay informed about upcoming game releases. Our calendar is regularly updated
          with the latest release dates and information about new titles.
        </p>
      </div>

      {releases.map((month) => (
        <div key={month.month} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{month.month}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {month.games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReleaseCalendar;