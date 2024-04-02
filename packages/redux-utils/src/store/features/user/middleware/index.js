import { createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "../../../../services/userServices";

const userThunkAPI = {
 
  getCountryAsync: createAsyncThunk(
    "getCountry",
    async (payload) => {
      const response = await userServices.getCountry(payload);
      return response;
    }
  ),
};

export default userThunkAPI;
