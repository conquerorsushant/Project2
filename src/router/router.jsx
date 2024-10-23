import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExpertData from "../pages/ExpertData";
import Contact from "../Components/Contact";
import TalentAcquisition from "../Components/TalentAcquisition";
import InfoTech from "../Components/InfoTech";
import Page2 from "../pages/Page2";
import page1Content from "../content/Page1cont";
import page2Content from "../content/Page2cont";
import page3Content from "../content/Page3cont";
import page4Content from "../content/Page4cont";
import page5Content from "../content/Page5cont";
import page6Content from "../content/Page6cont";
import page7Content from "../content/Page7cont";
import page12Content from "../content/Page12cont";
import page13Content from "../content/Page13cont";
import page14Content from "../content/Page14cont";
import page11Content from "../content/Page11cont";
import page15Content from "../content/Page15cont";
import page10Content from "../content/Page10cont";
import page9Content from "../content/Page9cont";
import page8Content from "../content/Page8cont";
import page16Content from "../content/Page16cont";
// Import other content files

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/expert-data",
        element: <ExpertData />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/talent-acquisition",
        element: <TalentAcquisition />,
      },
      {
        path: "/information-technology",
        element: <InfoTech />,
      },
      {
        path: "/CRM",
        element: <Page2 content={page1Content} />,
      },
      {
        path: "/web-development",
        element: <Page2 content={page2Content} />,
      },
      {
        path: "/ui/ux",
        element: <Page2 content={page3Content} />,
      },
      {
        path: "/data-engineering",
        element: <Page2 content={page4Content} />,
      },
      {
        path: "/app-development",
        element: <Page2 content={page5Content} />,
      },
      {
        path: "/custom-software-development",
        element: <Page2 content={page15Content} />,
      },

      {
        path: "/CMS",
        element: <Page2 content={page12Content} />,
      },
      {
        path: "/game-development",
        element: <Page2 content={page13Content} />,
      },
      {
        path: "/forex-trading-automation-bot",
        element: <Page2 content={page14Content} />,
      },
      {
        path: "/e-commerce-solutions",
        element: <Page2 content={page11Content} />,
      },
      {
        path: "/MVP",
        element: <Page2 content={page10Content} />,
      },
      {
        path: "/iot-development",
        element: <Page2 content={page9Content} />,
      },
      {
        path: "/AI-ML",
        element: <Page2 content={page8Content} />,
      },
      {
        path: "/desktop-application",
        element: <Page2 content={page6Content} />,
      },
      {
        path: "/erp-software-solutions",
        element: <Page2 content={page16Content} />,
      },
      // Define other routes similarly
    ],
  },
]);

export default router;
