import axios from "axios";
import { Dispatch } from "react";
import { loginStart, loginSuccess, loginFailure } from "./userRedux";

type userResponse = {
  username: string;
  password: string;
};

export const login = async (dispatch: Dispatch<any>, user: userResponse) => {
  dispatch(loginStart());
  try {
    const response = await axios.post("/auth/login", user);
    if (!response.data.isAdmin) throw new Error("You Are Not Authorized.");
    // window.location.replace("/");
    dispatch(loginSuccess(response.data));
  } catch (err: any) {
    dispatch(
      loginFailure(
        err?.response?.data?.message ? err.response.data.message : err.message
      )
    );
  }
};
