import styled from 'styled-components';

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
        z-index: 9999;
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
    
        z-index: 9999;
    }
`;

export const Header__Wrap = styled.section`
    width: 100%;
    z-index: 999;

    @media only screen and (min-width: 768px) {
        width: 34%;
        margin: 0;
        float: left;
    }
    @media only screen and (min-width: 1025px) {
        width: 100%;
        clear:both;
    }
    @media only screen and (min-width: 1281px) {
        cursor: none;
    }
`;
export const Container = styled.div`
    width: 100%;
    height: 140px;
    position: relative;
    box-sizing: border-box;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media only screen and (min-width: 768px) {
        width: 100%;
        height: auto;
        padding: 140px 30px 0 30px;
    }

    @media only screen and (min-width: 1025px) {
        padding: 60px 0;
    }
    // overflow: hidden;
`;


export const HeaderUl = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0 20px;
    
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

    @media only screen and (min-width: 1025px) {
        max-width: 340px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
`;

export const HeaderLi = styled.li`
    position: relative;
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

    @media only screen and (min-width: 1025px) {
        position: relative;
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

    @media only screen and (min-width: 1025px) {
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



