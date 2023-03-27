import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
    name: "report",
    initialState: { reportList: [], report: {} },
    reducers: {
        setReportList: (state, action) => {
            state.reportList = action.payload;
        },
        setReport: (state, action) => {
            state.report = action.payload;
        },
        deleteReport: (state, action) => {
            state.reportList = state.reportList.filter(
                (report) => report.id !== action.payload.id
            );
        },
    },
});

// reducer
const reportReducer = reportSlice.reducer;

// export action
export const { setReportList, setReport, deleteReport } = reportSlice.actions;

// export selector
export const reportListSelector = (state) => {
    return state.reportReducer.reportList;
};

export const reportSelector = (state) => {
    return state.reportReducer.report;
};

export default reportReducer;
