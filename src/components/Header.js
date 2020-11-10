import React from 'react'

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
                        <div>
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
                                    ETC
                                </button>
                            </a>
                        </div>
                    </nav>
                </section>
                <section className={"section__toy"}>
                    <button className={"toy__button"}>
                        TOY PROJECT
                    </button>
                </section>
            </div>
        </header>
    }
}

export default Header;