import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload.items;
        },
    }
});

export const { addItem } = productSlice.actions;

export default productSlice.reducer;