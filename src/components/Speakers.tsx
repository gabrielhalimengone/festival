import React, { useState } from 'react';
import { X, Linkedin, Twitter } from 'lucide-react';

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);

  const speakers = [
    {
      id: 1,
      name: 'Dr. Marie Dubois',
      title: 'Directrice IA chez TechCorp',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Experte mondiale en intelligence artificielle avec plus de 15 ans d\'expérience. Auteure de nombreux articles sur l\'éthique de l\'IA.',
      expertise: ['Intelligence Artificielle', 'Machine Learning', 'Éthique Tech'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 2,
      name: 'Thomas Martin',
      title: 'Lead Developer chez ReactMasters',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Développeur passionné spécialisé dans React et les technologies frontend modernes. Contributeur open-source actif.',
      expertise: ['React', 'JavaScript', 'Frontend'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 3,
      name: 'Sarah Chen',
      title: 'DevOps Engineer chez CloudTech',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Spécialiste DevOps avec une expertise approfondie en Kubernetes et architecture cloud.',
      expertise: ['DevOps', 'Kubernetes', 'Cloud'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 4,
      name: 'Prof. Jean Vaillant',
      title: 'Professeur à Sorbonne Université',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Professeur et chercheur reconnu dans le domaine du machine learning et de l\'éthique technologique.',
      expertise: ['Recherche', 'Machine Learning', 'Éthique'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 5,
      name: 'Alex Rodriguez',
      title: 'Blockchain Expert & Entrepreneur',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Entrepreneur dans le Web3 et expert en technologies blockchain. Fondateur de plusieurs startups tech.',
      expertise: ['Blockchain', 'Web3', 'Entrepreneuriat'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 6,
      name: 'Lisa Wang',
      title: 'UX Design Director',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Directrice UX avec 12 ans d\'expérience dans la création d\'expériences utilisateur exceptionnelles.',
      expertise: ['UX Design', 'Product Design', 'Innovation'],
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const openModal = (speaker: any) => {
    setSelectedSpeaker(speaker);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl sm:text-7xl font-black text-gray-900 mb-6 uppercase tracking-tight relative inline-block">
            Nos Speakers
            <svg className="absolute -top-6 -right-12 w-16 h-16 text-green-400 -z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
            </svg>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Des gens qui font, pas juste qui parlent. CTOs, fondateurs, designers et chercheurs qui bossent sur ce qui arrive vraiment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-none border-4 border-gray-900 shadow-[8px_8px_0_0_#111827] overflow-hidden hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(speaker)}
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">{speaker.name}</h3>
                <p className="text-blue-600 font-bold mb-4">{speaker.title}</p>
                <div className="flex flex-wrap gap-2">
                  {speaker.expertise.slice(0, 2).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-400 text-gray-900 text-xs px-3 py-1 font-bold uppercase border-2 border-gray-900"
                    >
                      {skill}
                    </span>
                  ))}
                  {speaker.expertise.length > 2 && (
                    <span className="bg-gray-100 text-gray-900 text-xs px-3 py-1 font-bold uppercase border-2 border-gray-900">
                      +{speaker.expertise.length - 2} plus
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-none border-4 border-gray-900 shadow-[12px_12px_0_0_#111827] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-4 rounded-none border-2 border-gray-900 bg-white hover:bg-green-400 shadow-[4px_4px_0_0_#111827] transition-colors duration-200 z-10 flex items-center justify-center"
                aria-label="Fermer la modale"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="aspect-[2/1] overflow-hidden rounded-t-xl">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-4xl font-black uppercase tracking-tight text-gray-900 mb-2">{selectedSpeaker.name}</h3>
                <p className="text-xl text-blue-600 font-bold mb-6">{selectedSpeaker.title}</p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedSpeaker.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Expertises</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSpeaker.expertise.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="bg-green-400 text-gray-900 px-4 py-2 font-bold uppercase border-2 border-gray-900 shadow-[4px_4px_0_0_#111827]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={selectedSpeaker.social.linkedin}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    aria-label={`Profil LinkedIn de ${selectedSpeaker.name}`}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={selectedSpeaker.social.twitter}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors duration-200"
                    aria-label={`Profil Twitter de ${selectedSpeaker.name}`}
                  >
                    <Twitter className="w-5 h-5" />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Speakers;