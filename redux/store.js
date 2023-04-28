import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";

// const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
