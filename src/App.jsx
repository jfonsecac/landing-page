import React from "react";
// import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Equipment from "./components/Equipment/Equipment";
import Contact from "./components/Contact/Contact";
import Form from "./components/Form/Form"
import ProjectsCurrents from "./components/ProjectsCurrents/ProjectsCurrents";
import Equipe from "./components/Equipe/Equipe"

import AOS from "aos";
import "aos/dist/aos.css";
// import Footer from "./components/Footer/Footer";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* <NavBar /> */}
      
      <Hero />
      
      <Projects />
      <Equipment />
      
     
      
     
      {/* /* <Footer /> */}
    </div>
  );
};

export default App;
