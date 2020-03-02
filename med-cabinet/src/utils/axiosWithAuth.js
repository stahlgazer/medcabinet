import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    // update base url when server is up
    baseURL: "https://build-week-04-med-cabinet.herokuapp.com/api",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
