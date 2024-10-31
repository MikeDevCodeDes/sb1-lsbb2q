import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Monitor, 
  Gamepad2, 
  Newspaper, 
  Star, 
  Youtube, 
  Trophy, 
  Users, 
  ShoppingCart, 
  MessageSquare,
  Sparkles,
  UserCircle2,
  ChevronDown
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    {
      name: 'Games',
      icon: Gamepad2,
      path: '/games',
      dropdownItems: [
        { name: 'Top Games', path: '/games/top-games' },
        { name: 'Latest Games', path: '/games/latest' },
        { name: 'Release Calendar', path: '/games/releases' },
        { name: 'Game Trailers', path: '/games/trailers' }
      ]
    },
    {
      name: 'News',
      icon: Newspaper,
      path: '/news',
      dropdownItems: [
        { name: 'Industry Updates', path: '/news/industry' },
        { name: 'Developer Interviews', path: '/news/interviews' }
      ]
    },
    {
      name: 'eSports',
      icon: Trophy,
      path: '/esports',
      dropdownItems: [
        { name: 'eSports News', path: '/esports/news' },
        { name: 'Team Profiles', path: '/esports/teams' },
        { name: 'Event Coverage', path: '/esports/events' }
      ]
    },
    {
      name: 'AI Picks',
      icon: Sparkles,
      path: '/ai-picks'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      path: '/youtube',
      dropdownItems: [
        { name: 'Influencer Spotlights', path: '/youtube/influencers' },
        { name: 'Content Hub', path: '/youtube/content' }
      ]
    },
    {
      name: 'Builds',
      icon: Monitor,
      path: '/builds',
      dropdownItems: [
        { name: 'Build Guides', path: '/builds/guides' },
        { name: 'User Builds', path: '/builds/showcase' }
      ]
    },
    {
      name: 'Shop',
      icon: ShoppingCart,
      path: '/store',
      dropdownItems: [
        { name: 'Games', path: '/store/games' },
        { name: 'Accessories', path: '/store/accessories' },
        { name: 'Merchandise', path: '/store/merch' }
      ]
    },
    {
      name: 'Forum',
      icon: MessageSquare,
      path: '/forum'
    }
  ];

  const userActions = [
    { name: 'Login', icon: UserCircle2, path: '/login' },
    { name: 'Connect', icon: Users, path: '/connect' },
    { name: 'Find Buddies', icon: MessageSquare, path: '/find-buddies' }
  ];

  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">Video-Games</span>
          </Link>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className={`flex items-center space-x-1 hover:text-purple-400 transition-colors ${
                    location.pathname === item.path ? 'text-purple-400' : ''
                  }`}
                  onClick={() => handleDropdown(item.name)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.dropdownItems && <ChevronDown className="w-4 h-4" />}
                </button>
                {item.dropdownItems && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {userActions.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-1 hover:text-purple-400 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  className={`flex items-center justify-between w-full py-2 px-4 hover:bg-gray-800 transition-colors ${
                    location.pathname === item.path ? 'bg-gray-800' : ''
                  }`}
                  onClick={() => handleDropdown(item.name)}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                  {item.dropdownItems && <ChevronDown className="w-4 h-4" />}
                </button>
                {item.dropdownItems && activeDropdown === item.name && (
                  <div className="bg-gray-800">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="block py-2 px-8 hover:bg-gray-700"
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsOpen(false);
                        }}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {userActions.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-2 w-full py-2 px-4 hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;