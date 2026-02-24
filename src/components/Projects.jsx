import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-4xl text-center"
      >
        Projets
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className={`flex flex-wrap mb-8 lg:justify-center ${
              project.github ? "cursor-pointer group" : ""
            }`}
            onClick={() => project.github && window.open(project.github, "_blank")}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className={`w-full lg:w-1/4 ${
                project.github ? "group-hover:opacity-80 transition-opacity" : ""
              }`}
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6
                className={`mb-2 font-semibold ${
                  project.github
                    ? "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-slate-500 group-hover:to-blue-500 group-hover:bg-clip-text transition-all"
                    : ""
                }`}
              >
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 mt-4 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
