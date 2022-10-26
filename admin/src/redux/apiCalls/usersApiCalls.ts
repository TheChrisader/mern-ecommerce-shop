import axios from "axios";
import { Dispatch } from "react";
import EventBus from "../../utils/services/EventBus";
import {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../usersRedux";

export const getUsers = async (dispatch: Dispatch<any>) => {
  dispatch(getUsersStart());
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + "/user");
    dispatch(getUsersSuccess(response.data));
  } catch (err: any) {
    if (
      err?.response?.data?.message === "You are not authenticated" ||
      err?.response?.data?.message === "Forbidden Access"
    ) {
      await EventBus.dispatch("logout");
    }
    dispatch(getUsersFailure(err?.response?.data?.message));
  }
};

export const deleteUser = async (dispatch: Dispatch<any>, id: any) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/user/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err: any) {
    if (
      err?.response?.data?.message === "You are not authenticated" ||
      err?.response?.data?.message === "Forbidden Access"
    ) {
      await EventBus.dispatch("logout");
    }
    dispatch(deleteUserFailure(err?.response?.data?.message));
  }
};

export const updateUser = async (
  dispatch: Dispatch<any>,
  id: string,
  product: any
) => {
  dispatch(updateUserStart());
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/${id}`,
      product
    );
    const updatedProduct = response.data;
    dispatch(updateUserSuccess({ id, updatedProduct }));
    window.location.replace(`/product/${response.data.slug}`);
  } catch (err: any) {
    if (
      err?.response?.data?.message === "You are not authenticated" ||
      err?.response?.data?.message === "Forbidden Access"
    ) {
      await EventBus.dispatch("logout");
    }
    dispatch(updateUserFailure(err?.response?.data?.message));
  }
};
