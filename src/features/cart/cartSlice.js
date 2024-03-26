import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

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

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCart: (state, { payload }) => {
      let dataClone = [...state.data];

      // Check 1: data có rỗng ko
      if (!dataClone.length) {
        dataClone.push({ ...payload, quantity: 1 });
        state.data = dataClone;
        return;
      }

      // Check 2: Tìm index product in cart
      const indexInCart = dataClone.findIndex((t) => t.id === payload.id);

      // Index === -1 chưa có trong cart
      if (indexInCart === -1) {
        dataClone.push({ ...payload, quantity: 1 });
        state.data = dataClone;
        return;
      }

      // Nếu đã tồn tại thì cộng 1 vô số lượng
      dataClone[indexInCart] = {
        ...dataClone[indexInCart],
        quantity: dataClone[indexInCart].quantity + 1,
      };

      state.data = dataClone;
    },

    minusOne: (state, { payload }) => {
      let dataClone = [...state.data];

      // Tìm index trong cart
      const indexInCart = dataClone.findIndex((t) => t.id === payload.id);

      if (indexInCart === -1) return;

      const item = dataClone[indexInCart];

      //  Nếu trừ 1 = 0 thì xóa khỏi mảng luôn
      if (item.quantity - 1 === 0) {
        dataClone = dataClone.filter((t) => t.id !== payload.id);
        state.data = dataClone;
        return;
      }

      // Nếu không = 0 thì -1 quantity
      dataClone[indexInCart] = {
        ...item,
        quantity: item.quantity - 1,
      };

      state.data = dataClone;
    },

    removeAll: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {},
});

const { actions: cartActions, reducer: cartReducer } = cartSlice;
const useCart = () => useSelector((state) => state.cart);

export { cartActions, useCart };
export default cartReducer;
