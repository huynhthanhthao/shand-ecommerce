import axios from "axios";
import { domain } from "../config";
import { toast } from "react-toastify";

import { setReportList } from "store/reducers/reportSlice";
import headerConfig from "utils/headerConfig";

export const getReportListApi = async (dispatch) => {
    try {
        const response = await axios.get(`${domain}/report/`, { headers: headerConfig });

        if (response.data.status) {
            dispatch(setReportList(response.data.reportList));
        }
    } catch (error) {
        console.log(error);
    }
};

export const deleteReportApi = async (payload, dispatch) => {
    try {
        const response = await axios.delete(`${domain}/report/`, {
            data: { id: payload.id },
            headers: headerConfig,
        });

        if (response.data.status) {
            getReportListApi(dispatch);
            toast.success(response.data.message);
        }
    } catch (error) {
        console.log(error);
    }
};

export const createReportApi = async (payload, dispatch) => {
    try {
        const response = await axios.post(
            `${domain}/report/`,
            {
                reportedStudentId: payload.reportedStudentId,
                studentId: payload.studentId,
                title: payload.title,
                content: payload.content,
                productId: payload.productId,
            },
            { headers: headerConfig }
        );

        if (response.data.status) {
            toast.success(response.data.message);
        } else toast.error(response.data.message);
    } catch (error) {
        console.log(error);
    }
};

// export const updateEventApi = async (payload, dispatch) => {
//     try {
//         const response = await axios.patch(`${domain}/event/`, {
//             id: payload.id,
//             title: payload.title,
//             address: payload.address,
//             time: payload.time,
//             date: payload.date,
//             purpose: payload.purpose,
//             status: payload.status,
//         });

//         if (response.data.status) {
//             getEventListApi(dispatch);
//             toast.success(response.data.message);
//         } else toast.error(response.data.message);
//     } catch (error) {
//         console.log(error);
//     }
// };
