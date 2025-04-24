'use client';
import React from 'react';
import { useSidebar } from '../app/context/SidebarContext';

const HamburgerMenu = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <button 
      onClick={toggleSidebar}
      className="md:hidden fixed top-4 left-4 z-50 w-10 h-10 flex flex-col justify-center items-center"
      aria-label="Toggle menu"
    >
      <span 
        className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${
          isSidebarOpen ? 'rotate-45 translate-y-1' : ''
        }`}
      ></span>
      <span 
        className={`block w-6 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ease-out ${
          isSidebarOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      <span 
        className={`block w-6 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ease-out ${
          isSidebarOpen ? '-rotate-45 -translate-y-1' : ''
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu; 