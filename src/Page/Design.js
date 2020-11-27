import React from 'react';
import Page__nav from '../components/Page__nav';

import '../styles/reset.css';
// import '../styles/About.css';
import { Wrap, Cursor, Cursor2, DesignWrap, MainHeader} from './Design__styled';

const url = process.env.PUBLIC_URL + '/image/skill/';

class Design extends React.Component{

    componentDidMount() {
        // mouse Effect

         // Cursor Effect 변수
         let cursor = document.querySelector('.cursor');
         let cursor2 = document.querySelector('.cursor2');
         const cursorRect = cursor.getBoundingClientRect();
         const cursor2Rect = cursor2.getBoundingClientRect();
 
         const cursorHalfWidth = cursorRect.width / 2;
         const cursorHalfHeight = cursorRect.height / 2;
 
         const cursor2HalfWidth = cursor2Rect.width / 2;
         const cursor2HalfHeight = cursor2Rect.height / 2;
         cursor2.style.backgroundColor = `#2bd42e`;
         
 
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
    render(){
        return<Wrap>
            <Page__nav />
            <Cursor className={"cursor"}></Cursor>
            <Cursor2 className={"cursor2"}></Cursor2>

            <DesignWrap>
                <MainHeader>
                    <h1>DESIGN</h1>
                    <p>감각적인 디자인을 추구합니다.</p>
                </MainHeader>
                <section>
                    <ul>
                        <li>
                            <b>title</b>
                            <img></img>
                            <text>설명</text>
                            <a href={"#"}></a>
                            <p>skill</p>
                            
                        </li>
                    </ul>
                </section>

            </DesignWrap>
        </Wrap>
    }
}

export default Design;