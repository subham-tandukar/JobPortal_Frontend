import { createSlice } from "@reduxjs/toolkit";
import { featuredList, featuredSingle } from "./FeaturedApi";

const initialState = {
  featured: [],
  singleFeatured: [],
  error: null,
  isLoading: true,
  success: false,
  loader: false,
};

const featuredSlice = createSlice({
  name: "featured",
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
      .addCase(featuredList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(featuredList.fulfilled, (state, action) => {
        state.featured = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(featuredList.rejected, (state, action) => {
        // console.log("Error", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(featuredSingle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(featuredSingle.fulfilled, (state, action) => {
        state.singleFeatured = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(featuredSingle.rejected, (state, action) => {
        // console.log("Error", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default featuredSlice.reducer;
