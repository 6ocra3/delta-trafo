enum FILETYPES{
    Folder = 0,
    Audio,
    Text
}

export interface ILibraryFile{
    name: string,
    path: string,
    type: FILETYPES,
    author: string,
    countFiles: number,
    files: ILibraryFile[],
    folders: ILibraryFile[]
}
