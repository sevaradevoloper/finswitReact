import React from "react";
import Logo from "./image/Logo.svg";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-[#063255] text-white pt-16 pb-8">
      <div className="container mx-3 px-4">
        <div>
          <ul className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-white/10 pb-12">
            <li>
              <a href="#">
                <img src={Logo} alt="Logo" className="mb-8"/>
              </a>
              <h2 className="text-2xl font-bold mb-6 leading-tight">Bespoke software solutions</h2>
              <div className="flex gap-[16px]">
                <a href="#" className="footer__link text-xl text-white/70 hover:text-[#F58A07] transition-colors">
                  <FiFacebook />
                </a>
                <a href="#" className="footer__link text-xl text-white/70 hover:text-[#F58A07] transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="footer__link text-xl text-white/70 hover:text-[#F58A07] transition-colors">
                  <LuTwitter />
                </a>
                <a href="#" className="footer__link text-xl text-white/70 hover:text-[#F58A07] transition-colors">
                  <CiYoutube />
                </a>
              </div>
            </li>
            <li className="flex flex-col gap-4">
              <h4>Company</h4>
              <a href="#" className="text-white/70 hover:text-[#F58A07] transition-colors">About Us</a>
              <a href="#" className="text-white/70 hover:text-[#F58A07] transition-colors">Careers</a>
              <a href="#" className="text-white/70 hover:text-[#F58A07] transition-colors">Services</a>
              <a href="#" className="text-white/70 hover:text-[#F58A07] transition-colors">Blog</a>
            </li>
            <li className="flex flex-col gap-4">
              <h4 className="font-bold text-lg mb-2">Connect</h4>
              <a href="mailto:hi@finsweet.com" className="text-white/70 hover:text-[#F58A07] transition-colors">hi@finsweet.com</a>
              <a href="tel:+1234567890" className="text-white/70 hover:text-[#F58A07] transition-colors">+(123) 456-7890</a>
            </li>
            <li className="flex flex-col gap-4 w-full md:w-auto">
              <h4 className="font-bold text-lg mb-2">Join Newsletter</h4>
              <div className="relative w-full md:w-[300px]">
                <input type="email" required placeholder="Your Email" id="email" className="w-full bg-white/10 border border-white/20 rounded-[30px] px-6 py-3 outline-none focus:border-[#F58A07] transition-all"/>
              </div>
              <button type="submit" className="bg-[#F58A07] hover:bg-[#e07d06] text-white font-bold py-3 px-8 rounded-[30px] transition-all duration-300 w-full md:w-max">Subscribe</button>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-white/60 text-sm gap-4">
            <p>© All rights reserved – Finsweet</p>
            <span className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
