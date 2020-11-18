import React from'react'
import '../styles/reset.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import { Section, Header__top, Header__bottom, Backword, Menu__button } from './Page__nav__styled';

class Page__nav extends React.Component {
    render() {

        return <Section className={"header"}>
            <Header__top className={"header__top"}>
                <Backword className={"backward"}>
                    <FontAwesomeIcon icon={faAngleLeft} className={"icon"}/>
                </Backword>
            </Header__top>
            <Header__bottom className={"header__bottom"}>
                <Menu__button className={"menuBtn"}>
                    <span className={"span"}></span>
                    <span className={"span"}></span>
                    <span className={"span"}></span>
                </Menu__button>
            </Header__bottom>
        </Section>

    }
}

export default Page__nav;