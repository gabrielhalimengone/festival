import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Check } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
    }, 1500);
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-4xl font-black text-green-400 mb-4 uppercase tracking-tighter">
              TechFest 2026
            </h3>
            <p className="text-gray-300 mb-6 font-medium">
              Fait avec amour par des gens qui auraient voulu ce festival bien avant.
              Rejoignez-nous pour 3 jours de création brute.
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
                  className="p-3 border-2 border-gray-700 hover:border-green-400 hover:text-green-400 bg-transparent transition-colors duration-200"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-black uppercase tracking-wider mb-6">Navigation</h4>
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
                    className="text-gray-300 hover:text-green-400 font-medium uppercase text-sm tracking-widest transition-colors duration-200"
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
            <h4 className="text-xl font-black uppercase tracking-wider mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Palais des Congrès</p>
                  <p className="text-gray-300 font-medium">2 Place de la Porte Maillot</p>
                  <p className="text-gray-300 font-medium">75017 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <p className="text-gray-300 font-medium">+33 1 40 68 22 22</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <p className="text-gray-300 font-medium">info@techfest2026.fr</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-black uppercase tracking-wider mb-6">Newsletter</h4>
            {isSubscribed ? (
              <div className="bg-green-400 p-6 border-2 border-green-400 text-gray-900 flex flex-col items-center justify-center text-center">
                <Check className="w-10 h-10 mb-2 stroke-[3]" />
                <p className="font-black uppercase tracking-widest text-lg">Abonné !</p>
                <p className="font-medium text-sm mt-2">Préparez-vous à recevoir du lourd.</p>
              </div>
            ) : (
              <>
                <p className="text-gray-300 mb-4 font-medium">
                  On n'envoie pas de spam. Juste les vraies infos quand elles arrivent — nouveaux speakers, ouverture des inscriptions, et quelques surprises.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Votre adresse email"
                    className="w-full px-4 py-3 bg-black text-white border-2 border-gray-700 focus:border-green-400 focus:outline-none transition-colors duration-200 rounded-none font-medium placeholder-gray-500"
                  />
                  <button 
                    type="submit"
                    disabled={isSubscribing}
                    className="w-full bg-blue-500 text-white py-3 px-4 font-black uppercase tracking-widest border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubscribing ? 'Inscription...' : 'S\'abonner'}
                  </button>
                </form>
              </>
            )}
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
                  className="text-gray-400 hover:text-white uppercase font-bold text-xs tracking-widest transition-colors duration-200"
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