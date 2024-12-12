export interface Milestone {
  id: string;
  year: number;
  title: string;
  description: string;
  icon: string;
}

export const timelineData: Milestone[] = [
  {
    id: 'establishment',
    year: 2010,
    title: 'Company Establishment',
    description: 'Founded and registered under CVR number 32773974',
    icon: 'Building2'
  },
  {
    id: 'epto-launch',
    year: 2010,
    title: 'E-PTO Innovation',
    description: 'Launched first battery-electric E-PTO systems for trucks and cranes',
    icon: 'Battery'
  },
  {
    id: 'powertrain',
    year: 2019,
    title: 'Full-Electric Powertrains',
    description: 'Expanded to full-electric powertrains for buses, trucks, and classic cars',
    icon: 'Zap'
  },
  {
    id: 'innovative-projects',
    year: 2020,
    title: 'Innovative E-Mobility Projects',
    description: 'Collaborated on key projects developing modular electric power solutions',
    icon: 'Zap'
  },
  {
    id: 'ec-pto',
    year: 2021,
    title: 'eC-PTO Launch',
    description: 'Introduced electric Chassis PTO for OEM full-electric vehicles',
    icon: 'Component'
  },
  {
    id: 'facility',
    year: 2022,
    title: 'New Facility',
    description: 'Relocated to Mellemvej 20, Nordborg to support growth',
    icon: 'Factory'
  },
  {
    id: 'partnership',
    year: 2024,
    title: 'Strategic Partnership',
    description: 'Partnered with Akkodis for double-deck bus electrification',
    icon: 'Handshake'
  }
];