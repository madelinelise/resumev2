import "./Projects.scss";

const Projects = (props) => {
  const { projects } = props;
  return (
    <section id="projects">
      <h3 className="section-title">A few projects I've worked on:</h3>
      <ul>
        {projects.map((project) => (
          <li className="project-item" key={project.id}>
            <h4 className="project-title" dangerouslySetInnerHTML={{__html: project.title}}></h4>
            <p >{project.description}</p> 
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
