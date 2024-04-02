
import axiosInstance from "../apiAuthServices/axios";
import { getHeaders } from "../apiAuthServices/apiHeaders";

let headers = {};
let response = "";

const LoginAuth = {
  //Login
  login: async function (payload) {
    try {
      let response = await axiosInstance.post(`/login`, payload);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
};

export default LoginAuth;
