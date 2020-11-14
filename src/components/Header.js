import React from 'react'
import styled from 'styled-components';
import '../styles/reset.css';
import '../styles/Header.css'


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
                        cursor.style.border = `none`;
                        cursor.style.backgroundColor = `#2966ff6d`;  
                })
                mainNavWrap.addEventListener('mouseover', () => {
                    cursor.style.borderRadius = `0`;  
                    cursor.style.border = `none`;
                    cursor.style.backgroundColor = `#2966ff6d`;
                })
                nameBox.addEventListener('mouseover', () => {
                    cursor.style.borderRadius = `0`;  
                    cursor.style.border = `none`;
                    cursor.style.backgroundColor = `#2966ff6d`;
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

    }

    render() {
        return <header>
            <div className={"container"}>
                <div className={"header__wrap"}>
                        <div className={"header__top"}>
                            <ul className={"header__ul"}>
                                <li>
                                    <a href={"#"} className={"header__a"}>
                                        Notion
                                    </a>
                                </li>
                                <li>
                                    <a href={"#"} className={"header__a"}>
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href={"#"} className={"header__a"}>
                                        S N S
                                    </a>
                                </li>
                            </ul>
                        </div>
                    <section className={"section"}>
                        <nav className={"main__nav"}>
                            <div className={"main__nav__wrap"}>
                                <a href={""} className={"nav__a__1"}>
                                    <button className={"nav__btn"}>
                                        ABOUT
                                    </button>
                                </a>
                                <a href={""} className={"nav__a__2"}>
                                    <button className={"nav__btn"}>
                                        WORK
                                    </button>
                                </a>
                                <a href={""} className={"nav__a__3"}>
                                    <button className={"nav__btn"}>
                                        TOY
                                    </button>
                                </a>
                            </div>
                            <div className={"button__back__box"}>
                                <div className={"back__box left"}></div>
                                <div className={"back__box right"}></div>
                            </div>
                        </nav>
                    </section>
                    <div className={"name__box"}>
                        <button className={"toy__button"}>
                            HYUNGOOK OH
                        </button>
                    </div>
                    <div className={"line"}>
                        <span></span>
                    </div>
                </div>
                <div className={"cursor"}></div>
                <div className={"cursor2"}></div>
            </div>
        </header>
    }
}

export default Header;