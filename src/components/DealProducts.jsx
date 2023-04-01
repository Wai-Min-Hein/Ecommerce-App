import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { addToCart } from "../service/slice/CreateSlice";
import { addToFav } from "../service/slice/CreateSlice";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const DealProducts = ({ deal }) => {

  const carts = useSelector(state => state.cart.cart)
  const favs = useSelector(state => state.cart.fav)

  const findCart = carts.find((c) => c.id === deal.id);
  const findFavCart = favs.find((c) => c.id === deal.id);


  const [addCartActive, setAddCartActive] = useState(false);
  const activeHandler = () => {
    setAddCartActive(!addCartActive);
  };
  const [addFavActive, setAddFavActive] = useState(false);
  const activeFavHandler = () => {
    setAddFavActive(!addFavActive);
  };
  const dispatch = useDispatch();

  const rating = Math.round(deal?.rating);

  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }
  return (
    <div className="bg-bg-second px-5 py-4 shadow-lg rounded-md text-center  w-[300px]">
      <img
        src={deal?.thumbnail}
        className="h-[120px] mx-auto rounded-md mb-2"
        alt=""
      />

      <h4 className="font-head font-[600] text-lg">
        {deal?.title.substring(0, 18)}...
      </h4>
      <p className=" font-para text-[17px] text-para inline-block w-10/12 my-3">
        {deal?.description.substring(0, 35)}...
      </p>

      <div className="flex justify-between items-center">
        <p className="text-btn">{stars}</p>
        <p className="text-btn">${deal?.price}</p>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center mt-4">
        <button
          onClick={() => (
            dispatch(
              addToCart({ ...deal, quantity: 1, totalPrice: deal?.price * 1 })
            ),
            activeHandler()
          )}
          className={` px-4 py-2  rounded-md text-md font-[500] text-icon font-para ${
            findCart ? "bg-red-500 text-white" : "bg-btn"
          }`}
        >
          
          {
            !findCart? 'Add to Cart': 'Remove'
          }
        </button>
        <Link to={`/detail/${deal.id}`}>
        <button className="bg-btn px-3 py-2  text-lg font-para font-[500]  text-icon rounded-md">
          Detail
        </button>
        
        </Link>
        <button
          onClick={() => (dispatch(addToFav(deal), activeFavHandler()))}
          className="bg-btn px-3 py-2  rounded-md"
        >
          {
            !findFavCart?<AiOutlineHeart className=" text-xl  text-icon" />: <AiFillHeart className=" text-xl  text-icon" /> 
          }
          
        </button>
      </div>
    </div>
  );
};

export default DealProducts;
