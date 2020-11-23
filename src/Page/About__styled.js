import React from 'react'
import styled from 'styled-components';


export const Cursor = styled.div`
    display:none;

    @media only screen and (min-width: 1025px) {
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

    @media only screen and (min-width: 1025px) {
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

export const Wrap = styled.section`
    width: 100%;
    box-sizing: border-box;
`;

export const AboutWrap = styled.div`

    @media only screen and (min-width: 1025px) {
        margin: 0;
        width: 84%;
        height: 100vh;
        overflow-y: scroll;
        float: right;
        padding: 80px 0 0 40px;
        box-sizing: border-box;
    }
`;

export const MainHeader = styled.header`

    position: relative;
    width: 100%;
    margin-bottom: 54px;
    
    h1 {
        font-size: 4rem;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 8px 0 2px 0;
        line-height: 4rem;
        color: #bbbbbb;
    }
    p {
        position: absolute;
        font-family: S-CoreDream-1Thin,sans-serif;
        font-size: 1.3rem;
        z-index: 999;
        color: #bbbbbb;
    }

    @media only screen and (min-width: 768px) {
        margin-bottom: 140px;
        h1 {
            font-size: 7rem;
            font-family: "Squada One", cursive;
            font-weight: 400;
            margin: 0 0 8px 0;
            line-height: 5rem;
            color: #bbbbbb;
        }
        p {
            position: absolute;
            font-family: S-CoreDream-1Thin,sans-serif;
            font-size: 2.6rem;
            z-index: 999;
        }
    }


    @media only screen and (min-width: 1025px) {
        clear: both;

        margin-bottom: 140px;
        
        
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
            font-family: S-CoreDream-1Thin,sans-serif;
            font-size: 80px;
            z-index: 999;
        }
    }
`;


export const About__header = styled.section`
    padding-top: 6rem;
    width: 100%;

    p {
        width: 80%;
        font-family: Noto Sans KR,sans-serif;
        font-size: 1.1rem;
        line-height: 1.9;
        padding: 1rem 6%;
        margin: 0 0 1rem 0;
        color: #777;
        font-weight: 300;
        white-space: pre-line;
    }
    .image__box {
        width: 100%;
        height: 40vh;

        background-color: #999;
    }
`;

export const Section = styled.section`
    width: 100%;
    
`;