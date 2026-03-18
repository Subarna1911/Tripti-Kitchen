import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('modalShown')) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('modalShown', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 w-full h-full flex items-center justify-center bg-black/30 z-[9999] pointer-events-auto" id="customModal">
      <div className="container mx-auto px-5 w-full">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-8 bg-white rounded-[20px] justify-center w-full md:w-[80%] lg:w-[60%] mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative max-h-[80vh] overflow-hidden">
            <button 
              className="absolute top-3 right-3 bg-brand-red rounded-full w-[38px] h-[35px] border-none text-white text-base z-10 hover:opacity-90 transition-opacity" 
              id="closeBtn" 
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
            
            <div className="flex flex-col justify-center py-10 px-8 flex-1 overflow-y-auto">
              <h2 className="text-3xl font-bold font-primary mb-4">Welcome to Tripti!</h2>
              <p className="font-secondary text-sm font-semibold leading-[35px] text-gray-700">
                Enjoy <strong className="font-bold">10% off your first order</strong> – just for dropping by.
              </p>
              <div className="w-full my-5">
                <input 
                  type="email" 
                  placeholder="Enter your email for the offer" 
                  className="p-3 w-full border border-[#dcd7d7] rounded-[10px] outline-none focus:border-brand-yellow transition-colors"
                />
              </div>
              <button className="min-w-[200px] rounded-[40px] py-4 px-5 text-white bg-brand-red font-txt text-base tracking-[4px] border-2 border-transparent hover:bg-white hover:text-black hover:border-brand-red transition-all mt-4 self-start cursor-pointer">
                Claim Offer
              </button>
            </div>

            <div className="hidden md:block flex-1 flex">
              <div className="w-full h-full">
                <img src="/images/chefMan.png" alt="modalImg" className="w-[120%] h-full object-cover min-h-[50vh] ml-auto mix-blend-multiply bg-[#f8f6f6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
