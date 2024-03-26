import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  loading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

const { actions: appActions, reducer: appReducer } = appSlice;
const useApp = () => useSelector((state) => state.app);

export { appActions, useApp };
export default appReducer;
