import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { fetchAllOrder, fetchChangeStatus } from "./orderThunk";

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

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
    },
    resetValue: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllOrder.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAllOrder.fulfilled, (state, { payload }) => {
      state.data = payload.data;
      state.pagination = { ...state.pagination, ...payload.paginations };
      state.loading = false;
    });
    builder.addCase(fetchAllOrder.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchChangeStatus.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchChangeStatus.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchChangeStatus.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

const { actions: orderActions, reducer: orderReducer } = orderSlice;
const useOrder = () => useSelector((state) => state.order);

export { orderActions, useOrder };
export default orderReducer;
