import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
  
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
        }
      ]
    },
  ]);

  export default router;