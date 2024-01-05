import React, { useState } from 'react';
import { Users, Map } from 'lucide-react';
import '../../../app/globals.css';

function DropDown() {
  const menuList = [
    {
      id: 1,
      name: 'Candidates',
      icon: Users, // Store the component reference
      path: '/upload',
    },
    {
      id: 2,
      name: 'Map',
      icon: Map, // Store the component reference
      path: '/map',
    },
    {
      id: 3,
      name: 'Policy',
      icon: Map, // Store the component reference
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
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button
            className={`flex gap-2 p-4 px-0 
            hover:bg-gray-100 w-full  
            text-gray-500
            ${activeIndex === index ? 'bg-gray-100 text-black' : null}`}
            onClick={() => setActiveIndex(index)}
            key={item.id}
          >
            <item.icon />
            <div className="flex items-center justify-center"> {/* Horizontally center the content */}
              <h2>{item.name}</h2>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
