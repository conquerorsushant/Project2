import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ExpertData from '../pages/ExpertData';
import Contact from '../Components/Contact';
import TalentAcquisition from '../Components/TalentAcquisition';
import InfoTech from '../Components/InfoTech';
import Page2 from '../pages/Page2';
import page1Content from '../content/Page1cont';
import page2Content from '../content/Page2cont';
import page3Content from '../content/Page3cont';
import page4Content from '../content/Page4cont';
import page5Content from '../content/Page5cont';
import page6Content from '../content/Page6cont';
import page7Content from '../content/Page7cont';
// Import other content files

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/expert-data',
        element: <ExpertData />
      },
      {
        path: '/contact-us',
        element: <Contact />
      },
      {
        path: '/talent-acquisition',
        element: <TalentAcquisition />
      },
      {
        path: '/info-tech',
        element: <InfoTech />
      },
      {
        path: '/page1',
        element: <Page2 content={page1Content} />
      },
      {
        path: '/page2',
        element: <Page2 content={page2Content} />
      },
      {
        path: '/page3',
        element: <Page2 content={page3Content} />
      },
      {
        path: '/page4',
        element: <Page2 content={page4Content} />
      },
      {
        path: '/page5',
        element: <Page2 content={page5Content} />
      },
      {
        path: '/page6',
        element: <Page2 content={page6Content} />
      },
      {
        path: '/page7',
        element: <Page2 content={page7Content} />
      },
      // Define other routes similarly
    ]
  }
]);

export default router;
