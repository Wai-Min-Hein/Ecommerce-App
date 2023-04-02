import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { StateContext } from "../service/content/Context";
import { addQuantity, addToCart } from "../service/slice/CreateSlice";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Cookies from "js-cookie";

const MyCartRendering = ({ cart }) => {
  const [quantity, setQuantity] = useState(1);

  // const incQuantity = () => setQuantity(quantity + 1);
  // const decQuantity = () => setQuantity(quantity - 1);
  const incQuantity = () => setQuantity((prev) => prev + 1);
  const decQuantity = () => setQuantity((prev) => prev - 1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addQuantity({ ...cart, quantity, totalPrice: cart?.price * quantity })
    );
  }, [quantity]);

  const rating = Math.round(cart?.rating);

  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }
  return (
    <div className="bg-bg-second px-6 py-4 shadow-lg rounded-md text-center !mx-auto w-[300px]">
      <img
        src={cart?.thumbnail}
        className="h-[120px] mx-auto rounded-md mb-2"
        alt=""
      />

      <h4 className="text-lg font-head font-[700]">
        {cart?.title.substring(0, 20)}...
      </h4>
      <p className=" font-para text-[17px] text-para inline-block w-10/12 my-3">
        {cart?.description.substring(0, 35)}...
      </p>

      <div className="flex justify-between items-stretch">
        <p className="text-btn">{stars}</p>
        <p className="text-btn">${cart?.price}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="">
          <p>Quantity: {cart?.quantity}</p>
        </div>
        <p>Total Price: $ {cart?.totalPrice}</p>
      </div>
      <div className="flex items-center justify-start mt-3 text-white">
        <button
          onClick={() => {
            incQuantity();
          }}
          className="mr-3 text-md  px-2 py-1 rounded-md bg-btn"
        >
          <AiOutlinePlus />
        </button>
        <button
          onClick={() => {
            decQuantity();
          }}
          className="mr-3 text-md  px-2 py-1 rounded-md bg-btn"
        >
          <AiOutlineMinus />
        </button>
      </div>
    </div>
  );
};

export default MyCartRendering;
