/* My @TODO notes:
* Right now this is a single page, but as I expand I'd like to 
* implement https://reactrouter.com/en/main for multiple pages.
*/
import './App.scss';
import pageData from './app-data.json';
import Header from './components/Header/Header.jsx';
import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';
import LogoList from './components/LogoList/LogoList';
import Projects from './components/Projects/Projects';
import { List } from './components/List.js/List';
import Subheader from './components/SubHeader/SubHeader';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='layout-container'>
        <div className="content-container">
          <Subheader />
          <section id="experience" className='experience section'>
            <Experience experiences={pageData.data.experiences} />
          </section>
          <section id="education" className='education section'>
            <Education educations={pageData.data.education} />
          </section>
          <section id="skills" className='skills section'>
            <h3 className='section-title'>Skills</h3>
            <h4>Technical Skills</h4>
            <List items={pageData.data.hard_skills} />
            <h4>Soft Skills</h4>
            <List items={pageData.data.soft_skills} />
          </section>
          <section id="projects" className='prjoects section'>
            <h3 className='section-title'>A few clients I've worked with:</h3>
            <LogoList items={pageData.data.client_logos} />
            <Projects projects={pageData.data.projects} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
