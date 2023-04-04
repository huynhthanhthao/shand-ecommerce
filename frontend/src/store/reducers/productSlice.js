import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: null,
        product: null,
        detailProduct: null,
        newProduct: {},
        updateProduct: {},
        searchProductList: [],
        productCategory: [],
        productLove: [],
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
        setProductCategory(state, action) {
            state.productCategory = action.payload;
        },
        setProductLove(state, action) {
            state.productLove = action.payload;
        },
        setSearchProductList(state, action) {
            state.searchProductList = action.payload;
        },
        setUpdateProduct(state, action) {
            state.updateProduct = action.payload;
        },
        deleteProduct(state, action) {
            state.productList = state.productList.filter((product) => product.id !== action.payload.id);
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
    setUpdateProduct,
    setSearchProductList,
    setProductCategory,
    setProductLove,
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
export const updateProductSelector = (state) => {
    return state.productReducer.updateProduct;
};

export const searchProductListSelector = (state) => {
    return state.productReducer.searchProductList;
};

export const productCategorySelector = (state) => {
    return state.productReducer.productCategory;
};

export const productLoveSelector = (state) => {
    return state.productReducer.productLove;
};
export default productReducer;
