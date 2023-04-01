import React, { createContext, useContext, useRef, useState } from 'react'
import { useGetCategoryDataQuery, useGetProductsQuery } from '../Api/productApi';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
export const StateContext = createContext();



const StateContextProvider = ({children}) => {
    const {data: laptop} = useGetCategoryDataQuery('laptops')
    const laptops = laptop?.products;

    const {data: manWatch} = useGetCategoryDataQuery('mens-watches')
    const {data: womanWatch} = useGetCategoryDataQuery('womens-watches')

    const womanWatches = womanWatch?.products;
    const manWatches = manWatch?.products;

    const {data: motorcycle} = useGetCategoryDataQuery('motorcycle')
    const {data: lighting} = useGetCategoryDataQuery('lighting')

    const lightings = lighting?.products;
    const motorcycles = motorcycle?.products;

    const {data: allpds} = useGetProductsQuery()

   const allProducts= allpds?.products


   const [search, setSearch] = useState('')
  //  const [addCartActive, setAddCartActive] = useState(false)



  const homeRef = useRef()

  const popularRef = useRef()
  const featureRef = useRef()
  const dealRef = useRef()
  const comingRef = useRef()
  const footergRef = useRef()







    const data = {laptops, womanWatches, manWatches, motorcycles, lightings, allProducts, search, setSearch, homeRef, featureRef, dealRef, popularRef, comingRef, footergRef}



  
  return (
    <StateContext.Provider value={data}>
        {children}
      
    </StateContext.Provider>
  )
}

export default StateContextProvider
