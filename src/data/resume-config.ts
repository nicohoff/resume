// Copy resume-config.example.ts and customize it with your own information.
// See docs/CUSTOMIZATION.md for a detailed guide.
import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Nicolas Hoffmann',
    photoBackEmoji: '⚙️',
    title: {
      fr: 'Développeur SCADA',
      en: 'SCADA Developer',
    },
    subtitle: {
      fr: ' depuis 2015',
      en: 'Automation Engineer since 2015',
    },
    location: 'Chambéry, France',
  },
  seo: {
    title: 'Nicolas Hoffmann — Développeur SCADA',
    description: 'CV interactif de Nicolas Hoffmann, développeur SCADA et automaticien spécialisé en systèmes industriels.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: {
      fr: 'FR',
      en: 'EN',
    },
  },
  contact: [
    { type: 'phone', label: '+33 6 77 53 60 19' },
    { type: 'email', label: 'nicolashoffmann@hotmail.com' },
    {
      type: 'linkedin',
      label: 'nicolas-hoffmann-scada',
      href: 'https://www.linkedin.com/in/nicolas-hoffmann-scada',
    },
    { type: 'location', label: 'Chambéry, France' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Courant', en: 'Fluent' } },
      ],
    },
    {
      title: { fr: 'SCADA & Supervision', en: 'SCADA & HMI' },
      type: 'badges',
      items: [
        { name: 'Ignition' },
        { name: 'PcVue' },
        { name: 'WinCC Advanced' },
        { name: 'Wonderware InTouch' },
      ],
    },
    {
      title: { fr: 'Automatismes industriels', en: 'Industrial Automation' },
      type: 'badges',
      items: [
        { name: 'Siemens TIA Portal' },
        { name: 'Siemens S7' },
        { name: 'Schneider Unity' },
        { name: 'Schneider PL7' },
        { name: 'WAGO' },
      ],
    },
    {
      title: { fr: 'Simulation & Tests', en: 'Simulation & Testing' },
      type: 'badges',
      items: [
        { name: 'SIMIT' },
        { name: 'PLCSim' },
        { name: 'Virtualisation', color: '#6B7280' },
      ],
    },
    {
      title: { fr: 'Données & Scripting', en: 'Data & Scripting' },
      type: 'badges',
      items: [
        { name: 'SQL Server' },
        { name: 'Python' },
      ],
    },
    {
      title: { fr: 'Qualités & Méthodes', en: 'Soft Skills & Methods' },
      type: 'text',
      items: [
        { name: { fr: 'Travail en équipe, adaptabilité, curiosité, maintenance, documentation', en: 'Teamwork, adaptability, curiosity, maintenance, documentation' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'bouygues',
      company: { fr: 'Bouygues Energies & Services', en: 'Bouygues Energies & Services' },
      role: { fr: 'Développeur SCADA', en: 'SCADA Developer' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: 'Janvier 2021 - Aujourd\'hui', en: 'January 2021 - Present' },
      description: {
        fr: 'Développement et maintenance de supervisions SCADA pour des systèmes industriels.',
        en: 'Development and maintenance of SCADA supervision systems for industrial environments.',
      },
      techs: ['Ignition', 'PcVue', 'SQL Server', 'Python'],
      isHighlighted: true,
      details: {
        tasks: {
          fr: [
            'Développement de supervisions Ignition (Vision et Perspective) et PcVue',
            'Maintenance, ticketing et nouveaux projets',
            'Audit de GTC (logs, bases de données SQL)',
            'Développement d\'une architecture logicielle de simulation et de tests',
          ],
          en: [
            'Development of Ignition (Vision and Perspective) and PcVue supervisions',
            'Maintenance, ticketing and new projects',
            'BMS audits (logs, SQL databases)',
            'Development of a simulation and testing software architecture',
          ],
        },
        env: {
          fr: 'Ignition / PcVue / SQL Server / Python',
          en: 'Ignition / PcVue / SQL Server / Python',
        },
      },
    },
    {
      id: 'airliquide',
      company: { fr: 'Air Liquide', en: 'Air Liquide' },
      role: { fr: 'Automaticien', en: 'Automation Engineer' },
      period: { fr: 'Octobre 2018 - Mai 2020', en: 'October 2018 - May 2020' },
      description: {
        fr: 'Développement et évolution de systèmes automatisés pour applications cryogéniques.',
        en: 'Development and evolution of automated systems for cryogenic applications.',
      },
      techs: ['Siemens TIA Portal', 'WinCC Advanced'],
      details: {
        tasks: {
          fr: [
            'Systèmes Turbo-Brayton pour le refroidissement du GNL sur méthaniers',
            'Évolution des programmes automates et IHM',
            'Tests électriques de skids',
            'Assistance aux mises en service à quai et en mer',
            'Rédaction de notes techniques et procédures',
          ],
          en: [
            'Turbo-Brayton systems for LNG carrier cooling',
            'PLC and HMI program improvements',
            'Electrical testing of skids',
            'Commissioning assistance onshore and offshore',
            'Technical documentation writing',
          ],
        },
        training: {
          fr: ['Certification ISM-ATEX niveau 2 électrique'],
          en: ['ISM-ATEX level 2 electrical certification'],
        },
      },
    },
    {
      id: 'assystem',
      company: { fr: 'Assystem', en: 'Assystem' },
      role: { fr: 'Automaticien', en: 'Automation Engineer' },
      period: { fr: 'Mai 2016 - Septembre 2018', en: 'May 2016 - September 2018' },
      description: {
        fr: 'Maintenance et nouveaux projets en automatismes pour le CERN.',
        en: 'Automation maintenance and new projects for CERN.',
      },
      techs: ['Schneider Unity', 'Schneider PL7', 'Siemens S7', 'WAGO', 'PcVue'],
    },
    {
      id: 'ald',
      company: { fr: 'ALD France', en: 'ALD France' },
      role: { fr: 'Automaticien', en: 'Automation Engineer' },
      period: { fr: 'Novembre 2015 - Avril 2016', en: 'November 2015 - April 2016' },
      techs: ['Siemens Step 7', 'Schneider Unity', 'Wonderware InTouch'],
    },
    {
      id: 'msk',
      company: { fr: 'MSK Covertech Group', en: 'MSK Covertech Group' },
      role: { fr: 'Automaticien', en: 'Automation Engineer' },
      period: { fr: 'Février 2015 - Octobre 2015', en: 'February 2015 - October 2015' },
      techs: ['Schneider Unity'],
    },
  ],
  education: [
    {
      school: { fr: 'AFPA Vénissieux', en: 'AFPA Vénissieux' },
      degree: { fr: 'Développeur intégrateur d\'applications numériques pour l\'industrie', en: 'Digital Application Integrator for Industry' },
      period: '2020 - 2021',
    },
    {
      school: { fr: 'AFPA Grenoble', en: 'AFPA Grenoble' },
      degree: { fr: 'Technicien supérieur en automatique et informatique industrielle', en: 'Advanced Technician in Industrial Automation and IT' },
      period: '2014 - 2015',
    },
    {
      school: { fr: 'Université de Provence', en: 'University of Provence' },
      degree: { fr: 'Licence et Master 1 d\'anglais', en: 'Bachelor and Master\'s degree in English' },
      period: '2001 - 2006',
    },
  ],
  hobbies: [
    {
      title: { fr: 'Montagne & Nature', en: 'Mountains & Nature' },
    },
    {
      title: { fr: 'Photographie', en: 'Photography' },
    },
  ],
  theme: {
    preset: 'ocean',
  },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    actions: {
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
    },
  },
}
