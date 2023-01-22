import { configureStore } from "@reduxjs/toolkit";
import loginModalReducer from "./reducers/LoginModalSlice";

const store = configureStore({ reducer: { loginModalReducer } });

// Export
export default store;
