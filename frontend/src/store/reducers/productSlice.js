import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: { productList: null, product: null, detailProduct: null },
    reducers: {
        setMyProductList(state, action) {
            state.productList = action.payload;
        },
        setProduct(state, action) {
            state.product = action.payload;
        },
        deleteProduct(state, action) {
            state.productList = state.productList.filter(
                (product) => product.id !== action.payload.id
            );
        },
        setDetailProduct(state, action) {
            state.detailProduct = action.payload;
        },
    },
});

// reducer
const productReducer = productSlice.reducer;

// export action
export const { setMyProductList, setProduct, deleteProduct, setDetailProduct } =
    productSlice.actions;

// export selector
export const productListSelector = (state) => {
    return state.productReducer.productList;
};
export const productSelector = (state) => {
    return state.productReducer.product;
};

export default productReducer;
