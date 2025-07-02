import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const authorization = `Bearer ${import.meta.env.VITE_API_TOKEN}`;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: authorization,
  },
});

export default axiosInstance;
