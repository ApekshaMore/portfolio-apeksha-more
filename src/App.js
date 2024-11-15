import './App.css';
import Intro from './components/Intro/intro';
import AboutMe from './components/AboutMe/aboutMe';
import ContactMe from './components/ContactMe/conatctMe';

function App() {
  return (
    <div className="App bg-color" >
      <Intro/>
      <AboutMe/>
      <ContactMe/>
    </div>
  );
}

export default App;
