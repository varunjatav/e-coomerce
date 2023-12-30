
import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
  name: "fetchingSlice",
  initialState: {
    fetchDone: false,  // false: 'PENDING' & true: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
         state.fetchDone = true;
    },
    
    markFetchingStarted: (state) => {
         state.currentlyFetching = true;
    },
    
    markFetchingFinished: (state) => {
         state.currentlyFetching = false;
    }
  }
});

export default fetchingSlice;
export const fetchActions = fetchingSlice.actions;
