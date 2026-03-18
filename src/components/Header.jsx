import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Recipes', path: '/recipe' },
    { name: 'Contact us', path: '/contact' }
  ];

  return (
    <section className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#fbfbfb] shadow-[0_2px_20px_rgba(0,0,0,0.1)]' : 'bg-transparent'}`}>
      <div className="w-full max-w-[1200px] px-5 mx-auto">
        <div className="flex flex-wrap gap-8">
          <div className="flex-1">
            <div className="flex justify-between items-center relative py-2">
              <div className="cursor-pointer">
                <Link to="/">
                  <img src="/images/triptiLogo.png" alt="logo" className="w-[100px] h-auto object-contain py-2" />
                </Link>
              </div>
              <div className="flex flex-col p-2 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110" onClick={toggleMenu}>
                <div className="w-[25px] h-[3px] bg-[#333] my-[3px] rounded-[2px] transition-all duration-300"></div>
                <div className="w-[25px] h-[3px] bg-[#333] my-[3px] rounded-[2px] transition-all duration-300"></div>
                <div className="w-[25px] h-[3px] bg-[#333] my-[3px] rounded-[2px] transition-all duration-300"></div>
              </div>
            </div>

            <div
              className={`fixed z-[999] top-0 left-0 w-full h-screen bg-brand-yellow md:h-[100vh] flex flex-col justify-center items-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
              onClick={(e) => {
                if (e.target === e.currentTarget) toggleMenu();
              }}
            >
              <button
                className={`absolute top-8 right-8 bg-transparent border-none text-black text-4xl cursor-pointer transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 delay-300' : 'opacity-0'}`}
                onClick={toggleMenu}
              >
                ✕
              </button>
              <div className="text-center pt-20">
                <ul className="list-none">
                  {navLinks.map((item, idx) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className={`group/link relative block my-8 text-black font-primary font-semibold text-3xl leading-[1.6em] transition-all duration-300 hover:-translate-y-1 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: `${isMenuOpen ? 0.3 + (idx * 0.1) : 0}s` }}
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white -translate-x-1/2 transition-all duration-300 group-hover/link:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
