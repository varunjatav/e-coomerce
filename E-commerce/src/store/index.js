import { configureStore }  from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import paginationSlice from "./paginationSlice";


 
const store =  configureStore({
    reducer: {
        items : itemSlice.reducer,
        page: paginationSlice.reducer
    },
});


export default store;