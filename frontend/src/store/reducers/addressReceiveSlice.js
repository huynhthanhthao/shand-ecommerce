import { createSlice } from "@reduxjs/toolkit";

const addressReceiveSlice = createSlice({
    name: "account",
    initialState: { addressList: [], addressReceive: {}, addressDefault: {} },
    reducers: {
        setAddressList: (state, action) => {
            state.addressList = action.payload;
        },
        setAddressDefault: (state, action) => {
            state.addressDefault = action.payload;
        },
        setAddressReceive: (state, action) => {
            state.addressReceive = action.payload;
        },
        addAddressReceive: (state, action) => {
            if (action.payload.isDefault) {
                state.addressList = state.addressList.map((address) => {
                    return { ...address, isDefault: false };
                });
            }
            state.addressList.push(action.payload);
        },
        deleteAddressReceive: (state, action) => {
            state.addressList = state.addressList.filter(
                (address) => address.id !== action.payload.id
            );
        },
        updateAddressReceive: (state, action) => {
            if (action.payload.isDefault) {
                state.addressList = state.addressList.map((address) => {
                    return { ...address, isDefault: false };
                });
            }
            state.addressList = state.addressList.map((address) => {
                if (address.id === action.payload.id) {
                    return action.payload;
                }
                return address;
            });
        },
    },
});

// reducer
const addressReceiveReducer = addressReceiveSlice.reducer;

// export action
export const {
    setAddressList,
    setAddressDefault,
    setAddressReceive,
    deleteAddressReceive,
    addAddressReceive,
    updateAddressReceive,
} = addressReceiveSlice.actions;

// export selector
export const addressReceiveSelector = (state) => {
    return state.addressReceiveReducer.account;
};

export default addressReceiveReducer;
