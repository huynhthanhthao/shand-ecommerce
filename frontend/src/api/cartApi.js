import axios from "axios";
import { domain } from "../config";
import { toast } from "react-toastify";

import {
    setCart,
    deleteProduct,
    // addProduct,
    updateCart,
} from "store/reducers/cartSlice";

import headerConfig from "utils/headerConfig";

export const getCart = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/cart/`, {
            params: {
                studentId: payload.studentId,
            },
            headers: headerConfig(),
        });

        if (response.data.status) {
            dispatch(setCart(response.data.productList));
        }
    } catch (error) {
        console.log(error);
    }
};

export const addCartApi = async (payload, dispatch) => {
    try {
        const response = await axios.post(
            `${domain}/cart/`,
            {
                ...payload,
            },
            { headers: headerConfig() }
        );

        if (response.data.status) {
            toast.success(response.data.message);
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const updateCartApi = async (payload, dispatch) => {
    try {
        const response = await axios.patch(
            `${domain}/cart/`,
            {
                id: payload.id,
                amount: payload.amount,
            },
            { headers: headerConfig() }
        );

        if (response.data.status) {
            dispatch(updateCart({ id: payload.id, amount: payload.amount }));
        }
    } catch (error) {
        console.log(error);
    }
};

export const deleteCartApi = async (payload, dispatch) => {
    try {
        const response = await axios.delete(`${domain}/cart/`, {
            data: { id: payload.id },
            headers: headerConfig(),
        });
        if (response.data.status) {
            dispatch(deleteProduct({ id: payload.id }));
            toast.success(response.data.message);
        }
    } catch (error) {
        console.log(error);
    }
};
