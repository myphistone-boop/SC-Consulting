import React from 'react';
import { Icons } from '../components/Icons';
import { COMPANY_INFO } from '../types';

import { MobileHorizontalScroll } from '../components/MobileHorizontalScroll';

const reviews = [
  {
    name: "Équipe SONERGY",
    rating: 5,
    date: "Il y a 2 ans",
    text: "Une chose a dire, travaille remarquable ! Merci pour l'accompagnement de qualité. SC + Consulting a apporter à ma société un développement conséquent. Merci."
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
];

export const Reviews: React.FC = () => {
  return (
    <div className="pt-20 pb-10 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Icons.Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="font-display font-bold text-2xl text-primary dark:text-white">{COMPANY_INFO.rating}</span>
            <span className="text-gray-500">({COMPANY_INFO.reviewCount} avis)</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary dark:text-white mb-4">Avis Clients</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits. Votre réussite est notre priorité.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Review */}
        <div className="max-w-xl mx-auto mb-12">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icons.Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary dark:text-white text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery Section */}
        <div className="border-t border-gray-100 dark:border-neutral-800 pt-10">
          <div className="text-center mb-6">
            <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-4">Notre Environnement</h2>
            <p className="text-gray-600 dark:text-gray-400">Un aperçu de notre cadre de travail et de nos interventions.</p>
          </div>

          <MobileHorizontalScroll className="lg:block lg:columns-3 lg:gap-6 lg:space-y-6 lg:overflow-visible lg:pb-0">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-neutral-800 hover:scale-[1.02] transition-transform duration-300 h-full mb-6 lg:mb-0">
                <img
                  src={img}
                  alt={`Environnement de travail SC+CONSULTING ${idx + 1}`}
                  className="w-full h-64 lg:h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </MobileHorizontalScroll>
        </div>
      </div>
    </div>
  );
};
