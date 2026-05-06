import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Nicolas Hoffmann',
    photoBackEmoji: '⚙️',
    title: {
      fr: 'Développeur SCADA',
    },
    subtitle: {
      fr: 'Automaticien depuis 2015',
    },
    location: 'Chambéry, France',
  },
  seo: {
    title: 'Nicolas Hoffmann — Développeur SCADA',
    description: 'CV interactif de Nicolas Hoffmann, développeur SCADA et automaticien spécialisé en systèmes industriels.',
  },
  languages: {
    default: 'fr',
    available: ['fr'],
    labels: {
      fr: 'FR',
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
      title: { fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { fr: 'Français' }, level: { fr: 'Natif' } },
        { name: { fr: 'Anglais' }, level: { fr: 'Courant' } },
      ],
    },
    {
      title: { fr: 'SCADA & Supervision' },
      type: 'badges',
      items: [
        { name: 'Ignition' },
        { name: 'PcVue' },
        { name: 'WinCC Advanced' },
        { name: 'Wonderware InTouch' },
      ],
    },
    {
      title: { fr: 'Automatismes industriels' },
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
      title: { fr: 'Simulation & Tests' },
      type: 'badges',
      items: [
        { name: 'SIMIT' },
        { name: 'PLCSim' },
        { name: 'Virtualisation', color: '#6B7280' },
      ],
    },
    {
      title: { fr: 'Données & Scripting' },
      type: 'badges',
      items: [
        { name: 'SQL Server' },
        { name: 'Python' },
      ],
    },
    {
      title: { fr: 'Qualités & Méthodes' },
      type: 'text',
      items: [
        {
          name: {
            fr: 'Travail en équipe, adaptabilité, curiosité, maintenance, documentation technique',
          },
        },
      ],
    },
  ],
  experiences: [
    {
      id: 'bouygues',
      company: { fr: 'Bouygues Energies & Services' },
      role: { fr: 'Développeur SCADA' },
      type: { fr: 'CDI' },
      period: { fr: 'Janvier 2021 - Aujourd\'hui' },
      description: {
        fr: 'Développement et maintenance de supervisions SCADA pour des systèmes industriels.',
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
        },
        env: {
          fr: 'Ignition / PcVue / SQL Server / Python',
        },
      },
    },
    {
      id: 'airliquide',
      company: { fr: 'Air Liquide' },
      role: { fr: 'Automaticien' },
      period: { fr: 'Octobre 2018 - Mai 2020' },
      description: {
        fr: 'Développement et évolution de systèmes automatisés pour applications cryogéniques.',
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
        },
        training: {
          fr: ['Certification ISM-ATEX niveau 2 électrique'],
        },
      },
    },
    {
      id: 'assystem',
      company: { fr: 'Assystem' },
      role: { fr: 'Automaticien' },
      period: { fr: 'Mai 2016 - Septembre 2018' },
      description: {
        fr: 'Maintenance logicielle et nouveaux projets en automatismes pour le CERN.',
      },
      techs: ['Schneider Unity', 'Schneider PL7', 'Siemens S7', 'WAGO', 'PcVue'],
    },
    {
      id: 'ald',
      company: { fr: 'ALD France' },
      role: { fr: 'Automaticien' },
      period: { fr: 'Novembre 2015 - Avril 2016' },
      techs: ['Siemens Step 7', 'Schneider Unity', 'Wonderware InTouch'],
    },
    {
      id: 'msk',
      company: { fr: 'MSK Covertech Group' },
      role: { fr: 'Automaticien' },
      period: { fr: 'Février 2015 - Octobre 2015' },
      techs: ['Schneider Unity'],
    },
  ],
  education: [
    {
      school: { fr: 'AFPA Vénissieux' },
      degree: { fr: 'Développeur intégrateur d\'applications numériques pour l\'industrie' },
      period: '2020 - 2021',
    },
    {
      school: { fr: 'AFPA Grenoble' },
      degree: { fr: 'Technicien supérieur en automatique et informatique industrielle' },
      period: '2014 - 2015',
    },
    {
      school: { fr: 'Université de Provence' },
      degree: { fr: 'Licence et Master 1 d\'anglais' },
      period: '2001 - 2006',
    },
  ],
  hobbies: [
    {
      title: { fr: 'Montagne & Nature' },
    },
    {
      title: { fr: 'Photographie' },
    },
  ],
  theme: {
    preset: 'ocean',
  },
  labels: {
    sections: {
      contact: { fr: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { fr: 'FORMATION' },
      hobbies: { fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :' },
      training: { fr: 'Formations :' },
      techEnv: { fr: 'Environnement technique :' },
      technologies: { fr: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { fr: 'Changer le thème' },
      downloadPdf: { fr: 'Télécharger le PDF' },
    },
  },
}
