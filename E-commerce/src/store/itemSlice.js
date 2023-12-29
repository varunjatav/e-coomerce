import { createSlice }  from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "itemSlice",
    initialState: [],
    reducers: {
        getAllProducts: (state,action) => {
            return action.payload;
        }
    }
});


export default itemSlice;
export const itemActions = itemSlice.actions;