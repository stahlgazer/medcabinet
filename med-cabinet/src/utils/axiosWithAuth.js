// import React from "react";
import axios from "axios";

export const TEST_URL_POST = "https://reqres.in/api/users";
const TEST_MODE = true


// Custom axios Post for Testing registering users
export const axiosPost = (postUrl, payload) => {
  axios.post(`${postUrl}`, payload)
    .then(response => {
      if(TEST_MODE) {
        console.log(response)
      }
  })
    .catch(error => console.log('Post to server failed... ', error))
};

const axiosWithAuth = () => {
  return null;
};

export default axiosWithAuth;
