import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExpertData from "../pages/ExpertData";

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', 
        element: <Home />
      },{
        path: '/talent-acquisition',
        element: <ExpertData/>
      }
      // Add more routes here if needed
    ]
  }
]);

export default router;
