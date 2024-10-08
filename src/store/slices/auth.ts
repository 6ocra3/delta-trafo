import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginRequest, ILoginResponse } from "../../api/auth/types";
import api from "../../api";

export interface AuthState {
    authData: {
        token: string | null;
    }
}

export const LocalStorageTokenKey = "delta-trafo-token"

export const loginUser = createAsyncThunk<
  ILoginResponse,
  ILoginRequest,
  { rejectValue: string }
>("auth/login", async (params, { rejectWithValue }) => {
  try {
    const { data } = await api.auth.login(params);
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw rejectWithValue("Неверный логин или пароль");
  }
});

export const logoutUser = createAsyncThunk<
  string,
  undefined,
  { rejectValue: string }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await api.auth.logout();
    return "";
  } catch (error: unknown) {
    console.error(error);
    throw rejectWithValue("Не удалось выйти");
  }
});

const initialState: AuthState = {
    authData: {
        token: localStorage.getItem(LocalStorageTokenKey),
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      getTokenFromStorage(state){
        const token = localStorage.getItem(LocalStorageTokenKey)
        state.authData.token = token
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.fulfilled, (state, action) => {
            localStorage.setItem(LocalStorageTokenKey, action.payload.token);
            console.log(localStorage.getItem(LocalStorageTokenKey))
            state.authData = {
              ...state.authData,
              token: action.payload.token,
            };
        })
        .addCase(logoutUser.fulfilled, (state) => {
            localStorage.removeItem(LocalStorageTokenKey);
    
            state.authData = {
              ...state.authData,
              token: null,
            };
        })
    }
})

export const authReducer = authSlice.reducer;
export const {getTokenFromStorage} = authSlice.actions
