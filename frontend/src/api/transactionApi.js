import axios from "axios";
import { domain } from "../config";
import { toast } from "react-toastify";
import { setTransaction } from "store/reducers/transactionSlice";

export const getTransaction = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/transaction`, {
            params: {
                username: payload.username,
            },
        });

        if (response.data.status) {
            // set state and close modal
            dispatch(setTransaction(response.data.transaction));
        }
    } catch (error) {
        console.log(error);
    }
};

export const updateTransactionApi = async (payload, dispatch) => {
    try {
        const response = await axios.patch(`${domain}/transaction`, {
            username: payload.username,
            fullName: payload.fullName,
            bankCode: payload.bankCode,
            bankName: payload.bankName,
        });

        if (response.data.status) {
            // set state and close modal
            toast.success(response.data.message);

            dispatch(
                setTransaction({
                    fullName: payload.fullName,
                    bankCode: payload.bankCode,
                    bankName: payload.bankName,
                })
            );
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const addTransactionApi = async (payload, dispatch) => {
    try {
        const response = await axios.post(`${domain}/transaction`, {
            username: payload.username,
            fullName: payload.fullName,
            bankCode: payload.bankCode,
            bankName: payload.bankName,
        });

        if (response.data.status) {
            // set state and close modal
            toast.success(response.data.message);

            dispatch(
                setTransaction({
                    username: payload.username,
                    fullName: payload.fullName,
                    bankCode: payload.bankCode,
                    bankName: payload.bankName,
                })
            );
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};
