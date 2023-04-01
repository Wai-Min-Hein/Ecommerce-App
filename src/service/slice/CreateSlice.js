import { createSlice } from "@reduxjs/toolkit";


const cartItems = localStorage.getItem('cards') !== null ? JSON.parse(localStorage.getItem('cards')): []
const favItems = localStorage.getItem('favs') !== null ? JSON.parse(localStorage.getItem('favs')): []

const initialState = {
  cart: cartItems,
  fav: favItems,
};

const cartSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const filterCart = state.cart.filter((c) => c.id !== item.id);
      const findCart = state?.cart?.find((c) => c.id === item.id);


      if (findCart) {
        state.cart = filterCart;
        

      } else {
        state.cart.push(item);
        

      }
      localStorage.setItem('cards', JSON.stringify(state.cart))


    },
    addQuantity: (state, action) => {
      const item = action.payload;
      const filterCart = state.cart.filter((c) => c.id !== item.id);
      const findCart = state?.cart?.find((c) => c.id === item.id);


      if (findCart) {
        state.cart = [item, ...filterCart];
        
      }

      const filterZeroCart = state.cart.filter((c) => c.quantity > 0);
      const findZeroCart = state?.cart?.find((c) => c.quantity <= 0);
      if (findZeroCart) {
        state.cart = filterZeroCart;
        

      }     
      localStorage.setItem('cards', JSON.stringify(state.cart))



    },
    addToFav: (state, action) => {
      const item = action.payload;
      const filterCart = state.fav.filter((c) => c.id !== item.id);
      const findCart = state?.fav?.find((c) => c.id === item.id);
      if (findCart) {
        state.fav = filterCart;
      } else {
        state.fav.push(item);
      }
      localStorage.setItem('favs', JSON.stringify(state.fav))

    },
    delFromFav: (state, action) => {
      const item = action.payload;
      const filterCart = state.fav.filter((c) => c.id !== item.id);
      state.fav = filterCart;
      localStorage.setItem('favs', JSON.stringify(state.fav))


      
    },
  },
});

export const { addToCart, addQuantity, addToFav, delFromFav } =
  cartSlice.actions;
export default cartSlice.reducer;
