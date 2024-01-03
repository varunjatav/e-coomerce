import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: false,
    reducers: {
        loginUsers:(state,actions) => {
            return state = true;
        },
        logOutUsers:(state,actions) => {
            return state = false;
        }
    }
});

export default loginSlice;
export const loginActions = loginSlice.actions;