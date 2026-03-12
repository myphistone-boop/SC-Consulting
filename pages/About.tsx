import React from 'react';
import { COMPANY_INFO } from '../types';
import { Icons } from '../components/Icons';
import { ExpandableText } from '../components/ExpandableText';

export const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-primary dark:text-white mb-6">
                À Propos de <br/>
                <span className="text-accent">{COMPANY_INFO.name}</span>
              </h1>
              <ExpandableText
                text={`Fondée en 2018 par ${COMPANY_INFO.owner}, ${COMPANY_INFO.name} est une société de conseil aux professionnels spécialisée dans le marketing, la communication, le management et la gestion. Basée à ${COMPANY_INFO.address}, nous accompagnons les entreprises de la région dans leur développement.`}
                className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              />
              <ExpandableText
                text="Notre philosophie : un accompagnement personnalisé, des solutions concrètes et une relation de confiance durable avec nos clients. Que ce soit pour définir votre stratégie marketing ou optimiser votre gestion, nous mettons notre expertise à votre service."
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Icons.Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Expertise Reconnue</h3>
                    <p className="text-sm text-gray-500">Consultants expérimentés et certifiés.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Icons.Check className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Résultats Concrets</h3>
                    <p className="text-sm text-gray-500">Objectifs mesurables et atteignables.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Icons.Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Réactivité</h3>
                    <p className="text-sm text-gray-500">Disponibles du lundi au samedi.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Icons.Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Sur Mesure</h3>
                    <p className="text-sm text-gray-500">Solutions adaptées à chaque entreprise.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                  alt="Équipe de consultants SC+CONSULTING"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-neutral-700 max-w-xs hidden md:block">
                <p className="font-display font-bold text-xl text-primary dark:text-white mb-2">"Votre réussite est notre mission."</p>
                <p className="text-sm text-gray-500">{COMPANY_INFO.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
