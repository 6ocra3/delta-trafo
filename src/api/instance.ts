import axios from "axios";
import { LocalStorageTokenKey } from "../store/slices/auth";

console.log(import.meta.env.BACK_API_URL)
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACK_API_URL,
    headers: {
      "Access-Control-Allow-Methods": "*",
    },
});

axiosInstance.interceptors.request.use((config) => {
    if(localStorage.getItem(LocalStorageTokenKey)){
        config.headers.Authorization = `Bearer ${localStorage.getItem(LocalStorageTokenKey)}`;
    }
    return config;
});