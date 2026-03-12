import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import { COMPANY_INFO } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">

          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Icons.Briefcase className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl tracking-tight">{COMPANY_INFO.name}</span>
                <p className="text-accent text-[10px] tracking-[0.2em] uppercase mt-1">Conseil aux Entreprises</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Société de conseil aux professionnels dans le domaine du marketing, de la communication, du management et de la gestion.
            </p>
            <a href={COMPANY_INFO.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center text-accent hover:text-white transition-colors text-sm">
              <Icons.Linkedin className="w-5 h-5 mr-2" />
              Suivez-nous sur LinkedIn
            </a>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-accent transition-colors">Conseil en Marketing</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Conseil en Communication</Link></li>
              <li><Link to="/expertise" className="hover:text-accent transition-colors">Conseil en Management</Link></li>
              <li><Link to="/expertise" className="hover:text-accent transition-colors">Conseil en Gestion</Link></li>
              <li><Link to="/avis" className="hover:text-accent transition-colors">Avis Clients</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <Icons.Location className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Icons.Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Icons.Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Horaires</h4>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="text-white font-medium">08:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="text-white font-medium">09:00 – 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-red-400 font-medium">Fermé</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400">
                SIRET : {COMPANY_INFO.siret}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-[10px] text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
