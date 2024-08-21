export const enum AuthEndpoints {
    LOGIN = "/login",
    LOGOUT = "/logout"
}

export const enum UserEndpoints {
    GET_USER = "/user"
}

export const enum FilesEndpoints {
    GET_LIBRARY = "/delta/path-pages/library?isAll=false",
    GET_GALLERY = "/delta/path-pages/gallery",
    GET_NEWSPAPER = "/delta/path-pages/paper",
    DOWNLOAD_FILE = "/delta/path-pages",
    CREATE_FOLDER = "/delta/path-pages/",
    CREATE_FILE = "/delta/path-pages/"
}