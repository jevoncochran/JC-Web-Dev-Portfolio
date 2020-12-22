import "./App.css";
import { Route } from "react-router-dom";

// component imports
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/JC-Web-Dev-Portfolio" component={Home} />
      <Route path="/JC-Web-Dev-Portfolio/resume" component={Resume} />
      <Route path="/JC-Web-Dev-Portfolio/about" component={About} />
      <Route path="/JC-Web-Dev-Portfolio/contact" component={Contact} />
    </div>
  );
}

export default App;
