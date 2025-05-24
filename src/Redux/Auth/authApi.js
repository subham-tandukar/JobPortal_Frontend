// actions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../Constant";

export const userInfo = createAsyncThunk(
  "userInfo",
  async (token, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        `${BASE_URL}/api/userInfo`,
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

export const appliedList = createAsyncThunk(
  "appliedList",
  async (token, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        `${BASE_URL}/api/appliedList`,
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
