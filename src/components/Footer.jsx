import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="py-[75px] bg-brand-white w-full">
      <div className="w-full max-w-[1200px] px-5 mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1 w-full md:w-auto">
            <div className="mb-4">
              <img src="/images/triptiLogo.png" alt="logo" className="w-[150px] h-auto" />
            </div>
            <div className="flex items-center gap-8 mt-6">
              <a href="https://youtu.be/rnj9kqZVQi0?feature=shared" target="_blank" rel="noopener noreferrer" className="text-brand-emoji text-3xl hover:text-brand-yellow transition-colors">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://youtu.be/rnj9kqZVQi0?feature=shared" target="_blank" rel="noopener noreferrer" className="text-brand-emoji text-3xl hover:text-brand-yellow transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://youtu.be/rnj9kqZVQi0?feature=shared" target="_blank" rel="noopener noreferrer" className="text-brand-emoji text-3xl hover:text-brand-yellow transition-colors">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="flex-1 w-full md:w-auto mt-6 md:mt-0">
            <div>
              <h3 className="font-primary text-3xl font-bold mb-4">Mama's Kitchen</h3>
              <ul className="list-none space-y-4">
                <li><Link to="/" className="text-[18px] text-black hover:text-brand-red transition-colors no-underline">Home</Link></li>
                <li><Link to="/about" className="text-[18px] text-black hover:text-brand-red transition-colors no-underline">About us</Link></li>
                <li><Link to="/contact" className="text-[18px] text-black hover:text-brand-red transition-colors no-underline">Contact us</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex-1 w-full md:w-auto mt-6 md:mt-0">
            <div>
              <h3 className="font-primary text-3xl font-bold mb-4">Get In Touch</h3>
              <ul className="list-none space-y-4">
                <li className="flex gap-4 items-center text-[18px]">
                  <i className="fa-solid fa-location-dot text-brand-emoji"></i> Ambiok Busty, Gorubathan
                </li>
                <li className="flex gap-4 items-center text-[18px]">
                  <i className="fa-solid fa-phone text-brand-emoji"></i> 6296065509
                </li>
                <li className="flex gap-4 items-center text-[18px]">
                  <i className="fa-solid fa-envelope text-brand-emoji"></i> tripti@gmail.com
                </li>
                <li className="flex gap-4 items-center text-[18px]">
                  <i className="fa-solid fa-clock text-brand-emoji"></i> 24/7 11:00 am - 11:00 pm
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <div className="flex-1 w-full">
            <div className="pt-6 relative text-center border-t border-black pb-10">
              <p className="text-sm font-semibold leading-[35px] text-gray-500 font-secondary tracking-wide">
                &copy; {new Date().getFullYear()} Tripti Dhaba. Love Every Bite. All rights reserved.
              </p>
              <img src="/images/love.png" alt="love" className="absolute right-0 bottom-6 w-[80px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
