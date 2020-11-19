import React from 'react'
import styled from 'styled-components';

export const Section = styled.section`
    width: 16%;
    height: 100vh;
    position: fixed;
    float: left;
`;
export const Header__top = styled.div`
    clear: both;
    
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: none;
`;
export const Backword = styled.button`
    padding: 0.2rem 0.8rem;
    cursor: none;
    .icon {
        font-size: 2.8rem;
        color: #777;
        cursor: none;
    }
`;
export const Header__bottom = styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: none;
`;
export const Menu__button = styled.button`

    width:30px;
    height: 50px;
    // background-color: #111;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: none;

    .span {
        width: 100%;
        height: 3px;
        
        margin-bottom: 5px;

        background-color: #777;
    }

`;