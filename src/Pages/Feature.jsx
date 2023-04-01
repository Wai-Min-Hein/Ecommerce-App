import { useContext } from "react";
import { StateContext } from "../service/content/Context";

import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import FeatureCart from "../components/FeatureCart";
import moment from "moment/moment";

const Feature = () => {

  const{featureRef} = useContext(StateContext)
  const { manWatches, womanWatches } = useContext(StateContext);

  

  const featureProducts = manWatches &&
    womanWatches && [...manWatches, ...womanWatches];








  return (
    <div ref={featureRef} className="pt-[8rem] ">
      <div className="lg:px-2 xl:px-28 md:px-15 px-5 text-head text-xl font-head font-[500]">
      <div className="flex justify-between items-center">
        <h1 className="text-head text-2xl font-head font-[700]">
          Featured Products
        </h1>
        <div className="flex gap-5">
          <div className="feature-prev bg-btn p-2 cursor-pointer hover:translate-y-[-4px] active:translate-y-[-1px] duration-200 text-para rounded-full">
            <FiArrowLeft />
          </div>
          <div className="feature-next bg-btn p-2 text-para hover:translate-y-[-4px] active:translate-y-[-1px] duration-200 cursor-pointer rounded-full text-lg">
            <FiArrowRight />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-center mt-16 pb-6">
        <Swiper
          cssMode={true}
          speed={1000}
          navigation={{
            nextEl: ".feature-next",
            prevEl: ".feature-prev",
          }}
          // pagination={true}
          mousewheel={true}
          // keyboard={true}

          spaceBetween={50}
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
          // slidesPerView={3}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          // className="mySwiper"
        >
          {featureProducts?.map((featureProduct) => (
            <SwiperSlide className="pb-5" key={featureProduct.id}>
              <FeatureCart featureProduct={featureProduct} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default Feature;
