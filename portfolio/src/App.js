import "./App.css";
import { Route } from "react-router-dom";

// component imports
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </div>
  );
}

export default App;
