import React from 'react'
import styled from 'styled-components';

export const Section = styled.section`
    width: 16%;
    height: 100vh;
    position: fixed;
    float: left;


    @media only screen and (min-width: 768px) {

    }

    @media only screen and (min-width: 1024px) {

    }

    @media only screen and (min-width: 1281px) {
        
    }



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
    width: 50px;
    height: 50px;

    padding: 0.2rem 0.8rem;
    cursor: none;
    transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;

    // background-color: blue;

    .link {
        width: 100%;
        height: 100%;
    }
    .icon {
        font-size: 2.8rem;
        color: #777;
        cursor: none;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;
    }

    :hover {
        .icon {
            color: #fff;
        }
    }
`;
export const Header__bottom = styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: none;

    position: relative;

`;
export const Menu__button = styled.button`

    width:50px;
    height: 50px;
    padding: 0 10px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: start;
    cursor: none;
    transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;

    .span {
        width: 100%;
        height: 4px;
        margin-bottom: 6px;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;

        background-color: #777;
    }
    .span:nth-child(2) {
        width: 80%;
    }

    :hover {
        .span {
            background-color: #fff;
        }
        .span:nth-child(2) {
            width: 100%;
        }
    }
`;

export const HomeMenu = styled.ul`
    position: absolute;
    visibility:hidden;
    // display: block;
    // top: 60px;
    top: 100px;
    text-align: center;
    transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 800ms;
    opacity: 0;

    li {
        font-size: 32px;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 0 0 12px 0;
        line-height: 26px;
        color: #bbbbbb;

        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;

        :hover {
            color: #fff;
        }
    }
`;