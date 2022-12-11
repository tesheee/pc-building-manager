import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0,
    totalPrice: 0,
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum;
            }, 0);
            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum;
            }, 0);
        },
        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum;
            }, 0);
            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum;
            }, 0);
        },
        clearItems(state) {
            state.items = [];
            state.totalCount = 0;
            state.totalPrice = 0;
        },
    }
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;