import React, { useState, useEffect } from 'react';
import BrowseCard from './BrowseCard';
import BrowseHeader from './BrowseHeader';
import IndividualCard from './IndividualCard';
import PopularStrains from './PopularStrains';
import axios from 'axios';

const Browse = (props) => {
    // console.log( 'browse props', props)
  
    const [strain, setStrain] = useState([]);
    
    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
             .then(res => {
               console.log(res.data);
               setStrain(res.data.results)
             })
             .catch(err => {
               console.log(err)
             })
      }, [])
    
    return (
        <div>
            <BrowseHeader />
            <BrowseCard strain={strain} setStrain={setStrain}/>
            <IndividualCard />
            <PopularStrains />
        </div>
    );
};

export default Browse;