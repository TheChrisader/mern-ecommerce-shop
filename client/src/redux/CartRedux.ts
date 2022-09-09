import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as any,
  },
  reducers: {
    getCart: (state, action) => {
      state.cart = action.payload;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { getCart, updateCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
