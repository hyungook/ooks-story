import React from 'react';
import Page__nav from '../components/Page__nav';
import styled from 'styled-components';

import { Header, Cursor, Cursor2, WorkWrap, MainHeader, MainBody, PortfoLI, PortfoA } from './Work__styeld';
import { data } from '../Data/Work__data'


class Work extends React.Component {


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

        })
    }


    render() {
        return <Header>
            <Page__nav />
            <WorkWrap className={"work__wrap"}>
                <MainHeader>
                    <h1>WORK</h1>
                    <p>특별한 경험을 만듭니다.</p>
                </MainHeader>
                <MainBody className={"mainBody"}>
                    <ul>
                    {data.map((data, idx) => {
                    return <PortfoLI>
                        <PortfoA href={data["url"]} target={"blank"}>
                            <div className={"title"}>{data["title"]}</div>
                            <div className={"subTitle"}>{data["subTitle"]}</div>
                        </PortfoA></PortfoLI>
                    })}
                    </ul>
                </MainBody>
                <footer>
                    <p>
                        아무말 한 마디
                    </p>
                </footer>
            
            
            </WorkWrap>

            <Cursor className={"cursor"}></Cursor>
            <Cursor2 className={"cursor2"}></Cursor2>
            </Header>
    }
}

export default Work;