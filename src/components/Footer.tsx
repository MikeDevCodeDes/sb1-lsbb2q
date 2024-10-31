import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram, 
  Mail, 
  MessageSquare, 
  Gamepad2 
} from 'lucide-react';

const Footer = () => {
  const sections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "Games", path: "/games" },
        { name: "Store", path: "/store" },
        { name: "News", path: "/news" },
        { name: "Community", path: "/community" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Forums", path: "/forums" },
        { name: "Build Showcase", path: "/builds/showcase" },
        { name: "Tutorials", path: "/tutorials" },
        { name: "Events", path: "/events" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Use", path: "/terms" },
        { name: "Site Map", path: "/sitemap" },
        { name: "Contact Us", path: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageSquare, href: "#", label: "Chat" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Gamepad2 className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold">Video-Games</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your ultimate destination for gaming news, reviews, and community.
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Video-Games. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;