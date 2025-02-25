import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/global/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/global/Footer";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import PageNotFound from "./components/pages/PageNotFound";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar/>
          <Home/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/projects',
      element: (
        <div>
          <Navbar/>
          <Projects/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/skills',
      element: (
        <div>
          <Navbar/>
          <Skills/>
          <Footer/>
        </div>
      )
    },
    {
      path: '*',
      element: (
        <div>
          <Navbar/>
          <PageNotFound/>
          <Footer/>
        </div>
      )
    }
  ]);

  return ( <RouterProvider router={router}/>)
}

export default App
