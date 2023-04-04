import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import filter from "./slices/filterSlice";
import products from "./slices/productsSlice";
import search from "./slices/searchSlice";

export default configureStore({
  reducer: {
    cart,
    filter,
    products,
    search,
  },
});
