import { createSlice } from "@reduxjs/toolkit";
import { applyJob, jobList, jobSingle } from "./jobListApi";

const initialState = {
  jobs: [],
  singleJobs: [],
  error: null,
  isLoading: false,
  success: false,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
      state.isLoading = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(jobList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(jobList.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(jobList.rejected, (state, action) => {
        // console.log("Error", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(jobSingle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(jobSingle.fulfilled, (state, action) => {
        state.singleJobs = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(jobSingle.rejected, (state, action) => {
        // console.log("Error", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(applyJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(applyJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(applyJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { clearError } = jobsSlice.actions;

export default jobsSlice.reducer;
