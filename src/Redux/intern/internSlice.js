import { createSlice } from "@reduxjs/toolkit";
import { internList } from "./internApi";

const initialState = {
  interns: [],
  error: null,
  isLoading: true,
  success: false,
};

const internSlice = createSlice({
  name: "interns",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
      state.isLoading = true;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(internList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(internList.fulfilled, (state, action) => {
        state.interns = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(internList.rejected, (state, action) => {
        // console.log("Error", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default internSlice.reducer;
