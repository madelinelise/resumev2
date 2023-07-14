/* My @TODO notes:
* Right now this is a single page, but as I expand I'd like to 
* implement https://reactrouter.com/en/main for multiple pages.
*/
import Header from './components/Header/Header.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
       <Header/>
        {/* Experience */}
      <section id="projects">
        {/* Projects */}
      </section>
      <section id="skills">
        {/* Skills */}
      </section>
    </div>
  );
}

export default App;
