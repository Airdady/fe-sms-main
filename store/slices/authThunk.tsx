import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, removeToken, setToken } from "../../utils/HelperFunctions";
import api from "../../services/api";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = getToken();
      api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      const response = { data: { name: "name" } };
      return { ...response.data, accessToken };
    } catch (e) {
      removeToken();
      return rejectWithValue("");
    }
  }
);

export const login = createAsyncThunk("auth/login", async (payload) => {
  const response = await api.post("/login", payload);
  setToken(response.data.data.token);

  return response.data.data;
});

export const signOut = createAsyncThunk("auth/signOut", async () => {
  removeToken();
});
