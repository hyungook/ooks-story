import React from 'react'
import styled from 'styled-components';
import '../styles/reset.css';
import '../styles/Header.css'


class Header extends React.Component {
    render() {
        return <header>
            <div className={"header__wrap"}>
                <section className={"section__header"}>
                    <ul className={"header__ul"}>
                        <li>
                            <a href={"#"}>
                                GitHub
                            </a>
                        </li>
                    </ul>
                    <nav className={"main__nav"}>
                        <div className={"main__nav__wrap"}>
                            <a href={""}>
                                <button>
                                    ABOUT
                                </button>
                            </a>
                            <a href={""}>
                                <button>
                                    WORK
                                </button>
                            </a>
                            <a href={""}>
                                <button>
                                    TOY
                                </button>
                            </a>
                        </div>
                    </nav>
                    <div className={"name__box"}>
                        <button className={"toy__button"}>
                            HYUNGOOK OH
                        </button>
                    </div>
                </section>
            </div>
            <div className={"line"}></div>
        </header>
    }
}

export default Header;