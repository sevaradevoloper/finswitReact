import React from 'react'

const About = () => {
  return (
    <section className="bg-white pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <h5 className="text-[#1D2130] font-medium mb-4">About Us</h5>
            <h1 className="text-[#1D2130] text-4xl lg:text-[54px] font-bold leading-[1.2] mb-8">
              We value human, organizational, and operational intelligence, not just artificial
            </h1>
            <p className="text-[#5B5B5B] text-lg leading-relaxed mb-8 max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
            </p>
            <button className="bg-[#F58A07] hover:bg-[#e07d06] text-white px-8 py-4 rounded-[30px] font-bold transition-all">
              Work With Us
            </button>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-0 left-0 w-[80%] h-[90%] bg-[#F58A07] rounded-[20px] -z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
              alt="About Us Professional" 
              className="relative z-10 w-full h-auto object-cover rounded-[20px] ml-10 mt-10 shadow-xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 border-t border-gray-100">
          <div>
            <h2 className="text-[#1D2130] text-3xl font-bold mb-6">The energy of a start-up combined with 30 years of experience</h2>
          </div>
          <div>
            <p className="text-[#5B5B5B] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-16 gap-10">
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-[#F58A07] mb-2">15+</span>
            <p className="text-[#1D2130] font-medium text-sm uppercase">Awards received</p>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-[#F58A07] mb-2">10+</span>
            <p className="text-[#1D2130] font-medium text-sm uppercase">Clients served</p>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-[#F58A07] mb-2">30+</span>
            <p className="text-[#1D2130] font-medium text-sm uppercase">Employees</p>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-[#F58A07] mb-2">100+</span>
            <p className="text-[#1D2130] font-medium text-sm uppercase">Custom solutions</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About