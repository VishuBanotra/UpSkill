import { createSlice } from "@reduxjs/toolkit";

import { loadUser } from "../actions/authAction.js";
import { userSignIn } from "../actions/authAction.js";
import { userSignUp } from "../actions/authAction.js";

const initialState = {
  user: null,
  loading: false,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.loading = false;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = null;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.loading = false;
      state.user = null;
    });

    builder.addCase(userSignUp.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(userSignUp.fulfilled, (state) => {
      state.loading = false;
      state.isAuthenticated = false;
    });
    builder.addCase(userSignUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(userSignIn.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = true;
      state.user = null;
    });
    builder.addCase(userSignIn.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = action.payload.success;
    });
    builder.addCase(userSignIn.rejected, (state, action) => {
      state.user = null;
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
export const { logOut } = authSlice.actions;
