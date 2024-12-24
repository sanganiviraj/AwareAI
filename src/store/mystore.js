import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slice/Userslice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

// Combine reducers
const rootReducer = combineReducers({
    users: UserReducer,
});

// Redux Persist configuration
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Create a persisted store
const persistor = persistStore(store);

export { store, persistor };
