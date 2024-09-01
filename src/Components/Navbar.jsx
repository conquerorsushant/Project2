import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import logo from '../assets/images/logo.png'; 
import '../App.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/about", title: "ABOUT US" },
    { path: "/talent-acquisition", title: "TALENT ACQUISITION WING" },
    { path: "/info-tech", title: "INFORMATION TECHNOLOGY WING" },
    { path: "/contact", title: "CONTACT US" }
  ];

  return (
    <div className='font-sans fixed left-0 right-0 top-0 bg-gray-900 z-50'>
      <header className='bg-secondary max-w-screen-2xl container mx-auto xl:px-36 px-4'>
        <nav className='flex justify-between items-center py-4'>
          <Link to="/" className='flex items-center gap-2 text-2xl '>
            <img src={logo} className='h-14' alt="logo" />
          </Link>

          <ul className='hidden md:flex gap-12'>
            {navItems.map(({ path, title }) => (
              <li key={path} className='text-sm text-white'>
                <NavLink to={path} className={({ isActive }) => isActive ? "text-white font-bold" : "text-white"}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className='md:hidden block'>
            <button onClick={handleMenuToggler}>
              {isMenuOpen ? <FaXmark className='w-5 h-5 text-white' /> : <FaBarsStaggered className='w-5 h-5 text-white' />}
            </button>
          </div>
        </nav>

        {/* Overlay for mobile menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleMenuToggler}></div>
        <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-md z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <Link to="/" className='flex items-center gap-2 text-2xl text-white'>
              <img src={logo} className='h-6' alt="logo" />
            </Link>
            <button onClick={handleMenuToggler}>
              <FaXmark className='w-5 h-5 text-white' />
            </button>
          </div>
          <ul className='mt-4'>
            {navItems.map(({ path, title }) => (
              <li key={path} className='text-base text-white py-1 px-4'>
                <NavLink to={path} className={({ isActive }) => isActive ? "text-white font-bold" : "text-white"} onClick={handleMenuToggler}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
