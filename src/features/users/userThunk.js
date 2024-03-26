import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";
import categoryAPI from "../../api/categoryAPI";
import contentAPI from "../../api/contentAPI";
import { appActions } from "../app/appSlice";
import userAPI from "./../../api/userAPI";

export const fetchUsers = createAsyncThunk(
  "slider/fetchUsers",
  async (params = {}, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await userAPI.get({ params });
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

export const fetchUserById = createAsyncThunk(
  "product/fetchUserById",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await userAPI.getById(id);

      return response;
    } catch (error) {
      const message = error?.response?.data.message ?? error?.message;
      return rejectWithValue(message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchUpdateUser = createAsyncThunk(
  "product/fetchUpdateUser",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await userAPI.patch(data.id, data);

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

export const fetchDeleteUser = createAsyncThunk(
  "product/fetchDeleteUser",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));

      const response = await userAPI.delete(id);

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
