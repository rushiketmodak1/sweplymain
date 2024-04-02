
import axiosInstance from "../apiAuthServices/axios";
import { getHeaders } from "../apiAuthServices/apiHeaders";

let headers = {};
let response = "";

const SignUpAuth = {
  //Sign Up
  signup: async function (payload) {
    try {
      let response = await axiosInstance.post(`/signup`, payload);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
};

export default SignUpAuth;
