import React, { useContext } from "react";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { StateContext } from "../service/content/Context";

const Footer = () => {
  const {footerRef} = useContext(StateContext)
  return (
    <footer ref={footerRef} className="pt-[6rem] pb-[2rem]">
      <div class=" xl:flex">
        <div class=" flex justify-center items-start gap-5 mb-8">
          <div className="basis-[55%]">
            <h1 class="logo-holder font-para text-3xl font-[700] mb-3">
              Shopio
            </h1>
            <p class="text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis
              id fames dolor.
            </p>
          </div>
          <div class="flex gap-2">
            <button className="text-3xl text-btn">
              <BsFacebook />
            </button>
            <button className="text-3xl text-btn">
              <BsInstagram />
            </button>
            <button className="text-3xl text-btn">
              <BsTelegram />
            </button>
            <button className="text-3xl text-btn">
              <BsTwitter />
            </button>
          </div>
        </div>
        <div className="xl:flex-1 md:w-[75%] lg:w-[50%] mx-auto flex justify-between items-start text-lg">
          <div class=" flex flex-col">
            <h3 class="col-title text-header text-xl font-[500]">Info</h3>
            <nav class="col-list">
              <ul>
                <li>
                  <a href="#">Formats</a>
                </li>
                <li>
                  <a href="#">Compression</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                
              </ul>
            </nav>
          </div>
          <div class="flex flex-col">
            <h3 class="col-title text-header text-xl font-[500]">Resources</h3>
            <nav class="col-list">
              <ul>
                <li>
                  <a href="#">Developer API</a>
                </li>
                <li>
                  <a href="#">Tools</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col flex flex-col">
            <h3 class="col-title text-header text-xl font-[500]">Company</h3>
            <nav class="col-list">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <div class="copyright">© 2022 – All Rights Reserved.</div> */}
      </div>
    </footer>
  );
};

export default Footer;

//  {/* <!-- Buy me a coffe script --> */}
//  <script
//  data-name="BMC-Widget"
//  data-cfasync="false"
//  src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
//  data-id="vbattalshn"
//  data-description="Support me on Buy me a coffee!"
//  data-message=""
//  data-color="#5F7FFF"
//  data-position="Right"
//  data-x_margin="18"
//  data-y_margin="18"
// ></script>
