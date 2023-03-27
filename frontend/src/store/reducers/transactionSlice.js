import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name: "transaction",
    initialState: { transaction: {} },
    reducers: {
        setTransaction: (state, action) => {
            state.transaction = { ...state.transaction, ...action.payload };
        },
    },
});

// reducer
const transactionReducer = transactionSlice.reducer;

// export action
export const { setTransaction } = transactionSlice.actions;

// export selector
export const addressReceiveSelector = (state) => {
    return state.transactionReducer.transaction;
};

export default transactionReducer;
