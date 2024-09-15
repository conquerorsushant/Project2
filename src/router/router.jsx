import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExpertData from "../pages/ExpertData";
import Contact from "../Components/Contact";
import TalentAcquisition from "../Components/TalentAcquisition";
import InfoTech from "../Components/InfoTech";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', 
        element: <Home />
      },
      ,{
        path: '/expert-data',
        element: <ExpertData/>
      },
      {
        path:'/page2',
        element: <Page2/>
      },
      {
        path:'/page3',
        element: <Page3/>
      },
      {
        path: '/contact-us',
        element: <Contact/>
      },
      {
        path: '/talent-acquisition',
        element: <TalentAcquisition/>
      },
      {
        path: '/info-tech',
        element: <InfoTech/>
      },
      
      
      // Add more routes here if needed
    ]
  }
]);

export default router;
