import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MyCartRendering from "../components/MyCartRendering";

const MyCart = () => {
  const carts = useSelector((state) => state.cart.cart);
  const allTotal = carts.reduce((pv, cv) => pv + cv.totalPrice, 0);
  return (
    <div className="">
      <div className="mb-10">
        <h1 className="text-header font-para text-2xl">
          Total Price for all your products : $ {allTotal}
        </h1>
      </div>

      <div className=" flex flex-wrap gap-5 justify-center items-center">
        {carts.length <= 0 ? (
          <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="font-head font-[700] text-3xl text-header">
              Your cart is empty
            </h1>
            <Link to={"/all"}>
              <button className="text-btn-icon font-[500] mt-5 px-3 py-1 rounded-md bg-btn">
                Go Shopping
              </button>
            </Link>
          </div>
        ) : (
          carts?.map((cart) => <MyCartRendering key={cart.id} cart={cart} />)
        )}
      </div>
    </div>
  );
};

export default MyCart;

{
  /* <div className="flex items-center justify-between mt-4">
  <button
    onClick={() =>
      dispatch(
        addToCart({ ...cart, quantity: 1, totalPrice: cart?.price * 1 })
      )
    }
    className="bg-btn px-4 py-2  rounded-md text-md font-[500] text-icon font-para"
  >
    Add to Cart
  </button>
  <button className="bg-btn px-3 py-2  text-lg font-para font-[500]  text-icon rounded-md">
    Detail
  </button>
  <button className="bg-btn px-3 py-2  rounded-md">
    <AiOutlineHeart className=" text-xl  text-icon" />
  </button>
</div> */
}

// <div className="mb-10">
//         <h1 className="text-header font-para text-2xl ">Total Price for all your products : $222</h1>
//       </div>
