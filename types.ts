export enum ProjectType {
  MARKETING = 'Conseil en Marketing',
  COMMUNICATION = 'Conseil en Communication',
  MANAGEMENT = 'Conseil en Management',
  GESTION = 'Conseil en Gestion'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
}

export interface Realization {
  id: string;
  title: string;
  location: string;
  type: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface QuoteFormData {
  projectType: ProjectType | null;
  location: string;
  surface: string;
  budget: string;
  name: string;
  phone: string;
  email: string;
  details: string;
}

export const COMPANY_INFO = {
  name: "SC+CONSULTING",
  owner: "Turkyilmaz Celalcan & Kaydok Selami",
  phone: "+33 7 51 66 01 64",
  phoneClean: "+33751660164",
  email: "contact@scplusconsulting.fr",
  zone: "Le Péage-de-Roussillon (38) & alentours",
  hours: "Lun-Ven 08:00–18:00 | Sam 09:00–16:00",
  logo: "",
  address: "18 Rue Bois Imbert, 38550 Le Péage-de-Roussillon, France",
  siret: "83973597400017",
  linkedin: "https://www.linkedin.com/company/scplusconsulting/?originalSubdomain=fr",
  rating: "5,0",
  reviewCount: 15
};
