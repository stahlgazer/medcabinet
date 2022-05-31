import React from "react";
import { Button } from "@material-ui/core";
import { addFavorite } from "../actions/index";
import { connect } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";

const BrowseCard = (props) => {
  const addSubmit = (elem) => {
    axiosWithAuth()
    // change to session storage
      .post(`/users/${sessionStorage.getItem("ID")}/favs`, elem)
      .then((response) => {
        console.log("added fav:", response.data);
      })
      .catch((error) => {
        console.log("added fav error:", error);
      });
  };

  return (
    <>
      <div className="favs-container">
        {props.strain.map((elem, i) => (
          <div key={i} className="dashboard-favs">
            <img
              alt={elem.name}
              src={require("../img/botanical-rising-ierZlNiWba0-unsplash.jpg")}
            />
            <p><b>Strain:</b> {elem.Strain}</p>
            <p><b>Type: </b>{elem.Type}</p>
            <p><b>Flavors: </b>{elem.Flavor}</p>
            <p><b>Effects: </b>{elem.Effects}</p>
            <p className="descriptions"><b>Description: </b>{elem.Description}</p>
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                props.addFavorite(elem);
                addSubmit(elem);
              }}
            >
              Add Favorite
            </Button>
          </div>
        ))}
      </div>
      {/* string form here */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, { addFavorite })(BrowseCard);
