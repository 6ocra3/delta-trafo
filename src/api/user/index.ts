import { 
    IGetUserResponse
 } from "./types"
import { UserEndpoints } from "../endpoints"
import { AxiosPromise } from "axios"
import { axiosInstance } from "../instance"

export const getUser = (): AxiosPromise<IGetUserResponse> =>
    axiosInstance.get(UserEndpoints.GET_USER);