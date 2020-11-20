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
    transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;
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
`;
export const Menu__button = styled.button`

    width:30px;
    height: 50px;
    
    // background-color: #111;

    display: flex;
    justify-content: center;
    flex-direction: column;
    // align-items: center;
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
    display: none;
    // display: block;
`;