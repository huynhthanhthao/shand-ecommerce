import { createSlice } from "@reduxjs/toolkit";

const LoginModalSlice = createSlice({
    name: "LoginModal",
    initialState: { isShowLogin: false },
    reducers: {
        showLogin(state, action) {
            console.log(123);
            state.isShowLogin = true;
        },
        closeLogin(state, action) {
            state.isShowLogin = false;
        },
    },
});

// reducer
const loginModalReducer = LoginModalSlice.reducer;

export const { showLogin, closeLogin } = LoginModalSlice.actions;

// Selector
export const loginModalSelector = (state) => {
    return state.loginModalReducer.isShowLogin;
};

export default loginModalReducer;
