import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TechFest 2026
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Accueil', 'Programme', 'Speakers', 'Billets', 'Galerie'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace('accueil', 'hero'))}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Menu principal"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-white border-b overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['Accueil', 'Programme', 'Speakers', 'Billets', 'Galerie'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace('accueil', 'hero'))}
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 w-full text-left font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;