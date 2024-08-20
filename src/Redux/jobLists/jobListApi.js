import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const jobList = createAsyncThunk("jobList", async (data, thunkAPI) => {
  try {
    const response = await axios.get(
      `https://jobportal-backend-g159.onrender.com/api/jobList`
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      // If the error status is 422, extract the error message from the response data
      return thunkAPI.rejectWithValue(error.response.data);
    } else {
      // For other errors, simply reject with the error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const jobSingle = createAsyncThunk(
  "jobSingle",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://jobportal-backend-g159.onrender.com/api/jobList/${data}`
      );

      return response.data;
    } catch (error) {
      if (error.response) {
        // If the error status is 422, extract the error message from the response data
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        // For other errors, simply reject with the error message
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const applyJob = createAsyncThunk(
  "applyJob",
  async ({ data, token }, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        "Content-Type": "multipart/form-data",
      };
      const response = await axios.post(
        `https://jobportal-backend-g159.onrender.com/api/applyJob`,
        data,
        {
          headers,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        // If the error status is 422, extract the error message from the response data
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        // For other errors, simply reject with the error message
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
