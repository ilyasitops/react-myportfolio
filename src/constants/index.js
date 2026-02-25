import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = `Actuellement en troisième année de BUT Informatique à l’IUT de Valence, je réalise mon alternance en tant qu’Administrateur IT chez Adequasys. Passionné par le développement web et l’architecture système, mon objectif est d'évoluer vers des postes de Chef de projet, d'Architecte Cloud ou d'Ingénieur DevOps.`;

export const ABOUT_TEXT = `Étudiant motivé par la création d'applications performantes, j'ai acquis de solides compétences en HTML, CSS, JavaScript, React, PHP et MySQL. Mon parcours m'a permis de travailler sur des solutions full-stack critiques lors de mon stage chez LAB Manufacture, tout en développant une expertise en support IT et DevOps au sein d'Adequasys. J'accorde une importance particulière à l'expérience utilisateur et à l'optimisation des performances. En dehors du développement, je suis passionné par le montage vidéo et la musculation.`;

export const EXPERIENCES = [
  {
    year: "Septembre 2025 - Présent",
    role: "Administrateur IT (Alternance)",
    company: "Adequasys",
    description: `Gestion du support IT et administration de plateformes Cloud (OVH, Oracle) dans un environnement international. Mise en œuvre de solutions DevOps (Docker, Kubernetes, Ansible, Terraform) pour optimiser les déploiements et la fiabilité des systèmes.`,
    technologies: [
      "Docker",
      "Kubernetes",
      "Ansible",
      "Terraform",
      "Cloud (OVH, Oracle)",
      "Support IT",
    ],
  },
  {
    year: "Mars 2025 - Juillet 2025",
    role: "Développeur Full-Stack (Stage)",
    company: "LAB Manufacture",
    description: `Développement d'un connecteur PrestaShop ↔ SAP B1 pour l'automatisation des flux de données. Conception d'une application interne de suivi des commandes et de la production (React & PHP). Finalisation d'un site e-commerce avec configurateur de commande.`,
    technologies: [
      "React",
      "PHP",
      "MySQL",
      "SAP B1",
      "PrestaShop",
      "JavaScript",
    ],
  },
  {
    year: "Octobre 2024 - Présent",
    role: "Référent en résidence",
    company: "Crous de Grenoble",
    description: `Responsable de la gestion et de la communication au sein de la résidence. Coordination des activités quotidiennes et résolution des conflits pour assurer un environnement harmonieux. Développement de compétences en gestion d'équipe, patience et maîtrise du temps, tout en favorisant un cadre de vie respectueux et organisé.`,
    technologies: [
      "Organisation",
      "Communication",
      "Suite Office (Word, Excel)",
      "Canva",
    ],
  },
  {
    year: "Été 2024",
    role: "Animateur en centre de loisirs",
    company: "Kid’O Vert",
    description: `Encadrement d’enfants dans un environnement ludique et sécurisé. Création d’activités adaptées pour stimuler la créativité et l’apprentissage. Mise en avant de la gestion du stress, de la patience et de l’interaction respectueuse avec les parents et les enfants.`,
    technologies: [
      "Créativité",
      "Patience",
      "Gestion du stress",
      "Suite Office (Word, Excel)",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Site de réservation de billets de train",
    image: project1,
    description:
      "Une application web interactive permettant la recherche, la réservation et la gestion de billets de train. Les utilisateurs peuvent se connecter, parcourir les horaires, ajouter des billets au panier, et finaliser leurs achats. L'interface est entièrement responsive et utilise des échanges de données avec une API pour récupérer et afficher les informations des trajets et des billets.",
    technologies: ["HTML", "CSS", "JavaScript", "PSQL", "GitLab"],
    github: "https://github.com/ilyasitops/locolink",
  },
  {
    title: "Site Portfolio",
    image: project2,
    description:
      "Un site web moderne et responsive conçu pour présenter mon profil de développeur full-stack. Le portfolio comprend une navigation intuitive, une section hero avec une présentation personnelle, des technologies utilisées, une section projets pour mettre en avant les réalisations, une section expérience professionnelle, et un formulaire de contact. Construit avec Tailwind CSS pour un design élégant et Framer Motion pour des animations fluides.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript XML (JSX)",
      "Node.js",
      "Framer Motion",
      "GitHub",
    ],
    github: "https://github.com/ilyasitops/react-myportfolio",
  },
  {
    title: "AIFants",
    image: project3,
    description:
      "Simulation de colonie de fourmis utilisant le Q-learning (IA). Visualisation en temps réel via Tkinter des déplacements, de la collecte de nourriture et de l'évolution des Q-Tables. Inclut un méta-programme d'optimisation des performances.",
    technologies: ["Python", "Numpy", "Tkinter", "Q-learning"],
    github: "https://github.com/ilyasitops/aifants",
  },
  {
    title: "Renouvellement de parc informatique",
    image: project4,
    description:
      "Pilotage et exécution du remplacement de 40 postes de travail pour Adequasys. Optimisation du workflow de déploiement, masterisation des postes et gestion de la logistique dans un contexte d'entreprise international.",
    technologies: ["MDT", "Windows", "Réseau", "Logistique"],
  },
  {
    title: "Connecteur PrestaShop ↔ SAP B1",
    image: project5,
    description:
      "Automatisation des flux de données entre PrestaShop et l'ERP SAP Business One pour supprimer les ressaisies manuelles. Utilisation d'une base MySQL intermédiaire pour structurer et valider les données avant synchronisation.",
    technologies: [
      "PHP",
      "MySQL",
      "SAP B1",
      "PrestaShop",
      "API Service Layer",
    ],
  },
  {
    title: "Suivi de production Risuola",
    image: project6,
    description:
      "Application React permettant aux opérateurs de suivre en temps réel l'avancement des commandes et les personnalisations techniques. Interface connectée à un backend PHP pour interroger l'ERP.",
    technologies: ["React", "PHP", "JavaScript", "Tailwind CSS", "Notion"],
  },
];

export const CONTACT = {
  address: "79 Av. de Chabeuil, 26000 Valence",
  phoneNo: "0768791405",
  email: "ilyas.bld8@gmail.com",
};
