import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar /> 

      <div className="flex-grow">
       
        <main className="pt-16"> 
          <Outlet />
        </main>
      </div>

      {/* <Footer />  */}
    </div>
  );
};

export default App;
