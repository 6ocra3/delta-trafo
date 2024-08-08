import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGetUserResponse } from "../../api/user/types";
import api from "../../api";


export interface UserState {
    userData: {
        email: string | null;
    }
}

export const getUser = createAsyncThunk<
  IGetUserResponse,
  undefined,
  { rejectValue: string }
>("user/getUser", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.user.getUser()
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw rejectWithValue("Не удалось получить пользователя");
  }
});

const initialState: UserState = {
    userData: {
        email: null,
    }
}

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUser.fulfilled, (state, action) => {    
            state.userData = {
              ...state.userData,
              email: action.payload.email,
            };
        })
    }
})

export const userReducer = userSlice.reducer;