import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, actions) => {
            state.push(actions.payload);
        },
        removeFromCart: (state,actions) => {
            return state.filter((itemId) => itemId != actions.payload)
        },
    },
});

export default cartSlice;
export const cartSliceAction = cartSlice.actions;