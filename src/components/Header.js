import React from 'react'
import styled from 'styled-components';
import '../styles/reset.css';
import '../styles/Header.css'


class Header extends React.Component {
    render() {
        return <header>
            <div className={"header__wrap"}>
                <section className={"section__header"}>
                    <div className={"header__top"}>
                        <ul className={"header__ul"}>
                            <li>
                                <a href={"#"}>
                                    Notion
                                </a>
                            </li>
                            <li>
                                <a href={"#"}>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href={"#"}>
                                    S N S
                                </a>
                            </li>
                        </ul>
                    </div>
                    <nav className={"main__nav"}>
                        <div className={"main__nav__wrap"}>
                            <a href={""}>
                                <button className={"nav__btn"}>
                                    ABOUT
                                </button>
                            </a>
                            <a href={""}>
                                <button className={"nav__btn"}>
                                    WORK
                                </button>
                            </a>
                            <a href={""}>
                                <button className={"nav__btn"}>
                                    TOY
                                </button>
                            </a>
                        </div>
                    <div className={"line"}></div>
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
            </div>
        </header>
    }
}

export default Header;