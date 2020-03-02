import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    // update base url when server is up
    // baseURL: "http://localhost:5000/api/",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
