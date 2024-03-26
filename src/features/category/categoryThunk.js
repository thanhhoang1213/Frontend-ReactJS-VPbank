import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryAPI from "../../api/categoryAPI";
import { appActions } from "../app/appSlice";
import { toast } from "sonner";

export const fetchAllCategory = createAsyncThunk(
  "product/fetchAllCategory",
  async (params = {}, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await categoryAPI.get({ params });
      return response;
    } catch (error) {
      const message = error?.response?.data.message ?? error?.message;
      return rejectWithValue(message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchCategoryById = createAsyncThunk(
  "product/fetchCategoryById",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await categoryAPI.getById(id);

      return response;
    } catch (error) {
      const message = error?.response?.data.message ?? error?.message;
      return rejectWithValue(message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchAddCategory = createAsyncThunk(
  "product/fetchAddCategory",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await categoryAPI.post(data);

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

export const fetchUpdateCategory = createAsyncThunk(
  "product/fetchUpdateCategory",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await categoryAPI.put(data);

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

export const fetchDeleteCategory = createAsyncThunk(
  "product/fetchDeleteCategory",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await categoryAPI.delete(id);

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
