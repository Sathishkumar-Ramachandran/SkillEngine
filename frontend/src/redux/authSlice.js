import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userID: null,
    companyID: null,
    isAuthenticated: false,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userID = action.payload.userID;
            state.companyID = action.payload.companyID;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.userID = null;
            state.companyID = null;
            state.isAuthenticated = false;
        }
    },
  })
  export const { setUser, logout } = authSlice.actions
export default authSlice.reducer

//dispatch(setUser({ userID: 1, companyID: 123 }));
//console.log("USER ID", state.userID);
//dispatch(setUser({ userID: 1, companyID: 123 }));
//console.log("COMPANY ID", state.companyID);
// dispatch(logout());