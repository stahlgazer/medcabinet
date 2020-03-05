import React, { useState, useEffect } from 'react';
import BrowseCard from './BrowseCard';
// import IndividualCard from './IndividualCard';
// import PopularStrains from './PopularStrains';
import axios from 'axios';
import { addFavorite } from "../actions/index";
import { connect } from "react-redux";
import axiosWithAuth from '../utils/axiosWithAuth';

const Browse = (props) => {
    // console.log( 'browse props', props)
    const [strain, setStrain] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
      axiosWithAuth()
        .get(`/users/${localStorage.getItem('ID')}`)
        .then(res => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
  
    useEffect(() => {
      axios
        .post(`https://med-cab-app.herokuapp.com/test`, JSON.stringify(user.desiredEffect))
        .then(res => {
          console.log(res.data);
          setStrain(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, [user.desiredEffect]);
    
    return (
        <div>
            <BrowseCard strain={strain} setStrain={setStrain}/>
            {/* <IndividualCard />
            <PopularStrains /> */}
        </div>
    );
};

const mapStateToProps = state => {
  return {
  favorites: state.favorites,
  };
};

export default connect(mapStateToProps, { addFavorite })(Browse);