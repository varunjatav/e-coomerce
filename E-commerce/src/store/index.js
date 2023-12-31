
import { configureStore }  from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import paginationSlice from "./paginationSlice";
import fetchingSlice from "./fetchingSlice";
import QuerySlice from "./QuerySlice";
import singleItemSlice from "./singleItemSlice";


 
const store =  configureStore({
    reducer: {
        items : itemSlice.reducer,
        page: paginationSlice.reducer,
        fetch: fetchingSlice.reducer,
        query: QuerySlice.reducer,
        singleItem: singleItemSlice.reducer,
    },
});


export default store;