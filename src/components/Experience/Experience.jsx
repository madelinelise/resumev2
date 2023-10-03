import React from "react";
import "./Experience.scss";

const Experience = (props) => {
  const { experiences } = props;
  return (
    <>
      <h3 className="section-title">Experience</h3>
      <ul>
        {experiences.map((experience) => (
          <li className="experience-item" key={experience.id}>
            <h4 className="experience-title">{experience.title}</h4>
            <h5 className="experience-date">{experience.company}, {experience.duration}</h5>
            {experience.description && experience.description.length > 0 ? (
              <ul>
                {experience.description.map((item, index) => (
                  <li className="experience-desc" key={index}>{item}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Experience;