import React from'react'
import '../styles/reset.css'
import '../styles/page.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

import { Section, Header__top, Header__bottom, Backword, Menu__button, HomeMenu } from './Page__nav__styled';

class Page__nav extends React.Component {

    componentDidMount(){

        // menu button handler
        let onOff = true;
        const menuBtn = document.querySelector('.menuBtn');
        const homeMenu = document.querySelector('.homeMenu');

        menuBtn.addEventListener('click', () => {

            if(onOff) {
                homeMenu.classList.add("open");
                menuBtn.classList.add("openBtn");
                console.log(onOff);
                onOff = false;
            } else {
                homeMenu.classList.remove("open");
                menuBtn.classList.remove("openBtn");
                homeMenu.style.outline = `none`;
                console.log(onOff);
                onOff = true;
            }
        })

        // let backBtn = document.querySelector('.backward');
        // backBtn.addEventListener('click', () => {
        //     window.history.back();
        // })
    }

    render() {
        return <Section className={"header"}>
            <Header__top className={"header__top"}>
                <Backword className={"backward"}>
                    <Link to="/" className={"MainBtn"}>
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
                    {/* <li className={"menuLink"}><Link to="/" className={"MainBtn"}>HOME</Link></li> */}
                    <li className={"menuLink"}><Link to="/work" className={"MainBtn"}>WORK</Link></li>
                    <li className={"menuLink"}><Link to="/about" className={"MainBtn"}>ABOUT</Link></li>
                    <li className={"menuLink"}><Link to="/ToyProject" className={"MainBtn"}>TOY-PJ</Link></li>
                    <li className={"menuLink"}><Link to="/Design" className={"MainBtn"}>DESIGN</Link></li>
                </HomeMenu>
            </Header__bottom>

        </Section>

    }
}

export default Page__nav;