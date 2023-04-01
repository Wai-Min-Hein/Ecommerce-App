import { useContext } from "react";
import PopularCart from "../components/PopularCart";
import { StateContext } from "../service/content/Context";

import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// import required modules

const Popular = () => {
  const { popularRef } = useContext(StateContext);
  const { laptops } = useContext(StateContext);

  return (
    <div ref={popularRef} className="pt-[8rem] ">
      <div className="lg:px-2 xl:px-28 md:px-15 px-5 text-head text-xl font-head font-[500]">
        <div className="flex justify-between items-center">
          <h1 className="text-head text-2xl font-head font-[700]">
            Popular Products
          </h1>
          <div className="flex gap-3">
            <div className="product-prev bg-btn p-2 text-para rounded-full hover:translate-y-[-4px] active:translate-y-[-1px] duration-200 cursor-pointer">
              <FiArrowLeft />
            </div>
            <div className="product-next bg-btn p-2 text-para rounded-full text-lg hover:translate-y-[-4px] active:translate-y-[-1px] duration-200 cursor-pointer">
              <FiArrowRight />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-6 justify-center items-center mt-16 pb-6">
          <Swiper
            // cssMode={true}
            navigation={{
              prevEl: ".product-prev",
              nextEl: ".product-next",
            }}
            // pagination={true}
            mousewheel={true}
            keyboard={true}
            spaceBetween={50}
            // slidesPerView={3}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {laptops?.map((laptop) => (
              <SwiperSlide className="pb-5" key={laptop.id}>
                <PopularCart laptop={laptop} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Popular;
