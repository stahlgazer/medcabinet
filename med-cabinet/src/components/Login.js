import React, { useState } from "react";
import axios from "axios";

export default function Login(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });
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
        setError("Invalid Username or Password, Please Try Again.");
        console.log("show user:", error);
        console.log("Login failed for:", userData.username, userData.password);
      });
  };
  return (
    <form onSubmit={handleSubmit} name="login" className="login">
      <label htmlFor="username">Username: </label>
      <input
        // required
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
      />

      <label className="loginlabels" htmlFor="password">
        Password:{" "}
      </label>
      <input
        // required
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <button name="submit">Log in</button>
      {error && <p>{error}</p>}
    </form>
  );
}
