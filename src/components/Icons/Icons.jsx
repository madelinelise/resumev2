import "./Icons.scss";

const Icons = () => {
  const iconPath = process.env.PUBLIC_URL + '/icons/';

  return (
    <>
      <ul className="icon-list">
        <a target="_blank" href="mailto:madelinelise@gmail.com"><li><img className="icon-email" src={iconPath + 'paper-plane.svg'} alt="Icon to email me" /></li></a>
        <a target="_blank" href="https://www.linkedin.com/in/madeline-jensen/"><li><img className="icon-li" src={iconPath + 'linkedin.svg'} alt="Icon to view my linkedin" /></li></a>
      </ul>
    </>
  );
}

export default Icons;
