import { createAsyncThunk } from "@reduxjs/toolkit";
import { appActions } from "../app/appSlice";
import orderAPI from "./../../api/orderAPI";
import { toast } from "sonner";

export const fetchAllOrder = createAsyncThunk(
  "other/fetchAllOrder",
  async (params = {}, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));
      const response = await orderAPI.get({ params });
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message ?? error?.message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);

export const fetchChangeStatus = createAsyncThunk(
  "other/fetchChangeStatus",
  async (id = {}, { rejectWithValue, dispatch }) => {
    try {
      dispatch(appActions.setLoading(true));
      const response = await orderAPI.patch(id, {}, "/ChangeStatus/" + id);
      toast.success(response.message);
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message ?? error?.message);
    } finally {
      dispatch(appActions.setLoading(false));
    }
  }
);
