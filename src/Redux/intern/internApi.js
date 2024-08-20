import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const internList = createAsyncThunk(
  "internList",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://jobportal-backend-g159.onrender.com/api/internJob`
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
