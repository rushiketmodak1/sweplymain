import { createAsyncThunk } from "@reduxjs/toolkit";
import SignUpAuth from "../../../../services/authServices/signupAuth";

const authThunkAPI = {
 
  signupAsync: createAsyncThunk(
    "signup",
    async (payload) => {
      const response = await SignUpAuth.signup(payload);
      return response;
    }
  ),
};

export default authThunkAPI;
