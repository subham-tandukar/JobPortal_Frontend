import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const loginSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { signInStart, signInFailure, signInSuccess, signOut } =
  loginSlice.actions;

export default loginSlice.reducer;
