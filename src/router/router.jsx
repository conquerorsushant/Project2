import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExpertData from "../pages/ExpertData";
import Contact from "../Components/Contact";
import TalentAcquisition from "../Components/TalentAcquisition";
import InfoTech from "../Components/InfoTech";

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
      //,{
      //   path: '/talent-acquisition',
      //   element: <ExpertData/>
      // },

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
