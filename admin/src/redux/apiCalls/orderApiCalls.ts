import axios from "axios";
import { Dispatch } from "react";
import {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
} from "../orderRedux";

export const getOrders = async (dispatch: Dispatch<any>) => {
  dispatch(getOrdersStart());
  try {
    const response = await axios.get("/order");
    dispatch(getOrdersSuccess(response.data));
  } catch (err: any) {
    console.log(err);
    dispatch(getOrdersFailure(err?.response?.data?.message));
  }
};

export const deleteOrder = async (dispatch: Dispatch<any>, id: any) => {
  dispatch(deleteOrderStart());
  try {
    await axios.delete(`/order/${id}`);
    dispatch(deleteOrderSuccess(id));
  } catch (err: any) {
    dispatch(deleteOrderFailure(err?.response?.data?.message));
  }
};

export const updateOrder = async (
  dispatch: Dispatch<any>,
  id: string,
  order: any
) => {
  dispatch(updateOrderStart());
  try {
    const response = await axios.put(`/order/${id}`, order);
    const updatedProduct = response.data;
    dispatch(updateOrderSuccess({ id, updatedProduct }));
    //   window.location.replace(`/order/${response.data.slug}`);
  } catch (err: any) {
    dispatch(updateOrderFailure(err?.response?.data?.message));
  }
};
