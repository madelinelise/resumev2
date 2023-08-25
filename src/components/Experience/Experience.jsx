import "./Experience.scss";

const Experience = (props) => {
  const { experiences } = props;
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
