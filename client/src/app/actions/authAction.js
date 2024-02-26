import { createAsyncThunk } from "@reduxjs/toolkit";
import { connection } from "../../config/config.js";
import axios from "axios";

export const loadUser = createAsyncThunk(
  "loaduser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${connection}/user/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const userSignUp = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${connection}/user/signup`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "user/signin",
  async (credentials) => {
    try {
      const res = await axios.post(`${connection}/user/login`, credentials, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      const token = data.token;
      localStorage.setItem("token", token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
