
import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://build-week-04-med-cabinet.herokuapp.com/api",
    headers: {
      // change to session storage
      Authorization: sessionStorage.getItem("token")
    }
  });
};

export default axiosWithAuth
