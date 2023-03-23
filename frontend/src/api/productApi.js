import axios from "axios";
import { domain } from "../config";
import { toast } from "react-toastify";

import {
    setProduct,
    setMyProductList,
    deleteProduct,
} from "store/reducers/productSlice";
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

export const deleteProductById = async (payload, dispatch) => {
    try {
        const response = await axios.delete(`${domain}/product/`, {
            data: { id: payload.id },
        });
        if (response.data.status) {
            toast.success(response.data.message);
            dispatch(deleteProduct({ id: payload.id }));
        }
    } catch (error) {
        console.log(error);
    }
};
