import React from 'react'
import styled from 'styled-components';
// import Parallax from 'parallax-js'
import '../styles/reset.css';
import '../styles/Header.css'
import { Header__Wrap, Container, HeaderWrap, Cursor, Cursor2,
    HeaderTop, HeaderUl, HeaderLi, HeaderA } from './Header__styled';


class Header extends React.Component {

    componentDidMount() {

        // Cursor Effect 변수
        let cursor = document.querySelector('.cursor');
        let cursor2 = document.querySelector('.cursor2');
        const cursorRect = cursor.getBoundingClientRect();
        const cursor2Rect = cursor2.getBoundingClientRect();

        const cursorHalfWidth = cursorRect.width / 2;
        const cursorHalfHeight = cursorRect.height / 2;

        const cursor2HalfWidth = cursor2Rect.width / 2;
        const cursor2HalfHeight = cursor2Rect.height / 2;
        cursor2.style.backgroundColor = `#2966ff`;
        

        let headerUl = document.querySelector('.header__ul');
        let mainNavWrap = document.querySelector('.main__nav__wrap');
        let nameBox = document.querySelector('.name__box');
        

        let tf = true;

        // Cursor Effect
        document.addEventListener("mousemove", (e) => {
            // cursor.styled.cssText = cursor2.styled.cssText = "left" + e.clientX + "px; top:" + e.clientY + "px;";
            const y = e.clientY;
            const x = e.clientX;
        
            cursor.style.transform = `translate(${x - cursorHalfWidth}px, ${y - cursorHalfHeight}px)`;
            cursor2.style.transform = `translate(${x - cursor2HalfWidth}px, ${y - cursor2HalfHeight}px)`;

            function mousechange() {
                cursor.style.borderRadius = `0`;
                cursor.style.border = `1px solid #ffffff`;
                cursor.style.backgroundColor = `#2966ff20`;  
            }
            
            document.addEventListener('mouseover', (e) => {
                let elem = e.target;
    
                // console.log(elem.className)
                if(elem.className == 'sc-fubCfw ckSEsn header__a'){
                    // console.log('ok');
                    mousechange()
                } else if(elem.className == 'MainBtn') {
                    mousechange()
                } else if(elem.className == 'sc-bYEvPH iirIK toy__button') {
                    mousechange()
                } else {
                    // console.log('no')
                    cursor.style.borderRadius = `50%`;
                    cursor.style.border = `1px solid #c6c6c6`;
                    cursor.style.background = `none`;
                }  
            })

        })


        // let scene = document.querySelector('.scene');
        // let parallaxInstance = new Parallax(scene);

    }

    render() {
        return <Header__Wrap>
            <Container>
                <HeaderWrap>
                    <HeaderTop>
                        <HeaderUl className={"header__ul"}>
                            <HeaderLi>
                                <HeaderA href={"#"} className={"header__a"}>
                                    Notion
                                </HeaderA>
                            </HeaderLi>
                            <HeaderLi>
                                <HeaderA href={"https://github.com/hyungook"} className={"header__a"}>
                                    GitHub
                                </HeaderA>
                            </HeaderLi>
                            <HeaderLi>
                                <HeaderA href={"#"} className={"header__a"}>
                                    Design
                                </HeaderA>
                            </HeaderLi>
                        </HeaderUl>
                    </HeaderTop>
                </HeaderWrap>
                <Cursor className={"cursor"}></Cursor>
                <Cursor2 className={"cursor2"}></Cursor2>
            </Container>
        </Header__Wrap>
    }
}

export default Header;