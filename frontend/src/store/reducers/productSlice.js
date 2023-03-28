import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: null,
        product: null,
        detailProduct: null,
        newProduct: {},
    },
    reducers: {
        setMyProductList(state, action) {
            state.productList = action.payload;
        },
        setProduct(state, action) {
            state.product = action.payload;
        },
        setNewProduct(state, action) {
            state.newProduct = action.payload;
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
export const {
    setMyProductList,
    setProduct,
    deleteProduct,
    setDetailProduct,
    setNewProduct,
} = productSlice.actions;

// export selector
export const productListSelector = (state) => {
    return state.productReducer.productList;
};
export const productSelector = (state) => {
    return state.productReducer.product;
};

export const newProductSelector = (state) => {
    return state.productReducer.newProduct;
};

export default productReducer;
