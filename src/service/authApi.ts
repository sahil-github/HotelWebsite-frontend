import axiosInstance from "./axiosInstance";

const authApi = {
    signup: (data: any) =>
        axiosInstance.post("/auth/signup", data),

    login: (data: any) =>
        axiosInstance.post("/auth/login", data),
};

export default authApi;