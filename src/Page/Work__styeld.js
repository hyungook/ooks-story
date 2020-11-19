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
        z-index: 999;
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
    
        z-index: 999;
    }
`;

export const WorkWrap = styled.section`
    width: 84%;
    float: right;
    padding: 80px 0 0 40px;
    box-sizing: border-box;
`;

export const MainHeader = styled.header`
    width: 100%;
    margin-bottom: 40px;
    
    // background-color: #333;
    
    h1 {
        font-size: 190px;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 0;
        line-height: 150px;
        color: #bbbbbb;
    }
    p {
        font-family: S-CoreDream-1Thin,sans-serif;
        font-size: 50px;
    }
`;

export const MainBody = styled.section`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    

ul {
    width: 100%;

    // background-color: blue;
}

`;

export const PortfoLI = styled.li`
    position: relative;
    width: 47%;
    height: 360px;
    // margin-right: 4%;
    padding: 0 40px;
    display: inline-block;

    margin-bottom: 60px;
    



    background-color: teal;



    :nth-child(1),:nth-child(3) {
        margin-right: 6%;
    }

`;

export const PortfoA = styled.a`
    position absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 12%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    // background-color: red;


    div {
        width: 100%;
        margin-bottom: 10px;


        // background-color: pink;
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
        color: #ff75a3;
    }
`;