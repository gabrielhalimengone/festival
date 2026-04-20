import React, { useState } from 'react';
import { Check, Star, Users, Zap } from 'lucide-react';

const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const tickets = [
    {
      id: 'early',
      name: 'Early Bird',
      price: '299',
      originalPrice: '399',
      icon: <Zap className="w-8 h-8" />,
      popular: false,
      features: [
        'Accès aux 3 jours',
        'Toutes les conférences',
        'Workshops inclus',
        'Déjeuners inclus',
        'Networking sessions',
        'Certificat de participation'
      ],
      available: true,
      deadline: 'Jusqu\'au 1er Mai'
    },
    {
      id: 'standard',
      name: 'Standard',
      price: '399',
      originalPrice: null,
      icon: <Users className="w-8 h-8" />,
      popular: true,
      features: [
        'Accès aux 3 jours',
        'Toutes les conférences',
        'Workshops inclus',
        'Déjeuners inclus',
        'Networking sessions',
        'Certificat de participation',
        'Kit de bienvenue'
      ],
      available: true,
      deadline: null
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '599',
      originalPrice: null,
      icon: <Star className="w-8 h-8" />,
      popular: false,
      features: [
        'Tous les avantages Standard',
        'Accès VIP aux speakers',
        'Sessions privées',
        'Dîner de gala inclus',
        'Cadeaux exclusifs',
        'Parking réservé',
        'Support prioritaire'
      ],
      available: true,
      deadline: null
    }
  ];

  const handleBooking = (ticketId: string) => {
    setSelectedTicket(ticketId);
    setShowBookingForm(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre réservation ! Vous recevrez un email de confirmation.');
    setShowBookingForm(false);
    setSelectedTicket(null);
  };

  return (
    <section id="billets" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Billets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez votre forfait et rejoignez-nous pour 3 jours d'innovation et d'inspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 lg:hover:scale-105 ${
                ticket.popular ? 'ring-4 ring-purple-500 shadow-purple-500/40 relative z-10' : ''
              }`}
            >
              {ticket.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 font-semibold">
                  Le plus populaire
                </div>
              )}
              
              <div className={`p-8 ${ticket.popular ? 'pt-16' : ''}`}>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-4">
                    <div className="text-purple-600">
                      {ticket.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{ticket.name}</h3>
                  
                  <div className="mb-4">
                    {ticket.originalPrice && (
                      <span className="text-gray-400 line-through text-lg mr-2">€{ticket.originalPrice}</span>
                    )}
                    <span className="text-4xl font-bold text-gray-900">€{ticket.price}</span>
                  </div>
                  
                  {ticket.deadline && (
                    <p className="text-sm text-red-600 font-medium">{ticket.deadline}</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {ticket.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBooking(ticket.id)}
                  disabled={!ticket.available}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    ticket.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  } ${!ticket.available ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:scale-105'}`}
                >
                  {ticket.available ? 'Réserver maintenant' : 'Épuisé'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Réservation de billet</h3>
              
              <form onSubmit={handleSubmitBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(false)}
                    className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  >
                    Confirmer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tickets;