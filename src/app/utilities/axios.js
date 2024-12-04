import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SITE_URL + "/api/",
});

axiosInstance.interceptors.request.use(
  (request) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response, // Directly return successful responses.
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.
      try {
        const refreshToken = localStorage.getItem("refresh_token"); // Retrieve the stored refresh token.
        const response = await axios({
          method: "post",
          url: "/api/token/refresh/",
          data: {
            refresh: refreshToken,
          },
          headers: {
            authorization: "Bearer " + refreshToken,
          },
        });
        const accessToken = response.data.access;
        const newRefreshToken = response.data.refresh;
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", newRefreshToken);
        axiosInstance.defaults.headers.common[
          "Authorization"
          ] = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest); // Retry the original request with the new access token.
      } catch (refreshError) {
        if (refreshError.response.status === 401){
          localStorage.clear();
          return Promise.reject(refreshError);
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error); // For all other errors, return the error as is.
  }
);

export default axiosInstance;
