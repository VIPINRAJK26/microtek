import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://server.warriorind.in/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;