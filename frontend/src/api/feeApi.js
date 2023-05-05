import axios from "axios";
import { domain } from "../config";
import headerConfig from "utils/headerConfig";
import { toast } from "react-toastify";

export const getFee = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/fee/`, {
            params: {
                sellerId: payload.sellerId,
            },
            headers: headerConfig(),
        });

        if (response.data.status) {
            return response.data.fee;
        }
    } catch (error) {
        console.log(error);
    }
};

export const getFeeList = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/fee/all`, {
            headers: headerConfig(),
        });

        if (response.data.status) {
            return response.data.feeList;
        }
    } catch (error) {
        console.log(error);
    }
};

export const deleteFeeApi = async (payload, dispatch) => {
    try {
        const response = await axios.delete(`${domain}/fee/`, {
            data: { sellerId: payload.sellerId },
            headers: headerConfig(),
        });

        if (response.data.status) {
            toast.success(response.data.message);
        }
    } catch (error) {
        console.log(error);
    }
};
