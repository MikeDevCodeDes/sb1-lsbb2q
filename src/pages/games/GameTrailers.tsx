import React from 'react';
import { Play } from 'lucide-react';

interface Trailer {
  id: string;
  title: string;
  game: string;
  thumbnail: string;
  date: string;
}

const GameTrailers = () => {
  const trailers: Trailer[] = [
    {
      id: '1',
      title: "Gameplay Reveal Trailer",
      game: "Final Fantasy XVI",
      thumbnail: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd",
      date: "March 2024"
    },
    {
      id: '2',
      title: "Story Trailer",
      game: "Star Wars: Outlaws",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      date: "February 2024"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Play className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Game Trailers</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-600">
          Get excited for upcoming releases with our collection of the latest game trailers.
          Experience stunning visuals and gameplay mechanics before release.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {trailers.map((trailer) => (
          <div key={trailer.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gray-100">
              <img
                src={trailer.thumbnail}
                alt={trailer.game}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{trailer.game}</h3>
              <p className="text-gray-600 mb-2">{trailer.title}</p>
              <p className="text-sm text-gray-500">{trailer.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameTrailers;