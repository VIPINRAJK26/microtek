import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
  
// Handle 401s
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const { config, response } = error;

//     const safeEndpoints = ["/cart_item", "/cart"];
//     const isSafe = safeEndpoints.some((url) => config.url?.includes(url));

//     if (response?.status === 401 && !isSafe) {
//       localStorage.removeItem("access_token");
//       window.location.href = "/login";
//     }

//     return Promise.reject(error);
//   }
// );


let isRedirecting = false; 

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { config, response } = error;

    const safeEndpoints = ["/cart_item", "/cart"];
    const isSafe = safeEndpoints.some((url) => config.url?.includes(url));

    if (response?.status === 401 && !isSafe && !isRedirecting) {
      isRedirecting = true; 
      localStorage.removeItem("access_token");

      setTimeout(() => {
        window.location.href = "/"; 
      }, 100);
    }

    return Promise.reject(error);
  }
);


export default axiosInstance;
