import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  fetchAddNews,
  fetchDeleteNews,
  fetchNews,
  fetchNewsById,
  fetchUpdateNews,
} from "./newsThunk";

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

const newsSlice = createSlice({
  name: "news",
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
    builder.addCase(fetchNews.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.data = payload.metadata;
      state.loading = false;
    });
    builder.addCase(fetchNews.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchAddNews.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAddNews.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchAddNews.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchUpdateNews.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUpdateNews.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchUpdateNews.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchNewsById.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchNewsById.fulfilled, (state, { payload }) => {
      state.error = "";
      state.dataOne = payload.metadata;
      state.loading = false;
    });
    builder.addCase(fetchNewsById.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchDeleteNews.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDeleteNews.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchDeleteNews.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

const { actions: newsActions, reducer: newsReducer } = newsSlice;
const useNews = () => useSelector((state) => state.news);

export { newsActions, useNews };
export default newsReducer;
