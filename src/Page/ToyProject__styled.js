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


export const Header = styled.header`
    width: 100%;
    height: 100vh;
    color: #fff;
    // cursor: pointer;
    cursor: none;

    overflow-y: scroll;
    
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
    position: relative;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 2rem;

    .portfoWrap {
        width: 100%;
    }
    @media only screen and (min-width: 1024px) {
        margin-bottom: 4rem;
    }

    
`;


export const BtnWrap = styled.div`
    
    display: none;

    @media only screen and (min-width: 1024px) {
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

export const PortfoWrap = styled.div`
    width: auto;
    overflow-x: scroll;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

    .slideWrap {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;
    }
    @media only screen and (min-width: 1024px) {
        overflow: hidden;
    }
`;

export const PortfoLi = styled.li`
    position: relative;
    min-width: 100%;
    width: 100%;
    margin-right: 10%;
    margin-bottom: 2rem;
    box-sizing: border-box;
    transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;

    .portfoImgBox {
        display: block;
        width: 100%;
        height: 200px;
        margin-bottom: 1.7rem;
        background-color: blue;

        // object-fit: cover;

        a {
            width: 100%;
            height: 100%;
            z-index:99;

            // object-fit: cover;

            .mainImage {
                // object-fit: cover;
            }
        }

        .goBtn {
            font-family: "Squada One", cursive;
            font-weight: 400;
            font-size: 1.4rem;
            width: 40px;
            height: 40px;
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            color: #111;
            background-color: #fff;
            cursor: none;
            transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;
        }
    }

    .portfoInfo {
        display: block;
        position: relative;
        width: 100%;

        .titleWrap {
            width: 100%;
            .title {
                font-size: 3.2rem;
                font-family: "Squada One", "cursive";
                font-weight: 400;
                margin: 0 0 8px 0;
                line-height: 2rem;
                color: #bbbbbb;
              }
              .subtitle {
                font-family: "SCDream1", sans-serif;
                font-weight: 600;
                font-size: 1.2rem;
                line-height: 2rem;
                color: #ff75a3;
                margin: 0 0 1.2rem 0;
              }
        }
        .infoWrap {
            width: 100%;
            .info {
                font-family: "SCDream1", sans-serif;
                font-weight: 600;
                font-size: 0.8rem;
                line-height: 1.2rem;
                width: 100%;
                height: 70px;
                margin-bottom: 1rem;
                color: #ffffff80;
            }
            .skill {
                display: flex;
                font-family: "SCDream1", sans-serif;
                font-size: 0.9rem;
                font-weight: 900;
                line-height: 22px;
                letter-spacing: 1px;
                color: #ffffff80;
                a {
                    margin-right: 0.8rem;
                }
                span {
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
      }

      @media only screen and (min-width: 768px) {
        .portfoImgBox {
            height: 400px;
        }
        .portfoInfo {
            .infoWrap {
                .info {
                    width: 70%;
                }
            }
        }
      }

      @media only screen and (min-width: 1024px) {
        margin-bottom: 0;
    
        .portfoImgBox {
            position: relative;
            display: inline-block;
            width: 48%;
            height: 420px;
            float: left;
            margin-bottom: 0;
            margin-right: 4%;
            transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;
            
            .goBtn {
                opacity: 0;
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
                    transition: all cubic-bezier(0.33, 0.78, 0.41, 1) 500ms;
            }
            :hover {
                .goBtn {
                    opacity: 1;
                }
            }
            
        }
        
        .portfoInfo {
            display: inline-block;
            position: absolute;
            bottom: 3rem;
            width: 48%;
    
            .titleWrap {
                .title {
                    font-size: 6.5rem;
                    margin: 0 0 0.7rem 0;
                    line-height: 4.7rem;
                  }
                  .subtitle {
                    font-size: 2rem;
                    line-height: 3rem;
                    letter-spacing: 1px;
                    margin: 0 0 2rem 0;
                  }
            }
            .infoWrap {
                .info {
                    font-size: 1rem;
                    line-height: 1.4rem;
                    width: 80%;
                    height: 70px;
                    margin-bottom: 1.5rem;
                }
                .skill {
                    font-size: 1.1rem;
                    font-weight: 700;
                    line-height: 22px;

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
          }
    }
`;

export const Footer = styled.footer`
    border-top: 1px solid #ffffff40;
    width: 100%;
    padding: 3rem 0 100px 0;
    strong {
        font-size: 2rem;
        font-family: "Squada One", cursive;
        font-weight: 400;
        margin: 0 0 40px 0;
        line-height: 1.4rem;
        color: #bbbbbb;
    }
    .subTitle {
        // position: absolute;
        font-family: "SCDream1",sans-serif;
        font-size: 1.1rem;
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
        padding: 2rem 0 300px 0;

        strong {
            font-size: 60px;
            margin: 0 0 10px 0;
            line-height: 80px;
        }
        .subTitle {
            font-size: 30px;
            margin: 0 0 30px 0;
        }
        .mainText {
            width: 80%;
            font-size: 1.1rem;
            font-weight: 400;
            line-height: 1.5rem;
        }
    }

    
`;