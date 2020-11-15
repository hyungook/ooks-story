import React from 'react'
import styled from 'styled-components';
// import Parallax from 'parallax-js'
import '../styles/reset.css';
import '../styles/Header.css'
import { Container, HeaderWrap, Cursor, Cursor2, HeaderTop, HeaderUl,
HeaderLi, HeaderA, Section, MainNav, MainNavWrap, MainNavWrapA, NavBtn,
NameBox, ToyBtn, Line, ButtonBackBox, BackBox } from './Header__styled';


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

                //mouseover
                headerUl.addEventListener('mouseover', () => {
                        cursor.style.borderRadius = `0`;
                        cursor.style.border = `1px solid #ffffff`;
                        cursor.style.backgroundColor = `#2966ff20`;  
                })
                mainNavWrap.addEventListener('mouseover', () => {
                    cursor.style.borderRadius = `0`;  
                    cursor.style.border = `1px solid #ffffff`;
                    cursor.style.backgroundColor = `#2966ff20`;
                })
                nameBox.addEventListener('mouseover', () => {
                    cursor.style.borderRadius = `0`;  
                    cursor.style.border = `1px solid #ffffff`;
                    cursor.style.backgroundColor = `#2966ff20`;
                })
                //mouseout
                headerUl.addEventListener('mouseout', () => {
                    cursor.style.borderRadius = `50%`;
                    cursor.style.border = `1px solid #c6c6c6`;
                    cursor.style.background = `none`;
                })
                mainNavWrap.addEventListener('mouseout', () => {
                    cursor.style.borderRadius = `50%`;
                    cursor.style.border = `1px solid #c6c6c6`;
                    cursor.style.background = `none`;
                })
                nameBox.addEventListener('mouseout', () => {
                    cursor.style.borderRadius = `50%`;
                    cursor.style.border = `1px solid #c6c6c6`;
                    cursor.style.background = `none`;
                })
        })


        // let scene = document.querySelector('.scene');
        // let parallaxInstance = new Parallax(scene);


        const MainNavWrap = document.querySelector('.main__nav__wrap');
        const navA__1 = document.querySelector('.nav__a__1');
        const navA__2 = document.querySelector('.nav__a__2');
        const navA__3 = document.querySelector('.nav__a__3');


        navA__1.addEventListener('mouseover', () => {
            // navA__2.style.transform = `translateX(60%);`;
            // navA__3.style.transform = `translateX(60%);`;
            navA__2.style.opacity = `0.3`;
            navA__3.style.opacity = `0.3`;
        })
        navA__1.addEventListener('mouseout', () => {
            // navA__2.style.transform = `translate(40%, 0);`;
            // navA__3.style.transform = `translate(40%, 0);`;
            navA__2.style.opacity = `1.0`;
            navA__3.style.opacity = `1.0`;
        })
        navA__2.addEventListener('mouseover', () => {
            navA__1.style.opacity = `0.3`;
            navA__3.style.opacity = `0.3`;
        })
        navA__2.addEventListener('mouseout', () => {
            navA__1.style.opacity = `1.0`;
            navA__3.style.opacity = `1.0`;
        })
        navA__3.addEventListener('mouseover', () => {
            navA__1.style.opacity = `0.3`;
            navA__2.style.opacity = `0.3`;
        })
        navA__3.addEventListener('mouseout', () => {
            navA__1.style.opacity = `1.0`;
            navA__2.style.opacity = `1.0`;
        })

    }

    render() {
        return <header>
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
                                    <HeaderA href={"#"} className={"header__a"}>
                                        GitHub
                                    </HeaderA>
                                </HeaderLi>
                                <HeaderLi>
                                    <HeaderA href={"#"} className={"header__a"}>
                                        S N S
                                    </HeaderA>
                                </HeaderLi>
                            </HeaderUl>
                        </HeaderTop>
                    <Section>
                        <MainNav>
                            <MainNavWrap className={"main__nav__wrap"}>
                                <MainNavWrapA href={""} className={"nav__a__1"}>
                                    <NavBtn className={"nav__btn"}>
                                        ABOUT
                                    </NavBtn>
                                </MainNavWrapA>
                                <MainNavWrapA href={""} className={"nav__a__2"}>
                                    <NavBtn className={"nav__btn"}>
                                        WORK
                                    </NavBtn>
                                </MainNavWrapA>
                                <MainNavWrapA href={""} className={"nav__a__3"}>
                                    <NavBtn className={"nav__btn"}>
                                        TOY PROJ
                                    </NavBtn>
                                </MainNavWrapA>
                            </MainNavWrap>
                        </MainNav>
                        <ButtonBackBox className={"button__back__box"}>
                            <BackBox className={"back__box"}></BackBox>
                            <BackBox className={"back__box"}></BackBox>
                        </ButtonBackBox>
                    </Section>
                    <NameBox className={"name__box"}>
                        <ToyBtn className={"toy__button"}>
                            HYUNGOOK OH
                        </ToyBtn>
                    </NameBox>
                    <Line className={"line"}>
                        <span></span>
                    </Line>
                </HeaderWrap>
                <Cursor className={"cursor"}></Cursor>
                <Cursor2 className={"cursor2"}></Cursor2>
            </Container>
        </header>
    }
}

export default Header;