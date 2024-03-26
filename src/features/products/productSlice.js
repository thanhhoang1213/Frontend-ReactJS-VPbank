import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  fetchAddProduct,
  fetchAllProduct,
  fetchDeleteProduct,
  fetchProductById,
  fetchProductPopulate,
  fetchUpdateProduct,
} from "./productThunk";

const initialState = {
  loading: false,
  data: [],
  populateData: [],
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

const productSlice = createSlice({
  name: "product",
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
    builder.addCase(fetchAllProduct.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAllProduct.fulfilled, (state, { payload }) => {
      state.data = payload.data;
      state.pagination = { ...state.pagination, ...payload.paginations };
      state.loading = false;
    });
    builder.addCase(fetchAllProduct.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    builder.addCase(fetchProductPopulate.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProductPopulate.fulfilled, (state, { payload }) => {
      state.populateData = payload.data;
      state.loading = false;
    });
    builder.addCase(fetchProductPopulate.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    builder.addCase(fetchProductById.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
      state.dataOne = payload.data;
      state.loading = false;
    });
    builder.addCase(fetchProductById.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchAddProduct.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAddProduct.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchAddProduct.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchUpdateProduct.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUpdateProduct.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchUpdateProduct.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchDeleteProduct.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDeleteProduct.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchDeleteProduct.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

const { actions: productActions, reducer: productReducer } = productSlice;
const useProduct = () => useSelector((state) => state.product);

export { productActions, useProduct };
export default productReducer;
