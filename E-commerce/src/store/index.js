
import { configureStore }  from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import paginationSlice from "./paginationSlice";
import fetchingSlice from "./fetchingSlice";
import QuerySlice from "./QuerySlice";
import singleItemSlice from "./singleItemSlice";
import cartSlice from "./cartSlice";


 
const store =  configureStore({
    reducer: {
        items : itemSlice.reducer,
        page: paginationSlice.reducer,
        fetch: fetchingSlice.reducer,
        query: QuerySlice.reducer,
        singleItem: singleItemSlice.reducer,
        cart: cartSlice.reducer
    },
});


export default store;