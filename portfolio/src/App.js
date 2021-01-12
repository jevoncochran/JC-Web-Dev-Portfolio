import "./App.css";
import { Route, Switch } from "react-router-dom";

// component imports
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./components/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/Projects/ProjectDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:projectId" component={ProjectDetails} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
