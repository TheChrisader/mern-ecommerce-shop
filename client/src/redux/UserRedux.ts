import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = false;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  userSlice.actions;
export default userSlice.reducer;
