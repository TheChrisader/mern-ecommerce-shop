import axios from "axios";
import { Dispatch } from "react";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logOut,
} from "./UserRedux";
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  productsLogOut,
} from "./ProductRedux";
import { getCart, emptyCart } from "./CartRedux";

type userResponse = {
  username: string;
  password: string;
};

export const login = async (dispatch: Dispatch<any>, user: userResponse) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "/auth/login",
      user,
      {
        withCredentials: true,
      }
    );
    dispatch(loginSuccess(response.data));
    const cart = await axios.get(
      process.env.REACT_APP_API_URL + `/cart/${response.data._id}`,
      {
        withCredentials: true,
      }
    );
    dispatch(getCart(cart.data.products));
    window.location.replace("/");
  } catch (err: any) {
    dispatch(
      loginFailure(
        err?.response?.data?.message ? err.response.data.message : err.message
      )
    );
  }
};

export const register = async (dispatch: Dispatch<any>, user: any) => {
  dispatch(registerStart());
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "/auth/register",
      user,
      {
        withCredentials: true,
      }
    );
    dispatch(registerSuccess(response.data));
    window.location.replace("/");
  } catch (err: any) {
    dispatch(
      registerFailure(
        err?.response?.data?.message ? err.response.data.message : err.message
      )
    );
  }
};

export const signOut = async (dispatch: Dispatch<any>) => {
  dispatch(logOut());
  dispatch(productsLogOut());
  dispatch(emptyCart());
  window.location.replace("/");
};

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
    dispatch(getProductsFailure(err?.response?.data?.message));
  }
};
