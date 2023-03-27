import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orderSent: null,
        orderReceived: null,
        order: null,
        orderConfirm: null,
    },
    reducers: {
        setOrderSent: (state, action) => {
            state.orderSent = action.payload;
        },
        deleteOrder: (state, action) => {
            state.orderSent = state.orderSent.filter(
                (product) => product.id !== action.payload.id
            );
        },
        updateOrderList: (state, action) => {
            state.orderReceived = state.orderReceived.filter(
                (order) => order.id !== action.payload.id
            );
        },
        setOrderReceived: (state, action) => {
            state.orderReceived = action.payload;
        },

        setOrder: (state, action) => {
            state.order = { ...state.order, ...action.payload };
        },
        setOrderConfirm: (state, action) => {
            state.orderConfirm = action.payload;
        },
    },
});

// reducer
const orderReducer = orderSlice.reducer;

// export action
export const {
    setOrderReceived,
    setOrderSent,
    setOrder,
    setOrderConfirm,
    deleteOrder,
    updateOrderList,
} = orderSlice.actions;

// export selector
export const orderSentSelector = (state) => {
    return state.orderReducer.orderSent;
};
export const orderReceiveSelector = (state) => {
    return state.orderReducer.orderReceived;
};

export default orderReducer;
