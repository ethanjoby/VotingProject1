"use client"
import React, { useState, useEffect } from 'react';
import SideNav from './_components/SideNav';
import TopHeader from './_components/TopHeader';
import DropDown from './_components/DropDown'; // Import your additional component

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true); // State to track screen width

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle screen width changes
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768); // Adjust the screen width threshold as needed
    if (isLargeScreen) {
      setIsMenuOpen(false); // Automatically close the menu for large screens
    }
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden">
        <SideNav />
      </div>
      <div className={`md:ml-64 ${isMenuOpen ? 'md:pl-64' : ''}`}>
        <TopHeader toggleMenu={toggleMenu} />
        {isMenuOpen && <DropDown />} {/* Render additional component when the menu is open */}
        {children}
      </div>
    </div>
  );
}

export default Layout;

