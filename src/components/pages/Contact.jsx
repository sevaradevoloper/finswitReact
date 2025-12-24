import React from "react";

const Contact = () => {
  return (
    <section
      className="bg-[#E7F0F9] min-h-screen flex items-center pt-20 overflow-hidden pb-20 font-poppins"
      id="/contact"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          
          <div className="w-full lg:w-1/2 z-10">
            <h4 className="text-[#1D2130] text-[15px] lg:text-[45px] font-bold leading-[1] mb-6">
              Have a question? Let’s get in touch with us.
            </h4>

            <p className="text-[#5B5B5B] text-l leading-[25px] mb-10 max-w-[500px]">
              Fill up the Form and our team will get back to you within 24 hrs.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col border-b border-[#1d213033] focus-within:border-[#e07d06] transition-all duration-300">
                <label className="text-xs font-semibold text-[#1D2130] uppercase opacity-60">First Name</label>
                <input type="text" required placeholder="John" className="bg-transparent py-3 outline-none text-[#1D2130] placeholder:text-gray-400" />
              </div>
              
              <div className="flex flex-col border-b border-[#1d213033] focus-within:border-[#e07d06] transition-all duration-300">
                <label className="text-xs font-semibold text-[#1D2130] uppercase opacity-60">Last Name</label>
                <input type="text" required placeholder="Doe" className="bg-transparent py-3 outline-none text-[#1D2130] placeholder:text-gray-400" />
              </div>

              <div className="md:col-span-2 flex flex-col border-b border-[#1d213033] focus-within:border-[#e07d06] transition-all duration-300">
                <label className="text-xs font-semibold text-[#1D2130] uppercase opacity-60">Email Address</label>
                <input type="email" required placeholder="johndoe@gmail.com" className="bg-transparent py-3 outline-none text-[#1D2130] placeholder:text-gray-400" />
              </div>

              <div className="md:col-span-2 flex flex-col border-b border-[#1d213033] focus-within:border-[#e07d06] transition-all duration-300">
                <label className="text-xs font-semibold text-[#1D2130] uppercase opacity-60">Message</label>
                <textarea placeholder="Type message" required rows="3" className="bg-transparent py-3 outline-none text-[#1D2130] placeholder:text-gray-400 resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                className="md:col-span-2 bg-[#1D2130] text-white py-4 px-10 rounded-lg font-bold hover:bg-[#e07d06] transition-all duration-300 active:scale-95 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
              <div className="flex flex-col">
                <h4 className="text-[#1D2130] font-bold text-xl mb-3">Location</h4>
                <p className="text-[#5B5B5B] leading-relaxed max-w-[200px]">
                  DLF Cybercity, Bhubaneswar, India, 752050
                </p>
              </div>
              
              <div className="flex flex-col">
                <h4 className="text-[#1D2130] font-bold text-xl mb-3">Contact Us</h4>
                <a href="mailto:hi@finsweet.com" className="text-[#5B5B5B] hover:text-[#e07d06] transition-colors">hi@finsweet.com</a>
                <a href="tel:02079932905" className="text-[#5B5B5B] hover:text-[#e07d06] transition-colors mt-1">020 7993 2905</a>
              </div>
            </div>

            <div className="w-full h-[370px] lg:w-[620px] rounded-[20px] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.126488349275!2d85.8164010759367!3d20.33642398114407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909197c8f2581%3A0x67d307137f68c374!2sDLF%20Cyber%20City!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;