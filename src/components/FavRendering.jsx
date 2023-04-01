import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { delFromFav } from "../service/slice/CreateSlice";
import Swal from "sweetalert2";

const FavRendering = ({ fav }) => {
  const delHandler = () => {
    const swalButtons = Swal.mixin({
      customClass: {
        confirmButton: "bg-btn text-white px-3 py-2 rounded-md text-xl ml-3",
        cancelButton: "bg-red-500 text-white px-3 py-2 rounded-md text-xl",
      },
      buttonsStyling: false,
    });

    swalButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(delFromFav(fav));
          swalButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  const rating = Math.round(fav?.rating);

  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }

  const dispatch = useDispatch();
  return (
    
<div className="bg-bg px-6 py-4 shadow-lg rounded-md text-center !mx-auto w-[300px]">
      <img
        src={fav?.thumbnail}
        className="h-[120px] mx-auto rounded-md mb-2"
        alt=""
      />

      <h4 className="text-lg font-head font-[700]">
        {fav?.title.substring(0, 20)}...
      </h4>
      <p className=" font-para text-[17px] text-para inline-block w-10/12 my-3">
        {fav?.description.substring(0, 35)}...
      </p>

      <div className="flex justify-between items-stretch">
        <p className="text-btn">{stars}</p>
        <p className="text-btn">${fav?.price}</p>
      </div>
      <div className="text-left mt-3">
        <button
          onClick={() => delHandler()}
          className="bg-btn text-para px-3 py-2 rounded-md"
        >
          <MdDelete className="text-xl " />
        </button>
      </div>
    </div>
  );
};

export default FavRendering;




