import React, { useState } from 'react';
import { Icons } from './Icons';
import { ProjectType, QuoteFormData, COMPANY_INFO } from '../types';

export const QuoteWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<'ponctuel' | 'accompagnement' | null>(null);
  const [subType, setSubType] = useState<string | null>(null);
  const [formData, setFormData] = useState<QuoteFormData>({
    projectType: null,
    location: '',
    surface: '',
    budget: '',
    name: '',
    phone: '',
    email: '',
    details: ''
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const updateField = (field: keyof QuoteFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const categories = [
    { id: 'ponctuel', title: 'Consultation Ponctuelle', icon: Icons.Lightbulb, desc: "Conseil ciblé sur une problématique précise" },
    { id: 'accompagnement', title: 'Accompagnement Complet', icon: Icons.Briefcase, desc: "Suivi régulier et mise en oeuvre stratégique" },
  ];

  const accompagnementTypes = [
    { type: "Stratégie marketing complète", icon: Icons.Target },
    { type: "Plan de communication", icon: Icons.Megaphone },
    { type: "Accompagnement management", icon: Icons.Users },
    { type: "Optimisation gestion financière", icon: Icons.Chart },
    { type: "Transformation digitale", icon: Icons.Lightbulb },
    { type: "Audit organisationnel", icon: Icons.Shield },
    { type: "Autre projet", icon: Icons.Plus },
  ];

  const ponctuelTypes = [
    { type: "Étude de marché", icon: Icons.Target },
    { type: "Business plan", icon: Icons.Chart },
    { type: "Identité visuelle", icon: Icons.Megaphone },
    { type: "Coaching dirigeant", icon: Icons.Users },
    { type: "Autre consultation", icon: Icons.Plus },
  ];

  const ponctuelSpecs: Record<string, { label: string, options: { id: string, label: string, price: string, delay: string }[] }> = {
    "Étude de marché": {
      label: "Quel niveau d'étude ?",
      options: [
        { id: 'rapide', label: "Étude rapide (analyse concurrentielle)", price: "Sur devis", delay: "1-2 semaines" },
        { id: 'complete', label: "Étude complète (marché + positionnement)", price: "Sur devis", delay: "3-4 semaines" },
      ]
    },
    "Business plan": {
      label: "Quel type de business plan ?",
      options: [
        { id: 'creation', label: "Création d'entreprise", price: "Sur devis", delay: "2-3 semaines" },
        { id: 'developpement', label: "Développement / nouveau projet", price: "Sur devis", delay: "2-4 semaines" },
      ]
    },
    "Identité visuelle": {
      label: "Quel besoin ?",
      options: [
        { id: 'creation', label: "Création complète (logo, charte...)", price: "Sur devis", delay: "2-4 semaines" },
        { id: 'refonte', label: "Refonte de l'existant", price: "Sur devis", delay: "2-3 semaines" },
      ]
    },
    "Coaching dirigeant": {
      label: "Quel type d'accompagnement ?",
      options: [
        { id: 'ponctuel', label: "Séances ponctuelles", price: "Sur devis", delay: "Flexible" },
        { id: 'programme', label: "Programme de coaching complet", price: "Sur devis", delay: "3-6 mois" },
      ]
    },
    "Autre consultation": {
      label: "Précisez votre besoin",
      options: [
        { id: 'standard', label: "Consultation standard", price: "Sur devis", delay: "À définir" },
      ]
    }
  };

  const currentSpec = formData.projectType ? ponctuelSpecs[formData.projectType as string] : null;
  const selectedSpecOption = currentSpec?.options.find(o => o.id === subType);

  const generateMessage = () => {
    return `Bonjour ${COMPANY_INFO.name}, je souhaite un rendez-vous pour :
- Type: ${category === 'ponctuel' ? 'CONSULTATION PONCTUELLE' : 'ACCOMPAGNEMENT COMPLET'}
- Domaine: ${formData.projectType} ${subType ? `(${selectedSpecOption?.label})` : ''}
- Entreprise: ${formData.location}
- Secteur: ${formData.surface}
- Budget: ${formData.budget}
- Nom: ${formData.name}
- Détails: ${formData.details}`;
  };

  const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=Demande de consultation - ${formData.name}&body=${encodeURIComponent(generateMessage())}`;
  const smsLink = `sms:${COMPANY_INFO.phoneClean}?body=${encodeURIComponent(generateMessage())}`;

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 overflow-hidden max-w-4xl mx-auto transition-colors duration-300">
      {/* Progress Bar */}
      <div className="bg-gray-50 dark:bg-neutral-950 px-8 py-4 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={`h-2 w-10 rounded-full transition-all ${step >= i ? 'bg-accent' : 'bg-gray-200 dark:bg-gray-700'}`} />
          ))}
        </div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Étape {step} / 5</span>
      </div>

      <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">Quel est votre besoin ?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Sélectionnez le type de prestation souhaitée.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id as any); handleNext(); }}
                  className={`p-4 md:p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg flex items-start overflow-hidden ${
                    category === cat.id
                      ? 'border-accent bg-accent/5 dark:bg-accent/10'
                      : 'border-gray-100 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50'
                  }`}
                >
                  <div className={`p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0 ${category === cat.id ? 'bg-accent text-white' : 'bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400'}`}>
                    <cat.icon size={20} />
                  </div>
                  <div className="min-w-0 overflow-hidden">
                    <h3 className="font-bold text-primary dark:text-white text-sm leading-tight">{cat.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">{cat.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && category === 'accompagnement' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">Quel domaine ?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Sélectionnez votre domaine de besoin.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {accompagnementTypes.map((mt) => (
                <button
                  key={mt.type}
                  onClick={() => { updateField('projectType', mt.type); handleNext(); }}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md flex items-center ${
                    formData.projectType === mt.type
                      ? 'border-accent bg-accent/5 dark:bg-accent/10'
                      : 'border-gray-100 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50'
                  }`}
                >
                  <div className={`p-2 rounded-lg mr-3 ${formData.projectType === mt.type ? 'bg-accent text-white' : 'bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400'}`}>
                    <mt.icon size={20} />
                  </div>
                  <span className="font-bold text-primary dark:text-white text-sm">{mt.type}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-start">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
            </div>
          </div>
        )}

        {step === 3 && category === 'accompagnement' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-6">Votre entreprise</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom de l'entreprise</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                  placeholder="ex: Ma Société SAS"
                  value={formData.location}
                  onChange={(e) => updateField('location', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Secteur d'activité</label>
                  <input
                    type="text"
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    placeholder="ex: Commerce, Services, Industrie..."
                    value={formData.surface}
                    onChange={(e) => updateField('surface', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Budget envisagé</label>
                  <select
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    value={formData.budget}
                    onChange={(e) => updateField('budget', e.target.value)}
                  >
                    <option value="">Sélectionner une fourchette</option>
                    <option value="< 2k">Moins de 2 000€</option>
                    <option value="2k-5k">2 000€ - 5 000€</option>
                    <option value="5k-10k">5 000€ - 10 000€</option>
                    <option value="> 10k">Plus de 10 000€</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
              <button
                onClick={handleNext}
                disabled={!formData.location}
                className="px-8 py-3 bg-primary dark:bg-accent text-white dark:text-primary rounded-full font-bold hover:bg-secondary dark:hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Suivant
              </button>
            </div>
          </div>
        )}

        {step === 2 && category === 'ponctuel' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">Quel est votre besoin ?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Sélectionnez le type de consultation.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ponctuelTypes.map((ut) => (
                <button
                  key={ut.type}
                  onClick={() => { updateField('projectType', ut.type); handleNext(); }}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md flex items-center ${
                    formData.projectType === ut.type
                      ? 'border-accent bg-accent/5 dark:bg-accent/10'
                      : 'border-gray-100 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50'
                  }`}
                >
                  <div className={`p-2 rounded-lg mr-3 ${formData.projectType === ut.type ? 'bg-accent text-white' : 'bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400'}`}>
                    <ut.icon size={20} />
                  </div>
                  <span className="font-bold text-primary dark:text-white text-sm">{ut.type}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-start">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
            </div>
          </div>
        )}

        {step === 3 && category === 'ponctuel' && currentSpec && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">{currentSpec.label}</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Précisez pour mieux cerner votre besoin.</p>
            <div className="grid grid-cols-1 gap-4">
              {currentSpec.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => { setSubType(opt.id); handleNext(); }}
                  className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-md flex items-center justify-between ${
                    subType === opt.id
                      ? 'border-accent bg-accent/5 dark:bg-accent/10'
                      : 'border-gray-100 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50'
                  }`}
                >
                  <span className="font-bold text-primary dark:text-white">{opt.label}</span>
                  <Icons.ChevronRight className="text-accent" />
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-start">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
            </div>
          </div>
        )}

        {step === 4 && category === 'ponctuel' && (
          <div className="animate-fade-in text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icons.Phone className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-4">Prenons rendez-vous</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
              <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl border border-gray-100 dark:border-neutral-700">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Tarif</p>
                <p className="text-xl font-bold text-primary dark:text-white">{selectedSpecOption?.price || "Sur devis"}</p>
                <p className="text-[10px] text-gray-400 mt-1">Selon périmètre défini</p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl border border-gray-100 dark:border-neutral-700">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Délai estimé</p>
                <p className="text-xl font-bold text-primary dark:text-white">{selectedSpecOption?.delay || "À définir"}</p>
                <p className="text-[10px] text-gray-400 mt-1">Selon disponibilité</p>
              </div>
            </div>

            <div className="bg-accent/5 dark:bg-accent/10 p-6 rounded-2xl border border-accent/20 mb-8 max-w-lg mx-auto">
              <p className="text-primary dark:text-white font-medium mb-4">
                Appelez-nous pour un premier échange gratuit et sans engagement sur votre projet.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-white transition-all shadow-lg hover:shadow-xl text-lg"
              >
                <Icons.Phone className="mr-3 w-6 h-6" />
                Appeler le {COMPANY_INFO.phone}
              </a>
            </div>

            <button onClick={handleBack} className="text-sm text-gray-500 hover:text-primary">Modifier ma demande</button>
          </div>
        )}

        {step === 4 && category === 'accompagnement' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-6">Vos coordonnées</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message (facultatif)</label>
                <textarea
                  className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none h-32 resize-none transition-colors"
                  placeholder="Décrivez votre projet ou vos attentes..."
                  value={formData.details}
                  onChange={(e) => updateField('details', e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
              <button
                onClick={handleNext}
                disabled={!formData.name || !formData.phone}
                className="px-8 py-3 bg-primary dark:bg-accent text-white dark:text-primary rounded-full font-bold hover:bg-secondary dark:hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Voir le résumé
              </button>
            </div>
          </div>
        )}

        {step === 5 && category === 'accompagnement' && (
          <div className="animate-fade-in text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icons.Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">Tout est prêt !</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Choisissez votre méthode préférée pour nous envoyer votre demande. Nous vous répondrons sous 24h ouvrées.
            </p>

            <div className="bg-gray-50 dark:bg-neutral-950 p-6 rounded-xl text-left mb-8 border border-gray-100 dark:border-neutral-800 max-w-lg mx-auto">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Résumé :</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li><span className="font-medium">Domaine:</span> {formData.projectType}</li>
                <li><span className="font-medium">Entreprise:</span> {formData.location}</li>
                <li><span className="font-medium">Contact:</span> {formData.name}</li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href={mailtoLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary dark:bg-neutral-800 text-white dark:text-white rounded-xl font-bold hover:bg-secondary dark:hover:bg-neutral-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Icons.Mail className="mr-2 w-5 h-5" />
                Envoyer par Email
              </a>
              <a
                href={smsLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-white transition-all shadow-lg hover:shadow-xl"
              >
                <Icons.Mobile className="mr-2 w-5 h-5" />
                Envoyer par Téléphone
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-400">
              En cliquant, vous ouvrez votre application de messagerie avec le résumé pré-rempli.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
