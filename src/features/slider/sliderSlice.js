import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import {
  fetchAddSlider,
  fetchDeleteSlider,
  fetchSliderById,
  fetchSliders,
  fetchUpdateSlider,
} from "./sliderThunk";

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

const sliderSlice = createSlice({
  name: "slider",
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
    builder.addCase(fetchSliders.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchSliders.fulfilled, (state, { payload }) => {
      state.data = payload.metadata;
      state.loading = false;
    });
    builder.addCase(fetchSliders.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    builder.addCase(fetchSliderById.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchSliderById.fulfilled, (state, { payload }) => {
      state.error = "";
      state.dataOne = payload.metadata;
      state.loading = false;
    });
    builder.addCase(fetchSliderById.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    builder.addCase(fetchAddSlider.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAddSlider.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchAddSlider.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    builder.addCase(fetchUpdateSlider.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUpdateSlider.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchUpdateSlider.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    builder.addCase(fetchDeleteSlider.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDeleteSlider.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchDeleteSlider.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

const { actions: sliderActions, reducer: sliderReducer } = sliderSlice;
const useSlider = () => useSelector((state) => state.slider);

export { sliderActions, useSlider };
export default sliderReducer;
