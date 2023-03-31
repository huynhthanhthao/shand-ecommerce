import axios from "axios";
import { domain } from "../config";
import { setAccount } from "../store/reducers/accountSlice";
import { closeLogin } from "../store/reducers/authSlice";
import { toast } from "react-toastify";

export const login = async (payload, dispatch) => {
    try {
        const response = await axios.post(`${domain}/auth/login`, {
            username: payload.username,
            password: payload.password,
        });

        if (response.data.status) {
            // set state and close modal
            dispatch(
                setAccount({
                    ...response.data.user,
                    token: response.data.accessToken,
                })
            );
            dispatch(closeLogin());

            // show toast
            toast.success(response.data.message);
        } else toast.error(response.data.message);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
