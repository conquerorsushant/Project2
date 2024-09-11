// App.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import './index.css';

const App = () => {

  return (
    <div className="flex flex-col min-h-screen font-sansation">
      <Navbar /> 
      <div className="flex-grow font-sansation">
      
        <main className="pt-16"> 
          <Outlet />
        </main>
      </div>
      <Footer /> 
    </div>
  );
};

export default App;
