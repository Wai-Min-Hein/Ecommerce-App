import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFav } from "../service/slice/CreateSlice";
import { StateContext } from "../service/content/Context";
import { Link } from "react-router-dom";


const AllProductsRender = (allProduct) => {
  const all = allProduct?.allProduct;


  const carts = useSelector(state => state.cart.cart)
  const favs = useSelector(state => state.cart.fav)

  const findFavCart = favs.find((c) => c.id === all.id);
  const findCart = carts.find((c) => c.id === all.id);

 






  const rating = Math.round(all?.rating);

  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }

  const [addCartActive, setAddCartActive] = useState(false);
  const activeHandler = () => {
    setAddCartActive(!addCartActive);
  };

  const [addFavActive, setAddFavActive] = useState(false);
  const activeFavHandler = () => {
    setAddFavActive(!addFavActive);
  };

  const dispatch = useDispatch();

  return (
    <div className="bg-bg-second px-6 py-4 shadow-lg rounded-md text-center !mx-auto w-[300px]">
      <img
        src={all?.thumbnail}
        className="h-[120px] mx-auto rounded-md mb-2"
        alt=""
      />

      <h4 className="text-lg font-head font-[700]">
        {all?.title.substring(0, 20)}...
      </h4>
      <p className=" font-para text-[17px] text-para inline-block w-10/12 my-3">
        {all?.description.substring(0, 35)}...
      </p>

      <div className="flex justify-between items-stretch">
        <p className="text-btn">{stars}</p>
        <p className="text-btn">${all?.price}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => (
            dispatch(
              addToCart({ ...all, quantity: 1, totalPrice: all?.price * 1 })
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
        <Link to={`/detail/${all.id}`}>
        <button className="bg-btn px-3 py-2  text-lg font-para font-[500]  text-icon rounded-md">
          Detail
        </button>
        </Link>
        <button
          onClick={() => (dispatch(addToFav(all), activeFavHandler()))}
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

export default AllProductsRender;
