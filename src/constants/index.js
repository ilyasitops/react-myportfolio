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
      "Gestion d'équipe",
      "Communication",
      "Organisation",
      "Canva",
    ],
  },
  {
    year: "Été 2024",
    role: "Animateur en centre de loisirs",
    company: "Kid’O Vert",
    description: `Encadrement d’enfants dans un environnement ludique et sécurisé. Création d’activités adaptées pour stimuler la créativité et l’apprentissage. Mise en avant de la gestion du stress, de la patience et de l’interaction respectueuse avec les parents et les enfants.`,
    technologies: ["Créativité", "Patience", "Gestion du stress", "Pédagogie"],
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
      "Adobe Premiere",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "59 Chemin de Redondon, Montélimar, 26200 ",
  phoneNo: "07 68 79 14 05 ",
  email: "ilyas.bld8@gmail.com ",
};
