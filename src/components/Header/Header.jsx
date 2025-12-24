import React, { useState } from "react";
import Logo from "./image/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {["Home", "About", "Services", "Careers", "Blogs", "Contact"].map((item) => (
                <li key={item} className="relative group overflow-hidden">
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-medium text-[#1D2130] transition-colors duration-300 group-hover:text-cyan-600"
                  >
                    {item}
                  </Link>
                  {/* Silliq chiziq effekti */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
            
            <button className="bg-[#F58A071A] text-[#F58A07] rounded-[31px] px-5 py-2 border border-transparent hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300">
              Clone project
            </button>
          </nav>

          {/* Hamburger Menu Button (Mobile) */}
          <button 
            className="flex flex-col gap-1.5 md:hidden z-[60] outline-none" 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <div className={`w-7 h-0.5 bg-[#1D2130] rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-7 h-0.5 bg-[#1D2130] rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-7 h-0.5 bg-[#1D2130] rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </button>

          {/* Mobile Overlay Menu */}
          <div className={`fixed inset-0 bg-white pt-0 h-180 z-50 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
             <ul className="flex flex-col items-center gap-6 text-2xl font-bold text-[#1D2130]">
                {["Home", "About", "Services", "Careers", "Blogs", "Contact"].map((item) => (
                  <li key={item} onClick={() => setIsOpen(false)}>
                    <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
                  </li>
                ))}
             </ul>
             <button className="bg-[#F58A07] text-white rounded-full px-10 py-4 font-bold shadow-lg shadow-[#F58A07]/30">
                Clone project
             </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;