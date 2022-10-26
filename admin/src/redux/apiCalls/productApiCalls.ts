import axios from "axios";
import { Dispatch } from "react";
import EventBus from "../../utils/services/EventBus";
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
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "/product",
      {
        withCredentials: true,
      }
    );
    dispatch(getProductsSuccess(response.data));
  } catch (err: any) {
    if (
      err?.response?.data?.message === "You are not authenticated" ||
      err?.response?.data?.message === "Forbidden Access"
    ) {
      await EventBus.dispatch("logout");
    }
    dispatch(getProductsFailure(err?.response?.data?.message));
  }
};

export const addProduct = async (dispatch: Dispatch<any>, newProduct: any) => {
  dispatch(addProductStart());
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "/product",
      newProduct,
      {
        withCredentials: true,
      }
    );
    dispatch(addProductSuccess(response.data));
    window.location.replace(`/product/${response.data.slug}`);
  } catch (err: any) {
    if (
      err?.response?.data?.message === "You are not authenticated" ||
      err?.response?.data?.message === "Forbidden Access"
    ) {
      await EventBus.dispatch("logout");
    }
    dispatch(addProductFailure(err?.response?.data?.message));
  }
};

export const deleteProduct = async (dispatch: Dispatch<any>, id: any) => {
  dispatch(deleteProductStart());
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/product/${id}`, {
      withCredentials: true,
    });
    dispatch(deleteProductSuccess(id));
  } catch (err: any) {
    if (
      err?.response?.data?.message === "You are not authenticated" ||
      err?.response?.data?.message === "Forbidden Access"
    ) {
      await EventBus.dispatch("logout");
    }
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
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/product/${id}`,
      product,
      {
        withCredentials: true,
      }
    );
    const updatedProduct = response.data;
    dispatch(updateProductSuccess({ id, updatedProduct }));
    window.location.replace(`/product/${response.data.slug}`);
  } catch (err: any) {
    if (
      err?.response?.data?.message === "You are not authenticated" ||
      err?.response?.data?.message === "Forbidden Access"
    ) {
      await EventBus.dispatch("logout");
    }
    dispatch(updateProductFailure(err?.response?.data?.message));
  }
};
