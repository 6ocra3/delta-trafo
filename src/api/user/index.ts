import { 
    IGetUserResponse
 } from "./types"
import { AuthEndpoints, UserEndpoints } from "../endpoints"
import { AxiosPromise } from "axios"
import { axiosInstance } from "../instance"

export const getUser = (): AxiosPromise<IGetUserResponse> =>
    axiosInstance.get(UserEndpoints.GET_USER);