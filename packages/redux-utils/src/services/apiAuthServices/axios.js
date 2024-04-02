import axios from "axios";
import * as secure from "../../../../utils/secure";
import { getHeaders } from "./apiHeaders";
const isEncryptDecryptEnabled =
  process.env.NEXT_PUBLIC_IS_ENCRYPT_DECRYPT_ENABLED == "ENABLED";
// create instance of axios
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// request middleware
axiosInstance.interceptors.request.use(
  async (config1) => {
    let config = config1;
    if (typeof window !== "undefined") {
      config.headers["authorization"] = getHeaders();
    }
    let temp_data = { bytes: null };
    if (isEncryptDecryptEnabled) {
      temp_data["bytes"] = await secure.encryptData(config.data);
      config.data = temp_data;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// responce middleware
axiosInstance.interceptors.response.use(
  async (result) => {
    let res = result;
    let temp_data = res?.data?.data;
    if (isEncryptDecryptEnabled) {
      temp_data = await secure.decrypteData(temp_data);
      res.data.data = await temp_data;
    }
    return res;
  },
  async (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
