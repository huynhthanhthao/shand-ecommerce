import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: { account: null },
    reducers: {
        setAccount: (state, action) => {
            state.account = { ...state.account, ...action.payload };
        },
    },
});

// reducer
const accountReducer = accountSlice.reducer;

// export action
export const { setAccount } = accountSlice.actions;

// export selector
export const accountSelector = (state) => {
    return state.accountReducer.account;
};

export default accountReducer;
