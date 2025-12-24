import React from "react";
import Hero from "../pages/image/hero.svg";
import Logo1 from "../pages/image/Logo1.svg";
import Logo2 from "../pages/image/Logo2.svg";
import Logo3 from "../pages/image/Logo3.svg";
const Home = () => {
  return (
    <section
      className="bg-[#E7F0F9] min-h-[80vh] flex items-center pt-20 overflow-hidden pb-20"
      id="/"
    >
      <div className="container mx-3 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 z-10">
            <h1 className="text-[#1D2130] text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6 font-poppins">
              Prosper with our bespoke solutions
            </h1>

            <p className="text-[#5B5B5B] text-lg lg:text-[18px] leading-[30px] mb-8 max-w-[570px] font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-12">
              <button className="bg-[#F58A07] hover:bg-[#e07d06] text-white px-8 py-4 rounded-[30px] font-bold shadow-[0_10px_5px_-4px_rgba(0,0,0,1)] hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.5)] active:bg-white/30 active:backdrop-blur-md active:text-[#F58A07] active:border active:border-white/20 transition-all duration-300">
                See Our Services
              </button>
              <a
                href="#"
                className="inline-block bg-transparent text-[#1D2130] px-8 py-4 rounded-[30px] font-bold border border-gray-500 shadow-[0_10px_5px_-4px_rgba(224,125,6,1)] hover:shadow-[0_15px_30px_rgba(224,125,6,0.5)] hover:text-[#e07d06] hover:border-[#e07d06] transition-all duration-300"
              >
                See All Services
              </a>
            </div>
            <div className="pt-8">
              <p className="text-[#5B5B5B] text-sm mb-6 uppercase tracking-wider font-medium">
                Worked with 100+ Companies
              </p>

              <marquee
                behavior="scroll"
                direction="left"
                className="grayscale opacity-90"
              >
                <div className="flex items-center gap-12">
                 
                  <img src={Logo1} alt="logo" className="h-6 mx-6" />
                  <img src={Logo2} alt="logo" className="h-6 mx-6" />
                  <img src={Logo3} alt="logo" className="h-6 mx-6" />
                  <img src={Logo1} alt="logo" className="h-6 mx-6" />
                  <img src={Logo2} alt="logo" className="h-6 mx-6" />
                  <img src={Logo3} alt="logo" className="h-6 mx-6" />
                </div>
              </marquee>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute bottom-0 left-80 w-[30%] h-[45%] bg-[#F58A07]/95 rounded-tl-[20px] rounded-tr-[20px] -z-0"></div>
            <div className="absolute bottom-0 left-20 w-[30%] h-[70%] bg-[#F58A07]/60 rounded-tl-[20px] rounded-tr-[20px] z-15"></div>
            <img
              src={Hero}
              alt="Professional Business Person"
              className="relative z-10 w-100% h-120 object-cover rounded-b-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
