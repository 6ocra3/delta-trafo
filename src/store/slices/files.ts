import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ILoginRequest, ILoginResponse } from "../../api/auth/types";
import api from "../../api";
import { ILibraryFile } from "../../api/files/types";

export interface FilesState {
    filesData: {
        data: ILibraryFile | null
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

const initialState: FilesState = {
    filesData: {
        data: null,
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
              data: action.payload,
            };
        })
    }
})

export const filesReducer = filesSlice.reducer;
