import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../Api/productApi";
import CreateSlice from "../slice/CreateSlice";

export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer,
    cart: CreateSlice
  },
  

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
