import { createAsyncThunk } from "@reduxjs/toolkit";
import contentAPI from "../../api/contentAPI";
import { appActions } from "../app/appSlice";
import { toast } from "sonner";

export const fetchContents = createAsyncThunk(
  "slider/fetchContents",
  async (params = {}, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await contentAPI.get({ params });
      return response;
    } catch (error) {
      const message = error?.response?.data.message ?? error?.message;
      return rejectWithValue(message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchContentBySlug = createAsyncThunk(
  "slider/fetchContentBySlug",
  async (slug, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await contentAPI.get({ params: {}, prefix: "/slug/" + slug });
      return response;
    } catch (error) {
      const message = error?.response?.data.message ?? error?.message;
      return rejectWithValue(message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchContentById = createAsyncThunk(
  "product/fetchContentById",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await contentAPI.getById(id);

      return response;
    } catch (error) {
      const message = error?.response?.data.message ?? error?.message;
      return rejectWithValue(message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchAddContent = createAsyncThunk(
  "product/fetchAddContent",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await contentAPI.post(data);

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

export const fetchUpdateContent = createAsyncThunk(
  "product/fetchUpdateContent",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await contentAPI.patch(data.id, data);

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

export const fetchDeleteContent = createAsyncThunk(
  "product/fetchDeleteContent",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await contentAPI.delete(id);

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
