import React, { useState, useEffect } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-06-15T10:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToTickets = () => {
    const element = document.getElementById('billets');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center py-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            TechFest
            <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2">2026</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Le plus grand festival de technologie et d'innovation de France. 
            3 jours d'inspiration, de créativité et de découvertes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              <span>15-17 Juin 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>Palais des Congrès, Paris</span>
            </div>
          </div>
          
          {/* Countdown */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="glass rounded-2xl p-4">
                <div className="text-3xl sm:text-4xl font-bold">{value}</div>
                <div className="text-sm uppercase tracking-wide opacity-80">
                  {unit === 'days' ? 'Jours' : unit === 'hours' ? 'Heures' : unit === 'minutes' ? 'Minutes' : 'Secondes'}
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={scrollToTickets}
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Réserver maintenant
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;