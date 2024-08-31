import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Fixed Navbar at the top */}

      <div className="flex-grow">
        {/* Add padding to ensure content doesn't overlap with the Navbar */}
        <main className="pt-16"> {/* Adjust `pt-16` if your Navbar is taller or shorter */}
          <Outlet /> {/* Content rendered by routes */}
        </main>
      </div>

      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default App;
