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
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
