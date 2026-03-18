import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { recipeData } from '../constant/data';
import Card from './Card';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 w-full bg-white">
      <div className="max-w-[1160px] mx-auto px-5">

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold font-primary">Our Recipes</h2>
          <div className="hidden md:flex gap-4">
            <div ref={prevRef} className="border border-black w-12 h-12 rounded-full cursor-pointer hover:border-gray-400 flex items-center justify-center transition-colors">
              <i className="fa fa-arrow-left" />
            </div>
            <div ref={nextRef} className="border border-black w-12 h-12 rounded-full cursor-pointer hover:border-gray-400 flex items-center justify-center transition-colors">
              <i className="fa fa-arrow-right" />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 12 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="w-full overflow-hidden"
        >
          {recipeData.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Slider;