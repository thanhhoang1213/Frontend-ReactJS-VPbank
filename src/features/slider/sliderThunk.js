import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryAPI from "../../api/categoryAPI";
import { appActions } from "../app/appSlice";
import { toast } from "sonner";
import sliderAPI from "../../api/sliderAPI";

export const fetchSliders = createAsyncThunk(
  "slider/fetchSliders",
  async (params = {}, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await sliderAPI.get({ params });
      return response;
    } catch (error) {
      const message = error?.response?.data.message ?? error?.message;
      return rejectWithValue(message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchSliderById = createAsyncThunk(
  "product/fetchSliderById",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await sliderAPI.getById(id);

      return response;
    } catch (error) {
      const message = error?.response?.data.message ?? error?.message;
      return rejectWithValue(message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchAddSlider = createAsyncThunk(
  "product/fetchAddSlider",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await sliderAPI.postForm(data);

      toast.success(response.message);
      return response;
    } catch (error) {
      const message = error?.response?.data.message ?? error?.message;
      toast.error(message);
      return rejectWithValue(message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchUpdateSlider = createAsyncThunk(
  "product/fetchUpdateSlider",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await sliderAPI.patchForm(data);

      toast.success(response.message);

      return response;
    } catch (error) {
      const message = error?.response?.data.message ?? error?.message;
      toast.error(message);
      return rejectWithValue(message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchDeleteSlider = createAsyncThunk(
  "product/fetchDeleteSlider",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await sliderAPI.delete(id);

      toast.success(response.message);

      return response;
    } catch (error) {
      const message = error?.response?.data.message ?? error?.message;
      toast.error(message);
      return rejectWithValue(message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);
