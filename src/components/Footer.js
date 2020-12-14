import React from 'react'
import '../styles/reset.css';
import { NameBox, ToyBtn } from './Footer__styled';

import Parallax from 'parallax-js'

class Footer extends React.Component {

    componentDidMount() {
        // let scene = document.querySelector('.scene');
        // let parallaxInstance = new Parallax(scene);
    }

    render() {
        return <footer>
            <NameBox className={"name__box scene"}>
                <ToyBtn href={"https://hyungook.github.io/modern-resume/"} className={"toy__button"} data-depth={"0.3"} target={"_blank"}>
                    HYUNGOOK'S STORY
                </ToyBtn>
            </NameBox>
        </footer>
    }

}

export default Footer;