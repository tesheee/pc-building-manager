import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/fetchProductsStatus",
  async (params) => {
    const { sortBy, order, currentPage, searchValue } = params;
    const { data } = await axios.get(
      `https://6395a92790ac47c680703bcd.mockapi.io/GPU?page=${currentPage}&limit=5&sortBy=${sortBy}&order=${order}&search=${searchValue}`
    );
    return data;
  }
); //Buisness logic

const initialState = {
  items: [],
  status: "loading", // loading | sucsess | error
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "sucsess";
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
