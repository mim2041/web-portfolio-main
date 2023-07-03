import { Outlet } from "react-router-dom";
import HomeContent from "./HomeContent";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  
  return (
    <div>
      <Outlet></Outlet>
      <HomeContent></HomeContent>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;