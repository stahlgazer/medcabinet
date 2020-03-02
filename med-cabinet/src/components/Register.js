import React, { useState } from "react";
import axios from "axios";

export default function Register(props) {
  console.log(props, 'contact props')
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    medicinalUse: false,
    tolerance: 0,
    medicalConditions: "",
    desiredEffect: ""
  });
  const [error, setError] = useState("");

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData, "userData at time of post");

    userData.tolerance = Number(userData.tolerance);
    console.log(userData.tolerance);

    if (userData.medicinalUse === "true") {
      userData.medicinalUse = true;
    } else {
      userData.medicinalUse = false;
    }

    console.log("medicinal value", userData.medicinalUse);

    axios
      .post(
        "https://build-week-04-med-cabinet.herokuapp.com/api/auth/register",
        userData
      )
      .then(response => {
        console.log("Successful Login", response);
        localStorage.setItem("token", response.data.payload);
        localStorage.setItem("ID", response.data.userID);
        props.history.push("/browse");
      })
      .catch(err => {
        console.log(err);
        setError("Error Processing Your Request, Try Again Later");
        console.log("show user:", error);
        console.log("Login failed for:", userData.username, userData.password);
      });
  };
  return (
    <form onSubmit={handleSubmit} name="login">
      <label htmlFor="username">Username: </label>
      <input
        required
        autoFocus
        type="text"
        name="username"
        placeholder="JohnSmith"
        value={userData.username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password: </label>
      <input
        required
        type="password"
        name="password"
        placeholder="********"
        value={userData.password}
        onChange={handleChange}
      />

      <label>Medicinal or Recreational Use: </label>
      <select
        name="medicinalUse"
        value={userData.medicinalUse}
        onChange={handleChange}
      >
        <option name="medicinalUse" value={true}>
          Medicinal
        </option>
        <option name="medicinalUse" value={false}>
          Recreational
        </option>
      </select>

      <label htmlFor="tolerance">Tolerance Level: </label>
      <select
        name="tolerance"
        value={userData.tolerance}
        onChange={handleChange}
      >
        <option name="tolerance" value={0}>
          None
        </option>
        <option name="tolerance" value={1}>
          Beginner
        </option>
        <option name="tolerance" value={2}>
          Intermediate
        </option>
        <option name="tolerance" value={3}>
          Regular
        </option>
        <option name="tolerance" value={4}>
          High
        </option>
      </select>

      <label htmlFor="medicalConditions">Medical Conditions: </label>
      <input
        type="text"
        name="medicalConditions"
        placeholder="List anything that should be taken into consideration"
        value={userData.medicalConditions}
        onChange={handleChange}
      />

      <label htmlFor="desiredEffect">Desired Effect: </label>
      <input
        type="text"
        name="desiredEffect"
        placeholder="Pain relief, anxiety, depression"
        value={userData.desiredEffect}
        onChange={handleChange}
      />

      <label>I Hereby Certify That I'm Over The Age of 21.</label>
      <input required type="checkbox" />

      <button name="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
}
