import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { fetchDeleteUser, fetchUpdateUser, fetchUserById, fetchUsers } from "./userThunk";

const initialState = {
  loading: false,
  data: [],
  dataOne: null,
  error: "",
  pagination: {
    pageIndex: 1,
    pageSize: 5,
    totalPage: 2,
  },
  filters: {
    page: 1,
    pageSize: 5,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
    },
    resetDataOne: (state) => {
      state.dataOne = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.data = payload.metadata;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUserById.fulfilled, (state, { payload }) => {
      state.dataOne = payload.metadata;
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchUserById.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchUpdateUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUpdateUser.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchUpdateUser.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchDeleteUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDeleteUser.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchDeleteUser.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

const { actions: userActions, reducer: userReducer } = userSlice;
const useUser = () => useSelector((state) => state.user);

export { useUser, userActions };
export default userReducer;
