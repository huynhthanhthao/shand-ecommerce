import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "event",
    initialState: { event: {}, eventList: [] },
    reducers: {
        setEventList: (state, action) => {
            state.eventList = action.payload;
        },
        setEvent: (state, action) => {
            state.event = { ...state.event, ...action.payload };
        },
        deleteEvent: (state, action) => {
            state.eventList = state.eventList.filter(
                (event) => event.id !== action.payload.id
            );
        },
    },
});

// reducer
const eventReducer = eventSlice.reducer;

// export action
export const { setEventList, setEvent, deleteEvent } = eventSlice.actions;

// export selector
export const eventListSelector = (state) => {
    return state.eventReducer.eventList;
};

export const eventSelector = (state) => {
    return state.eventReducer.event;
};

export default eventReducer;
