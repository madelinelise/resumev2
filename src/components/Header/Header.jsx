/* My @TODO notes:
 * Nav is largely going to be static,
 * but may want to add props someday?
 */

import "./Header.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className="name">Madeline Jensen</div>
        <nav aria-label="main">
          <ul>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </nav>
      </header>
      <p>Hi, I’m Madeline, a software engineer committed to making a positive difference in the world.</p>
      <p><strong>Reach out: madelinelise@gmail.com</strong></p>

    </>
  );
};

export default Header;
