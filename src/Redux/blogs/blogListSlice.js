import { createSlice } from "@reduxjs/toolkit";
import { blogList, blogSingle } from "./blogListApi";

const initialState = {
  blogs: [],
  singleBlog: [],
  error: null,
  isLoading: true,
  success: false,
};

const blogSlice = createSlice({
  name: "blogs",
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
      .addCase(blogList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(blogList.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(blogList.rejected, (state, action) => {
        // console.log("Error", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(blogSingle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(blogSingle.fulfilled, (state, action) => {
        state.singleBlog = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(blogSingle.rejected, (state, action) => {
        // console.log("Error", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;
