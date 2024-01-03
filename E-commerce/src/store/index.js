
import { configureStore }  from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import paginationSlice from "./paginationSlice";
import fetchingSlice from "./fetchingSlice";
import QuerySlice from "./QuerySlice";
import singleItemSlice from "./singleItemSlice";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";


 
const store =  configureStore({
    reducer: {
        items : itemSlice.reducer,
        page: paginationSlice.reducer,
        fetch: fetchingSlice.reducer,
        query: QuerySlice.reducer,
        singleItem: singleItemSlice.reducer,
        cart: cartSlice.reducer,
        login: loginSlice.reducer
    },
});


export default store;