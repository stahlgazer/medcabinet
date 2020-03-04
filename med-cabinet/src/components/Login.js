import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

export default function Login(props) {
  // console.log( 'login props', props)
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "https://build-week-04-med-cabinet.herokuapp.com/api/auth/login",
        userData
      )
      .then(response => {
        console.log("Successful Login", response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("ID", response.data.userID);
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
    <form className="gavforms" onSubmit={handleSubmit} name="login">
      <label className="gavlabels" htmlFor="username">
        Username:{" "}
      </label>
      <input
        className="gavinputs"
        required
        type="text"
        name="username"
        placeholder="JohnSmith"
        value={userData.username}
        onChange={handleChange}
      />

      <label className="gavlabels" htmlFor="password">
        Password:{" "}
      </label>
      <input
        className="gavinputs"
        required
        type="password"
        name="password"
        placeholder="********"
        value={userData.password}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Log in
      </Button>
      <Button
        onClick={() => props.history.push("/register")}
        variant="contained"
        color="secondary"
      >
        Register
      </Button>
      {error && <p>{error}</p>}
    </form>
  );
}