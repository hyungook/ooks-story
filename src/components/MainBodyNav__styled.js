import React from 'react'
import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;

    @media only screen and (min-width: 768px) {
        position: relative;
        width: 66%;
        height: 60vh;
        padding: 120px 0 0 40px;
        // overflow: hidden;
        float: right;
        display: flex;
    }
    
    @media only screen and (min-width: 1024px) {
        clear: both;
        padding: 0;
        position: relative;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        overflow: hidden;
    }
    @media only screen and (min-width: 1281px) {
        cursor: none;
    }
`;
export const MainNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    // background-color: orange;

    @media only screen and (min-width: 768px) {
        display: block
        justify-content: left;
        align-items: stretch;
    }

    @media only screen and (min-width: 1024px) {
        padding: 0;
        position: relative;
        width: 100%;
        height: 64vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    
`;
export const MainNavWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column; 
    align-items: center;

    // background-color: yellow;


    @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: left;
        flex-direction: column; 
        align-items: stretch;
    }
    
    @media only screen and (min-width: 1024px) {

        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        z-index: 10;
    }
`;

export const MainNavWrapA = styled.a`
    padding: 0.5rem 0;
    z-index: 9999;

    // background-color: green;

    @media only screen and (min-width: 768px) {
        pading: 0;
        // display: flex;
        // justify-content: left;
    }
    @media only screen and (min-width: 1024px) {

        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
        transition-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);


        :nth-child(1) {
            transform: translate(-16%, 0);
        }
        :nth-child(2) {
            transform: translate(20%, 0);
        }
        :nth-child(3) {
            min-width: 630px;

            transform: translate(30%, 0);
        }

        button a:hover{
            color: #fff;
            letter-spacing: 10px;
            font-size: 200px;
        }
        :nth-child(3) button a:hover {
            letter-spacing: 6px;
        }
        
    }
`;
export const NavBtn = styled.button`
    font-size: 76px;
    padding: 0.1rem 0;
    font-family: "Squada One", cursive;
    font-weight: 400;
    letter-spacing: 0;
    color: #bbbbbb;

    :focus {
        color: #fff;
    }

    
    @media only screen and (min-width: 768px) {
        font-size: 120px;
        padding: 0.2rem 0;
        font-family: "Squada One", cursive;
        font-weight: 400;
        letter-spacing: 0;
        color: #bbbbbb;

        :hover {
            color: #fff;
            letter-spacing: 6px;
        }
        :focus {
            color: #fff;
            letter-spacing: 6px;
        }
    }

    @media only screen and (min-width: 1025px) {
        padding: 0;
        color: #bbbbbb;
        font-size: 190px;
        line-height: 0.8;
        text-transform: uppercase;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
    }
    a {
        color: #bbbbbb;
        text-decoration: none;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
        cursor: none;
    }

    // a:hover {
    //     color: #fff;
    //     letter-spacing: 8px;
    //     font-size: 210px;
    // }


    @media only screen and (min-width: 1281px) {
        cursor: none;
    }
`;

export const ButtonBackBox = styled.div`
    
    display: none;

    // position: absolute;
    // width: 100%;
    // height: 100%;
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    // overflow: hidden;

    @media only screen and (min-width: 768px) {
        display: none;
    }

    @media only screen and (min-width: 1024px) {
        position: absolute;
        width: 100%;
        height: 100%;
    
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
    }
`;

export const BackBox = styled.div`

    width: 20px;
    height: 100%;
    background-color: #222e3e;
    animation-name: scaleEffect;
    animation-duration: 1000ms;
    animation-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);

    @keyframes scaleEffect {
        0% {
        height: 0;
        }
        100% {
        height: 100%;
        }
    }

    
    @media only screen and (min-width: 1024px) {
        width: 600px;
        height: 100%;
        background-color: #222e3e;
        animation-name: scaleEffect;
        animation-duration: 1000ms;
        animation-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);

        @keyframes scaleEffect {
            0% {
              height: 0;
            }
            100% {
              height: 100%;
            }
        }
        
        :nth-child(1) {
            transform: translate(-50%, 0);
        }
        :nth-child(2) {
            transform: translate(50%, 0);
        }
    }
`;