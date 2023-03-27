import axios from "axios";
import { domain } from "../config";
import { toast } from "react-toastify";

import { setReportList } from "store/reducers/reportSlice";

export const getReportListApi = async (dispatch) => {
    try {
        const response = await axios.get(`${domain}/report/`);

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
        });

        if (response.data.status) {
            getReportListApi(dispatch);
            toast.success(response.data.message);
        }
    } catch (error) {
        console.log(error);
    }
};

// export const createEventApi = async (payload, dispatch) => {
//     try {
//         const response = await axios.post(`${domain}/event/`, {
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
