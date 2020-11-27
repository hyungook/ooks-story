import React from 'react'
import { Link, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Work from '../Page/Work';
import About from '../Page/About';
import ToyProj from '../Page/ToyProject';

import '../styles/reset.css';
import '../styles/MainBodyNav.css';
import { Section, MainNav, MainNavWrap,
    NavBtn, ButtonBackBox, BackBox } from './MainBodyNav__styled';

class MainBodyNav extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            page: 0,
        }
    }

    componentDidMount() {

        // document.addEventListener('mouseover', (e) => {
        //     const Btn = document.querySelectorAll('.Btn');
        //     let elem = e.target;

        //     Btn.addEventListener('mouseover', () => {
        //         if(elem == Btn) {
        //             console.log('ok');
        //         } else {
        //             console.log('no')
        //         }
        //     }) 
        // })


        window.addEventListener('resize', () => {
            // console.log(`${window.innerWidth}`);
        })
        const innerWidth = window.innerWidth;

        if(innerWidth >= 1281) {
            const MainBtn__1 = document.querySelector('.MainBtn__1')
            const MainBtn__2 = document.querySelector('.MainBtn__2')
            const MainBtn__3 = document.querySelector('.MainBtn__3')

        // MainBtn__1
        MainBtn__1.addEventListener('mouseover', () => {
            MainBtn__1.style.transform = `translateX(10%)`;
            MainBtn__2.style.transform = `translateX(70%)`;
            MainBtn__3.style.transform = `translateX(70%)`;
    
            MainBtn__2.style.opacity = `0.3`;
            MainBtn__3.style.opacity = `0.3`;
            
        })
        MainBtn__1.addEventListener('mouseout', () => {
            MainBtn__1.style.transform = `translateX(-50%)`;
            MainBtn__2.style.transform = `translateX(0)`;
            MainBtn__3.style.transform = `translateX(50%)`;
            
            MainBtn__2.style.opacity = `1`;
            MainBtn__3.style.opacity = `1`;
        })
        // MainBtn__2
        MainBtn__2.addEventListener('mouseover', () => {
            MainBtn__1.style.transform = `translateX(-70%)`;
            MainBtn__2.style.transform = `translateX(0%)`;
            MainBtn__3.style.transform = `translateX(70%)`;
            
            MainBtn__1.style.opacity = `0.3`;
            MainBtn__3.style.opacity = `0.3`;
        })
        MainBtn__2.addEventListener('mouseout', () => {
            MainBtn__1.style.transform = `translateX(-50%)`;
            MainBtn__2.style.transform = `translateX(0)`;
            MainBtn__3.style.transform = `translateX(50%)`;
            
            MainBtn__1.style.opacity = `1`;
            MainBtn__3.style.opacity = `1`;
        })
        // MainBtn__3
        MainBtn__3.addEventListener('mouseover', () => {
            MainBtn__1.style.transform = `translateX(-70%)`;
            MainBtn__2.style.transform = `translateX(-70%)`;
            MainBtn__3.style.transform = `translateX(-10%)`;
            
            MainBtn__1.style.opacity = `0.3`;
            MainBtn__2.style.opacity = `0.3`;
        })
        MainBtn__3.addEventListener('mouseout', () => {
            MainBtn__1.style.transform = `translateX(-50%)`;
            MainBtn__2.style.transform = `translateX(0)`;
            MainBtn__3.style.transform = `translateX(50%)`;
            
            MainBtn__1.style.opacity = `1`;
            MainBtn__2.style.opacity = `1`;
        })
        } else {
            return;
        }
    }

    render() {
        return <Section>
        <MainNav>
            <MainNavWrap className={"main__nav__wrap"}>
                <NavBtn className={"nav__btn__1"}>
                    <Link to="/about" className={"MainBtn MainBtn__1 Btn"}>ABOUT</Link>
                </NavBtn>
                <NavBtn className={"nav__btn__2"}>
                    <Link to="/work" className={"MainBtn MainBtn__2 Btn"}>WORK</Link>
                </NavBtn>
                <NavBtn className={"nav__btn__3"}>
                    <Link to="/ToyProject" className={"MainBtn MainBtn__3"}>TOY-PJ</Link>
                </NavBtn>
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