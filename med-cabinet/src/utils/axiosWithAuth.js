import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://build-week-04-med-cabinet.herokuapp.com/api",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
