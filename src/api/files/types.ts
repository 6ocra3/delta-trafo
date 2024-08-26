enum FILETYPES{
    Folder = 0,
    Audio,
    Text
}

export interface IBaseFile{
    name: string,
    path: string,
}

export interface ILibraryFile extends IBaseFile{
    type: FILETYPES,
    author: string,
    files: ILibraryFile[],
    folders: ILibraryFile[]
}

export interface IGalleryFile extends IBaseFile{
    year: number,
    countFiles: number,
    files: IGalleryFile[],
    folders: IGalleryFile[]
}

export interface INewspaperFile extends IBaseFile{
    files: IGalleryFile[],
    folders: IGalleryFile[]
}

export type MainTableFile = ILibraryFile | IGalleryFile | INewspaperFile


export interface IDownloadFile{
    page: string,
    fileId: string,
}

export interface IFolderInfo{
    file?: Blob,
    pathRequest: {
        path?: string,
        author?: string,
        year?: number,
        name?: string,
        isBase: boolean
    }
}

export interface IKnowledgeBase{
    name: string,
    imageUrl: string,
    page: "paper" | "library" | "gallery",
    folderId: number
}

export interface ICreateFolder{
    page: string,
    folderInfo: FormData
}

export interface IFileInfo{
    fileRequest: {
        path?: string,
        author?: string,
        year?: number,
    },
    files: Blob[]
}

export interface ICreateFile{
    page: string,
    fileInfo: FormData
}