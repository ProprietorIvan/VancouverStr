import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({ currentPage, showActions = true, transparent = true }: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'Properties', url: '/properties' },
    { text: 'Locations', url: '/locations' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <nav className={`relative ${transparent ? 'bg-transparent !absolute left-0 top-0 w-full z-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => push('/')}
          >
            <span className="text-lg font-semibold tracking-tight text-white">Vancouver Stay</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                onClick={(e) => {
                  e.preventDefault();
                  push(link.url);
                }}
                className={`text-sm font-medium hover:text-white/70 transition-colors ${
                  transparent ? 'text-white' : 'text-gray-900'
                }`}
              >
                {link.text}
              </a>
            ))}

            {showActions && (
              <button
                onClick={() => push('/book')}
                className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300"
              >
                Book Now
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url);
                    setIsMenuOpen(false);
                  }}
                  className="block py-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.text}
                </a>
              ))}

              {showActions && (
                <button
                  onClick={() => {
                    push('/book');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300 mt-4"
                >
                  Book Now
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
