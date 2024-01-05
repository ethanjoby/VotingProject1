"use client"
import { AlignJustify, X } from 'lucide-react'; // Import the X icon for the close button
import { UserButton } from '@clerk/nextjs';
import React, { useState, useEffect } from 'react';

function TopHeader({ toggleMenu }) {
  const gradientStyle = {
    background: 'linear-gradient(to top right, #EC4899, #F43F5E, #F59E0B)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Function to handle window resize and set the state accordingly
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 768; // Adjust the breakpoint as needed
      setIsMenuOpen(isLargeScreen); // Set isMenuOpen to true for large screens, false for small screens
    };

    // Initial setup on component mount
    handleResize();

    // Add a window resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to toggle the menu state
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleMenu(); // Call the parent toggleMenu function
  };

  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      {isMenuOpen ? (
        <X className="md:hidden" onClick={handleToggleMenu} /> // Display close button when the menu is open
      ) : (
        <AlignJustify className="md:hidden" onClick={handleToggleMenu} /> // Display menu button when the menu is closed
      )}
      <h1 className="text-2xl font-bold cursor-pointer md:hidden" style={gradientStyle}>
        CAHSD
      </h1>
      <UserButton />
    </div>
  );
}

export default TopHeader;



