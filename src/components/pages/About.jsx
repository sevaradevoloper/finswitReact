import React from 'react'
import AboutImg from '../pages/image/about.svg'

const About = () => {
  return (
     <section className="bg-[#E7F0F9] min-h-[80vh] flex items-center pt-20 overflow-hidden pb-20" id='about'>
          <div className="container mx-3 px-5 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="w-full lg:w-1/2 z-10">
                <h1 className="text-[#1D2130] text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6 font-poppins">
                  We value human, organizational, and operational intelligence, not just artificial
                </h1>
                
                <p className="text-[#5B5B5B] text-lg lg:text-[18px] leading-[30px] mb-8 max-w-[570px] font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse varius enim in eros elementum tristique.
                </p>
    
                <div className="flex flex-wrap items-center gap-8 mb-12">
                  <button className="bg-[#F58A07] hover:bg-[#e07d06] text-white px-8 py-4 rounded-[30px] font-bold transition-all">
                    Work with us
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute bottom-0 left-0 w-[30%] h-[100%] bg-[#F58A07] rounded-tr-[100px] z-11 opacity-90"></div>
                <img src={AboutImg} alt="Professional Business Person" className="relative z-10 w-full h-auto object-cover rounded-b-[20px]"/>
              </div>
            </div>
          </div>
        </section>
  )
}

export default About