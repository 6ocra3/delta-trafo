import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { IDownloadFile, IGalleryFile, IKnowledgeBase, ILibraryFile, INewspaperFile, MainTableFile } from "../../api/files/types";

export interface FilesState {
    filesData: {
        library: ILibraryFile | null;
        gallery: IGalleryFile | null;
        newspaper: INewspaperFile | null;
        knowledgeBase: IKnowledgeBase[] | null;
        mainTableRootInfo: {
          page: "paper" | "galler" | "library" | null;
          folderId: number | null
        }
    }
}

export const getLibraryFiles = createAsyncThunk<
    ILibraryFile,
  {addAll: boolean},
  { rejectValue: string }
>("files/library", async (params, { rejectWithValue }) => {
  try {
    const {data} = await api.files.getLibraryFiles()
    if(params.addAll){
      const allData: ILibraryFile = {name: "Все", folders: [], isMeta: true, files: [], path:"", type:0,author:"", id: 0};
      data.folders.forEach(el => {
        allData.folders = [...allData.folders, ...JSON.parse(JSON.stringify(el.folders))]
        allData.files = [...allData.files, ...JSON.parse(JSON.stringify(el.files))]
      })
      data.folders.unshift(allData)
    }
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

export const getKnowledgeBase = createAsyncThunk<
  IKnowledgeBase[],
  undefined,
  { rejectValue: string }
>("files/knowledgeBase", async (_, { rejectWithValue }) => {
  try {
    const {data} = await api.files.getKnowledgeBase()
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
        knowledgeBase: null,
        mainTableRootInfo: {
          page: null,
          folderId: null
        }
    }
}

const filesSlice = createSlice({
    name: "files",
    initialState,
    reducers: {
      updateMainTableRootInfo(state, action) {
        const { page, folderId } = action.payload;
        state.filesData.mainTableRootInfo = {
          folderId,
          page
        };
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getKnowledgeBase.fulfilled, (state, action) => {    
          state.filesData = {
            ...state.filesData,
            knowledgeBase: action.payload,
          };
        })
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
export const { updateMainTableRootInfo } = filesSlice.actions;
