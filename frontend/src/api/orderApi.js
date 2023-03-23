import axios from "axios";
import { domain } from "../config";
import {
    setOrder,
    setOrderReceived,
    setOrderSent,
} from "store/reducers/orderSlice";

export const getOrderSent = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/order/ordered`, {
            params: {
                status: payload.status,
                buyerId: payload.buyerId,
            },
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
        });
        if (response.data.status) {
            dispatch(setOrder(response.data.order));
        }
    } catch (error) {
        console.log(error);
    }
};
