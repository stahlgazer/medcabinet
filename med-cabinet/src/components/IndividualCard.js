import React from 'react';
import Sample from '../img/sample_img.jpg';
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
`;

const ImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-right: 5%;
`;

const AboutDiv = styled.div`
    text-align: left;
    width: 40%;
    margin-left: 5%;
    color: #2f5973
`;

const ImgButton = styled.button`
    width: 35%;
    margin: 2%;
    color: white;
    background-color: #70bccf;
    border-radius: 4%;
    height: 40px;
`;


const IndividualCard = (props) => {
    
    
    return (
        
        <Section>
            <ImgDiv>
                <img src={Sample} alt=''/>
                <div>
                    <ImgButton type='button'>Favorite</ImgButton>
                    <ImgButton type='button'>Share</ImgButton>
                </div>  
            </ImgDiv>
            <AboutDiv>
                <h1>Blue Dream</h1>
                <h3>Common Effects</h3>
                    <p>Relaxed, Happy, Uplifted, Euphoric, Creative</p>
                <h3>Tastes and Flavors</h3>
                    <p>Blueberry, Berry, Sweet</p>
                <h3>Details</h3>
                    <p></p>
            </AboutDiv>
        </Section>
    );
};

export default IndividualCard;