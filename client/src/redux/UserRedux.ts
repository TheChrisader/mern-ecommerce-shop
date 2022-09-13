import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null as any,
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
    registerStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = false;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
    updateSavedItems: (state, action) => {
      state.currentUser.savedItems.push(action.payload);
    },
    removeSavedItem: (state, action) => {
      state.currentUser.savedItems = state.currentUser.savedItems.filter(
        (item: any) => item.productSlug !== action.payload
      );
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logOut,
  updateSavedItems,
  removeSavedItem,
} = userSlice.actions;
export default userSlice.reducer;
