import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <h2 className="my-20 text-4xl text-center">Projets</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
