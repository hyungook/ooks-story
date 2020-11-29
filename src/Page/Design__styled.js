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
        z-index: 9999;
    }
`;
export const Cursor2 = styled.div`
    display:none;

    @media only screen and (min-width: 1025px) {
        display:block;
        position: fixed;
        width: 4px;
        height: 4px;
        // background-color: #2966ff20;
        border-radius: 50%;
        left: 0;
        top: 0;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
        z-index: 9999;
    }
`;

export const Wrap = styled.section`
    width: 100%;
    box-sizing: border-box;
    background-color: #111;
    overflow-y: scroll;
`;

export const DesignWrap = styled.section`
    margin-top: 2.8rem;
    padding: 1rem 1rem;    
    

    @media only screen and (min-width: 768px) {
        margin-top: 4.4rem;
    }
    @media only screen and (min-width: 1025px) {
        margin: 0;
        width: 84%;
        float: right;
        // padding: 80px 0 0 40px;
        padding: 60px 0 0 40px;
        box-sizing: border-box;
    }
`;

export const MainHeader = styled.header`
    position: relative;
    width: 100%;
    padding: 1rem;
    margin: 1rem 1rem 3rem 1rem;
    
    h1 {
        font-size:5rem;
        font-family: "Squada One", "cursive";
        font-weight: 400;
        line-height: 6rem;
        color: #bbbbbb;
    }
    p {
        position: absolute;
        font-family: "SCDream1", "sans-serif";
        font-size: 1.2rem;
        z-index: 999;
        color: #bbbbbb;
    }

    @media only screen and (min-width: 768px) {
        margin-bottom: 100px;
        h1 {
            font-size: 10rem;
            font-family: "Squada One", "cursive";
            font-weight: 400;
            margin: 0 0 8px 0;
            line-height: 7.5rem;
            color: #bbbbbb;
        }
        p {
            position: absolute;
            font-family: "SCDream1", "sans-serif";
            font-size: 2.6rem;
            z-index: 999;
        }
    }
    @media only screen and (min-width: 1025px) {
        clear: both;
        margin-bottom: 140px;
        
        h1 {
            font-size: 180px;
            font-family: "Squada One", "cursive";
            font-weight: 400;
            margin: 0 0 10px 0;
            line-height: 150px;
            color: #bbbbbb;
        }
        p {
            font-family: "SCDream1", "sans-serif";
            font-size: 60px;
            z-index: 999;
        }
    }
`;
export const MainBody = styled.section`
    position: relative;
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


export const BtnWrap = styled.div`
    
    display: block;

    @media only screen and (min-width: 1025px) {
        position: absolute;
        width: 100%;
        height: 100%;
        padding-right: 2%;
    
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        .btn {
            width: 60px;
            height: 120px;
            z-index: 999;
            opacity: 0.4;
            transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;
        }
        .btn:hover {
            opacity: 1;
        }
        .right {
            transform: rotate(180deg);
        }
    }
`;

export const PortfoUl = styled.ul`

    width: auto;
    // overflow-x: scroll;
    overflow: hidden;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

    .slideWrap {
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
    }

    @media only screen and (min-width: 1281px) {
    }
`;

export const PortfoLi = styled.li`
    position: relative;
    min-width: 100%;
    width: 100%;
    margin-right: 10%;
    padding: 2rem;
    box-sizing: border-box;
    transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;

    // transform: translateX(-110%);


    .portfoImgBox {
        display: inline-block;
        width: 48%;
        height: 420px;
        float: left;
        margin-right: 4%;
        background-color: black;
    }

    .portfoInfo {
        display: inline-block;
        position: absolute;
        bottom: 3rem;
        width: 48%;


        .titleWrap {
            width: 100%;

            .title {
                font-size: 7rem;
                font-family: "Squada One", "cursive";
                font-weight: 400;
                margin: 0 0 8px 0;
                line-height: 4.4rem;
                color: #bbbbbb;
              }
              .subtitle {
                font-family: "SCDream1", sans-serif;
                font-weight: 600;
                font-size: 2rem;
                line-height: 3rem;
                color: #ff75a3;
                margin: 0 0 3rem 0;
              }

        }

        .infoWrap {
            width: 100%;

            .info {
                width: 80%;
                height: 70px;
                margin-bottom: 1.5rem;
                color: #ffffff80;
              }
              
              .skill {
                display: flex;
                font-family: "SCDream1", sans-serif;
                font-size: 1.1rem;
                font-weight: 700;
                line-height: 22px;
                letter-spacing: 1px;
                color: #ffffff80;

                span {
                    margin-right: 0.8rem;
                }

              }

        }

      }

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
        color: #bbbbbb;
    }
    .mainText {
        width: 86%;
        font-family: "SCDream1",sans-serif;
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: #bbbbbb;
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