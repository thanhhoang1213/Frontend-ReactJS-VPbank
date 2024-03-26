import { createAsyncThunk } from "@reduxjs/toolkit";
import productAPI from "../../api/productAPI";

export const fetchAllProduct = createAsyncThunk(
  "product/fetchGetAllProduct",
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await productAPI.get({ params });
      return response;
    } catch (error) {
      return rejectWithValue(error?.response?.message ?? error?.message);
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
