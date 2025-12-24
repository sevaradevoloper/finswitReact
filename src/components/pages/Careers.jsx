import React from "react";
import CareersImg from "../pages/image/careers.svg";

const Careers = () => {
  return (
    <section
      className="bg-[#E7F0F9] min-h-[80vh] flex items-center pt-20 overflow-hidden pb-20"
      id="careers"
    >
      <div className="container mx-3 px-5 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 z-10">
            <h1 className="text-[#1D2130] text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6 font-poppins">
              We hired people who are very passionate about what they do
            </h1>

            <p className="text-[#5B5B5B] text-lg lg:text-[18px] leading-[30px] mb-8 max-w-[570px] font-poppins">
              Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-12">
              <button className="bg-[#F58A07] hover:bg-[#e07d06] text-white px-8 py-4 rounded-[30px] font-bold shadow-[0_10px_5px_-4px_rgba(0,0,0,1)] hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.5)] active:bg-white/30 active:backdrop-blur-md active:text-[#F58A07] active:border active:border-white/20 transition-all duration-300">
                View Positions
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute bottom-0 left-0 w-[30%] h-[100%] bg-[#F58A07]/70 rounded-tl-[20px] rounded-bl-[20px] z-11 opacity-90"></div>
            <img
              src={CareersImg}
              alt="Professional Business Person"
              className="relative z-10 w-full h-auto object-cover rounded-b-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
