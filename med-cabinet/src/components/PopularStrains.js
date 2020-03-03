import React from 'react';
import styled from 'styled-components';

const StrainCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid gray;
    width: 20%;
    background-color: #C3EBEA;
`;

const StrainDiv = styled.div`
    margin-top: 10%;
    border-radius: 30%;
    background-color: #5fb2d7;
    width: 50%;
`;

const NewH4 = styled.h4`
    color: yellow;
    text-align: left;
    margin-left: 10%;

`;

const NewH1 = styled.h1`
    color: white;
`;

const NewH2 = styled.h2`
    color: #2f5973;
`;

const PopularStrains = () => {
    return (
        <div>
            <StrainCard>
                <StrainDiv>
                    <NewH4>Hybrid</NewH4>
                    <NewH1>C99</NewH1>
                </StrainDiv>
                <div>
                    <NewH2>Cindarella 99</NewH2>
                </div>
            </StrainCard>
        </div>
    );
};

export default PopularStrains;