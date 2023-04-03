import axios from "axios";
import { domain } from "../config";
import { toast } from "react-toastify";

import {
    setProduct,
    setMyProductList,
    deleteProduct,
    setDetailProduct,
    setSearchProductList,
} from "store/reducers/productSlice";

import headerConfig from "utils/headerConfig";

export const getMyProductList = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/product/my-product`, {
            params: {
                ownId: payload.ownId,
            },
        });
        if (response.data.status) {
            dispatch(setMyProductList(response.data.product));
        }
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/product/`, {
            params: {
                id: payload.id,
            },
        });
        if (response.data.status) {
            dispatch(setProduct(response.data.product));
        }
    } catch (error) {
        console.log(error);
    }
};

export const getAllProductApi = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/product/all`, {
            params: {
                limit: payload.limit,
            },
        });

        return response.data.productList;
    } catch (error) {
        console.log(error);
    }
};

export const getFreeProductApi = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/product/free`, {
            params: {
                limit: payload.limitFree,
            },
        });

        return response.data.productList;
    } catch (error) {
        console.log(error);
    }
};

export const getProductByCategory = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/product/product-by-category`, {
            params: {
                categoryId: payload.categoryId,
            },
        });

        return response.data.productList;
    } catch (error) {
        console.log(error);
    }
};

export const getDetailProduct = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/product/`, {
            params: {
                id: payload.id,
            },
        });
        if (response.data.status) {
            dispatch(setDetailProduct(response.data.product));
        }
    } catch (error) {
        console.log(error);
    }
};

export const deleteProductById = async (payload, dispatch) => {
    try {
        const response = await axios.delete(`${domain}/product/`, {
            data: { id: payload.id },
            headers: headerConfig,
        });
        console.log(response);
        if (response.data.status) {
            toast.success(response.data.message);
            dispatch(deleteProduct({ id: payload.id }));
        }
    } catch (error) {
        console.log(error);
    }
};

export const createProductApi = async (payload, dispatch) => {
    try {
        const response = await axios.post(`${domain}/product/`, { ...payload }, { headers: headerConfig });
        if (response.data.status) {
            toast.success(response.data.message);
            return true;
        } else toast.error(response.data.message);
        return false;
    } catch (error) {
        console.log(error);
    }
};

export const updateProductApi = async (payload, dispatch) => {
    try {
        const response = await axios.patch(
            `${domain}/product/`,
            {
                ...payload,
            },
            { headers: headerConfig }
        );
        if (response.data.status) {
            toast.success(response.data.message);
            return true;
        } else toast.error(response.data.message);
        return false;
    } catch (error) {
        console.log(error);
    }
};

export const searchProductApi = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/product/search`, {
            params: {
                name: payload.key,
            },
        });
        if (response.data.status) {
            dispatch(setSearchProductList(response.data.productList));
        }
    } catch (error) {
        console.log(error);
    }
};
