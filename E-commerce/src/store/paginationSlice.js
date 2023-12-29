import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "paginationSlice",
  initialState: 0,
  reducers: {
    incrementby10: (state, action) => {
      return (state = 10);
    },
    incrementby20: (state, action) => {
      return (state = 20);
    },
    incrementby30: (state, action) => {
      return (state = 30);
    },
    previous: (state, action) => {
      return (state -= 10);
    },
    next: (state, action) => {
      return (state += 10);
    },
  },
});

export default paginationSlice;
export const paginationActions = paginationSlice.actions;
