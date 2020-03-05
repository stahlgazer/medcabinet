import React from "react";
// import axiosWithAuth from "./axiosWithAuth";

export default function Testcode(props) {
  console.log("register props", props);

  // axiosWithAuth()
  //   .get(`/users/${localStorage.getItem('ID')}`)
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  // code for retrieving recommendations
  // const [recommendation, setRecommendation] = useState("");
  // const [results, setResults] = useState([]);
  // const handleChange = event => {
  //   setRecommendation({
  //     ...recommendation,
  //     [event.target.name]: event.target.value
  //   });
  // };
  // axiosWithAuth()
  //   .post(
  //     `https://cors-anywhere.herokuapp.com/https://med-cab-app.herokuapp.com/test`,
  //     recommendation
  //   )
  //   .then(response => {
  //     console.log(response.data);
  //     setResults(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  return <div></div>;
}
