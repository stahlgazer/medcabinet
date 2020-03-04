import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Dashboard(props) {
  // console.log( 'dashboard props', props)
const [preferences, setPreferences] = useState({})
const [change, setChange] = useState(false);

useEffect(() => {
  setChange(false);
  axiosWithAuth()
    .get(`/users/${localStorage.getItem('ID')}`)
    .then(response => {
      console.log("user data request", response.data);
      setPreferences(response.data);
    })
    .catch(error => {
      console.log("error from server:", error);
    });
}, [change]);
  return ( 
    <div>
      {/* create form to update user preferences */}
      {preferences.username}
      {/* display saved favorites and add delete favorites */}
    </div>
  )
}