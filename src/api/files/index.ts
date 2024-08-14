import { AxiosPromise } from "axios";
import { FilesEndpoints } from "../endpoints";
import { axiosInstance } from "../instance";
import { IDownloadFile, IGalleryFile, ILibraryFile, INewspaperFile } from "./types";

export const getLibraryFiles = (): AxiosPromise<ILibraryFile> =>
    axiosInstance.get(FilesEndpoints.GET_LIBRARY);

export const getGalleryFiles = (): AxiosPromise<IGalleryFile> =>
    axiosInstance.get(FilesEndpoints.GET_GALLERY);

export const getNewspaperFiles = (): AxiosPromise<INewspaperFile> =>
    axiosInstance.get(FilesEndpoints.GET_NEWSPAPER);

export const downloadFiles = (params: IDownloadFile): AxiosPromise<Blob> =>
    axiosInstance.get(FilesEndpoints.DOWNLOAD_FILE + `/${params.page}/download/${params.fileId}`, {
        responseType: 'blob'
});