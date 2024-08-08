import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Access-Control-Allow-Methods": "*",
    },
});

axiosInstance.interceptors.request.use((config) => {
    if(localStorage.getItem("token")){
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return config;
});