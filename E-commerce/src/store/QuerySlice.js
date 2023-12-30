import { createSlice }  from "@reduxjs/toolkit";

const QuerySlice = createSlice({
    name: "QuerySlice",
    initialState: "",
    reducers: {
        getByQuery: (state,action) => {
            console.log("state: ",state,action.payload);
            return action.payload;
        }
    }
});


export default QuerySlice;
export const QueryActions = QuerySlice.actions;