/* My @TODO notes:
* Right now this is a single page, but as I expand I'd like to 
* implement https://reactrouter.com/en/main for multiple pages.
*/
import './App.scss';
import pageData from './app-data.json';
import Header from './components/Header/Header.jsx';
import Experience from './components/Experience/Experience.jsx';
import LogoList from './components/LogoList/LogoList';
import Projects from './components/Projects/Projects';
import { List } from './components/List.js/List';

function App() {
  return (
    <div className="App layout-container">
      <Header />
      <Experience experiences={pageData.data.experiences} />
      <section id="clients">
        <LogoList items={pageData.data.client_logos} />
      </section>
      <Projects projects={pageData.data.projects} />
      <section id="skills">
        <h2>Soft Skills</h2>
        <List items={pageData.data.soft_skills} />
        <h2>Hard Skills</h2>
        <List items={pageData.data.hard_skills} />
      </section>
    </div>
  );
}

export default App;
