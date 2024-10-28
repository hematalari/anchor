import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Insights from './Pages/Insights/Insights.jsx'
import Services from './Pages/Services/Services.jsx'
import Industries from './Pages/Industries/Industires.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Career from './Pages/Careers/Career.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Saas from './Pages/Saas/Saas.jsx'
import Web from './Subpages/Web/Web.jsx'
import Appdev from './Subpages/App/Appdev.jsx'
import Design from './Subpages/Design/Design.jsx'
import Logo from './Subpages/Logo/Logo.jsx'
import Digital from './Subpages/Digital/Digital.jsx'
import Cloud from './Subpages/Cloud/Cloud.jsx'
import Iot from './Subpages/Iot/Iot.jsx'
import Embed from './Subpages/Embed/Embed.jsx'
import Agumented from './Subpages/Agumented/Agumented.jsx'
import Smart from './Subpages/Smart/Smart.jsx'
import Techno from './Subpages/Technology/Techno.jsx'

const router = createBrowserRouter([
  {
    path: "/anchor",
    element: <App />,
  },
  {
    path: "/anchor",
    element: <App />,
  },
  {
    path: "/anchor/Insights",
    element: <Insights />,
  },
  {
    path: "/anchor/Industries",
    element: <Industries />,
  },
  {
    path: "/anchor/Services",
    element: <Services />,
  },
  {
    path: "/anchor/About",
    element: <About />,
  },
  {
    path: "/anchor/Career",
    element: <Career />,
  },
  {
    path: "/anchor/Contact",
    element: <Contact />,
  },
  {
    path: "/anchor/Saas",
    element: <Saas />,
  },
  {
    path: "/anchor/Web",
    element: <Web />,
  }, 
  {
    path: "/anchor/Appdev",
    element: <Appdev />,
  }, 
  {
    path: "/anchor/Design",
    element: <Design />,
  }, 
  {
    path: "/anchor/Logo",
    element: <Logo />,
  }, 
  {
    path: "/anchor/Digital",
    element: <Digital />,
  }, 
  {
    path: "/anchor/Cloud",
    element: <Cloud />,
  }, 
  {
    path: "/anchor/Iot",
    element: <Iot />,
  }, 
  {
    path: "/anchor/Embed",
    element: <Embed />,
  }, 
  {
    path: "/anchor/Agumented",
    element: <Agumented />,
  }, 
  {
    path: "/anchor/Smart",
    element: <Smart />,
  }, 
  {
    path: "/anchor/Techno",
    element: <Techno />,
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
