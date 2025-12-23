import React from 'react'
import Logo from './image/logo.svg'


const Header = () => {
  return (
      <header className="fixed top-0 left-0 w-full z-50 bg-#fffffff5/80 backdrop-blur-[20px]  mb-2">
        <div className="container mx-3">
          <div className="flex justify-between items-center h-20">
            <a href="#" className='flex items-center'><img src={Logo} alt=""  className='h-8 w-auto hover:opacity-80 transition-all'/></a>
            <ul className='hidden md:flex items-center gap-10'>
              <li className='text-sm font-medium transition-all duration-300 hover:text-blue-400'><a href="/">Home</a></li>
              <li className='text-sm font-medium transition-all duration-300 hover:text-blue-400'><a href="#">About</a></li>
              <li className='text-sm font-medium transition-all duration-300 hover:text-blue-400'><a href="#">Careers</a></li>
              <li className='text-sm font-medium transition-all duration-300 hover:text-blue-400'><a href="#">Blog</a></li>
              <li className='text-sm font-medium transition-all duration-300 hover:text-blue-400'><a href="#">Contact US</a></li>
            </ul>
            <button className='bg-[#F58A071A] text-[#F58A07] rounded-[31px] px-5 py-2 border border-transparent hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300'>Clone project</button>
          </div>
        </div>
      </header>
  )
}

export default Header