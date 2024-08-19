import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export default axiosInstance;
