import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const gradientStyle = {
    background: 'linear-gradient(to top right, #EC4899, #F43F5E, #F59E0B)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  };

  const iconCircleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    border: '2px dotted #ccc',
    borderRadius: '50%',
  };

  return (
    <div id="contact">
      <section className="container mx-auto px-4 py-16 flex flex-wrap">
        {/* Left Column with Vertical Line */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 lg:border-r-2 lg:border-gray-300">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-10">
            Have questions or want to know more? Drop us a message.
          </p>

          {/* Contact Items */}
          <div className="flex justify-start items-center space-x-6">
            {/* Phone */}
            <div className="flex items-center">
              <div style={iconCircleStyle}>
                <FaPhone className="text-3xl text-gray-800" />
              </div>
              <div className="ml-4">
                <h4 style={gradientStyle} className="font-bold">Phone</h4>
                <p className="text-gray-600">+1 number</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center">
              <div style={iconCircleStyle}>
                <FaMapMarkerAlt className="text-3xl text-gray-800" />
              </div>
              <div className="ml-4">
                <h4 style={gradientStyle} className="font-bold">Location</h4>
                <p className="text-gray-600">Foothill HS</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <div style={iconCircleStyle}>
                <FaEnvelope className="text-3xl text-gray-800" />
              </div>
              <div className="ml-4">
                <h4 style={gradientStyle} className="font-bold">Email</h4>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/2 px-4">
        <h2  className="text-4xl font-bold mb-4">Contact Form</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg" />
          <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border rounded-lg"></textarea>
          <button type="submit" className="px-6 py-2 border rounded-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white font-bold">
            Send Message
          </button>
        </form>
      </div>
    </section>
    </div>
  )
}

export default Contact