import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://server.warriorind.in/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;