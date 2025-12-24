import React from 'react'
import Logo from './image/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <header className="fixed top-0 left-0 w-full z-50 bg-[#ffffff]/80 backdrop-blur-[20px] p-2 m-0 border-b border-gray-100">
        <div className="container mx-3 px-4">
          <div className="flex justify-between items-center">
            <a href="#" className='flex items-center'><img src={Logo} alt=""  className='h-8 w-auto hover:opacity-80 transition-all'/></a>
            <ul className='hidden md:flex items-center gap-10'>
              <li className="relative font-medium py-[10px] text-[#1D2130] transition-all duration-300 hover:text-cyan-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full"><Link to="/">Home</Link></li>
              <li className="relative font-medium py-[10px] text-[#1D2130] transition-all duration-300 hover:text-cyan-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full"><Link to="/about">About</Link></li>
              <li className="relative font-medium py-[10px] text-[#1D2130] transition-all duration-300 hover:text-cyan-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full"><Link to="/services">Services</Link></li>
              <li className="relative font-medium py-[10px] text-[#1D2130] transition-all duration-300 hover:text-cyan-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full"><Link to="/careers">Careers</Link></li>
              <li className="relative font-medium py-[10px] text-[#1D2130] transition-all duration-300 hover:text-cyan-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full"><Link to="/blogs">Blogs</Link></li>
              <li className="relative font-medium py-[10px] text-[#1D2130] transition-all duration-300 hover:text-cyan-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full"><Link to="/contact">Contact</Link></li>            </ul>
            <button className='bg-[#F58A071A] text-[#F58A07] rounded-[31px] px-5 py-2 border border-transparent hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300'>Clone project</button>
          </div>
        </div>
      </header>
  )
}

export default Header