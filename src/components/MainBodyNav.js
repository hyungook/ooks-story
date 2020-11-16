import React from 'react'
import styled from 'styled-components';
import '../styles/reset.css';
import { Section, MainNav, MainNavWrap, MainNavWrapA,
    NavBtn, ButtonBackBox, BackBox } from './MainBodyNav__styled';

class MainBodyNav extends React.Component {

    componentDidMount() {
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
        return <Section>
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
    }

}

export default MainBodyNav;