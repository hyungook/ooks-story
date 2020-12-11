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
        background-color: #2bd42e;
        border-radius: 50%;
        left: 0;
        top: 0;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 1s;
    
        z-index: 99999;
    }
`;
export const Header = styled.header`
    width: 100%;
    // height: 100vh;
    color: #fff;
    cursor: none;

    background-color: #111;
`;
export const WorkWrap = styled.section`
    padding: 4rem 0 1rem 0;    
    
    @media only screen and (min-width: 768px) {
        padding: 6rem 0 0 0;
    }
    @media only screen and (min-width: 1025px) {
        margin: 0;
        width: 84%;
        margin-left : 16%;
        padding: 5rem 0 0 4rem;
        box-sizing: border-box;
    }
`;

export const MainHeader = styled.header`
    position: relative;
    width: 100%;
    margin-bottom: 4.5rem;
    padding: 0 1rem;
    
    h1 {
        font-size: 4rem;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 8px 0 2px 0;
        line-height: 4rem;
        color: #bbbbbb;
    }
    p {
        font-family: "SCDream1",sans-serif;
        font-size: 1.3rem;
        z-index: 999;
        color: #bbbbbb;
        white-space:nowrap;
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
            font-family: "SCDream1",sans-serif;
            font-size: 2.6rem;
            z-index: 999;
        }
    }

    @media only screen and (min-width: 1025px) {
        margin-bottom: 140px;
        
        h1 {
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
    width: 48%;
    height: 120px;
    display: inline-block;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 20px;

    // 홀수
    :nth-child(odd) {
        margin-right: 4%;
    } 
    // 짝수
    :nth-child(even) {
        transform: translate(0, -20%);
    } 

    @media only screen and (min-width: 768px) {
        position: relative;
        width: 47%;
        height: 240px;
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

    @media only screen and (min-width: 920px) {
        height: 280px;
    }

    @media only screen and (min-width: 1025px) {
        position: relative;
        width: 47%;
        height: 450px;
        display: inline-block;
        box-sizing: border-box;
        overflow: hidden;
        margin-bottom: 60px;

        z-index: 10;


        // 홀수
        :nth-child(odd) {
            margin-right: 6%;
            // transform: translate(0, -15%);
        } 
        // 짝수
        :nth-child(even) {
            transform: translate(0, -30%);
        } 
        :hover {
            a {
                opacity: 1;   
            }
            img {
                transform: scale(1.2);
                filter:blur(3px);
            }
        }
    }

`;


export const PortfoA = styled.a`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-decoration: none;
    // background-color: rgba(17, 17, 17, 0.3);
    background-color: rgba(17, 17, 17, 0.4);
    z-index: 999;

    .goBtn {
        display: none;
    }


    @media only screen and (min-width: 768px) {
        // div:nth-child(1) {
        //     font-size: 2.6rem;
        //     font-family: "Squada One", cursive;
        //     font-weight: 400;
        //     margin: 0 0 0.8rem 0;
        //     line-height: 1rem;
        //     color: #fff;
        // }
        // div:nth-child(2) {
        //     display: none;
        // }
    }


    @media only screen and (min-width: 1025px) {
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        z-index: 999;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 600ms;
        text-decoration: none;

        opacity: 0;

        background-color: rgba(17, 17, 17, 0.9);

        .goBtn {
            font-family: "Squada One", cursive;
            font-weight: 400;
            font-size: 2rem;
            width: 60px;
            height: 60px;
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            color: #111;
            background-color: #fff;
            cursor: none;
        }
    }
`;

export const WrapBox = styled.div`
    width: 100%;
    position: absolute;
        left: 0;
        bottom: 0;

    .titleWrap {
        width: 100%;
        padding: 0 3%;
    
        div:nth-child(1) {
            font-size: 1.6rem;
            font-family: "Squada One", cursive;
            font-weight: 400;
            margin: 0;
            line-height: 1.3rem;
            color: #fff;
        }
        div:nth-child(2) {
            display: inline-block;
            font-family: "SCDream1",sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            line-height: 1rem;
            margin: 0 0 0.3rem 0;
            color: #ffffff80;
        }
    }
    .info {
        width: 100%;
        padding: 0 5%;
        color: #fff;
        display: none;
    }
    .infoWrap {
        width: 100%;
        padding: 0 5%;
        color: #fff;
        display: none;
    }


    @media only screen and (min-width: 768px) {
        .titleWrap {
            padding: 0 4%;
            div:nth-child(1) {
                font-size: 3.2rem;
                line-height: 2.8rem;
                margin-bottom: 0.5rem;
            }
            div:nth-child(2) {
                font-size: 1.2rem;
                color: #ffffff80;
                line-height: 1.2rem;
                margin-bottom: 1rem;
            }
        }
    }
    @media only screen and (min-width: 1025px) {

        .titleWrap {
            padding: 0 5%;
            margin-bottom: 1rem;
            div:nth-child(1) {
                font-size: 4.5rem;
                margin: 0 0 2rem 0;
            }
            div:nth-child(2) {
                font-size: 1.1rem;
                color: #ff75a3;
                letter-spacing: 1px;
            }
        }
        .info {
            width: 90%;
            height: 120px;
            display: inline-block;
            font-family: "SCDream1",sans-serif;
            font-size: 1.1rem;
            font-weight: 600;
            line-height: 24px;
            margin: 0 0 1rem 0;
            color: #ffffff90;
        }

        .infoWrap {
            display: flex;
            font-family: "SCDream1",sans-serif;
            font-size: 1.1rem;
            font-weight: 600;
            line-height: 22px;
            letter-spacing: 1px;
            color: #ffffff80;

            margin-bottom: 1.6rem;

            div {
                margin-right: 0.8rem;
            }
            .github {
                font-family: "SCDream9",sans-serif;
                text-decoration: none;
                color: #ffffff80;

                margin-right: 0.8rem;

                :hover {
                    color: #fff;
                }
            }

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
    padding: 0 1rem 100px 1rem;
    strong {
        font-size: 2.4rem;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 0 0 40px 0;
        line-height: 1.4rem;
        color: #bbbbbb;
        opacity: 0;
    }
    .subTitle {
        // position: absolute;
        font-family: "SCDream1",sans-serif;
        font-size: 1.1rem;
        margin-top: 10px;
        margin-bottom: 20px;
        color: #bbbbbb;
        opacity: 0;
    }
    .mainText {
        width: 86%;
        font-family: "SCDream1",sans-serif;
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: #bbbbbb;
        opacity: 0;
    }

    @media only screen and (min-width: 768px) {
        padding: 3rem 0 6rem 1rem;

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
            width: 86%;
            font-family: "SCDream1",sans-serif;
            font-size: 1.1rem;
            font-weight: 400;
            line-height: 1.7rem;
        }
    }

    @media only screen and (min-width: 1025px) {
        padding: 2rem 0 10rem 0;

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
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 1.7rem;
        }
    }

    
`;