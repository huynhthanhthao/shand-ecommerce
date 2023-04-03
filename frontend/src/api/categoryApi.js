import axios from "axios";
import { domain } from "../config";
import { toast } from "react-toastify";

import { setCategoryList } from "store/reducers/categorySlice";
import headerConfig from "utils/headerConfig";

export const getCategoryListApi = async (dispatch) => {
    try {
        const response = await axios.get(`${domain}/category/`, { headers: headerConfig });
        if (response.data.status) {
            dispatch(setCategoryList(response.data.categoryList));
        }
    } catch (error) {
        console.log(error);
    }
};

export const createCategoryApi = async (payload, dispatch) => {
    try {
        const response = await axios.post(
            `${domain}/category/`,
            {
                parent: payload.parent,
                nameCategory: payload.nameCategory,
            },
            { headers: headerConfig }
        );
        if (response.data.status) {
            getCategoryListApi(dispatch);
            toast.success(response.data.message);
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const deleteCategoryApi = async (payload, dispatch) => {
    try {
        const response = await axios.delete(`${domain}/category/`, {
            data: { id: payload.id },
            headers: headerConfig,
        });
        if (response.data.status) {
            getCategoryListApi(dispatch);
            toast.success(response.data.message);
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const updateCategoryApi = async (payload, dispatch) => {
    try {
        const response = await axios.patch(
            `${domain}/category/`,
            {
                id: payload.id,
                nameCategory: payload.nameCategory,
                parent: payload.parent,
            },
            { headers: headerConfig }
        );

        if (response.data.status) {
            getCategoryListApi(dispatch);
            toast.success(response.data.message);
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};
