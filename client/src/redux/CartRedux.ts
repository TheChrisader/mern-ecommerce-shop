import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as any,
  },
  reducers: {
    addProduct: (state, action) => {
      state.cart = action.payload;
    },
    cartLogOut: (state) => {
      state.cart = [];
    },
  },
});

export const { addProduct, cartLogOut } = cartSlice.actions;
export default cartSlice.reducer;
