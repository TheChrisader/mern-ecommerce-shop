import { createSlice } from "@reduxjs/toolkit";

type myOrderState = {
  orders: any[];
  isFetching: boolean;
  error: string | null;
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    isFetching: false,
    error: null,
  } as myOrderState,
  reducers: {
    // GET ALL
    getOrdersStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    getOrdersSuccess: (state, action) => {
      state.orders = action.payload;
      state.isFetching = false;
    },
    getOrdersFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    // DELETE
    deleteOrderStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    deleteOrderSuccess: (state, action) => {
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload),
        1
      );
      state.isFetching = false;
    },
    deleteOrderFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    // UPDATE
    updateOrderStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    updateOrderSuccess: (state, action) => {
      state.orders[
        state.orders.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.updatedProduct;
      state.isFetching = false;
    },
    updateOrderFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    ordersLogOut: (state) => {
      state.orders = [];
    },
  },
});

export const {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
  ordersLogOut,
} = orderSlice.actions;
export default orderSlice.reducer;
