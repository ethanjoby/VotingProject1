import React, { useState } from 'react';
import { Users, Map } from 'lucide-react';
import Link from 'next/link'; // Import Link from next/link for Next.js


function SideNav() {
  const menuList = [
    {
      id: 1,
      name: 'Candidates',
      icon: Users, // This assumes you have a component for the Users icon
      path: '/candidates',
    },
    {
      id: 2,
      name: 'Map',
      icon: Map, // This assumes you have a component for the Map icon
      path: '/map',
    },
    {
      id: 3,
      name: 'Policy',
      icon: Map, // This should probably be a different icon for Policy
      path: '/policy',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const gradientStyle = {
    background: 'linear-gradient(to top right, #EC4899, #F43F5E, #F59E0B)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-5 border-b">
        <h1 className="text-2xl font-bold cursor-pointer" style={gradientStyle}>
          CAHSD
        </h1>
      </div>
      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <Link href={item.path} key={item.id}> {/* Use Link from next/link */}
            <a // Replace button with an anchor tag for Next.js Link
              className={`flex items-center gap-2 p-4 
              hover:bg-gray-100 w-full  
              text-gray-500
              ${activeIndex === index ? 'bg-gray-100 text-black' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <item.icon className="w-6 h-6" />
              <h2>{item.name}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;