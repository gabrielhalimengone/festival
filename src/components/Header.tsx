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
    <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm z-50 border-b-4 border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black uppercase tracking-tighter text-gray-900">
              TechFest 2026
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Accueil', 'Programme', 'Speakers', 'Billets', 'Galerie'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace('accueil', 'hero'))}
                className="text-gray-900 font-bold uppercase text-sm tracking-widest hover:text-green-500 hover:scale-110 transition-all duration-200"
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

      <div className={`md:hidden bg-gray-900 border-b-4 border-gray-900 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['Accueil', 'Programme', 'Speakers', 'Billets', 'Galerie'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace('accueil', 'hero'))}
              className="block px-4 py-4 text-white hover:text-green-400 hover:bg-gray-800 border-b border-gray-800 transition-colors duration-200 w-full text-left font-black uppercase tracking-widest"
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