import React, { useContext, useEffect } from "react";
import Intro from "./Intro";
import "./Home.scss";
import { ProjectContext } from "../../context/ProjectContext";

const Home = () => {
  const { activateHome } = useContext(ProjectContext);

  useEffect(() => {
    activateHome();
  }, [activateHome]);

  return (
    <div className="home">
      <Intro />
    </div>
  );
};

export default Home;
