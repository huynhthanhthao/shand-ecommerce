import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: { orderSent: null, orderReceived: null, order: null },
    reducers: {
        setOrderSent: (state, action) => {
            state.orderSent = action.payload;
        },
        setOrderReceived: (state, action) => {
            state.orderReceived = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
    },
});

// reducer
const orderReducer = orderSlice.reducer;

// export action
export const { setOrderReceived, setOrderSent, setOrder } = orderSlice.actions;

// export selector
export const orderSentSelector = (state) => {
    return state.orderReducer.orderSent;
};
export const orderReceiveSelector = (state) => {
    return state.orderReducer.orderReceived;
};

export default orderReducer;
