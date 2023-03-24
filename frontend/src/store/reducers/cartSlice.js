import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "orders",
    initialState: { productList: [] },
    reducers: {
        setCart: (state, action) => {
            state.productList = action.payload;
        },
        deleteProduct: (state, action) => {
            state.productList = state.productList.filter(
                (product) => product.id !== action.payload.id
            );
        },
        addProduct: (state, action) => {
            state.productList.unshift(action.payload);
        },
        updateCart: (state, action) => {
            state.productList = state.productList.map((product) => {
                if (product.id === action.payload.id) {
                    return { ...product, amount: action.payload.amount };
                }
                return product;
            });
        },
    },
});

// reducer
const cartReducer = cartSlice.reducer;

// export action
export const { setCart, deleteProduct, addProduct, updateCart } =
    cartSlice.actions;

// export selector
export const productListSelector = (state) => {
    return state.cartReducer.productList;
};

export default cartReducer;
