import React from 'react'
import styled from 'styled-components';
import '../styles/reset.css';
import { NameBox, ToyBtn } from './Footer__styled';

class Footer extends React.Component {

    

    render() {
        return <footer>
            <NameBox className={"name__box"}>
                <ToyBtn className={"toy__button"}>
                    HYUNGOOK OH
                </ToyBtn>
            </NameBox>
        </footer>
    }

}

export default Footer;