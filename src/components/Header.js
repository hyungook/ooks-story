import React from 'react'

// import Parallax from 'parallax-js'
import { Link, Route } from 'react-router-dom';
import Design from '../Page/Design';

import '../styles/reset.css';
import '../styles/Header.css'
import { Header__Wrap, Container, Cursor, Cursor2,
    HeaderUl, HeaderLi, HeaderA } from './Header__styled';


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
        cursor2.style.backgroundColor = `#2bd42e`;
        

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
                cursor.style.backgroundColor = `#2bd42e20`;  
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
                <HeaderUl className={"header__ul"}>
                    <HeaderLi>
                        <HeaderA href={"#"} className={"header__a"}>
                            Notion
                        </HeaderA>
                    </HeaderLi>
                    <HeaderLi>
                        <HeaderA href={"https://github.com/hyungook"} className={"header__a"} target={"_blank"}>
                            GitHub
                        </HeaderA>
                    </HeaderLi>
                    <HeaderLi>
                        <HeaderA href={"#"} className={"header__a"}>
                            {/* Design */}
                            <Link to="/Design" className={"MainBtn MainBtn__4"}>Design</Link>
                        </HeaderA>
                    </HeaderLi>
                </HeaderUl>
            </Container>
                <Cursor className={"cursor"}></Cursor>
                <Cursor2 className={"cursor2"}></Cursor2>


        <main>
            <Route exact path="/Design" component={Design} />
        </main>

        </Header__Wrap>
    }
}

export default Header;