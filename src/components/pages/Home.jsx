import React from 'react'
import Hero from '../pages/image/hero.svg'
import Logo1 from '../pages/image/Logo1.svg'
import Logo2 from '../pages/image/Logo2.svg'
import Logo3 from '../pages/image/Logo3.svg'
const Home = () => {
  return (
    <section className="bg-[#E7F0F9] min-h-[80vh] flex items-center pt-20 overflow-hidden pb-20" id='/'>
      <div className="container mx-3 px-5 lg:px-20">
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
              <button className="bg-[#F58A07] hover:bg-[#e07d06] text-white px-8 py-4 rounded-[30px] font-bold transition-all">
                See Our Services
              </button>
              <a href="#" className="text-[#1D2130] font-bold border-b-2 border-transparent hover:border-[#1D2130] transition-all">
                See All Services
              </a>
            </div>
            <div className="pt-8">
              <p className="text-[#5B5B5B] text-sm mb-6 uppercase tracking-wider font-medium">Worked with 100+ Companies</p>
              <div className="flex items-center gap-8 grayscale opacity-60">
                <img src={Logo1} alt="logo" className="h-6" />
                <img src={Logo2} alt="logo" className="h-6" />
                <img src={Logo3} alt="logo" className="h-6" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute bottom-0 left-0 w-[80%] h-[70%] bg-[#F58A07] rounded-tl-[100px] -z-0"></div>
            <img src={Hero} alt="Professional Business Person" className="relative z-10 w-full h-auto object-cover rounded-b-[20px]"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home