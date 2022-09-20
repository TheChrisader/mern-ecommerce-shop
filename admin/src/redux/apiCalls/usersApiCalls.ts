import axios from "axios";
import { Dispatch } from "react";
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
    const response = await axios.get("/product");
    dispatch(getUsersSuccess(response.data));
  } catch (err: any) {
    dispatch(getUsersFailure(err?.response?.data?.message));
  }
};

export const deleteUser = async (dispatch: Dispatch<any>, id: any) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete(`/product/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err: any) {
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
    const response = await axios.put(`/product/${id}`, product);
    const updatedProduct = response.data;
    dispatch(updateUserSuccess({ id, updatedProduct }));
    window.location.replace(`/product/${response.data.slug}`);
  } catch (err: any) {
    dispatch(updateUserFailure(err?.response?.data?.message));
  }
};
