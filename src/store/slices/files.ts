import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { IDownloadFile, IGalleryFile, ILibraryFile, INewspaperFile } from "../../api/files/types";

export interface FilesState {
    filesData: {
        library: ILibraryFile | null;
        gallery: IGalleryFile | null;
        newspaper: INewspaperFile | null;
    }
}

export const getLibraryFiles = createAsyncThunk<
    ILibraryFile,
  undefined,
  { rejectValue: string }
>("files/library", async (_, { rejectWithValue }) => {
  try {
    const {data} = await api.files.getLibraryFiles()
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw rejectWithValue("Не удалось загрузить файлы библиотеки");
  }
});

export const getGalleryFiles = createAsyncThunk<
    IGalleryFile,
    undefined,
  { rejectValue: string }
>("files/gallery", async (_, { rejectWithValue }) => {
  try {
    const {data} = await api.files.getGalleryFiles()
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw rejectWithValue("Не удалось загрузить файлы галереи");
  }
});

export const getNewspaperFiles = createAsyncThunk<
    INewspaperFile,
  undefined,
  { rejectValue: string }
>("files/newspaper", async (_, { rejectWithValue }) => {
  try {
    const {data} = await api.files.getNewspaperFiles()
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw rejectWithValue("Не удалось загрузить файлы газеты");
  }
});

export const downloadFiles = createAsyncThunk<
  Blob,
  IDownloadFile,
  { rejectValue: string }
>("files/download", async (params, { rejectWithValue }) => {
  try {
    const {data} = await api.files.downloadFiles(params)
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw rejectWithValue("Не удалось загрузить файл по ссылке");
  }
});

const initialState: FilesState = {
    filesData: {
        library: null,
        gallery: null,
        newspaper: null,
    }
}

const filesSlice = createSlice({
    name: "files",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getLibraryFiles.fulfilled, (state, action) => {    
            state.filesData = {
              ...state.filesData,
              library: action.payload,
            };
        })
        .addCase(getGalleryFiles.fulfilled, (state, action) => {    
          state.filesData = {
            ...state.filesData,
            gallery: action.payload,
          };
        })
        .addCase(getNewspaperFiles.fulfilled, (state, action) => {    
          state.filesData = {
            ...state.filesData,
            newspaper: action.payload,
          };
        })
        .addCase(downloadFiles.fulfilled, (state, action) => {    
          state.filesData = {
            ...state.filesData,
          };
      })
    }
})

export const filesReducer = filesSlice.reducer;
