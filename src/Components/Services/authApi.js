// authApi.js

import axios from "axios";
import BASE_URL from "../../Constant";

const baseURL = `${BASE_URL}/api/admin`;

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
