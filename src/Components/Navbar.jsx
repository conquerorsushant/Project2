import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { IoMenu } from "react-icons/io5";
import logo from '../assets/images/logo.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "ABOUT US" },
    { path: "/talent-acquisition", title: "TALENT ACQUISITION WING" },
    { path: "/info-tech", title: "INFORMATION TECHNOLOGY WING" },
    { path: "/contact-us", title: "CONTACT US" }
  ];

  return (
    <div className='font-sansation fixed left-0 right-0 top-0 bg-secondary z-50'>
      <header className='bg-secondary max-w-screen-2xl container mx-auto xl:px-36 px-4'>
        <nav className='flex justify-between items-center py-3'>
          <Link to="/" className='flex items-center gap-2 text-2xl'>
            <img src={logo} className='h-14' alt="logo" />
          </Link>

          {/* Desktop Nav Items */}
          <ul className='hidden md:flex items-center justify-center gap-12'>
            {navItems.map(({ path, title }) => (
              <li key={path} className='text-sm font-bold hover:text-green-700 pt-3'>
                <NavLink 
                  to={path} 
                  className='hover:text-green-700 active:text-green-800 '
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className='md:hidden block'>
            <button onClick={handleMenuToggler}>
              {isMenuOpen ? <IoMenu className='w-5 h-5 text-white' /> : <IoMenu className='w-5 h-5 text-white' />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Modal */}
        {isMenuOpen && (
          <>
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleMenuToggler}></div>

            {/* Modal Content */}
            <div className="fixed inset-x-4 top-16 bg-primary border border-gray-700 px-2 pt-2 rounded-lg shadow-lg text-white w-[357px] mx-auto max-w-md z-50">
              {/* Mobile Nav Items */}
              <ul className="space-y-3 py-2 px-3">
                {navItems.map(({ path, title }) => (
                  <li key={path} className="text-sm font-bold hover:text-green-700 ">
                    <NavLink 
                      to={path} 
                      className='active:text-green-800 '
                      onClick={handleMenuToggler}  // Close menu on link click
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Navbar;
