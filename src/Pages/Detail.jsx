import { React, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductsQuery } from "../service/Api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFav } from "../service/slice/CreateSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Detail = () => {

  
  const { id } = useParams();
  const { data: product } = useGetSingleProductsQuery(id);


  
  const carts = useSelector(state => state.cart.cart)
  const favs = useSelector(state => state.cart.fav)

  

  

  const findFavCart = favs.find((c) => c.id === product?.id);
  const findCart = carts.find((c) => c.id === product?.id);





  const [addCartActive, setAddCartActive] = useState(false);
  const activeHandler = () => {
    setAddCartActive(!addCartActive);
  };
  const dispatch = useDispatch();

  const rating = Math.round(product?.rating);

  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }

  const [addFavActive, setAddFavActive] = useState(false);
  const activeFavHandler = () => {
    setAddFavActive(!addFavActive);
  };
  

  const ref = useRef();
  const [img, setImg] = useState(null)

  return (
    <div className="mt-16 mb-8 lg:flex justify-between items-start mx-auto px-5 md:px-0">
      <div className=" basis-40% flex flex-col items-baseline justify-between mb-8 lg:mb-0">
        <img src={img? img : product?.images[0]} className="h-[20rem] max-w-[15rem] md:max-w-[18rem] lg:max-w-[25rem] rounded-md" alt="" />
        <div className="flex flex-wrap justify-center gap-3 items-center mt-10 object-contain">
        {
          product?.images?.map((img, i) => 
            
            <button onClick={e =>  setImg(e.target.src)} key={i} className="w-[3rem] h-[3rem]">
              <img src={img} className="w-full rounded-sm object-contain"  alt="" />
            </button>
            
            
            )
        }
        </div>
      </div>

      <div className="font-para self-stretch basis-[50%]">
        <h5 className=" text-para font-[700] text-2xl capitalize tracking-widest inline-block basis-2/5">
          {product?.title}
        </h5>
        <h2 className="font-[500] text-xl">{product?.brand}</h2>
        <span className="text-btn text-xl">{stars}</span>
        <h2 className="font-[500] text-xl mt-3 mb-1 capitalize">{product?.category}</h2>
        <p className=" text-lg text-gray-500">{product?.description}</p>

        <p className="text-lg text-gray-500">
          You can get this product with {product?.discountPercentage}% discount.
        </p>
        <div className="mt-auto">


        <h1 className="text-3xl mt-5 font-[700] ">$ {product?.price}</h1>
        <div className="flex items-center justify-start gap-5">
          <button
            onClick={() => (
              dispatch(
                addToCart({
                  ...product,
                  quantity: 1,
                  totalPrice: product?.price * 1,
                })
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

          <button
            onClick={() => dispatch(addToFav(product), activeFavHandler())}
            className="bg-btn px-3 py-2  rounded-md"
          >
            {!findFavCart ? (
              <AiOutlineHeart className=" text-xl  text-icon" />
            ) : (
              <AiFillHeart className=" text-xl  text-icon" />
            )}
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
