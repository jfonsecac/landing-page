import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* agreganddo recien*/
import NavBar from './components/NavBar/NavBar.jsx';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import AboutMe from './pages/AboutMe.jsx';
import ProjectsCurrentsMe from './pages/ProjectsCurrentsMe.jsx';
import ContactMe from './pages/ContactMe.jsx'
import FormMe from './pages/FormMe.jsx';
import EquipeMe from './pages/EquipeMe.jsx'


const Layout =()=>{
  return(
    <div>
      <NavBar />
       
       <Outlet />
       <Footer />
    </div>
  )
};

const router = createBrowserRouter([{
  path:'/',
  element:<Layout />,
  children:[
    {
      path:"/",
      element:<App />,
    },
    {
      path:"/About",
      element:<AboutMe />,
    },
    {
      path:"/ProjectsCurrents",
      element:<ProjectsCurrentsMe />,
    },
    {
      path:"/Equipe",
      element:<EquipeMe />,
    },
    {
      path:"/Contact",
      element:<ContactMe />,
    },
    {
      path:"/Form",
      element:<FormMe />,
    },
  ],
},
]);
/* agreganddo recien*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  /* <React.StrictMode>
    <App />
  </React.StrictMode>, */
);
