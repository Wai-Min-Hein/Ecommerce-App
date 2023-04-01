import moment from "moment";
import React, { useRef, useState, useEffect, useContext } from "react";
import "../../img/bg.png";
import DealProducts from "../components/DealProducts";
import { StateContext } from "../service/content/Context";

import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Deal = () => {

  const {dealRef} = useContext(StateContext)
  const [time, setTime] = useState(moment().format("LTS"));
  const interval = setInterval(() => {
    setTime(moment().format("LTS"));
  }, 1000);

  const { lightings, motorcycles } = useContext(StateContext);
  const detailProducts = lightings &&
    motorcycles && [...lightings, ...motorcycles];


  return (
    <div ref={dealRef} className="pt-[10rem]">

<div className="bg-[url('/img/bg.png')] rounded-lg sm:flex flex-wrap justify-between items-center ">
      <div className="text-white basis-[30%] lg:basis-[27%] xl:basis-[20%] text-center">
        <h1 className="font-head text-4xl font-[900]">Deals of <br /> the day</h1>
        <p className="text-lg font-para mt-2">{time}</p>
      </div>



      <div className="basis-[70%] sm:basis-[60%] md:basis-[50%] lg:basis-[73%] xl:basis-[80%] mx-auto w-[80%] sm:w-[40%] lg:w-[70%] px-4 relative">
        <div className="detail-prev bg-btn p-2 cursor-pointer text-para active:scale-75 duration-200 rounded-full text-xl absolute left-0 lg:left-1 top-[50%] z-10">
          <FiArrowLeft />
        </div>
        <div className="detail-next bg-btn p-2 text-para  active:scale-75 duration-200 rounded-full text-xl absolute  right-2 top-[50%] z-10">
          <FiArrowRight />
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-center lg:px-15 py-8 mx-auto">
          <Swiper
            // cssMode={true}
            navigation={{
              nextEl: ".detail-next",
              prevEl: ".detail-prev",
            }}
            mousewheel={true}
            keyboard={true}
            spaceBetween={50}
            breakpoints={{
              // when window width is >= 640px
              // 640: {
              //   slidesPerView: 1,
              // },
              // when window width is >= 768px
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
              
            }}
            // slidesPerView={3}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            // className="mySwiper"
          >
            {detailProducts?.map((deal) => (
              <SwiperSlide className="pb-5" key={deal.id}>
                <DealProducts deal={deal} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Deal;
