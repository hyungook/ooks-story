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
export const WorkWrap = styled.section`

    margin-top: 2.8rem;

    padding: 1rem 1rem;    

    @media only screen and (min-width: 768px) {
        margin-top: 4.4rem;
    }
    @media only screen and (min-width: 1025px) {
        margin: 0;
        width: 84%;
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
        font-family: "SCDream1",sans-serif;
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
            font-family: "SCDream1",sans-serif;
            font-size: 2.6rem;
            z-index: 999;
        }
    }


    @media only screen and (min-width: 1025px) {
        clear: both;

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
            font-family: "SCDream1",sans-serif;
            font-size: 80px;
            z-index: 999;
        }
    }
`;

export const MainBody = styled.section`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    margin-bottom: 2rem;
    
    ul {
        width: 100%;
    }
`;

export const PortfoUl = styled.ul`
    width: 100%;

    @media only screen and (min-width: 1281px) {

    }
    
`;

export const PortfoLI = styled.li`

    position: relative;
    width: 100%;
    height: 180px;
    display: inline-block;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 20px;

    background-color: teal;

    @media only screen and (min-width: 768px) {
        position: relative;
        width: 47%;
        height: 180px;
        display: inline-block;
        box-sizing: border-box;
        overflow: hidden;
        margin-bottom: 20px;
    
        // 홀수
        :nth-child(odd) {
            margin-right: 6%;
        } 
        // 짝수
        :nth-child(even) {
            transform: translate(0, -30%);
        } 
    }


    @media only screen and (min-width: 1025px) {

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
    }

`;

export const PortfoA = styled.a`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-decoration: none;
    background-color: rgba(17, 17, 17, 0.2);
    z-index: 999;

    .wrap {
        position: absolute;
        padding: 0 6%;
        width: 100%;
        bottom: 0;
        left: 0;
        margin-bottom: 4px;
    }

    div:nth-child(1) {
        font-size: 2.6rem;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 0 0 1rem 0;
        line-height: 1rem;
        color: #fff;
    }
    div:nth-child(2) {
        display: none;
    }


    @media only screen and (min-width: 768px) {
        div:nth-child(1) {
            font-size: 2.6rem;
            font-family: "Squada One", cursive;
            font-weight: 400;
            margin: 0 0 0.8rem 0;
            line-height: 1rem;
            color: #fff;
        }
        div:nth-child(2) {
            display: none;
        }
    }


    @media only screen and (min-width: 1025px) {
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
            line-height: 2.4rem;
            color: #fff;
        }
        div:nth-child(2) {
            display: inline-block;
            font-family: "SCDream1",sans-serif;
            font-size: 18px;
            font-weight: 600;
            line-height: 22px;
            color: #ff75a3;
            margin-bottom: 40px;
        }
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
    padding: 0 0 100px 0;
    strong {
        font-size: 2.4rem;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 0 0 40px 0;
        line-height: 1.4rem;
        color: #bbbbbb;
    }
    .subTitle {
        // position: absolute;
        font-family: "SCDream1",sans-serif;
        font-size: 1.3rem;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .mainText {
        width: 86%;
        font-family: "SCDream1",sans-serif;
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 1.5rem;
    }


    @media only screen and (min-width: 1024px) {
        padding: 0 0 300px 0;

        strong {
            font-size: 60px;
            margin: 0 0 10px 0;
            line-height: 80px;
        }
        
        .subTitle {
            font-family: "SCDream1",sans-serif;
            font-size: 30px;
            margin: 0 0 30px 0;
        }
        .mainText {
            width: 80%;
            font-family: "SCDream1",sans-serif;
            font-size: 1.1rem;
            font-weight: 400;
            line-height: 1.5rem;
        }
    }

    
`;