import axios from "axios";
import { domain } from "../config";
// import { toast } from "react-toastify";

export const checkImageValid = async (payload) => {
    try {
        const response = await axios.post(`${domain}/check-image/`, {
            url: payload,
        });
        return (
            response.data.filter((item) => item.class === "valid")[0].score *
            100
        );
    } catch (error) {
        console.log(error);
    }
};
