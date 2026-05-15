import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Nicolas Hoffmann',
    photoBackEmoji: '⚙️',
    title: {
      fr: 'Développeur SCADA / Automaticien',
      en: 'Automation / SCADA Engineer',
    },
    subtitle: {
      fr: '11 ans d\'expérience dans l\'industrie - Certifié Ignition Gold',
      en: '11 years of experience in the industry - Ignition Gold certified',
    },
    location: 'Chambéry / Albertville',
  },
  seo: {
    title: 'Nicolas Hoffmann — Développeur SCADA / Automaticien',
    description: 'CV interactif de Nicolas Hoffmann, développeur SCADA et automaticien spécialisé Ignition.',
  },
  languages: {
    default: 'fr',
    available: ['en,''fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },
  contact: [
    { type: 'location', label: 'Chambéry / Albertville' },
    { type: 'phone', label: '+33 6 77 53 60 19' },
    { type: 'email', label: 'nicolashoffmann@hotmail.com' },
    { type: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nicolas-hoffmann-scada',
    },
    { type: 'github', label: 'GitHub', href: 'https://github.com/nicohoff' }
  ],
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Fluent', fr: 'Courant' },
      ],
    },
    {
      title: { en: 'SCADA / HMI', fr: 'SCADA / IHM' },
      type: 'badges',
      items: [
        { name: 'Ignition' },
        { name: 'PcVue' },
        { name: 'WinCC Advanced' },
        { name: 'InTouch' },
      ],
    },
    {
      title: { en: 'Industrial Automation', fr: 'Automatismes industriels' },
      type: 'badges',
      items: [
        { name: 'Siemens' },
        { name: 'Schneider' },
      ],
    },
    {
      title: { en: 'Virtual Commissioning', fr: 'Simulation & Tests' },
      type: 'badges',
      items: [
        { name: 'SIMIT' },
        { name: 'PLCSim' },
        { name: 'Virtualisation' },
      ],
    },
    {
      title: { en:' Data & Scripting', fr: 'Données & Scripting' },
      type: 'badges',
      items: [
        { name: 'SQL Server' },
        { name: 'Python' },
      ],
    },
    {
      title: { en: 'Qualities', fr: 'Qualités & Méthodes' },
      type: 'text',
      items: [
        {
          name: {
            en: 'Communication, Adapatability, Curiosity, Technical Documentation',
            fr: 'Communication, adaptabilité, curiosité, documentation technique',
          },
        },
      ],
    },
  ],
  experiences: [
    {
      id: 'bouygues',
      company: { en: 'Bouygues Energies & Services', fr: 'Bouygues Energies & Services' },
      role: { en: 'SCADA Engineer', fr: 'Développeur SCADA' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: '2021 - Present', fr: '2021 - '},
      description: {
        fr: 'Gestion d\'infrastructures : tunnels routiers / autoroutiers, GTB',
        en: 'Infrastructure management: road and highway tunnels, building management systems',
      },
      techs: ['Ignition', 'PcVue', 'SQL Server', 'Python'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'En autonomie ou en équipe (automatismes, réseaux & systèmes), en relation directe avec MOE / MOA',
          en: 'Working independently or within multidisciplinary teams (automation, networks & systems), in direct contact with project owners and operators',
        },
        tasks: {
          fr: [
            'Développement de supervisions Ignition (Vision et Perspective) et PcVue',
            'Nouveaux projets, maintenance évolutive & corrective',
            'Gestion des tickets, audit de GTC (logs, bases de données SQL, alarmes)',
            'Développement d\'une architecture logicielle de simulation / tests avec SIMIT / TIA Portal / PLCSim / virtualisation',
            'Tests & FAT en plateforme / MES sur site'
          ],
          en: [
            'Developed SCADA applications using Ignition (Vision & Perspective) and PcVue',
            'Handled new projects, as well as corrective and evolutionary maintenance',
            'Managed tickets and performed audits (logs, SQL databases, alarms)',
            'Designed and developed a virtual commissioning architecture using SIMIT / TIA Portal / PLCSim / virtualization',
            'Performed platform testing, FAT, and on-site commissioning',
          ],
        },
        training: {
          fr: [
            '2026 : certification Ignition Gold',
            '2025 : SQL (2 jours)', 
            '2024 : Docker (3 jours)',
          ],
          en: [
            '2026: Ignition Gold Certification',
            '2025: SQL (2 days)', 
            '2024: Docker (3 days)',
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
      type: { fr: 'Presta', en: 'Contractor' },
      period: { fr: '2018 - 2020', en: '2018 - 2020' },
      description: {
        fr: 'Systèmes cryogéniques Turbo-Brayton pour la reliquéfaction du GNL sur méthaniers - Durée : 1 an 8 mois',
        en: 'Turbo-Brayton cryogenic systems for LNG reliquefaction on LNG carriers – Duration: 1 year 8 months',
      },
      techs: ['TIA Portal', 'WinCC Advanced'],
      details: {
        context: {
          fr: 'Contexte international : Conception à Grenoble / FAT en France/Italie / MES en Europe/Asie.',
          en: 'International context: design in Grenoble / FAT in France & Italy / commissioning in Europe & Asia.',
        },
        tasks: {
          fr: [
            'Évolution du programme standard automate/IHM, suite aux REX',
            'Préparation des programmes au niveau projet avant MES',
            'FAT partie courant faible de skids : automatismes / instrumentation / câblage',
            'Assistance aux démarreurs / MES à quai ou en mer',
            'Rédaction / mise à jour de notes techniques et procédures en anglais',
          ],
          en: [
            'Upgraded standard PLC/HMI programs based on feedback',
            'Prepared project-level software before commissioning',
            'Performed FAT on skid low-voltage systems: automation / instrumentation / wiring',
            'Supported commissioning engineers (dockside and offshore)',
            'Wrote and updated technical documentation and procedures in English',
          ],
        },
        training: {
          fr: ['2019 : certification ISM-ATEX niveau 2 électrique'],
          en: ['2019: ISM-ATEX Level 2 Electrical certification'],
        },
        env: {
          fr: 'TIA Portal / WinCC Advanced',
          en: 'TIA Portal / WinCC Advanced',
        },
      },
    },
    {
      id: 'assystem',
      company: { fr: 'Assystem', en: 'Assystem' },
      role: { fr: 'Automaticien', en: 'Automation Engineer' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2016 - 2018', en: '2016 - 2018' },
      description: {
        fr: 'Maintenance logicielle pour le CERN. Durée : 2 ans 5 mois',
        en: 'Software maintenance for CERN – Duration: 2 years 5 months',
      },
      techs: ['PcVue', 'Unity Pro', 'PL7 Pro', 'Step 7', 'Wago'],
      details: {
        context: {
          fr: 'Intervention sur 2 systèmes : CERN Safety Alarm Monitoring (CSAM) : supervision gérant tous les sites du CERN à destination du Centre de contrôle et du service de secours | Cooling & Ventilation : refroidissement des accélérateurs PS et SPS.',
          en: 'Worked on two systems: CERN Safety Alarm Monitoring (CSAM): managing of all CERN sites | Cooling & Ventilation: for PS & SPS particle accelerators.',
        },
        tasks: {
          fr: [
            'Développement et maintenance de systèmes SCADA et d'automatismes',
            'Gestion de tickets JIRA et astreintes',
            'Tests en plateforme et sur site',
            'Paramétrage de caméras et intégration sur serveur Milestone',
          ],
          en: [
            'Developed and maintained SCADA and automation systems',
            'Handled JIRA tickets and on-call support',
            'Performed platform and on-site testing',
            'Configured cameras and integrated them into Milestone VMS server',
          ],
        },
        training: {
          fr: ['2016 : Radioprotection pour travail en zone contrôlée'],
          en: ['2016: Radiation protection certification for controlled areas'],
        },
        env: {
          fr: 'PcVue / Schneider Unity & PL7 / Siemens S7 / Wago',
          en: 'PcVue / Schneider Unity & PL7 / Siemens S7 / Wago',
        },
      },
    },
    {
      id: 'ald',
      company: { fr: 'ALD France', en: 'ALD France' },
      role: { fr: 'Automaticien', en: 'Automation Engineer' },
      type: { fr: 'CDD', en: 'Fixed-term contract' },
      period: { fr: '2015 - 2016', en: '2015 - 2016' },
      description: {
        fr: 'Fours de traitement thermique. Durée : 6 mois',
        en: 'Heat treatment furnaces – Duration: 6 months',
      },
      techs: ['Unity Pro', 'Step 7', 'InTouch'],
    },
    {
      id: 'msk',
      company: { fr: 'MSK Covertech', en: 'MSK Covertech' },
      role: { fr: 'Automaticien', en: 'Automation Engineer' },
      type: { fr: 'Presta', en: 'Contractor' },
      period: { fr: '2015', en: '2015' },
      description: {
        fr: 'Systèmes d\'emballage et de manutention de palettes. Durée : 9 mois',
        en: 'Packaging and pallet handling systems – Duration: 9 months',
      },
      techs: ['Unity Pro'],
      details: {
        context: {
          fr: 'Contexte international : France, FAT en Hongrie, MES en France',
          en: 'International context: France, FAT in Hungary, commissioning in France',
        },
        tasks: {
          fr: [
            'Développement d\'applications',
            'Paramétrage de variateurs et positionnement par bus',
            'Mise au point de plusieurs machines à l\'usine du groupe en Hongrie',
            'MES de plusieurs projets neufs / SAV en France',
            'Formation des opérateurs',
          ],
          en: [
            'Developed PLC applications using Schneider Unity for new projects',
            'Configured drives and bus-based positioning',
            'Commissioned machines at the group factory in Hungary',
            'Commissioning and after-sales support in France',
            'Trained operators',
          ],
        },
        env: {
          fr: 'Schneider Unity Pro / Variateurs SEW et Schneider Altivar',
          en: 'Schneider Unity Pro / SEW and Schneider Altivar drives',
        },
      },
    },
    {
      id: 'educnat',
      company: { fr: 'Éducation nationale', en: 'French Ministry of Education' },
      role: { fr: 'Professeur d\'anglais', en: 'English Teacher' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2010 - 2013', en: '2010 - 2013' },
      description: {
        fr: 'Enseignement en collège et lycée dans l\'académie de Grenoble. Recrutement après réussite au concours du CAPES',
        en: 'Taught in middle and high schools in the Grenoble education district after passing the national CAPES exam',
      },
      techs: [],
    },
    {
      id: 'provence',
      company: { fr: 'Librairie de Provence', en: 'Librairie de Provence' },
      role: { fr: 'Libraire', en: 'Bookseller' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2007 - 2010', en: '2007 - 2010' },
      description: {
        fr: 'Gestion du rayon langues. Conseils dans les rayons sciences humaines / universitaire',
        en: 'Managed the languages section and advised customers in humanities and academic departments',
      },
      techs: [],
    }
  ],
  education: [
    {
      school: { fr: 'AFPA Vénissieux', en: 'AFPA Lyon' },
      degree: { fr: 'Développeur intégrateur en informatique industrielle', en: 'Industrial IT Integration Developer' },
      period: '2020 - 2021',
    },
    {
      school: { fr: 'AFPA Grenoble', en: 'AFPA Grenoble' },
      degree: { fr: 'Technicien supérieur en automatique et informatique industrielle', en: 'Advanced Technician in Automation and Industrial IT' },
      period: '2014 - 2015',
    },
    {
      school: { fr: 'Université de Provence', en: 'University of Provence' },
      degree: { fr: 'Master 1 d\'anglais', en: 'M.A. (1st year) in English Studies' },
      period: '2010',
    },
    {
      school: { fr: 'Université de Provence', en: 'University of Provence' },
      degree: { fr: 'Licence d\'anglais', en: 'Bachelor’s Degree in English' },
      period: '2005',
    },
    {
      school: { fr: 'Lycée Fourcade', en: 'Fourcade High School' },
      degree: { fr: 'Bac STI Électrotechnique', en: 'Technical Baccalaureate in Electrical Engineering' },
      period: '2001',
    },
  ],
  hobbies: [
    { title: { fr: 'Montagne & Nature', en: 'Mountains & Nature' } },
    { title: { fr: 'Photographie', en: 'Photography' } },
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
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main responsibilities:' },
      moreTasks: { fr: 'Autres missions...', en: 'Additional tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Environnement technique :', en: 'Technical environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: {
        fr: 'Cliquez sur les expériences pour voir plus de détails',
        en: 'Click on experiences to see more details',
      },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}

}
