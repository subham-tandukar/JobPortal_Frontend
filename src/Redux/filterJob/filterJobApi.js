import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const filterJob = createAsyncThunk(
  "filterJob",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://jobportal-backend-g159.onrender.com/api/filterJob?${data}`
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

export const jobTypeApi = createAsyncThunk(
  "jobTypeApi",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://jobportal-backend-g159.onrender.com/api/jobTypeList`
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
export const locationApi = createAsyncThunk(
  "locationApi",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://jobportal-backend-g159.onrender.com/api/location-count`
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
export const categoryApi = createAsyncThunk(
  "categoryApi",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://jobportal-backend-g159.onrender.com/api/categoryList`
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
