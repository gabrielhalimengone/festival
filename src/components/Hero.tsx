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
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gray-900">
      {/* Background Image & Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80")' }}
      ></div>
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 noise-bg"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-20">
          
          {/* Left Column: Typography & Tagline */}
          <div className="text-left max-w-2xl animate-fade-in relative z-10">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6">
              Hacker <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 relative">
                l'Avenir
                {/* Handmade circle SVG */}
                <svg className="absolute -inset-4 w-[120%] h-[120%] text-green-400 opacity-60 -z-10" viewBox="0 0 200 100" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M 10 50 C 30 10, 170 10, 190 50 C 200 80, 150 90, 100 90 C 40 90, 0 60, 20 30" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 opacity-90 text-gray-200 font-medium">
              Oubliez les conférences ennuyeuses. 3 jours de code, de création et d'innovation brute avec la communauté tech la plus vibrante d'Europe.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-12 text-lg text-white">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <Calendar className="w-5 h-5 text-green-400" />
                <span className="font-semibold tracking-wide">15-17 Juin 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="font-semibold tracking-wide">Paris</span>
              </div>
            </div>
            
            <div className="relative inline-block">
              <button
                onClick={scrollToTickets}
                className="bg-green-400 text-gray-900 px-8 py-4 rounded-full text-lg font-black uppercase tracking-widest hover:bg-green-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(74,222,128,0.3)] transition-all duration-300"
              >
                Réserver ma place
              </button>
              {/* Handmade arrow SVG */}
              <svg className="absolute -right-20 top-full w-16 h-16 text-white hidden sm:block animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 10 10 Q 50 10, 80 50 T 80 90 M 60 70 L 80 90 L 100 70" />
              </svg>
            </div>
          </div>
          
          {/* Right Column: Editorial Countdown */}
          <div className="flex-shrink-0 relative">
             <div className="text-[8rem] md:text-[12rem] font-black text-white leading-none tracking-tighter opacity-90 drop-shadow-2xl">
                J-{timeLeft.days}
             </div>
             <div className="absolute top-0 -right-4 md:-right-10 bg-blue-600 text-white font-bold py-2 px-6 transform rotate-12 uppercase tracking-widest text-sm md:text-base border-2 border-white shadow-[4px_4px_0_0_#fff]">
                TechFest 2026
             </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative brutalist ticker at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-green-400 text-gray-900 py-3 overflow-hidden border-t-4 border-gray-900">
        <div className="flex w-max animate-marquee font-bold uppercase tracking-widest text-sm">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-4 whitespace-nowrap">
              <span>* NO BULLSHIT *</span>
              <span className="mx-4">JUST TECH</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;