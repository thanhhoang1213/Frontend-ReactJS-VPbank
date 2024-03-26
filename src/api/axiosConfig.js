import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BE_ENDPOINT,
  withCredentials: true,
});

instance.interceptors.request.use(
  function (config) {
    const xClientId = localStorage.getItem("x-client-id");

    if (xClientId) {
      config.headers["x-client-id"] = xClientId;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

export default instance;
