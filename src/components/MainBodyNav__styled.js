import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    width: 100vw;
    height: 64vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media only screen and (min-width: 768px) {
        display: flex;
        align-items: start;
        position: relative;
        width: 66%;
        height: 60vh;
        padding: 126px 0 0 40px;
        
        float: right;
    }
    
    @media only screen and (min-width: 1025px) {
        clear: both;
        padding: 0;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
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

    z-index: 999;


    @media only screen and (min-width: 768px) {
        display: block
        justify-content: left;
        align-items: stretch;
    }

    @media only screen and (min-width: 1025px) {
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


    @media only screen and (min-width: 768px) {
        justify-content: center;
        align-items: start;
        flex-direction: column; 
    }
    
    @media only screen and (min-width: 1025px) {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        z-index: 10;
    }
`;
export const NavBtn = styled.button`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 0;
    margin: 0.2rem 0;
    opacity: 0;
    animation-name: opacityEffect;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);

    @keyframes opacityEffect {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 100%;
        }
    }

    .MainBtn {
        font-size: 6rem;
        font-family: "Squada One", cursive;
        font-weight: 400;
        letter-spacing: 0;
        color: #bbbbbb;
        white-space: nowrap;
        text-decoration: none;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
        cursor: none;
        line-height: 1;
    }

    @media only screen and (min-width: 768px) {
        justify-content: start;
        align-items: center;
        font-size: 120px;
        padding: 0;
        font-family: "Squada One", cursive;
        line-height: 1;
        font-weight: 400;
        letter-spacing: 0;
        color: #bbbbbb;

        .MainBtn {
            font-size: 7.5rem;
        }
    }
    @media only screen and (min-width: 958px) {
        .MainBtn {
            font-size: 10rem;
        }
    }
    @media only screen and (min-width: 1025px) {
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
        cursor: none;
        
        .MainBtn {
            font-size: 13rem;
        }
        .MainBtn:hover, .MainBtn:focus {
            cursor: none;
            font-size: 14rem;
            color: #fff;
            letter-spacing: 0.9rem;
        }
    }

    @media only screen and (min-width: 1281px) {
        // cursor: none;
        .MainBtn {
            // font-size: 11rem;
        }
    }
`;

export const ButtonBackBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    z-index: 0;

    @media only screen and (min-width: 768px) {
        display: none;
    }

    @media only screen and (min-width: 1025px) {
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
    width: 36%;
    height: 60%;
    // background-color: #222e3e;
    background-color: #181d2b;
    animation-name: scaleEffect;
    animation-duration: 1000ms;
    animation-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);
    z-index: 0;

    @keyframes scaleEffect {
        0% {
        height: 0;
        }
        100% {
        height: 60%;
        }
    }
    @media only screen and (min-width: 1025px) {
        width: 600px;
        height: 100%;
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