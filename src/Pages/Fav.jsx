import React from "react";
import { useSelector } from "react-redux";
import FavRendering from "../components/FavRendering";

const Fav = () => {
  const favs = useSelector((state) => state.cart.fav);
  return (
    <div>
      {favs.length <= 0 ? (
        <div>
          <h1 className="text-2xl font-para font-[700] text-para">You have no favorite cart.</h1>
        </div>
      ) : (
        <div className=" flex flex-wrap gap-5 justify-center items-center">
      {favs?.map((fav) => (
        <FavRendering key={fav.id} fav={fav} />
      ))}
    </div>
        
      )}
    </div>
    
  );
};

export default Fav;
