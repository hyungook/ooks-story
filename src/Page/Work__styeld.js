import React from 'react'
import styled from 'styled-components';


export const Header = styled.header`
    width: 100%;
    height: 100vh;
    color: #fff;
    // cursor: pointer;
    cursor: none;

    overflow-y: scroll;
    
`;

export const Cursor = styled.div`
    display:none;

    @media only screen and (min-width: 1281px) {
        display:block;
        position: fixed;
        width: 50px;
        height: 50px;
        border: 1px solid #c6c6c6;
        border-radius: 50%;
        left: 0;
        top: 0;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: 0.1s ease;
        z-index: 99999;
    }
`;
export const Cursor2 = styled.div`    
    display:none;

    @media only screen and (min-width: 1281px) {
        display:block;
        position: fixed;
        width: 4px;
        height: 4px;
        background-color: #2966ff20;
        border-radius: 50%;
        left: 0;
        top: 0;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
    
        z-index: 99999;
    }
`;
export const WorkWrap = styled.section`
    width: 84%;
    float: right;
    padding: 80px 0 0 40px;
    box-sizing: border-box;
`;

export const MainHeader = styled.header`
    position: relative;
    width: 100%;
    margin-bottom: 140px;
    
    // background-color: #333;
    
    h1 {
        // position: absolute;
        font-size: 190px;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 0 0 10px 0;
        line-height: 150px;
        color: #bbbbbb;
    }
    p {
        position: absolute;
        font-family: S-CoreDream-1Thin,sans-serif;
        font-size: 80px;
        z-index: 999;
    }
`;

export const MainBody = styled.section`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    margin-bottom: 100px;
    
    ul {
        width: 100%;
    }
`;

export const PortfoUl = styled.ul`
    width: 100%;
    
`;

export const PortfoLI = styled.li`
    position: relative;
    width: 47%;
    height: 380px;
    display: inline-block;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 60px;

    z-index: 10;

    background-color: teal;

    // 홀수
    :nth-child(odd) {
        margin-right: 6%;
        // transform: translate(0, -15%);
    } 
    // 짝수
    :nth-child(even) {
        transform: translate(0, -30%);
    } 

    // :nth-child(1),:nth-child(3) {
    //     margin-right: 6%;
    // }

    :hover {
       a {
        opacity: 1;   
       }
       img {
        transform: scale(1.1);
       }
    }

`;

export const PortfoA = styled.a`
    position: relative;
    
    width: 100%;
    height: 100%;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    z-index: 999;
    transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 800ms;
    text-decoration: none;

    opacity: 0;

    background-color: rgba(17, 17, 17, 0.7);

    .wrap {
        position: absolute;
        padding: 0 10%;
        width: 100%;
        bottom: 0;
        left: 0;
        margin-bottom: 10px;
    }

    div:nth-child(1) {
        font-size: 50px;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 0;
        line-height: 50px;
        color: #fff;
    }
    div:nth-child(2) {
        font-family: S-CoreDream-1Thin,sans-serif;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        color: #ff75a3;
        margin-bottom: 40px;
    }
`;

export const PortfoImg = styled.img`
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 800ms;
`;

export const Footer = styled.footer`
    width: 100%;

    padding: 0 0 300px 0;




    strong {
        font-size: 60px;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 0 0 10px 0;
        line-height: 80px;
        color: #bbbbbb;
    }
    
    .subTitle {
        // position: absolute;
        font-family: S-CoreDream-1Thin,sans-serif;
        font-size: 30px;
        margin-bottom: 30px;
    }
    .mainText {
        width: 80%;
        font-family: S-CoreDream-1Thin,sans-serif;
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.5rem;
    }
`;