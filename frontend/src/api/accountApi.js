import axios from "axios";
import { domain } from "../config";
import { toast } from "react-toastify";
import { createAccount, deleteAccount, setAccount, setAccountList, updateAccount } from "store/reducers/accountSlice";
import headerConfig from "utils/headerConfig";
export const updateDetailAccount = async (payload, dispatch) => {
    try {
        const response = await axios.patch(
            `${domain}/account/detail`,
            {
                username: payload.username,
                email: payload.email,
                password: payload.password,
                urlAvatar: payload.urlAvatar,
                phoneNumber: payload.phoneNumber,
                fullName: payload.fullName,
            },
            { headers: headerConfig() }
        );
        if (response.data.status) {
            // set state and close modal
            dispatch(
                setAccount({
                    ...payload,
                })
            );

            // show toast
            toast.success(response.data.message);
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const createAccountApi = async (payload, dispatch) => {
    try {
        const response = await axios.post(
            `${domain}/account/`,
            {
                username: payload.username,
                password: payload.password,
                fullName: payload.fullName,
                urlAvatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                role: payload.role,
            },
            { headers: headerConfig() }
        );
        if (response.data.status) {
            // set state and close modal
            dispatch(
                createAccount({
                    username: payload.username,
                    password: payload.password,
                    fullName: payload.fullName,
                    role: payload.role,
                    status: true,
                    urlAvatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                })
            );

            // show toast
            toast.success(response.data.message);
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const updateAccountApi = async (payload, dispatch) => {
    try {
        const response = await axios.patch(
            `${domain}/account/`,
            {
                username: payload.username,
                password: payload.password,
                fullName: payload.fullName,
                role: payload.role,
                status: payload.status,
            },
            { headers: headerConfig() }
        );
        if (response.data.status) {
            // set state and close modal
            dispatch(
                updateAccount({
                    username: payload.username,
                    fullName: payload.fullName,
                    role: payload.role,
                    urlAvatar: payload.urlAvatar,
                    status: payload.status,
                })
            );

            // show toast
            toast.success(response.data.message);
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const deleteAccountApi = async (payload, dispatch) => {
    try {
        const response = await axios.delete(`${domain}/account/`, {
            data: {
                username: payload.username,
            },
            headers: headerConfig(),
        });
        if (response.data.status) {
            // set state and close modal
            dispatch(
                deleteAccount({
                    username: payload.username,
                })
            );

            // show toast
            toast.success(response.data.message);
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};

export const getAllAccountApi = async (dispatch) => {
    try {
        const response = await axios.get(`${domain}/account/`, { headers: headerConfig() });
        if (response.data.status) {
            // set state and close modal
            dispatch(setAccountList(response.data.userList));
        }
    } catch (error) {
        console.log(error);
    }
};

export const getTopRanking = async (dispatch) => {
    try {
        const response = await axios.get(`${domain}/account/top-ranking`);
        if (response.data.status) {
            // set state and close modal
            return response.data.studentList;
        }
    } catch (error) {
        console.log(error);
    }
};
