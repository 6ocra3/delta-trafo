import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { userReducer } from "./slices/user";
import { filesReducer } from "./slices/files";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        files: filesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
