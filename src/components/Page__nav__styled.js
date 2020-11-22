import React from 'react'
import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    display: flex;
    padding: 0.4rem 1rem;

    @media only screen and (min-width: 768px) {

    }

    @media only screen and (min-width: 1024px) {
        display: block;
        width: 16%;
        height: 100vh;
        padding: 0;
        position: fixed;
        float: left;
    }

    @media only screen and (min-width: 1281px) {

    }
`;

export const Header__top = styled.div`
    width: 50%;

    display: flex;
    justify-content: left;
    align-items: center;
    cursor: none;

    @media only screen and (min-width: 1024px) {
        clear: both;    
        width: 100%;
        height: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: none;
    }

`;
export const Backword = styled.button`
    width: 50px;
    height: 50px;
    padding: 0.2rem 0.8rem;

    .link {
        width: 100%;
        height: 100%;
    }
    .icon {
        font-size: 2rem;
        color: #fff;
        cursor: none;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;
    }

    @media only screen and (min-width: 1024px) {
        cursor: none;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;

        .icon {
            font-size: 2.8rem;
            color: #777;
        }

        :hover {
            .icon {
                color: #fff;
            }
        }
    }
    
`;
export const Header__bottom = styled.div`
    
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;



    @media only screen and (min-width: 1024px) {
        width: 100%;
        height: 50%;
    
        justify-content: center;
        cursor: none;
        position: relative;
    }

`;
export const Menu__button = styled.button`
    width:44px;
    height: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: start;

    padding: 0.2rem 0.8rem 0.2rem 0;

    .span {
        width: 100%;
        height: 2px;
        margin-bottom: 8px;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;

        background-color: #fff;
    }
    .span:nth-child(2) {
        width: 80%;
    }
    .span:nth-child(3) {
        margin-bottom: 0;
    }

    @media only screen and (min-width: 1024px) {
        width:50px;
        height: 50px;
        padding: 0 10px;
        align-items: start;
        cursor: none;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;

        .span {
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
    }

    
`;

export const HomeMenu = styled.ul`
    display: none;
    padding: 0.2rem 0.1rem;
    background-color: #111;

    border-radius: 0 0 0 1rem;
    box-shadow: 10px 5px 5px hsla(0, 0%, 0%, 0.4);

    li {
        font-size: 2rem;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 0 0 12px 0;
        padding: 0.4rem 1rem;
        line-height: 26px;
        color: #bbbbbb;

        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;
    }


    @media only screen and (min-width: 1024px) {
        position: absolute;
        visibility:hidden;
        display: block;
        padding: 0;
        // top: 60px;
        top: 100px;
        text-align: center;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 800ms;
        opacity: 0;

        li {
            width: auto;
            font-size: 32px;
            font-family: "Squada One", cursive;
            font-weight: 400;
            margin: 0 0 12px 0;
            padding: 0;
            line-height: 26px;
            color: #bbbbbb;

            transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;

            :hover {
                color: #fff;
            }
        }
    }
    
`;