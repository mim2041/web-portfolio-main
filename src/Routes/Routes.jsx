import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'skills',
          element: <Skills></Skills>
        },
        {
          path: 'projects',
          element: <Projects></Projects>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        }
      ]
    },
  ]);

  export default router;