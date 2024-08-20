import { createSlice } from "@reduxjs/toolkit";
import {
  categoryApi,
  filterJob,
  jobTypeApi,
  locationApi,
} from "./filterJobApi";

const initialState = {
  filterJobs: [],
  jobTypeList: [],
  locationList: [],
  categoryList: [],
  error: null,
  isLoading: true,
  success: false,
  jobDesignation: "",
  jobType: "",
  category: "",
  location: "",
  searchItem: "",
};

const filterjobsSlice = createSlice({
  name: "filterjobs",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
      state.isLoading = true;
      state.success = false;
    },
    setJobDesignation: (state, action) => {
      state.jobDesignation = action.payload;
    },
    resetJobDesignation: (state) => {
      state.jobDesignation = "";
    },
    setJobType: (state, action) => {
      state.jobType = action.payload;
    },
    resetJobType: (state) => {
      state.jobType = "";
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    resetCategory: (state) => {
      state.category = "";
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    resetLocation: (state) => {
      state.location = "";
    },
    setSearchItem: (state, action) => {
      state.searchItem = action.payload;
    },
    resetSearchItem: (state) => {
      state.searchItem = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterJob.fulfilled, (state, action) => {
        state.filterJobs = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(filterJob.rejected, (state, action) => {
        // console.log("Error", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(jobTypeApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(jobTypeApi.fulfilled, (state, action) => {
        state.jobTypeList = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(jobTypeApi.rejected, (state, action) => {
        // console.log("Error", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(locationApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(locationApi.fulfilled, (state, action) => {
        state.locationList = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(locationApi.rejected, (state, action) => {
        // console.log("Error", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(categoryApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(categoryApi.fulfilled, (state, action) => {
        state.categoryList = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(categoryApi.rejected, (state, action) => {
        // console.log("Error", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setJobDesignation,
  resetJobDesignation,
  setJobType,
  resetJobType,
  setCategory,
  resetCategory,
  setLocation,
  resetLocation,
  setSearchItem,
  resetSearchItem,
} = filterjobsSlice.actions;

export default filterjobsSlice.reducer;
