import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "authSlice",
    initialState: { isShowLogin: false },
    reducers: {
        showLogin: (state, action) => {
            state.isShowLogin = true;
        },
        closeLogin: (state, action) => {
            state.isShowLogin = false;
        },
        logout: (state, action) => {
            localStorage.clear();
        },
    },
});

// reducer
const loginModalReducer = AuthSlice.reducer;

// export action
export const { showLogin, closeLogin, logout } = AuthSlice.actions;

// Selector
export const loginModalSelector = (state) => {
    return state.loginModalReducer.isShowLogin;
};

export default loginModalReducer;
