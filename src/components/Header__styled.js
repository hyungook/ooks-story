import React from 'react'
import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    box-sizing: border-box;

    overflow: hidden;
`;
export const HeaderWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;

    background-color: #111;
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

export const HeaderTop = styled.div`
    width: 100%;
    height: 80px;
    padding: 40px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 768px) {
        float: left;
        width: 34%;
        height: 50vh;
        padding: 140px 20px 0 20px;
        overflow: hidden;
    }

    @media only screen and (min-width: 1024px) {
        clear: both;
        width: 100%;
        height: 16vh;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const HeaderUl = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0 20%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media only screen and (min-width: 768px) {
        padding: 0;
        display: flex;
        justify-content: left;
        align-items: center;
        flex-direction: column;
    }

    @media only screen and (min-width: 1024px) {
        max-width: 340px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
`;

export const HeaderLi = styled.li`
    position: relative;
    border-bottom: 1px solid #777;

    :focus {
        border-bottom: 1px solid #fff;
    }

    @media only screen and (min-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #777;

        margin-bottom: 0.8rem;   
    }


    @media only screen and (min-width: 1024px) {
        position: relative;
        // transition: color 0.4s linear;
        border: none;
    }
`;
export const HeaderA = styled.a`    
    width: 100%;
    font-size: 0.9rem;
    font-weight: 300;
    padding: 1rem 0;
    text-decoration: none;
    font-family: Noto Sans KR, sans-serif;
    color: #777;

    :focus {
        color: #fff;
    }

    @media only screen and (min-width: 768px) {
        font-size: 1.4rem;
    }

    @media only screen and (min-width: 1024px) {
        padding: 0.1rem 1.5rem;
        font-size: 1.2rem;
        line-height: 1.9;
        font-weight: 300;
        white-space: pre-line;
        transition-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);

        z-index: 1; 

        :hover {
            color: #111;
        }

        ::before {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #ffffff;

            transform: scaleY(0);
            transform-origin: bottom;

            transition: transform 0.8s;
            transition-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);
            transform: scaleY(0);

            z-index: -1;
        }

        :hover::before {
            transform: scaleY(1);
            transform-origin: top;
        }
    }
`;

export const Section = styled.section`
    position: relative;
    width: 100%;
    height: 70%;

    display: flex;
    justify-content: center;


    // background-color: red;


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

    // background-color: green;

    @media only screen and (min-width: 768px) {
        pading: 0;
        // display: flex;
        // justify-content: left;
    }

    @media only screen and (min-width: 1024px) {
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
        transition-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);
    
        // :hover ~ a {
        //     opacity: 0.4;
        // }

        :nth-child(1) {
            transform: translate(-10%, 0);
        }
        :nth-child(1):hover {
            transform: translate(8%, 0);
        }
        :nth-child(2) {
            transform: translate(20%, 0);

        }
        :nth-child(3) {
            transform: translate(30%, 0);
            transition-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);
        }
        :nth-child(3):hover {
            transform: translate(-4%, 0);
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
        font-size: 200px;
        line-height: 0.8;
        text-transform: uppercase;
        cursor: none;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
    
        :hover {
            color: #fff;
            letter-spacing: 10px;
            font-size: 210px;
        }
        :focus {
            color: #fff;
            letter-spacing: 10px;
        }
    }
`;

export const NameBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    @media only screen and (min-width: 1024px) {
    }
`;
export const ToyBtn = styled.button`
    font-family: Squada One, sans-serif;
    font-weight: 400;
    position: absolute;
    font-size: 36px;
    padding: 0;
    bottom: 70px;
    color: #999;
    border-bottom: 2px solid #2966ff;

    @media only screen and (min-width: 768px) {
        font-size: 46px;
    }


    @media only screen and (min-width: 1024px) {
        font-size: 46px;
        padding: 0 0.2em;
        bottom: 90px;
        color: #777;
        border-bottom: 1px solid #2966ff;
        line-height: 1.2;
        cursor: none;
        transition-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);
        z-index: 1;
    
        :hover {
            color: #111;
            transition-delay: 0.1s;
        }
        ::before {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #ffffff;
          
            transform: scaleY(0);
            transform-origin: bottom;
          
            transition: transform 0.8s;
            transition-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);
            transform: scaleY(0);
          
            z-index: -1;
        }
    
        :hover::before {
            transform: scaleY(1);
            transform-origin: top;
        }
    }
`;
export const Line = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        height: 65vh;
        width: 1px;

        background-color: #fff;
        opacity: 0.1;
    }

    @media only screen and (min-width: 1024px) {
        span {
            opacity: 0.2;
        }
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