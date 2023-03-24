import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginModalReducer from "./reducers/authSlice";
import accountReducer from "./reducers/accountSlice";
import orderReducer from "./reducers/orderSlice";
import productReducer from "./reducers/productSlice";
import addressReceiveReducer from "./reducers/addressReceiveSlice";
import cartReducer from "./reducers/cartSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["accountReducer"],
};

const reducer = combineReducers({
    accountReducer,
    loginModalReducer,
    orderReducer,
    productReducer,
    addressReceiveReducer,
    cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

// Export
export const persistor = persistStore(store);
export default store;
