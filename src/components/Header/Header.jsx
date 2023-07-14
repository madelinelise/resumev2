/* My @TODO notes:
 * Nav is largely going to be static,
 * but may want to add props someday?
 */

const Header = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <a href="#home">Work History</a>
          </li>
          <li>
            <a href="#about">Education</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#portfolio">Skills</a>
          </li>
          {/* Add more navigation links */}
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;