import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: { categoryList: [], category: {} },
    reducers: {
        setCategoryList: (state, action) => {
            state.categoryList = action.payload;
        },
        setCategory: (state, action) => {
            state.category = { ...state.category, ...action.payload };
        },
        deleteCategory: (state, action) => {
            state.categoryList = state.categoryList.filter(
                (category) => category.id !== action.payload.id
            );
        },
        createCategory: (state, action) => {
            state.categoryList.push(action.payload);
        },
        updateCategory: (state, action) => {
            state.categoryList = state.categoryList.map((category) => {
                if (category.id === action.payload.id) {
                    return { ...category, ...action.payload };
                }
                return category;
            });
        },
    },
});

// reducer
const categoryReducer = categorySlice.reducer;

// export action
export const {
    setCategoryList,
    setCategory,
    deleteCategory,
    createCategory,
    updateCategory,
} = categorySlice.actions;

// export selector
export const categoryListSelector = (state) => {
    return state.categoryReducer.categoryList;
};

export const categorySelector = (state) => {
    return state.categoryReducer.category;
};

export default categoryReducer;
