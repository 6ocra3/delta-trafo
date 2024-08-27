import { AxiosPromise } from "axios";
import { FilesEndpoints } from "../endpoints";
import { axiosInstance } from "../instance";
import { ICreateFile, ICreateFolder, IDeleteFile, IDownloadFile, IGalleryFile, IKnowledgeBase, ILibraryFile, INewspaperFile } from "./types";

export const getLibraryFiles = (): AxiosPromise<ILibraryFile> =>
    axiosInstance.get(FilesEndpoints.GET_LIBRARY);

export const getGalleryFiles = (): AxiosPromise<IGalleryFile> =>
    axiosInstance.get(FilesEndpoints.GET_GALLERY);

export const getNewspaperFiles = (): AxiosPromise<INewspaperFile> =>
    axiosInstance.get(FilesEndpoints.GET_NEWSPAPER);

export const getKnowledgeBase = (): AxiosPromise<IKnowledgeBase[]> => 
    axiosInstance.get(FilesEndpoints.GET_KNOWLEDGE_BASE)

export const downloadFiles = (params: IDownloadFile): AxiosPromise<Blob> =>
    axiosInstance.get(FilesEndpoints.DOWNLOAD_FILE + `/${params.page}/download/${params.fileId}`, {
        responseType: 'blob'
});

export const deleteFile = (params: IDeleteFile) => 
    axiosInstance.delete(FilesEndpoints.DELETE_FILE + `/${params.page}/delete/${params.fileId}`)

export const createFolder = (params: ICreateFolder) => 
    axiosInstance.post(FilesEndpoints.CREATE_FOLDER+params.page, params.folderInfo)

export const createFile = (params: ICreateFile) => 
    axiosInstance.post(FilesEndpoints.CREATE_FILE + `${params.page}/file`, params.fileInfo, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })