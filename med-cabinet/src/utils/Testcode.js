import React from "react";
import axiosWithAuth from "./axiosWithAuth";

export default function Testcode(props) {
  console.log( 'register props', props)
  
  axiosWithAuth()
    .get(`/users/${localStorage.getItem('ID')}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <div>
    
    </div>
  );
}
