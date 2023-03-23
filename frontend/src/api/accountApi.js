import axios from "axios";
import { domain } from "../config";
import { toast } from "react-toastify";
import { setAccount } from "store/reducers/accountSlice";

export const updateDetailAccount = async (payload, dispatch) => {
    try {
        const response = await axios.patch(`${domain}/account/detail`, {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            urlAvatar: payload.urlAvatar,
            phoneNumber: payload.phoneNumber,
            fullName: payload.fullName,
        });
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
