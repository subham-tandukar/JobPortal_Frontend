// authApi.js

import axios from "axios";

const baseURL = "https://jobportal-backend-g159.onrender.com/api/admin";

export const loginApi = async (username, password) => {
  try {
    const response = await axios.post(`${baseURL}/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
