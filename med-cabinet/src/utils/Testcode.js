import React from "react";
// import axiosWithAuth from "./axiosWithAuth";

export default function Testcode(props) {
  console.log("register props", props);

  //        grabbing current user
  // axiosWithAuth()
  //   .get(`/users/${localStorage.getItem('ID')}`)
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  //        recommendations from backend
  // axiosWithAuth()
  //   .get(`recs`)
  //   .then(response => {
  //     console.log('recommendations:', response);
  //   })
  //   .catch(error => {
  //     console.log('recommendations error:', error);
  //   });

  //      retrieving recommendations from ds
  // const [recommendation, setRecommendation] = useState("");
  // const [results, setResults] = useState([]);
  // const handleChange = event => {
  //   setRecommendation({
  //     ...recommendation,
  //     [event.target.name]: event.target.value
  //   });
  // };



  //post request for ds api information

    //   const rec = "test recommendation"
  // axios
  //   .post(
  //     `https://cors-anywhere.herokuapp.com/https://med-cab-app.herokuapp.com`,
  //     rec
  //   )
  //   .then(response => {
  //     console.log("ds api response", response);
  //   })
  //   .catch(error => {
  //     console.log("ds api error", error);
  //   });

  return <div></div>;
}
