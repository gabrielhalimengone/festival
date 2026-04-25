import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

const Program = () => {
  const [selectedDay, setSelectedDay] = useState('jour1');
  const [selectedType, setSelectedType] = useState('tous');

  const sessions = {
    jour1: [
      {
        time: '09:00 - 09:45',
        title: 'Keynote d\'ouverture: L\'avenir de l\'IA',
        speaker: 'Dr. Marie Dubois',
        type: 'keynote',
        location: 'Auditorium Principal'
      },
      {
        time: '10:00 - 10:45',
        title: 'Workshop: Développement React Avancé',
        speaker: 'Thomas Martin',
        type: 'workshop',
        location: 'Salle A'
      },
      {
        time: '11:15 - 12:00',
        title: 'Panel: Cybersécurité en 2025',
        speaker: 'Équipe SecureTech',
        type: 'panel',
        location: 'Salle B'
      }
    ],
    jour2: [
      {
        time: '09:00 - 09:45',
        title: 'Machine Learning et Éthique',
        speaker: 'Prof. Jean Vaillant',
        type: 'keynote',
        location: 'Auditorium Principal'
      },
      {
        time: '10:00 - 10:45',
        title: 'Workshop: DevOps avec Kubernetes',
        speaker: 'Sarah Chen',
        type: 'workshop',
        location: 'Salle A'
      }
    ],
    jour3: [
      {
        time: '09:00 - 09:45',
        title: 'L\'avenir du Web3',
        speaker: 'Alex Rodriguez',
        type: 'keynote',
        location: 'Auditorium Principal'
      },
      {
        time: '10:00 - 10:45',
        title: 'Panel: Startups Tech Françaises',
        speaker: 'Entrepreneurs FR',
        type: 'panel',
        location: 'Salle B'
      }
    ]
  };

  const days = [
    { id: 'jour1', label: 'Jour 1 - 15 Juin', date: '15 Juin' },
    { id: 'jour2', label: 'Jour 2 - 16 Juin', date: '16 Juin' },
    { id: 'jour3', label: 'Jour 3 - 17 Juin', date: '17 Juin' }
  ];

  const types = [
    { id: 'tous', label: 'Tous' },
    { id: 'keynote', label: 'Keynotes' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'panel', label: 'Panels' }
  ];

  const filteredSessions = sessions[selectedDay as keyof typeof sessions]?.filter(
    session => selectedType === 'tous' || session.type === selectedType
  ) || [];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'bg-purple-100 text-purple-800';
      case 'workshop': return 'bg-blue-100 text-blue-800';
      case 'panel': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="programme" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl sm:text-7xl font-black text-gray-900 mb-6 uppercase tracking-tight relative inline-block">
            Programme
            <svg className="absolute -bottom-2 -left-2 w-[110%] h-4 text-blue-500 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
              <path d="M 5 15 Q 50 5, 95 10" />
            </svg>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            40+ sessions sur l'IA, le design, la cybersécurité et le futur du produit. Filtrez par thème, construisez votre propre parcours.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Day Filter */}
            <div className="flex flex-wrap gap-2">
              {days.map((day) => (
                <button
                  key={day.id}
                  onClick={() => setSelectedDay(day.id)}
                  className={`px-6 py-3 font-bold uppercase tracking-wider transition-all duration-200 border-2 border-gray-900 rounded-none ${
                    selectedDay === day.id
                      ? 'bg-blue-500 text-white shadow-[4px_4px_0_0_#111827] -translate-y-1'
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {day.date}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 font-bold uppercase text-sm tracking-wider transition-all duration-200 border-2 border-gray-900 rounded-none ${
                    selectedType === type.id
                      ? 'bg-green-400 text-gray-900 shadow-[4px_4px_0_0_#111827] -translate-y-1'
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sessions */}
        <div key={selectedDay + selectedType} className="grid gap-6 animate-fade-in">
          {filteredSessions.map((session, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-[8px_8px_0_0_#111827] border-4 border-gray-900 hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{session.time}</span>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(session.type)}`}>
                    {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">{session.title}</h3>
                  <p className="text-blue-600 font-bold mb-2">{session.speaker}</p>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{session.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;