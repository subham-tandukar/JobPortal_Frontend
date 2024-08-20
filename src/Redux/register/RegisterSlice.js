import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const registerSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    registerFailure: (state, action) => {
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

export const { registerStart, registerFailure, registerSuccess, signOut } =
  registerSlice.actions;

export default registerSlice.reducer;
