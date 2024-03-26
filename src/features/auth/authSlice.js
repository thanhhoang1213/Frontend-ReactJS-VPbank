import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { fetchGetCurrentUser, fetchLogin, fetchLogout, fetchSignUp } from "./authThunk";

const initialState = {
  loading: false,
  user: null,
  userId: localStorage.getItem("x-client-id") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setToken: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    reset: (state) => {
      return {
        loading: false,
        user: null,
        userId: null,
        refreshToken: null,
        error: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchLogin.fulfilled, (state, { payload }) => {
      state.userId = payload.id;
      state.user = payload;
      state.loading = false;
    });
    builder.addCase(fetchLogin.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    builder.addCase(fetchGetCurrentUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchGetCurrentUser.fulfilled, (state, { payload }) => {
      state.user = payload.metadata;
      state.loading = false;
    });

    builder.addCase(fetchGetCurrentUser.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    builder.addCase(fetchLogout.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchLogout.fulfilled, (state, { payload }) => {
      state.loading = false;
      localStorage.removeItem("accessToken");
    });

    builder.addCase(fetchLogout.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    builder.addCase(fetchSignUp.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchSignUp.fulfilled, (state, { payload }) => {
      state.loading = false;
    });

    builder.addCase(fetchSignUp.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

const { actions: authActions, reducer: authReducer } = authSlice;
const useAuth = () => useSelector((state) => state.auth);
export { authActions, useAuth };
export default authReducer;
