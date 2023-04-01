import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { BiSearchAlt2 } from "react-icons/bi";

import { FaShoppingCart } from "react-icons/fa";

import { AiTwotoneHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";
import { Link } from "react-router-dom";
import { StateContext } from "../service/content/Context";
import { useSelector } from "react-redux";

const Nav = () => {

  const nav = useNavigate();

  const scrollTop = () => {

    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      }
    );
    
  }
  const { homeRef } = useContext(StateContext);
  const toHome = homeRef.current;

  const { popularRef } = useContext(StateContext);
  const toPopular = popularRef.current;
  const { featureRef } = useContext(StateContext);
  const toFeature = featureRef.current;
  const { dealRef } = useContext(StateContext);
  const toDeal = dealRef.current;
  const { comingRef } = useContext(StateContext);
  const toComing = comingRef.current;

  const { footergRef } = useContext(StateContext);
  const toFooter = comingRef.current;

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);

  const { search, setSearch } = useContext(StateContext);

  const searchHandler = (e) => {
    setSearch(e.target.value);

    nav("/all");
  };

  const activeHandler = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const carts = useSelector((state) => state.cart.cart);
  const favs = useSelector((state) => state.cart.fav);

  return (
    <nav
      className={`bg-bg flex items-center justify-between gap-5 z-50 mt-5 rounded-xl px-3 py-3 ${
        scrolled && "bg-nav sticky top-0 transition-all duration-200 shadow-xl"
      } `}
    >
      <div className="flex gap-3 justify-center items-center">
        <Link to={"/"}>
          <p className="text-header text-xl font-[900] font-head">Shopio</p>
        </Link>

        <div
          onClick={activeHandler}
          className={`relative flex  justify-center bg-btn p-5 rounded-full active:scale-75 transition-all duration-150 ${
            active ? "nav-active" : ""
          }`}
        >
          <div className="nav-btn z-50"></div>
        </div>
      </div>
      <div
        onClick={activeHandler}
        className={`side-nav fixed top-0 left-0  translate-x-[-20rem] w-[16rem] z-50 h-full bg-gray-300 transition-all     duration-500${
          !active ? "hidden" : " translate-x-[0]"
        }`}
      >
        <ul className="flex justify-center h-full text-btn-text font-[500] text-lg mx-5 font-para items-stretch flex-col">
          <li className="bg-bg shadow-lg flex mx-auto w-full justify-between py-1 px-4 items-center rounded-full mb-4 md:hidden">
            <input
              autoFocus
              type="text"
              placeholder="Search products here..."
              className="focus:outline-none bg-transparent flex-1 font-para"
            />
          </li>
          <Link to={"/all"}>
            <li className="px-3 py-2 rounded-md bg-btn hover:scale-90 duration-150 active:translate-y-[-5px]">
              All Product
            </li>
          </Link>

          <Link to={"/"}>
            <li
              onClick={() =>
                
                scrollTop()
              }
              className="my-3 px-3 py-2 rounded-md bg-btn hover:scale-90 duration-150 active:translate-y-[-5px]"
            >
              Home
            </li>
          </Link>

          <Link to={"/"}>
            <li
              onClick={() => toPopular.scrollIntoView({ behavior: "smooth" })}
              className="px-3 py-2 rounded-md bg-btn hover:scale-90 duration-150 active:translate-y-[-5px]"
            >
              Popular Products
            </li>
          </Link>

          <Link to={"/"}>
            <li
              onClick={() => toFeature.scrollIntoView({ behavior: "smooth" })}
              className="my-3 px-3 py-2 rounded-md bg-btn hover:scale-90 duration-150 active:translate-y-[-5px]"
            >
              Featured Products
            </li>
          </Link>

          <Link to={"/"}>
            <li
              onClick={() => toDeal.scrollIntoView({ behavior: "smooth" })}
              className="px-3 py-2 rounded-md bg-btn hover:scale-90 duration-150 active:translate-y-[-5px]"
            >
              Deal Products
            </li>
          </Link>

          <Link to={"/"}>
            <li
              onClick={() => toComing.scrollIntoView({ behavior: "smooth" })}
              className="my-3 px-3 py-2 rounded-md bg-btn hover:scale-90 duration-150 active:translate-y-[-5px]"
            >
              New Products
            </li>
          </Link>

          <Link to={"/"}>
            <li
              onClick={() => toFooter.scrollIntoView({ behavior: "smooth" })}
              className="px-3 py-2 rounded-md bg-btn hover:scale-90 duration-150 active:translate-y-[-5px]"
            >
              Footer
            </li>
          </Link>
        </ul>

        <div className="top-0 right-0 absolute mr-3 mt-5">
          <div
            onChange={activeHandler}
            className={`relative flex  justify-center bg-btn p-5 rounded-full  active:p-4 transition-all duration-150 active:scale-75 ${
              active ? "nav-active" : ""
            }`}
          >
            <div className="nav-btn z-50"></div>
          </div>
        </div>
      </div>
      <div className="bg-bg shadow-lg md:flex mx-auto w-[45rem] justify-between py-2 px-4 items-center rounded-full hidden">
        <input
          value={search}
          onChange={searchHandler}
          autoFocus
          type="text"
          placeholder="Search products here..."
          className="focus:outline-none bg-transparent flex-1 mx-5 font-para"
        />
        <BiSearchAlt2 className="text-xl" />
      </div>
      <div className="flex items-center justify-center ml-5 mr-2">
        <Link to={"/cart"}>
          <button className="bg-btn px-5 py-2  rounded-md mr-5 relative">
            <FaShoppingCart className=" text-xl text-icon " />{" "}
            <span className="absolute top-0 right-1">{carts.length}</span>
          </button>
        </Link>
        <Link to={"/favorite"}>
          <button className="bg-btn px-4 py-2  mr-5 relative rounded-md">
            <AiTwotoneHeart className=" text-xl  text-icon" />{" "}
            <span className="absolute top-0 right-1">{favs.length}</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
