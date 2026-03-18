import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="group flex flex-col items-center bg-white w-full max-w-[280px] py-5 px-0 rounded-[10px] border border-gray-100 shadow-[10px_10px_30px_rgba(0,0,0,0.1)] text-center cursor-pointer hover:bg-brand-yellow hover:text-white transition-colors duration-300 mx-auto mt-[60px] relative h-full">
      <img className="max-w-[150px] h-[150px] object-contain -mt-[94px] mb-5 relative z-10 transition-transform duration-300 group-hover:scale-110" src={item.img} alt={item.title} />
      <h3 className="font-primary text-3xl font-bold mb-2">{item.title}</h3>
      <p className="font-secondary text-sm font-semibold py-[10px] px-4 leading-[25px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
      <div className="mt-auto flex flex-col w-full">
        <div className="flex justify-between gap-8 border-t border-b border-[#ececec] py-1 my-2 px-5 w-[90%] mx-auto transition-colors duration-300 relative z-10">
          <p className="text-[#d0cfcf] text-sm font-semibold leading-[35px] group-hover:text-white transition-colors">60 calories</p>
          <p className="text-[#d0cfcf] text-sm font-semibold leading-[35px] group-hover:text-white transition-colors">4 persons</p>
        </div>
        <div className="flex justify-between items-center gap-10 my-2 px-6 w-full">
          <span className="text-base font-semibold">{item.price}</span>
          <i className="bg-brand-yellow text-white py-2 px-4 rounded-[5px] font-semibold text-center cursor-pointer group-hover:bg-white group-hover:text-brand-yellow transition-colors duration-300 shadow-md">
            +
          </i>
        </div>
      </div>
    </div>
  );
};

export default Card;
