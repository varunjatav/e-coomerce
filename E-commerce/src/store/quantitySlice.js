import { createSlice } from "@reduxjs/toolkit";

const quantitySlice = createSlice({
    name: "quantity",
    initialState: 1,
    reducers: {
        onInputChange: (actions) => {
            return actions.payload
        },
        onAdd: (state) => {
           return state = state + 1
        },
        onSubtract: (state) => {
            return state = state - 1
        }
    }
});

export default quantitySlice;
export const quantityActions = quantitySlice.actions;