import React from 'react'
import styled from 'styled-components';

export const Section = styled.section`
    width: 16%;
    height: 100vh;

    // background-color: #222;
`;
export const Header__top = styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    // background-color: #444;
    background-color: #111;
`;
export const Backword = styled.button`
    padding: 0.2rem 0.8rem;

    // background-color: blue;

    .icon {
        font-size: 2.8rem;
        color: #777;
    }
`;
export const Header__bottom = styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #111;
`;
export const Menu__button = styled.button`

    width:30px;
    height: 50px;
    // background-color: #111;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .span {
        width: 100%;
        height: 3px;
        
        margin-bottom: 5px;

        background-color: #777;
    }

`;