import axios from "axios";
import { domain } from "../config";
import headerConfig from "utils/headerConfig";

export const getBillListApi = async (payload, dispatch) => {
    try {
        const response = await axios.get(`${domain}/bill/`, {
            params: {
                studentId: payload.studentId,
            },
            headers: headerConfig(),
        });

        if (response.data.status) {
            return response.data.billList;
        }
    } catch (error) {
        console.log(error);
    }
};
