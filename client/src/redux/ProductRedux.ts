import { createSlice } from "@reduxjs/toolkit";

type myProductState = {
  products: any[];
  isFetching: boolean;
  error: string | null;
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: null,
  } as myProductState,
  reducers: {
    // GET ALL
    getProductsStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.isFetching = false;
    },
    getProductsFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    productsLogOut: (state) => {
      state.products = [];
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  productsLogOut,
} = productSlice.actions;
export default productSlice.reducer;
