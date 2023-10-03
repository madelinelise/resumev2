import "./Education.scss";

const Education = (props) => {
  const { educations } = props;
  return (
    <>
      <h3 className="section-title">Education</h3>
      <ul>
        {educations.map((education) => (
          <li className="education-item" key={education.id}>
            <h4 className="education-title">{education.title}</h4>
            <h5 className="education-date">{education.company}, {education.duration}</h5>
            {education.description && education.description.length > 0 ? (
              <ul>
                {education.description.map((item, index) => (
                  <li className="education-desc" key={index}>{item}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Education;