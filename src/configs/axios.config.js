import axios from "axios";

export function setInterceptors() {
  // Add a request interceptor
  axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("accessToken");
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  });

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      alert("there is an error. please try again");

      // if (error.response.status === 401) {
      //   const token = localStorage.getItem("refreshToken");
      //
      //   const newToken = await axios.post("/refresh-token", { refreshToken: token });
      //
      //   localStorage.setItem("accessToken", newToken);
      // }

      return Promise.reject(error);
    }
  );
}
