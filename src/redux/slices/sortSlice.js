import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: {
        name: 'популярности',
        sortProperty: 'rating',
    },
};

const sortSlice = createSlice({
    name: 'sortings',
    initialState,
    reducers: {
        
    }
});