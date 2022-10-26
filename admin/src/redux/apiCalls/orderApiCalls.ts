import axios from "axios";
import { Dispatch } from "react";
import EventBus from "../../utils/services/EventBus";
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
    const response = await axios.get(process.env.REACT_APP_API_URL + "/order", {
      withCredentials: true,
    });
    dispatch(getOrdersSuccess(response.data));
  } catch (err: any) {
    if (
      err?.response?.data?.message === "You are not authenticated" ||
      err?.response?.data?.message === "Forbidden Access"
    ) {
      await EventBus.dispatch("logout");
    }
    dispatch(getOrdersFailure(err?.response?.data?.message));
  }
};

export const deleteOrder = async (dispatch: Dispatch<any>, id: any) => {
  dispatch(deleteOrderStart());
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/order/${id}`);
    dispatch(deleteOrderSuccess(id));
  } catch (err: any) {
    if (
      err?.response?.data?.message === "You are not authenticated" ||
      err?.response?.data?.message === "Forbidden Access"
    ) {
      await EventBus.dispatch("logout");
    }
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
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/order/${id}`,
      order
    );
    const updatedProduct = response.data;
    dispatch(updateOrderSuccess({ id, updatedProduct }));
    //   window.location.replace(`/order/${response.data.slug}`);
  } catch (err: any) {
    if (
      err?.response?.data?.message === "You are not authenticated" ||
      err?.response?.data?.message === "Forbidden Access"
    ) {
      await EventBus.dispatch("logout");
    }
    dispatch(updateOrderFailure(err?.response?.data?.message));
  }
};
