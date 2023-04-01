import React, { useContext, useRef } from "react";
import { RxDot } from "react-icons/rx";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import StateContextProvider, { StateContext } from "../service/content/Context";

import '../../node_modules/animate.css/animate.min.css'

const Home = () => {
  const { homeRef } = useContext(StateContext);
  return (
    <div ref={homeRef} className="pt-16">
      <div className="bg-bg-second w-full home-slider rounded-lg pb-10 relative">
        {
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".go-next",
              prevEl: ".go-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
            className="bg-slider"
            speed={1000}
          >
            <SwiperSlide>
              <div className=" flex md:justify-between md:items-center gap-5 md:gap-0 flex-col-reverse md:flex-row active:cursor-grab mt-12 px-16 home-slide rounded-lg">
                <div className="px-2 basis-[100%] md:basis-[60%] animate__animated animate__backInLeft">
                  <h4 className="font-head font-[600]  text-xl text-header">
                    Upgrade Your Productivity with Our High-Performance Laptop
                  </h4>
                  <p className="font-para font-[400] w-full md:w-10/12 text-lg text-para tracking-[1px] leading-7 my-5">
                    Experience top-notch performance and sleek design with our
                    powerful laptops. Shop now and stay ahead of the game!
                  </p>
                  <button className="bg-btn px-3 py-2 rounded-md text-btn-text text-lg">
                    Checkout
                  </button>
                </div>
                <div className="basis-[100%] md:basis-[40%] text-left animate__animated animate__backInRight">
                  <img
                    src="../img/laptop2.png"
                    className="w-full rounded-md"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex md:justify-between md:items-center gap-5 flex-col-reverse md:flex-row active:cursor-grab mt-12 px-16 rounded-lg">
                <div className="px-2 basis-[100%] md:basis-[60%] animate__animated animate__backInLeft">
                  <h4 className="font-head font-[600] text-xl text-header">
                    Upgrade to the Ultimate Phone Experience Today!
                  </h4>
                  <p className="font-para font-[400] w-full md:w-10/12 text-lg text-para tracking-[1px] leading-7 my-5">
                    Get the ultimate phone experience with our sleek and
                    powerful device. Enjoy stunning visuals, lightning-fast
                    performance, and all-day battery life. Upgrade to the best
                    phone today!
                  </p>
                  <button className="bg-btn px-3 py-2 rounded-md text-btn-text text-lg">
                    Checkout
                  </button>
                </div>
                <div className=" basis-[100%] md:basis-[40%] text-left animate__animated animate__backInRight">
                  <img
                    src="../img/phone3.jpg"
                    className="h-[20rem] mx-auto"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex md:justify-between md:items-center gap-5 flex-col-reverse md:flex-row active:cursor-grab mt-12 px-16 rounded-lg">
                <div className="px-2 basis-[100%] md:basis-[60%] animate__animated animate__backInLeft">
                  <h4 className="font-head font-[600] text-xl text-header">
                    Revamp Your Style with Our Premium Fabrics
                  </h4>
                  <p className="font-para font-[400] w-full md:w-10/12 text-lg text-para tracking-[1px] leading-7 my-5">
                    Upgrade your wardrobe with our premium quality fabrics.
                    Comfortable, stylish, and affordable clothing options
                    available. Shop now!
                  </p>
                  <button className="bg-btn px-3 py-2 rounded-md text-btn-text text-lg">
                    Checkout
                  </button>
                </div>
                <div className=" basis-[100%] md:basis-[40%] text-left animate__animated animate__backInRight">
                  <img
                    src="../img/clothe.jpg"
                    className="w-full rounded-md"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex md:justify-between md:items-center gap-5 flex-col-reverse md:flex-row active:cursor-grab mt-12 px-16 rounded-lg">
                <div className="px-2 basis-[100%] md:basis-[60%] animate__animated animate__backInLeft">
                  <h4 className="font-head font-[600] text-xl text-header">
                    Step Up Your Style and Comfort with Premium Shoes
                  </h4>
                  <p className="font-para font-[400] w-full md:w-10/12 text-lg text-para tracking-[1px] leading-7 my-5">
                    Elevate your style and comfort with our premium shoes.
                    Crafted with the finest materials, our shoes provide the
                    perfect blend of functionality and fashion.
                  </p>
                  <button className="bg-btn px-3 py-2 rounded-md text-btn-text text-lg">
                    Checkout
                  </button>
                </div>
                <div className=" basis-[100%] md:basis-[40%] text-left animate__animated animate__backInRight">
                  <img
                    src="../img/shoe.jpg"
                    className="w-full object-contain h-[25rem] rounded-lg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        }

        <div className="slider-btn">
          <div className="go-prev bg-btn p-2 cursor-pointer text-para active:scale-75 duration-200 rounded-full text-xl absolute left-0 top-[50%] z-10">
            <FiArrowLeft />
          </div>
          <div className="go-next bg-btn p-2 text-para  active:scale-75 duration-200 rounded-full text-xl absolute right-0 top-[50%] z-10">
            <FiArrowRight />
          </div>
        </div>
        <div className="swiper-pagination z-20 !mb-0">
          <RxDot />
        </div>
      </div>
    </div>
  );
};

export default Home;
