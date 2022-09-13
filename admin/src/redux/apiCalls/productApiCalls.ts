import axios from "axios";
import { Dispatch } from "react";
import {
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
} from "../productRedux";

export const getProducts = async (dispatch: Dispatch<any>) => {
  dispatch(getProductsStart());
  try {
    const response = await axios.get("/product");
    dispatch(getProductsSuccess(response.data));
  } catch (err: any) {
    dispatch(getProductsFailure(err?.response?.data?.message));
  }
};

export const addProduct = async (dispatch: Dispatch<any>, newProduct: any) => {
  dispatch(addProductStart());
  try {
    const response = await axios.post("/product", newProduct);
    dispatch(addProductSuccess(response.data));
    window.location.replace(`/product/${response.data.slug}`);
  } catch (err: any) {
    dispatch(addProductFailure(err?.response?.data?.message));
  }
};

export const deleteProduct = async (dispatch: Dispatch<any>, id: any) => {
  dispatch(deleteProductStart());
  try {
    await axios.delete(`/product/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err: any) {
    dispatch(deleteProductFailure(err?.response?.data?.message));
  }
};

export const updateProduct = async (
  dispatch: Dispatch<any>,
  id: string,
  product: any
) => {
  dispatch(updateProductStart());
  try {
    const response = await axios.put(`/product/${id}`, product);
    const updatedProduct = response.data;
    dispatch(updateProductSuccess({ id, updatedProduct }));
    window.location.replace(`/product/${response.data.slug}`);
  } catch (err: any) {
    dispatch(updateProductFailure(err?.response?.data?.message));
  }
};
