import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "paginationSlice",
  initialState: 0,
  reducers: {
    initial: (state, action) => {
      return state = 0;
    },
    incrementby10: (state, action) => {
      return (state = action.payload);
    },
    incrementby20: (state, action) => {
      return (state = action.payload);
    },
    incrementby30: (state, action) => {
      return (state = action.payload);
    },
    previous: (state, action) => {
      return (state -= action.payload);
    },
    next: (state, action) => {
      return (state += action.payload);
    },
  },
});

export default paginationSlice;
export const paginationActions = paginationSlice.actions;
