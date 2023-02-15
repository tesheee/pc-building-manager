import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
    sort: {
        name: 'Популярные',
        sortProperty: 'popular',
    },
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSort(state, action){
            state.sort = action.payload;
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload;
        }
    }
});

export const { setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;