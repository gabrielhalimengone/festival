import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              TechFest 2025
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Le rendez-vous incontournable de la technologie et de l'innovation. 
              Rejoignez-nous pour 3 jours d'inspiration et de découvertes.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, name: 'Facebook' },
                { Icon: Twitter, name: 'Twitter' },
                { Icon: Instagram, name: 'Instagram' },
                { Icon: Linkedin, name: 'LinkedIn' }
              ].map(({ Icon, name }) => (
                <a
                  key={name}
                  href="#"
                  aria-label={`Visiter notre page ${name}`}
                  className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-200 hover:-translate-y-1 transform"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', href: '#hero' },
                { name: 'Programme', href: '#programme' },
                { name: 'Speakers', href: '#speakers' },
                { name: 'Billets', href: '#billets' },
                { name: 'Galerie', href: '#galerie' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.href.slice(1));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Palais des Congrès</p>
                  <p className="text-gray-300">2 Place de la Porte Maillot</p>
                  <p className="text-gray-300">75017 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <p className="text-gray-300">+33 1 40 68 22 22</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <p className="text-gray-300">info@techfest2025.fr</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Restez informé des dernières actualités et annonces.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors duration-200"
              />
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} TechFest. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              {['Mentions légales', 'Politique de confidentialité', 'CGV'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;