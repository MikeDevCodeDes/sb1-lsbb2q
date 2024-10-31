import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const AIGameRecommender = () => {
  const [preferences, setPreferences] = useState({
    genre: '',
    playtime: '',
    budget: ''
  });

  const genres = ['Action', 'RPG', 'Strategy', 'Sports', 'Adventure'];
  const playtimes = ['< 10 hours', '10-30 hours', '30+ hours'];
  const budgets = ['Under $20', '$20-$40', '$40+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // AI recommendation logic would go here
  };

  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <Sparkles className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold">AI Game Recommender</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block mb-2">Preferred Genre</label>
              <select
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                value={preferences.genre}
                onChange={(e) => setPreferences({...preferences, genre: e.target.value})}
              >
                <option value="">Select genre</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Playtime</label>
              <select
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                value={preferences.playtime}
                onChange={(e) => setPreferences({...preferences, playtime: e.target.value})}
              >
                <option value="">Select playtime</option>
                {playtimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Budget</label>
              <select
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                value={preferences.budget}
                onChange={(e) => setPreferences({...preferences, budget: e.target.value})}
              >
                <option value="">Select budget</option>
                {budgets.map(budget => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Get Recommendations
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AIGameRecommender;