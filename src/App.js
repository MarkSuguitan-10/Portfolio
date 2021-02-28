import './App.css';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NaviBar from './NavigationBar';

function App() {
  return ( <Router>
    <NaviBar/>
    <Switch>
      <Route exact path="/">
        <About/>
      </Route>
      <Route exact path="/resume">
        <Resume/>
      </Route>
      <Route exact path="/projects">
        <Projects/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
