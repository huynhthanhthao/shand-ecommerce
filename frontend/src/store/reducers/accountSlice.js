import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: { account: null, accountList: [], accountTarget: {} },
    reducers: {
        setAccount: (state, action) => {
            state.account = { ...state.account, ...action.payload };
        },
        setAccountList: (state, action) => {
            state.accountList = action.payload;
        },
        setAccountTarget: (state, action) => {
            state.accountTarget = action.payload;
        },
        createAccount: (state, action) => {
            state.accountList.unshift(action.payload);
        },
        deleteAccount: (state, action) => {
            state.accountList = state.accountList.filter(
                (account) => account.username !== action.payload.username
            );
        },
        updateAccount: (state, action) => {
            state.accountList = state.accountList.map((account) => {
                if (account.username !== action.payload.username) {
                    return account;
                } else {
                    return action.payload;
                }
            });
        },
    },
});

// reducer
const accountReducer = accountSlice.reducer;

// export action
export const {
    setAccount,
    deleteAccount,
    updateAccount,
    createAccount,
    setAccountList,
    setAccountTarget,
} = accountSlice.actions;

// export selector
export const accountSelector = (state) => {
    return state.accountReducer.account;
};

export default accountReducer;
