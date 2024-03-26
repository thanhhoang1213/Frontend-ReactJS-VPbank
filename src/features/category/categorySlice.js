import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  fetchAddCategory,
  fetchAllCategory,
  fetchCategoryById,
  fetchDeleteCategory,
  fetchUpdateCategory,
} from "./categoryThunk";

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

const categorySlice = createSlice({
  name: "category",
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
    builder.addCase(fetchAllCategory.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAllCategory.fulfilled, (state, { payload }) => {
      state.data = payload.data;
      state.pagination = { ...state.pagination, ...payload.paginations };
      state.loading = false;
    });
    builder.addCase(fetchAllCategory.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    builder.addCase(fetchCategoryById.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCategoryById.fulfilled, (state, { payload }) => {
      state.dataOne = payload.data;
      state.loading = false;
    });
    builder.addCase(fetchCategoryById.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchAddCategory.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAddCategory.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchAddCategory.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchUpdateCategory.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUpdateCategory.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchUpdateCategory.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchDeleteCategory.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDeleteCategory.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchDeleteCategory.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

const { actions: categoryActions, reducer: categoryReducer } = categorySlice;
const useCategory = () => useSelector((state) => state.category);

export { categoryActions, useCategory };
export default categoryReducer;
