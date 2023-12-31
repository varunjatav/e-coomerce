import { createSlice }  from "@reduxjs/toolkit";

const singleItemSlice = createSlice({
    name: "singleItemSlice",
    initialState: {},
    reducers: {
        getSingleProduct: (state,action) => {
            return action.payload;
        }
    }
});


export default singleItemSlice;
export const singleItemActions = singleItemSlice.actions;