import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { QuoteWizard } from '../components/QuoteWizard';
import { MobileHorizontalScroll } from '../components/MobileHorizontalScroll';
import { COMPANY_INFO } from '../types';

export const Interventions: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] sm:h-[50vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
            alt="Réunion de conseil en entreprise"
            className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-neutral-900/60 sm:bg-neutral-900/50"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 leading-tight">
              Nos Services de <br/>
              <span className="text-accent">Conseil aux Professionnels</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Marketing, communication, management et gestion.
              Une équipe d'experts à votre service sur {COMPANY_INFO.zone}.
            </p>
             <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center px-7 py-3.5 sm:px-8 sm:py-4 bg-accent text-primary font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-xl text-sm sm:text-base"
              >
                <Icons.Phone className="mr-2 w-5 h-5" />
                Appelez-nous : {COMPANY_INFO.phone}
              </a>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-4">Nos domaines d'intervention</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <MobileHorizontalScroll className="lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Target className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Stratégie Marketing</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Définition de votre positionnement, étude de marché, plan marketing opérationnel et stratégie d'acquisition clients.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Megaphone className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Communication d'Entreprise</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Stratégie de communication, identité visuelle, relations presse, communication digitale et gestion des réseaux sociaux.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Users className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Management & Leadership</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Accompagnement des dirigeants, gestion des équipes, conduite du changement et développement du leadership.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Chart className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Pilotage Financier</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Contrôle de gestion, optimisation des coûts, tableaux de bord, business plan et analyse de rentabilité.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Lightbulb className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Innovation & Développement</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Accompagnement à l'innovation, transformation digitale, nouveaux marchés et diversification de l'activité.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.TrendingUp className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Croissance & Performance</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Stratégie de croissance, optimisation des processus, indicateurs de performance et amélioration continue.
              </p>
            </div>
          </MobileHorizontalScroll>
        </div>
      </section>

       {/* CTA Banner */}
       <section className="py-10 md:py-12 bg-primary dark:bg-neutral-900 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">Prêt à développer votre activité ?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Prenez rendez-vous avec nos consultants pour un premier échange gratuit et sans engagement.
          </p>
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-all shadow-xl text-lg"
          >
            <Icons.Phone className="mr-3 w-6 h-6" />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl text-primary dark:text-white">Demande de consultation</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Décrivez votre besoin et nous vous recontacterons rapidement.</p>
            </div>
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};
