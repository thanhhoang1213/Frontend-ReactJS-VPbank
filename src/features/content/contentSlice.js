import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  fetchAddContent,
  fetchContentById,
  fetchContentBySlug,
  fetchContents,
  fetchDeleteContent,
  fetchUpdateContent,
} from "./contentThunk";

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

const contentSlice = createSlice({
  name: "content",
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
    builder.addCase(fetchContents.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchContents.fulfilled, (state, { payload }) => {
      state.data = payload.metadata;
      state.loading = false;
    });
    builder.addCase(fetchContents.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchContentBySlug.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchContentBySlug.fulfilled, (state, { payload }) => {
      state.dataOne = payload.metadata;
      state.loading = false;
    });
    builder.addCase(fetchContentBySlug.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    builder.addCase(fetchAddContent.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAddContent.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchAddContent.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchUpdateContent.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUpdateContent.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchUpdateContent.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchContentById.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchContentById.fulfilled, (state, { payload }) => {
      state.error = "";
      state.dataOne = payload.metadata;
      state.loading = false;
    });
    builder.addCase(fetchContentById.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchDeleteContent.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDeleteContent.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchDeleteContent.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

const { actions: contentActions, reducer: contentReducer } = contentSlice;
const useContent = () => useSelector((state) => state.content);

export { contentActions, useContent };
export default contentReducer;
