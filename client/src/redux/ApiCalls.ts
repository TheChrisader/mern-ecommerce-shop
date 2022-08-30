import axios from "axios";
import { Dispatch } from "react";
import { loginStart, loginSuccess, loginFailure, logOut } from "./UserRedux";
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  productsLogOut,
} from "./ProductRedux";

type userResponse = {
  username: string;
  password: string;
};

export const login = async (dispatch: Dispatch<any>, user: userResponse) => {
  dispatch(loginStart());
  try {
    const response = await axios.post("/auth/login", user);
    dispatch(loginSuccess(response.data));
  } catch (err: any) {
    dispatch(
      loginFailure(
        err?.response?.data?.message ? err.response.data.message : err.message
      )
    );
  }
};

export const signOut = async (dispatch: Dispatch<any>) => {
  dispatch(logOut());
  dispatch(productsLogOut());
};

export const getProducts = async (dispatch: Dispatch<any>) => {
  dispatch(getProductsStart());
  try {
    const response = await axios.get("/product");
    dispatch(getProductsSuccess(response.data));
  } catch (err: any) {
    dispatch(getProductsFailure(err?.response?.data?.message));
  }
};
