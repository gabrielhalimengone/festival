import React, { useState } from 'react';
import { Check, Star, Users, Zap } from 'lucide-react';

const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    setIsSuccess(false);
    setIsSubmitting(false);
    setShowBookingForm(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="billets" className="py-32 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 relative inline-block mx-auto w-full">
          <h2 className="text-5xl sm:text-7xl font-black text-gray-900 mb-6 uppercase tracking-tight relative inline-block group">
            <span className="relative z-10">Prends ta place</span>
            <span className="absolute bottom-2 left-0 w-full h-6 bg-green-400/30 -z-10 transform -rotate-1 transition-transform duration-300 group-hover:rotate-0 group-hover:h-8"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Trois formules, un seul festival. Les prix montent le 1er Mai —<br /> c'est maintenant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 mb-12 items-start">
          {tickets.map((ticket, index) => {
            const isPopular = ticket.popular;
            
            // Asymmetry styles
            let cardTransforms = "";
            if (index === 0) cardTransforms = "md:-rotate-2 md:translate-y-4";
            if (index === 1) cardTransforms = "md:-translate-y-4 z-10 scale-100 md:scale-105";
            if (index === 2) cardTransforms = "md:rotate-2 md:translate-y-12";
            
            // Brutalist colors
            const bgColor = isPopular ? "bg-gray-900 text-white" : "bg-white text-gray-900";
            const borderColor = "border-4 border-gray-900";
            const shadowColor = isPopular ? "shadow-[8px_8px_0_0_#4ade80]" : "shadow-[8px_8px_0_0_#111827]";
            
            return (
              <div
                key={ticket.id}
                className={`relative rounded-none transition-transform duration-300 ${bgColor} ${borderColor} ${shadowColor} ${cardTransforms} p-8`}
              >
                {isPopular && (
                  <div className="absolute -top-5 -right-5 bg-green-400 text-gray-900 px-4 py-2 font-black uppercase tracking-wider transform rotate-12 border-2 border-gray-900 shadow-[4px_4px_0_0_#111827]">
                    Le Choix Évident
                  </div>
                )}
                
                <div className="text-center mb-8 mt-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-none border-2 border-current mb-6 ${isPopular ? 'text-green-400' : 'text-blue-600'}`}>
                    {ticket.icon}
                  </div>
                  
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-2">{ticket.name}</h3>
                  
                  <div className="mb-4 flex items-center justify-center gap-2">
                    {ticket.originalPrice && (
                      <span className="text-gray-400 line-through text-xl font-bold">€{ticket.originalPrice}</span>
                    )}
                    <span className="text-5xl font-black">€{ticket.price}</span>
                  </div>
                  
                  {ticket.deadline && (
                    <p className="text-sm bg-red-500 text-white font-bold inline-block px-3 py-1 uppercase">{ticket.deadline}</p>
                  )}
                </div>

                <ul className="space-y-4 mb-10">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5 ${isPopular ? 'text-green-400' : 'text-blue-600'}`}>
                        <Check className="w-6 h-6 stroke-[3]" />
                      </div>
                      <span className={`font-medium ${isPopular ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBooking(ticket.id)}
                  disabled={!ticket.available}
                  className={`w-full py-4 px-6 font-black text-lg uppercase tracking-widest transition-all duration-200 border-2 border-gray-900 ${
                    !ticket.available 
                      ? 'opacity-50 cursor-not-allowed bg-gray-200 text-gray-500' 
                      : isPopular
                        ? 'bg-green-400 text-gray-900 shadow-[4px_4px_0_0_#fff] hover:translate-y-1 hover:translate-x-1 hover:shadow-none'
                        : 'bg-white text-gray-900 shadow-[4px_4px_0_0_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-none'
                  }`}
                >
                  {ticket.available ? 'Je prends ma place' : 'Sold Out'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-none border-4 border-gray-900 shadow-[12px_12px_0_0_#111827] max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-400 rounded-full border-4 border-gray-900 mx-auto flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#111827]">
                    <Check className="w-10 h-10 text-gray-900 stroke-[3]" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-4">Confirmé !</h3>
                  <p className="text-gray-600 font-medium mb-8">
                    Votre place est réservée. Préparez-vous pour l'événement tech de l'année. Un email de confirmation a été envoyé.
                  </p>
                  <button
                    onClick={() => { setShowBookingForm(false); setSelectedTicket(null); }}
                    className="w-full bg-blue-500 text-white font-black uppercase tracking-widest py-4 px-6 border-2 border-gray-900 shadow-[4px_4px_0_0_#111827] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200"
                  >
                    Fermer
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-gray-900 mb-6 border-b-4 border-gray-900 pb-4">Réservation</h3>
                  
                  <form onSubmit={handleSubmitBooking} className="space-y-6">
                    <div>
                      <label className="block text-sm font-black uppercase tracking-wider text-gray-900 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-900 rounded-none focus:outline-none focus:border-blue-500 focus:shadow-[4px_4px_0_0_#3b82f6] transition-all bg-gray-50 font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-black uppercase tracking-wider text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-900 rounded-none focus:outline-none focus:border-blue-500 focus:shadow-[4px_4px_0_0_#3b82f6] transition-all bg-gray-50 font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-black uppercase tracking-wider text-gray-900 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border-2 border-gray-900 rounded-none focus:outline-none focus:border-blue-500 focus:shadow-[4px_4px_0_0_#3b82f6] transition-all bg-gray-50 font-medium"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-black uppercase tracking-wider text-gray-900 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-900 rounded-none focus:outline-none focus:border-blue-500 focus:shadow-[4px_4px_0_0_#3b82f6] transition-all bg-gray-50 font-medium"
                        placeholder="TechCorp"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowBookingForm(false)}
                        disabled={isSubmitting}
                        className="flex-1 py-4 px-4 bg-white text-gray-900 border-2 border-gray-900 shadow-[4px_4px_0_0_#111827] font-black uppercase tracking-widest hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200 disabled:opacity-50"
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-4 px-4 bg-green-400 text-gray-900 border-2 border-gray-900 shadow-[4px_4px_0_0_#111827] font-black uppercase tracking-widest hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200 disabled:opacity-50"
                      >
                        {isSubmitting ? 'Traitement...' : 'Valider'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tickets;