
import axiosInstance from "../apiAuthServices/axios";
import { getHeaders } from "../apiAuthServices/apiHeaders";

let headers = {};
let response = "";

const userServices = {
  //get country
  getCountry: async function (payload) {
    try {
      let response = await axiosInstance.get(`/users`);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
};

export default userServices;
