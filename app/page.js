import Image from 'next/image'
import Hero from './_components/Hero'
import About from './_components/About'
import Contact from './_components/Contact'
import React from 'react'
import Register from './_components/Register'
import Footer from './_components/Footer'
export default function Home() {
  const gradientStyle = {
    background: 'linear-gradient(to top right, #EC4899, #F43F5E, #F59E0B)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  };
  return (
    <div>
      <div>
      <header className="bg-white border-b">
        <div className="mx-auto flex h-16 max-w-screen-xl justify-center items-center gap-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold cursor-pointer" style = {gradientStyle}>CAHSD</h1>
          <div className="flex flex-1 justify-center items-center">
            
            <nav aria-label="Global" className="hidden md:flex">
              <ul className="flex items-center gap-6 text-sm">
                <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#about"> About </a></li>
                <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#contact"> Contact </a></li>
                <li><a className="text-gray-500 transition hover:text-gray-500/75" target = "_blank" href="https://cahsdemocrats.netlify.app/"> CAHSD Website </a></li>
                
              </ul>
            </nav>
          </div>
          <Register/>
          <div className="sm:hidden flex items-center gap-4">
            <a className="text-md mr-4" href="/content">Login</a>
            <a className="block rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700" href="/content">Register</a>
          </div>
        </div>
      </header>
      </div>
      <Hero/>
      <About id = "about"/>
      <Contact id = "contact"/>
      <Footer/>
    </div>
  );
}
