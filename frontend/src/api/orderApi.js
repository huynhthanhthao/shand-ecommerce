import axios from "axios";
import { domain } from "../config";
import { toast } from "react-toastify";

import { deleteOrder, setOrder, setOrderReceived, setOrderSent, updateOrderList } from "store/reducers/orderSlice";
import headerConfig from "utils/headerConfig";

export const createOrderApi = async (payload, dispatch) => {
    try {
        const response = await axios.post(
            `${domain}/order/`,
            {
                sellerId: payload.sellerId,
                buyerId: payload.buyerId,
                productsInformation: payload.productsInformation,
                total: payload.total,
                status: payload.status,
            },
            { headers: headerConfig() }
        );

        if (response.data.status) {
            toast.success(response.data.message);
        }

        return response.data.status;
    } catch (error) {
        console.log(error);
    }
};

export const updateOrderApi = async (payload, dispatch) => {
    try {
        const response = await axios.patch(
            `${domain}/order/`,
            {
                id: payload.id,
                status: payload.status,
            },
            { headers: headerConfig() }
        );

        if (response.data.status) {
            toast.success(response.data.message);
            dispatch(
                setOrder({
                    status: payload.status,
                })
            );

            dispatch(updateOrderList({ id: payload.id, status: payload.status }));
        }

        return response.data.status;
    } catch (error) {
        console.log(error);
    }
};

export const getOrderSent = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/order/ordered`, {
            params: {
                status: payload.status,
                buyerId: payload.buyerId,
            },
            headers: headerConfig(),
        });
        if (response.data.status) {
            dispatch(setOrderSent(response.data.orderList));
        }
    } catch (error) {
        console.log(error);
    }
};

export const getOrderReceived = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/order/received`, {
            params: {
                status: payload.status,
                sellerId: payload.sellerId,
            },
            headers: headerConfig(),
        });
        if (response.data.status) {
            dispatch(setOrderReceived(response.data.orderList));
        }
    } catch (error) {
        console.log(error);
    }
};

export const getOrderById = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/order/`, {
            params: {
                id: payload.id,
            },
            headers: headerConfig(),
        });
        if (response.data.status) {
            dispatch(setOrder(response.data.order));
        }
    } catch (error) {
        console.log(error);
    }
};

export const deleteOrderApi = async (payload, dispatch) => {
    try {
        const response = await axios.delete(`${domain}/order/`, {
            data: { id: payload.id },
            headers: headerConfig(),
        });
        if (response.data.status) {
            dispatch(deleteOrder({ id: payload.id }));
            toast.success(response.data.message);
        }
    } catch (error) {
        console.log(error);
    }
};
