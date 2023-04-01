import React, { useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AllProductsRender from "../components/AllProductsRender";
import { StateContext } from "../service/content/Context";

const AllProducts = () => {
  const { allProducts } = useContext(StateContext);

  const { manWatches, womanWatches } = useContext(StateContext);

  const featureProducts = manWatches &&
    womanWatches && [...manWatches, ...womanWatches];

  const { lightings, motorcycles } = useContext(StateContext);
  const detailProducts = lightings &&
    motorcycles && [...lightings, ...motorcycles];

  const allProductsData = allProducts &&
    featureProducts && [...allProducts, ...featureProducts, ...detailProducts];

  const { search } = useContext(StateContext);
  const filterItems = search
    ? allProducts?.filter((product) =>
        product?.title.toLowerCase().includes(search)
      )
    : [];

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(filterItems);
  }, [search]);

  return (
    <div className=" flex flex-wrap gap-5 justify-center items-center">
      {/* {search === ""
        ? allProductsData?.map((allProduct) => (
            <AllProductsRender key={allProduct.id} allProduct={allProduct} />
          ))
        : items?.map((allProduct) => (
            <AllProductsRender key={allProduct.id} allProduct={allProduct} />
          ))} */}

      {search === ""
        ? allProductsData?.map((allProduct) => (
            <AllProductsRender key={allProduct.id} allProduct={allProduct} />
          ))
        : items.length<= 0 ? <h1 className="text-head text-3xl font-para mt-24">No Products found</h1>: items?.map((allProduct) => (
          <AllProductsRender key={allProduct.id} allProduct={allProduct} />
        ))}
    </div>
  );
};

export default AllProducts;
