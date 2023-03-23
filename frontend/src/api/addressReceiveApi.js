import axios from "axios";
import { domain } from "../config";
import { toast } from "react-toastify";
import {
    setAddressList,
    deleteAddressReceive,
    addAddressReceive,
    updateAddressReceive,
} from "store/reducers/addressReceiveSlice";

export const getAddressList = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/address-receive/all`, {
            params: {
                username: payload.username,
            },
        });
        if (response.data.status) {
            // set state and close modal
            dispatch(setAddressList(response.data.addressList));
        }
    } catch (error) {
        console.log(error);
    }
};

export const addAddressListApi = async (payload, dispatch) => {
    try {
        const response = await axios.post(`${domain}/address-receive/`, {
            username: payload.username,
            phoneNumber: payload.phoneNumber,
            address: payload.address,
            fullName: payload.fullName,
        });
        if (response.data.status) {
            // set state and close modal
            toast.success(response.data.message);

            dispatch(addAddressReceive(response.data.address));
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const deleteAddressReceiveApi = async (payload, dispatch) => {
    try {
        const response = await axios.delete(`${domain}/address-receive/`, {
            data: { id: payload.id },
        });
        if (response.data.status) {
            // set state and close modal
            dispatch(deleteAddressReceive({ id: payload.id }));

            // show toast
            toast.success(response.data.message);
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const updateAddressReceiveApi = async (payload, dispatch) => {
    try {
        const response = await axios.patch(`${domain}/address-receive/`, {
            id: payload.id,
            fullName: payload.fullName,
            phoneNumber: payload.phoneNumber,
            address: payload.address,
        });
        if (response.data.status) {
            // set state and close modal
            dispatch(updateAddressReceive(payload));

            // show toast
            toast.success(response.data.message);
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};
