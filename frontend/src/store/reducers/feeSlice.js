import { createSlice } from "@reduxjs/toolkit";

const feeSlice = createSlice({
    name: "fee",
    initialState: { feeTarget: null, feeList: [] },
    reducers: {
        setFeeTarget: (state, action) => {
            state.feeTarget = action.payload;
        },
        setFeeList: (state, action) => {
            state.feeList = action.payload;
        },
        deleteFee: (state, action) => {
            state.feeList = state.feeList.filter((fee) => fee.sellerId !== action.payload.sellerId);
        },
    },
});

// reducer
const feeReducer = feeSlice.reducer;

// export action
export const { setFeeTarget, setFeeList, deleteFee } = feeSlice.actions;

// export selector
export const feeTargetSelector = (state) => {
    return state.feeReducer.feeTarget;
};

export const feeListSelector = (state) => {
    return state.feeReducer.feeList;
};

export default feeReducer;
