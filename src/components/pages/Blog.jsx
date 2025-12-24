import React from "react";
import Blogs from "../pages/image/blog1.svg";
import Blogs2 from "../pages/image/blog2.svg";
import { GrLinkNext } from "react-icons/gr";
const Blog = () => {
  return (
    <section
      className="bg-[#E7F0F9] min-h-[80vh] flex items-center pt-20 overflow-hidden pb-20"
      id="/blogs"
    >
      <div className="container mx-3 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 z-10">
            <div className="boxcha flex  items-center">
              <img src={Blogs} alt="" className="mr-10" />
              <p className="text-[#1D2130]/50 mr-5 text-2l lg:text-[14px]  leading-[1.1] font-poppins">
                Andrew Jonson
              </p>
              <p className="text-[#1D2130]/50 text-2l lg:text-[14px]  leading-[1.1] font-poppins">
                Posted on 27th January 2021
              </p>
            </div>
            <h1 className="text-[#1D2130] text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6 font-poppins">
              Our internal process and longerm vision
            </h1>

            <p className="text-[#5B5B5B] text-lg lg:text-[18px] leading-[30px] mb-8 max-w-[570px] font-poppins">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized. We aim to attain the
            </p>
            <button
              className="flex items-center gap-x-2 bg-transparent text-[#e07d06] px-8 py-4 font-bold 
                   transition-all duration-300 ease-in-out group
                   /* Hover effektlari */
                   hover:brightness-125 hover:translate-x-2 
                   underline decoration-transparent hover:decoration-[#e07d06] underline-offset-8"
            >
              Read More
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                <GrLinkNext />
              </span>
            </button>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <img
              src={Blogs2}
              alt="Professional Business Person"
              className="relative z-10  w-auto h-100 object-cover rounded-[20px] w-64 h-80 object-cover rounded-xl cursor-pointer  transition-all duration-500 ease-in-out hover:-translate-y-6 hover:opacity-75 hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
