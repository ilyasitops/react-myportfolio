import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Je suis un développeur front-end passionné, spécialisé dans la création d'applications web intuitives et performantes. Avec une expérience pratique en HTML, CSS, PHP et JavaScript, je conçois des solutions centrées sur l'utilisateur, en mettant l'accent sur la sécurité, les performances et l'accessibilité. Je m'épanouis dans des environnements collaboratifs, en utilisant des outils comme Git et les méthodologies Agiles pour livrer des applications de haute qualité répondant aux besoins des utilisateurs.`;

export const ABOUT_TEXT = `Je suis un développeur front-end dédié et motivé, passionné par la création d'applications web conviviales. Mon parcours dans le développement web a été guidé par la curiosité et un engagement envers l'excellence. Fort d'une expertise solide en HTML, CSS, PHP, JavaScript et gestion de bases de données, j'ai développé des applications qui allient performance et ergonomie. J'excelle dans le travail en équipe, en tirant parti de Git et des workflows Agiles pour assurer une livraison fluide des projets. Mon approche met l'accent sur la création de solutions sécurisées, ergonomiques et évolutives, alignées sur les objectifs des utilisateurs et des entreprises. En dehors du développement, je suis passionné par l'escalade, le montage vidéo et je reste actif à travers des sports comme la musculation.`;

export const EXPERIENCES = [
  {
    year: "Octobre 2024 - Présent",
    role: "Référent en résidence",
    company: "Résidence étudiante",
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
  {
    year: "Été 2022",
    role: "Monteur vidéo",
    company: "Trash - Club Pingouin",
    description: `Production et montage de contenu vidéo en collaboration avec une équipe de monteurs. Respect des deadlines et intégration rapide des retours pour garantir une qualité optimale. Coordination à distance pour une communication efficace sur les projets.`,
    technologies: [
      "Montage vidéo",
      "Collaboration à distance",
      "Respect des délais",
      "Suite Adobe (Photoshop, Premiere Pro, After Effect)",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Site de réservation de billets de train",
    image: project1,
    description:
      "Une application web interactive permettant la recherche, la réservation et la gestion de billets de train. Les utilisateurs peuvent se connecter, parcourir les horaires, ajouter des billets au panier, et finaliser leurs achats. L'interface est entièrement responsive et utilise des échanges de données avec une API pour récupérer et afficher les informations des trajets et des billets.",
    technologies: ["HTML", "CSS", "JavaScript", "PSQL, GitLab"],
  },
  {
    title: "Application de gestion des dépenses",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["PHP", "PhpStorm", "MySQL", "GitHub"],
  },
  {
    title: "Mise en place d'une machine virtuelle",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Bash", "Linux", "C", "Git", "Vim", "VirtualBox"],
  },
  {
    title: "Site Portfolio",
    image: project4,
    description:
      "Un site web moderne et responsive conçu pour présenter mon profil de développeur front-end. Le portfolio comprend une navigation intuitive, une section hero avec une présentation personnelle, des technologies utilisées, une section projets pour mettre en avant les réalisations, une section expérience professionnelle, et un formulaire de contact. Construit avec Tailwind CSS pour un design élégant et Framer Motion pour des animations fluides.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript XML (JSX)",
      "Node.js",
      "Framer Motion",
      "GitHub",
    ],
  },
];

export const CONTACT = {
  address: "79 Av. de Chabeuil, 26000 Valence ",
  phoneNo: "07 68 79 14 05 ",
  email: "ilyas.bld8@gmail.com ",
};
