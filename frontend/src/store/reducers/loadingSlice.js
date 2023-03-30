import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: { isLoading: false, content: "Vui lòng đợi..." },
    reducers: {
        openLoading: (state, action) => {
            state.content = action.payload;
            state.isLoading = true;
        },
        closeLoading: (state, action) => {
            state.isLoading = false;
        },
    },
});

// reducer
const loadingReducer = loadingSlice.reducer;

// export action
export const { openLoading, closeLoading } = loadingSlice.actions;

// export selector
export const isLoadingSelector = (state) => {
    return state.loadingReducer.isLoading;
};

export const contentSelector = (state) => {
    return state.loadingReducer.content;
};

export default loadingReducer;
