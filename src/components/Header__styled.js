import React from 'react'
import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;
export const HeaderWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;

    background-color: #111;
`;
export const Cursor = styled.div`
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
`;
export const Cursor2 = styled.div`
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
`;

export const HeaderTop = styled.div`
    width: 100%;
    height: 16vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderUl = styled.ul`
    max-width: 340px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLi = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color 0.4s linear;
`;
export const HeaderA = styled.a`
    padding: 0.1rem 1.5rem;
    text-decoration: none;
    font-family: Noto Sans KR, sans-serif;
    font-size: 1.2rem;
    line-height: 1.9;
    color: #777;
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
`;

export const Section = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;
export const MainNav = styled.nav`
    position: relative;
    width: 100%;
    height: 64vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const MainNavWrap = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 10;
`;

export const MainNavWrapA = styled.a`
    transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
    transition-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);

    :nth-child(1) {
        transform: translate(-10%, 0);
      }
    :nth-child(1):hover {
        transform: translate(10%, 0);
    }
    :nth-child(3) {
        transform: translate(10%, 0);
        transition-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);
      }
      :nth-child(3):hover {
        transform: translate(-10%, 0);
      }
`;
export const NavBtn = styled.button`
    font-family: "Squada One", cursive;
    font-size: 160px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 0.8;
    text-transform: uppercase;
    color: #bbbbbb;
    cursor: none;
    transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;

    :hover {
        color: #fff;
        letter-spacing: 10px;
    }
    :focus {
        color: #fff;
        letter-spacing: 10px;
    }
`;

export const NameBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ToyProjrct = styled.button`
    font-family: Squada One, sans-serif;
    font-weight: 400;
    position: absolute;
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
        opacity: 0.2;
    }
`;
export const ButtonBackBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
`;

export const BackBox = styled.div`
    width: 600px;
    height: 100%;
    background-color: #222e3e;

    :nth-child(1) {
        transform: translate(-50%, 0);
    }
    :nth-child(2) {
        transform: translate(50%, 0);
      }
`;