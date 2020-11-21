import React from'react'
import '../styles/reset.css'
import { Link, Route } from 'react-router-dom';
import Home from '../Page/Home';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import { Section, Header__top, Header__bottom, Backword, Menu__button, HomeMenu } from './Page__nav__styled';

class Page__nav extends React.Component {


    componentDidMount(){

        let onOff = true;
        const menuBtn = document.querySelector('.menuBtn');
        const homeMenu = document.querySelector('.homeMenu');

        menuBtn.addEventListener('click', () => {

            if(onOff) {
                homeMenu.style.display = `block`;
                console.log(onOff);
                onOff = false;
            } else {
                homeMenu.style.display = `none`;
                console.log(onOff);
                onOff = true;
            }

        })




    }



    render() {

        return <Section className={"header"}>
            <Header__top className={"header__top"}>
                <Backword className={"backward"}>
                    <Link to="/" className={"link"}>
                        <FontAwesomeIcon icon={faAngleLeft} className={"icon"}/>
                    </Link>
                </Backword>
            </Header__top>
            <Header__bottom className={"header__bottom"}>
                <Menu__button className={"menuBtn"}>
                    <span className={"span"}></span>
                    <span className={"span"}></span>
                    <span className={"span"}></span>
                </Menu__button>
                <HomeMenu className={"homeMenu"}>
                    <li className={"menuLink"}>ABOUT</li>
                    <li className={"menuLink"}>WORK</li>
                    <li className={"menuLink"}>TOY PROJ</li>
                </HomeMenu>
            </Header__bottom>

            <main>
                <Route exact path="/" component={Home} />
            </main>

        </Section>

    }
}

export default Page__nav;