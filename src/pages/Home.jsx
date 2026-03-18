import React from 'react';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <section className="relative w-full h-[100vh] flex justify-center items-center overflow-hidden text-center text-black">
        <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10">
          <source src="/images/vBg.mp4" type="video/mp4" />
        </video>
        <div className="w-full">
          <div className="w-full max-w-[1200px] mx-auto px-5">
            <div className="flex flex-wrap gap-8">
              <div className="flex-1">
                <div>
                  <h1 className="text-6xl font-bold">Love Every Bite!</h1>
                  <h3 className="py-8 text-2xl font-sm">Whatever your joy looks like, you’ll find it here.</h3>
                  <button className="inline-block min-w-[200px] h-auto border-none rounded-[40px] py-[20px] px-[18px] text-white bg-brand-red font-txt text-base tracking-[4px] cursor-pointer hover:shadow-[0_0_0_2px_#f03737_inset] hover:bg-white hover:text-black transition-all">
                    Who We Are
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[75px]">
        <div className="w-full max-w-[1200px] mx-auto px-5">
          <div className="flex flex-wrap gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                Great value. Great taste.
                <span className="block py-[20px]">
                  That's what <span className="text-brand-red text-[40px]">Tripti</span> is all about.
                </span>
              </h2>

              <p className="text-sm font-semibold leading-[35px]">
                If you’re looking for the tastiest, smokiest, saltiest, meatiest,
                most succulent pack on the shelf, at a price that won’t break the
                bank, Grandpa’s is for you. Our range turns everyday meals into
                winners. Proudly made right here in New Zealand and crafted using
                that ol’ time-honoured recipe. From our food-loving, fun-loving
                family to yours – we promise, you’ll love every bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-yellow mt-[70px] py-[40px] md:py-[75px]">
        <div className="w-full">
          <div className="w-full max-w-[1200px] mx-auto px-5">
            <div className="flex flex-wrap gap-8">
              <div className="flex-1">
                <div className="relative flex justify-center h-[100px] md:h-0">
                  <img className="absolute -translate-x-[59px] md:-translate-x-[140px] -translate-y-[103px] md:-translate-y-[184px] w-[200px] md:w-[250px] auto" src="/images/funkylogo.png" alt="" />
                  <img className="absolute translate-x-[101px] md:translate-x-[40px] -translate-y-[139px] md:-translate-y-[180px] w-[150px] md:w-[220px] h-auto" src="/images/chefMan.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[75px]">
        <div className="w-full max-w-[1200px] mx-auto px-5">
          <div className="flex flex-wrap gap-8">
            <div className="flex-1">
              <div className="flex gap-4 items-center mb-4">
                <h2 className="text-3xl font-bold">It all began with bacon.</h2>
                <img className="w-[100px] h-auto cursor-pointer animate-float" src="/images/baconbg.png" alt="food1" />
              </div>

              <p className="text-sm font-semibold leading-[35px] py-[20px]">
                It all began with bacon — a simple craving that sparked a flavorful journey.
                From humble beginnings to a beloved eatery, Tripti Dhaba was born out of a passion for bold tastes and heartfelt cooking.
              </p>

              <button className="inline-block min-w-[200px] h-auto border-none rounded-[40px] py-[20px] px-[18px] text-white bg-brand-red font-txt text-base tracking-[4px] cursor-pointer hover:shadow-[0_0_0_2px_#f03737_inset] hover:bg-white hover:text-black transition-all">
                Find Out More
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-brand-yellow w-full py-[40px] md:py-[75px]">
        <div className="w-full">
          <div className="w-full max-w-[1200px] mx-auto px-5">
            <div className="flex flex-wrap gap-8">
              <div className="flex-1">
                <div className="flex flex-col items-center justify-center relative">
                  <h2 className="text-3xl font-bold text-center">Dig In!</h2>
                  <p className="text-sm font-semibold leading-[35px] py-[30px] text-center max-w-[600px]">
                    Check out Tripti's primo selection, sure to bring a smile &
                    satisfy the taste & budget.
                  </p>
                  <button className="inline-block min-w-[200px] h-auto border-none rounded-[40px] py-[20px] px-[18px] text-white bg-brand-red font-txt text-base tracking-[4px] cursor-pointer hover:shadow-[0_0_0_2px_#f03737_inset] hover:bg-white hover:text-black transition-all mb-8 md:mb-0 relative z-10">
                    Know More!
                  </button>
                  <img className="hidden md:block absolute -right-[28px] -top-[151px] w-[350px]" src="/images/order2.webp" alt="orderImg" />
                  <img className="hidden md:block absolute -translate-x-[465px] translate-y-[48px] w-[250px]" src="/images/order4.webp" alt="orderimg" />
                  <img className="hidden md:block absolute translate-x-[243px] translate-y-[96px] w-[280px]" src="/images/orderimg1.webp" alt="orderimg" />
                  <img className="hidden md:block absolute -translate-x-[234px] -translate-y-[98px] w-[130px]" src="/images/ch.png" alt="orderimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Slider />

      <section className="py-[40px] md:py-[75px]">
        <div className="w-full max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-5">
            <h1 className="text-3xl font-bold">Let's Eat</h1>
            <p className="text-sm font-semibold leading-[35px]">
              Check out Tripti's primo selection, sure to bring a smile & satisfy
              the taste & budget.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 w-full">
              <div className="mt-5">
                <div className="py-5">
                  <h2 className="text-3xl font-bold">Bacon</h2>
                  <p className="text-sm font-semibold leading-[35px]">
                    Streaky, Middle and Middle Eye bacon in big packs for big
                    appetites. Bring it on.
                  </p>
                </div>

                <div className="py-5">
                  <h2 className="text-3xl font-bold">Chicken</h2>
                  <p className="text-sm font-semibold leading-[35px]">Tender, tasty smoked chicken, & cluck-loads of it.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="mt-5">
                <div className="py-5">
                  <h2 className="text-3xl font-bold">Momo</h2>
                  <p className="text-sm font-semibold leading-[35px]">
                    Soft, juicy momos bursting with flavorful fillings, serve hot with spicy chutney
                  </p>
                </div>

                <div className="py-5">
                  <h2 className="text-3xl font-bold">Tandoor Chicken</h2>
                  <p className="text-sm font-semibold leading-[35px]">Tender, tasty smoked chicken, & cluck-loads of it.</p>
                </div>
              </div>
            </div>
          </div>
          <button className="block min-w-[200px] h-auto border-none rounded-[40px] py-[20px] px-[18px] text-black bg-brand-yellow font-txt text-base tracking-[4px] cursor-pointer hover:shadow-[0_0_0_2px_#ffcc05_inset] hover:bg-white hover:scale-110 transition-all duration-200 mt-5 mx-auto text-center">
            Find more about our products
          </button>
        </div>
      </section>

      <section className="bg-brand-yellow relative py-[80px] px-[5%] pb-[140px] bg-[url('/images/curve.png')] bg-no-repeat bg-[center_bottom] bg-[100%]">
        <div className="w-full">
          <div className="w-full max-w-[1200px] mx-auto px-5">
            <div className="flex flex-wrap gap-8">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-around items-center flex-wrap">
                  <h2 className="text-3xl font-bold mb-5 md:mb-0">Hungry tell it to Tripti !</h2>
                  <button className="inline-block min-w-[200px] h-auto border-none rounded-[40px] py-[20px] px-[18px] text-white bg-brand-red font-txt text-base tracking-[4px] cursor-pointer hover:shadow-[0_0_0_2px_#f03737_inset] hover:bg-white hover:text-black transition-all">
                    See Our Recipes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
