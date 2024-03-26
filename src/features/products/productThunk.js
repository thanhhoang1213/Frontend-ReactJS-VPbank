import { createAsyncThunk } from "@reduxjs/toolkit";
import productAPI from "../../api/productAPI";
import { appActions } from "../app/appSlice";
import { toast } from "sonner";

export const fetchAllProduct = createAsyncThunk(
  "product/fetchGetAllProduct",
  async (params = {}, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));
      const response = await productAPI.get({ params });
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message ?? error?.message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchProductPopulate = createAsyncThunk(
  "product/fetchProductPopulate",
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await productAPI.get({ params: params });
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.message ?? error?.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await productAPI.getById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.message ?? error?.message);
    }
  }
);

export const fetchAddProduct = createAsyncThunk(
  "product/fetchAddProduct",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await productAPI.postForm(data);

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

export const fetchUpdateProduct = createAsyncThunk(
  "product/fetchUpdateProduct",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await productAPI.patchForm(data);

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

export const fetchDeleteProduct = createAsyncThunk(
  "product/fetchDeleteProduct",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await productAPI.delete(id);

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
