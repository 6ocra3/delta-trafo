import { AxiosPromise } from "axios";
import { FilesEndpoints } from "../endpoints";
import { axiosInstance } from "../instance";
import { ILibraryFile } from "./types";

export const getLibraryFiles = (): AxiosPromise<ILibraryFile> =>
    axiosInstance.get(FilesEndpoints.GET_LIBRARY);