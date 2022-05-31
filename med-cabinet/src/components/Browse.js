import React, { useState, useEffect } from "react";
import BrowseCard from "./BrowseCard";
import axios from "axios";
import { addFavorite } from "../actions/index";
import { connect } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";
import { CircularProgress } from "@material-ui/core";

const Browse = (props) => {
  const [strain, setStrain] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axiosWithAuth()
    // change to session storage
      .get(`/users/${sessionStorage.getItem("ID")}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .post(
        `https://med-cab-app.herokuapp.com/test`,
        JSON.stringify(user.desiredEffect)
      )
      .then((res) => {
        console.log(res.data);
        setStrain(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.desiredEffect]);

  return (
    <div>
      {isLoading ? <CircularProgress style={{ margin: "auto", padding: '5%'}} /> :
        <BrowseCard strain={strain} setStrain={setStrain} />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, { addFavorite })(Browse);
