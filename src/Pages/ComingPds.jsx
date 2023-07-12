import React, { useContext } from "react";
import { StateContext } from "../service/content/Context";
import gaming from '../../img/gaming3.png'
import shoe from '../../img/shoe2.png'
import phone from '../../img/phone3.png'

const ComingPds = () => {
  const { comingRef } = useContext(StateContext);

  
  return (
    <div ref={comingRef} className="pt-[9rem]">
      <div className="flex flex-wrap mb-8 gap-14 rounded-md justify-center items-center">
        <div className="bg-bg-second shadow-xl basis-[65%] md:basis-[50%] lg:basis-[24%] h-[12rem] md:h-[14rem] rounded-lg">
          <img src="../../img/logo.png" className="h-[5rem] mx-auto" alt="" />
          <h4 className="font-head font-[700] text-lg text-center">
            Gaming Concole
          </h4>
          <img
            src={gaming}
            className="w-[12rem] translate-x-[-3rem] drop-shadow-[10px_15px_5px_rgba(0,0,0,0.5)]"
            alt=""
          />
        </div>

        <div className="bg-bg-second shadow-xl basis-[65%] md:basis-[50%] lg:basis-[24%] h-[14rem] rounded-lg flex items-center">
          <h4 className="font-head font-[700] text-lg basis-[60%] text-center">
            Running Shoe
          </h4>
          <img
            src={shoe}
            className="w-[10rem] translate-x-[2rem] rotate-[24deg]"
            alt=""
          />
        </div>

        <div className="bg-bg-second px-4 shadow-xl basis-[65%] md:basis-[50%] lg:basis-[25%] h-[14rem] flex flex-wrap rounded-lg items-center justify-between font-para ">
          <div className="">
            <p className="text-md ">Best Selling</p>
            <h5 className="text-lg font-[700] my-1">Samsung S23 Ultra</h5>
            <p className="text-md font-[700] mb-1">Price: $ 1299</p>
            <button className="bg-icon rounded-md px-3 py-1 text-white">
              Buy Now
            </button>
          </div>
          <img src={phone} className="h-[8rem]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ComingPds;
