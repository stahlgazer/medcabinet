import React, { useState } from "react";
import axios from "axios";

export default function Register(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    purpose: "",
    tolerance: undefined,
    conditions: "",
    effects: ""
  });
  const [error, setError] = useState("");

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      // update api url when available
      .post("http://localhost:5000/api/login", userData)
      .then(response => {
        console.log("Successful Login", response);
        localStorage.setItem("token", response.data.payload);
        props.history.push("/browse");
      })
      .catch(err => {
        console.log(err);
        setError("Please Fill Out All Required Fields");
        console.log("show user:", error);
        console.log("Login failed for:", userData.username, userData.password);
      });
  };
  return (
    <form onSubmit={handleSubmit} name="login">
      <label htmlFor="username">Username: </label>
      <input
        // required
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password: </label>
      <input
        // required
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <label htmlFor="purpose">Purpose: </label>
      <select name="purpose">
        <option value={userData.purpose}>Recreational</option>
        <option value={userData.purpose}>Medical</option>
      </select>
      <label htmlFor="tolerance">Tolerance Level: </label>
      <select name="tolerance">
        <option value={userData.tolerance}>None - 0</option>
        <option value={userData.tolerance}>Low - 1</option>
        <option value={userData.tolerance}>Intermediate - 2</option>
        <option value={userData.tolerance}>High - 3</option>
      </select>
      <button name="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
}
