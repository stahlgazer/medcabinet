import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://build-week-04-med-cabinet.herokuapp.com/api",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};

export default axiosWithAuth
