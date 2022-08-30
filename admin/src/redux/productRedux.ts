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
    // CREATE
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    addProductSuccess: (state, action) => {
      state.products.push(action.payload);
      state.isFetching = false;
    },
    addProductFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    // DELETE
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    deleteProductSuccess: (state, action) => {
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
      state.isFetching = false;
    },
    deleteProductFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    // UPDATE
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    updateProductSuccess: (state, action) => {
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.updatedProduct;
      state.isFetching = false;
    },
    updateProductFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
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
  addProductStart,
  addProductSuccess,
  addProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  productsLogOut,
} = productSlice.actions;
export default productSlice.reducer;
