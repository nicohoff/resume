import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Nicolas Hoffmann',
    photoBackEmoji: '⚙️',
    title: {
      fr: 'Développeur SCADA / Automaticien',
    },
    subtitle: {
      fr: '11 ans d\'expérience dans l\'industrie - Certifié Ignition Gold',
    },
    location: 'Chambéry / Albertville',
  },
  seo: {
    title: 'Nicolas Hoffmann — Développeur SCADA / Automaticien',
    description: 'CV interactif de Nicolas Hoffmann, développeur SCADA et automaticien spécialisé Ignition.',
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
      label: 'Nicolas Hoffmann',
      href: 'https://www.linkedin.com/in/nicolas-hoffmann-scada',
    },
    { type: 'location', label: 'Chambéry / Albertville' },
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
      title: { fr: 'SCADA / IHM' },
      type: 'badges',
      items: [
        { name: 'Ignition' },
        { name: 'PcVue' },
        { name: 'WinCC Advanced' },
        { name: 'WInTouch' },
      ],
    },
    {
      title: { fr: 'Automatismes industriels' },
      type: 'badges',
      items: [
        { name: 'TIA Portal' },
        { name: 'Control Expert' },
      ],
    },
    {
      title: { fr: 'Simulation & Tests' },
      type: 'badges',
      items: [
        { name: 'SIMIT' },
        { name: 'PLCSim' },
        { name: 'Virtualisation' },
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
            fr: 'Communication, adaptabilité, curiosité, documentation technique',
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
      period: { fr: 'Jan. 2021 - Aujourd\'hui' },
      description: {
        fr: 'Systèmes SCADA de gestion d\'infrastructures : tunnels routiers / autoroutiers, GTB.',
      },
      techs: ['Ignition', 'PcVue', 'SQL Server', 'Python'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'En autonomie ou en équipe (automatismes, réseaux & systèmes), en relation directe avec MOE / MOA',
        },
        tasks: {
          fr: [
            'Développement de supervisions Ignition (Vision et Perspective) et PcVue',
            'Nouveaux projets, maintenance évolutive & corrective',
            'Gestion des tickets, audit de GTC (logs, bases de données SQL, alarmes)',
            'Développement d\'une architecture logicielle de simulation / tests avec SIMIT / TIA Portal / PLCSim / virtualisation',
            'Tests & FAT en plateforme / MES sur site'
          ],
        },
        training: {
          fr: [
            'Certification Ignition Gold',
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
      type: { fr: 'Presta' },
      period: { fr: 'Oct. 2018 - Mai 2020' },
      description: {
        fr: 'Systèmes cryogéniques Turbo-Brayton pour la reliquéfaction du GNL sur méthaniers',
      },
      techs: ['TIA Portal', 'WinCC Advanced'],
      details: {
        context: {
          fr: 'Contexte international : Conception à Grenoble / FAT en France/Italie / MES en Europe/Asie.',
        },
        tasks: {
          fr: [
            'Évolution du programme standard automate/IHM, suite aux REX',
            'Préparation des programmes au niveau projet avant MES',
            'FAT partie courant faible de skids : automatismes / instrumentation / câblage',
            'Assistance aux démarreurs / MES à quai ou en mer',
            'Rédaction / mise à jour de notes techniques et procédures en anglais',
          ],
        },
        training: {
          fr: ['Certification ISM-ATEX niveau 2 électrique'],
        },
        env: {
          fr: 'TIA Portal / WinCC Advanced',
        },
      },
    },
    {
      id: 'assystem',
      company: { fr: 'Assystem' },
      role: { fr: 'Automaticien' },
      type: { fr: 'CDI' },
      period: { fr: 'Mai 2016 - Sept. 2018' },
      description: {
        fr: 'Maintenance logicielle et nouveaux projets en automatismes pour le CERN.',
      },
      techs: ['PcVue', 'Control Expert', 'Schneider PL7', 'Siemens S7', 'Wago' ],
      details: {
        context: {
          fr: 'Intervention sur deux systèmes principalement : CERN Safety Alarm Monitoring (CSAM): supervision gérant tous les sites du CERN à destination du Centre de contrôle et du service de secours | Cooling & Ventilation : refroidissement des accélérateurs PS et SPS.',
        },
        tasks: {
          fr: [
            'Développement et maintenance de supervisions PcVue',
            'Développement et maintenance d\'automates Siemens S7, Schneider PL7 et Unity, WAGO',
            'Tests en plateforme et sur site',
            'Paramétrage de caméras et intégration sur serveur Milestone',
          ],
        },
        training: {
          fr: ['Radioprotection pour travail en zone contrôlée'],
        },
        env: {
          fr: 'PcVue / Schneider Unity & PL7 / Siemens S7 / Wago',
        },
      },
    },
    {
      id: 'ald',
      company: { fr: 'ALD France' },
      role: { fr: 'Automaticien' },
      type: { fr: 'CDD' },
      period: { fr: 'Nov. 2015 - Avr. 2016' },
      description: {
        fr: 'Fours de traitement thermique.',
      },
      techs: ['Siemens Step 7', 'Schneider Unity', 'Wonderware InTouch'],
    },
    {
      id: 'msk',
      company: { fr: 'MSK Covertech' },
      role: { fr: 'Automaticien' },
      type: { fr: 'Presta' },
      period: { fr: 'Fév. 2015 - Oct. 2015' },
      description: {
        fr: 'Systèmes d\'emballage et de manutention de palettes',
      },
      techs: ['Control Expert'],
      details: {
        context: {
        fr: 'Contexte international : France, FAT en Hongrie, MES en France',
        },
        tasks: {
          fr: [
            'Développement pour automates Schneider avec Unity pour de nouveaux projets',
            'Paramétrage de variateurs et positionnement par bus',
            'Mise au point de plusieurs machines à l\'usine du groupe en Hongrie',
            'MES de plusieurs projets neufs / SAV en France',
            'Formation des opérateurs',
          ],
        },
        env: {
          fr: 'Schneider Unity / Variateurs SEW et Schneider Altivar',
        },
      },
    },
    {
      id: 'educnat',
      company: { fr: 'Éducation nationale' },
      role: { fr: 'Professeur d\'anglais' },
      type: { fr: 'CDI' },
      period: { fr: 'Sep. 2010 - Fév. 2013' },
      description: {
        fr: 'Enseignement en collège et lycée dans l\'académie de Grenoble. Recrutement après réussite au concours du CAPES',
      },
      techs: [],
    },
    {
      id: 'provence',
      company: { fr: 'Librairie de Provence' },
      role: { fr: 'Libraire' },
      type: { fr: 'CDI' },
      period: { fr: 'Avr. 2007 - Août 2010' },
      description: {
        fr: 'Gestion du rayon langues. Conseils dans les rayons sciences humaines / universitaire',
      },
      techs: [],
    }
  ],
  education: [
    {
      school: { fr: 'AFPA Vénissieux' },
      degree: { fr: 'Développeur intégrateur en informatique industrielle' },
      period: '2020 - 2021',
    },
    {
      school: { fr: 'AFPA Grenoble' },
      degree: { fr: 'Technicien supérieur en automatique et informatique industrielle' },
      period: '2014 - 2015',
    },
    {
      school: { fr: 'Université de Provence' },
      degree: { fr: 'Master 1 d\'anglais' },
      period: '2010',
    },
    {
      school: { fr: 'Université de Provence' },
      degree: { fr: 'Licence d\'anglais' },
      period: '2005',
    },
    {
      school: { fr: 'Lycée Fourcade' },
      degree: { fr: 'Bac STI Électrotechnique' },
      period: '2001',
    },
  ],
  hobbies: [
    { title: { fr: 'Montagne & Nature' } },
    { title: { fr: 'Photographie' } },
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
      moreTasks: { fr: 'Autres missions...' },
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
