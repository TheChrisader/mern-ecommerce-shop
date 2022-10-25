import { createSlice } from "@reduxjs/toolkit";

type myUsersState = {
  users: any[];
  isFetching: boolean;
  error: string | null;
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isFetching: false,
    error: null,
  } as myUsersState,
  reducers: {
    // GET ALL
    getUsersStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.isFetching = false;
    },
    getUsersFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    // DELETE
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    deleteUserSuccess: (state, action) => {
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
      state.isFetching = false;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    // UPDATE
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    updateUserSuccess: (state, action) => {
      state.users[
        state.users.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.updatedUser;
      state.isFetching = false;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    usersLogOut: (state) => {
      state.users = [];
    },
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  usersLogOut,
} = userSlice.actions;
export default userSlice.reducer;
