import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    itemArr: [],
    quantity: 1,
  },
  reducers: {
    getAllProducts: (state, action) => {
      return {
        ...state,
        itemArr: [...state.itemArr, ...action.payload.itemArr],
      };
    },
   
  },
});

export default itemSlice;
export const itemActions = itemSlice.actions;
