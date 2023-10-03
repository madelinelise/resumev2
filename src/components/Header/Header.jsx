/* My @TODO notes:
 * Nav is largely going to be static,
 * but may want to add props someday?
 */

import "./Header.scss";
import Icons from "../Icons/Icons.jsx"

const Header = () => {
  return (
    <>
      <header className="header">
        <nav aria-label="main">
          <ul>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
        <Icons/>
      </header>
    </>
  );
};

export default Header;
