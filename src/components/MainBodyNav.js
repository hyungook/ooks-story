import React from 'react'
import styled from 'styled-components';

import { Link, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Work from '../Page/Work';
import About from '../Page/About';
import ToyProj from '../Page/ToyProject';

import '../styles/reset.css';
import { Section, MainNav, MainNavWrap, MainNavWrapA,
    NavBtn, ButtonBackBox, BackBox } from './MainBodyNav__styled';


// import Parallax from 'parallax-js'

class MainBodyNav extends React.Component {

    componentDidMount() {
        const navA__1 = document.querySelector('.nav__a__1');
        const navA__2 = document.querySelector('.nav__a__2');
        const navA__3 = document.querySelector('.nav__a__3');


        navA__1.addEventListener('mouseover', () => {
            navA__1.style.transform = `translateX(16%)`;
            navA__2.style.transform = `translateX(70%)`;
            navA__3.style.transform = `translateX(70%)`;
            
            navA__2.style.opacity = `0.3`;
            navA__3.style.opacity = `0.3`;
        })
        navA__1.addEventListener('mouseout', () => {
            navA__1.style.transform = `translateX(-16%)`;
            navA__2.style.transform = `translateX(20%)`;
            navA__3.style.transform = `translateX(40%)`;

            navA__2.style.opacity = `1.0`;
            navA__3.style.opacity = `1.0`;
        })
        navA__2.addEventListener('mouseover', () => {
            navA__1.style.transform = `translateX(-40%)`;
            navA__2.style.transform = `translateX(18%)`;
            navA__3.style.transform = `translateX(70%)`;

            navA__1.style.opacity = `0.3`;
            navA__3.style.opacity = `0.3`;
        })
        navA__2.addEventListener('mouseout', () => {
            navA__1.style.transform = `translateX(-16%)`;
            navA__2.style.transform = `translateX(20%)`;
            navA__3.style.transform = `translateX(40%)`;

            navA__1.style.opacity = `1.0`;
            navA__3.style.opacity = `1.0`;
        })
        navA__3.addEventListener('mouseover', () => {
            navA__1.style.transform = `translateX(-60%)`;
            navA__2.style.transform = `translateX(-60%)`;
            navA__3.style.transform = `translateX(-4%)`;


            navA__1.style.opacity = `0.3`;
            navA__2.style.opacity = `0.3`;
        })
        navA__3.addEventListener('mouseout', () => {
            navA__1.style.transform = `translateX(-16%)`;
            navA__2.style.transform = `translateX(20%)`;
            navA__3.style.transform = `translateX(40%)`;


            navA__1.style.opacity = `1.0`;
            navA__2.style.opacity = `1.0`;
        })

        // let scene = document.querySelector('.scene');
        // let parallaxInstance = new Parallax(scene);

    }



    render() {
        return <Section>
        <MainNav>
            <MainNavWrap className={"main__nav__wrap"}>
                <MainNavWrapA href={""} className={"nav__a__1"}>
                    <NavBtn className={"nav__btn"}>
                    <Link to="/about">ABOUT</Link>
                    </NavBtn>
                </MainNavWrapA>
                <MainNavWrapA href={""} className={"nav__a__2"}>
                    <NavBtn className={"nav__btn"}>
                        <Link to="/work">WORK</Link>
                    </NavBtn>
                </MainNavWrapA>
                <MainNavWrapA href={""} className={"nav__a__3"}>
                    <NavBtn className={"nav__btn"}>
                        <Link to="/ToyProject">TOY PROJ</Link>
                    </NavBtn>
                </MainNavWrapA>
            </MainNavWrap>
        </MainNav>

        <ButtonBackBox className={"button__back__box"}>
            <BackBox className={"back__box"}></BackBox>
            <BackBox className={"back__box"}></BackBox>
        </ButtonBackBox>


        <main>
            <Route exact path="/Work" component={Work} />
            <Route exact path="/Aobut" component={About} />
            <Route exact path="/ToyProject" component={ToyProj} />
        </main>

    </Section>
    }

}

export default MainBodyNav;