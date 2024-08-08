import { ILoginRequest,
    ILoginResponse
 } from "./types"
import { AuthEndpoints } from "../endpoints"
import { AxiosPromise } from "axios"
import { axiosInstance } from "../instance"

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
    axiosInstance.post(AuthEndpoints.LOGIN, params);

export const logout = (): AxiosPromise => axiosInstance.post(AuthEndpoints.LOGOUT)