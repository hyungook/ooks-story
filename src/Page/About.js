import React from 'react';
import Page__nav from '../components/Page__nav';
import styled from 'styled-components';

import '../styles/reset.css';
import { Wrap, Cursor, Cursor2, AboutWrap, MainHeader, About__header, Section } from './About__styled';


class About extends React.Component {

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
 
         function mousechange() {
             cursor.style.borderRadius = `0`;
             cursor.style.border = `1px solid #ffffff`;
             cursor.style.backgroundColor = `#2966ff20`; 
         }
         
         document.addEventListener('mouseover', (e) => {
             let elem = e.target;
 
             if(elem.className == 'sc-hHftDr evQUgs'){
                 mousechange()
             } else if(elem.className == 'title') {
                 mousechange()
             } else {
                 cursor.style.borderRadius = `50%`;
                 cursor.style.border = `1px solid #c6c6c6`;
                 cursor.style.background = `none`;
             }  
         })
    }

    render() {
        return <Wrap>
            <Page__nav />
            <Cursor className={"cursor"}></Cursor>
            <Cursor2 className={"cursor2"}></Cursor2>
            <AboutWrap>
                <MainHeader>
                    <h1>ABOUT</h1>
                    <p>생각을 실천으로 옮기는 사람.</p>
                </MainHeader>
                <About__header className={"about__header"}>
                    <p>세상을, 생활을 더 낫게 만들고 싶은 꿈은 결코 낡지 않습니다. <br />나를 필요로 하는 곳에서, 생각하고, 스케치하고, 설계하고, 만들어냅니다.</p>
                    <div className={"image__box"}>
                        <img src={""}></img>
                    </div>
                </About__header>
                <Section className={"section__1"}>
                    <div className={"section__header section__1__header"}>
                        <strong>Front-End</strong>
                    </div>
                    <ul className={"section__ul section__1__body"}>
                        <li className={"Section__1__li"}>
                            <div className={"li__top"}>
                                <img src={""}></img>
                                <p className={"li__title"}>Javascript</p>
                                <div className={"li__percent"}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={"li__bottom"}>
                                <p>자바스크립트와 친해지기 위해 게임도 만들어보고 지금도 재미있는 시도들을 하고 있습니다. 원하는 기능들은 어찌어찌 구현하는데  당연히 아직 많이 부족합니다. ES6를 일부러 안쓰다가 지금은 ES6 이후 버전의 모던자바스크립트 위주로 공부 하고 있습니다.</p>
                            </div>
                        </li>
                        <li className={"Section__1__li"}>
                            <div className={"li__top"}>
                                <img src={""}></img>
                                <p className={"li__title"}>HTML5</p>
                                <div className={"li__percent"}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={"li__bottom"}>
                                <p>HTML 마크업 코딩만 봤을때는 시멘틱 마크업을 짜고, 웹 표준을 준수하고, 반응형웹에 익숙합니다. 웹 접근성은 아직 깊게 공부하지는 못했습니다.</p>
                            </div>
                        </li>
                        <li className={"Section__1__li"}>
                            <div className={"li__top"}>
                                <img src={""}></img>
                                <p className={"li__title"}>HTML5</p>
                                <div className={"li__percent"}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={"li__bottom"}>
                                <p>기본적인 레이아웃이나 애니메이션 등은 만들고 싶은건 대부분 구현합니다. 이 홈페이지와 데이로그에 SCSS(Styled-Component)가 사용되었습니다. 데이로그 개발에 Grid, Flex, Sticky 등 신 기술들을 적극 활용했습니다.</p>
                            </div>
                        </li>
                    </ul>
                </Section>

                <section className={"section__2"}>
                    <div className={"section__header section__2__header"}>
                        <strong>Library</strong>
                    </div>
                    <ul className={"section__ul section__1__body"}>
                        <li className={"Section__2__li"}>
                            <div className={"li__top"}>
                                <img src={""}></img>
                                <p className={"li__title"}>React JS</p>
                                <div className={"li__percent"}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={"li__bottom"}>
                                <p>리액트로 두개의 사이트를 제작하면서 어느정도 익숙해졌습니다. Class Component, Functional Component, Hooks, Styled Component, Hash Route 등과 친해졌습니다.</p>
                            </div>
                        </li>
                        <li className={"Section__2__li"}>
                            <div className={"li__top"}>
                                <img src={""}></img>
                                <p className={"li__title"}>React Native</p>
                                <div className={"li__percent"}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={"li__bottom"}>
                                <p>현재 공부중입니다.</p>
                            </div>
                        </li>
                        <li className={"Section__2__li"}>
                            <div className={"li__top"}>
                                <img src={""}></img>
                                <p className={"li__title"}>Typescript</p>
                                <div className={"li__percent"}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={"li__bottom"}>
                                <p>현재 공부중입니다. 기본 자바스크립트에 비해 명확한 규칙으로 에러를 최소화하기 때문에 앞으로도 계속 사용하려고 노력할 것 같습니다.</p>
                            </div>
                        </li>
                        <li className={"Section__2__li"}>
                            <div className={"li__top"}>
                                <img src={""}></img>
                                <p className={"li__title"}>JQuery</p>
                                <div className={"li__percent"}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={"li__bottom"}>
                                <p>코딩 학습 초반에 자주 사용했는데 요새는 일부러 JS 학습을 위해 사용 안하는 중입니다. 다룰 줄 아는 정도의 수준.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className={"section__3"}>
                    <div className={"section__header section__3__header"}>
                        <strong>Back-End</strong>
                    </div>
                    <ul className={"section__ul section__3__body"}>
                        <li className={"Section__3__li"}>
                            <div className={"li__top"}>
                                <img src={""}></img>
                                <p className={"li__title"}>Node JS</p>
                                <div className={"li__percent"}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={"li__bottom"}>
                                <p>데이로그 서비스는 NodeJS로 구현되었습니다. 라우팅, 컨트롤러등의 개념은 이해했고 Passport, WebPack, MongoDB, GraphQL 등을 사용해 본 경험이 있습니다.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className={"section__4"}>
                    <div className={"section__header section__4__header"}>
                        <strong>Dssign</strong>
                    </div>
                    <ul className={"section__ul section__4__body"}>
                        <li className={"Section__4__li"}>
                            <div className={"li__top"}>
                                <img src={""}></img>
                                <p className={"li__title"}>Photoshop</p>
                                <div className={"li__percent"}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={"li__bottom"}>
                                <p>신 기능들을 전부 다 알진 못하지만 꼭 필요한 만큼은 쓰는 것 같습니다 거의 15년 넘게 사용했습니다.</p>
                            </div>
                        </li>
                        <li className={"Section__4__li"}>
                            <div className={"li__top"}>
                                <img src={""}></img>
                                <p className={"li__title"}>Adobe XD</p>
                                <div className={"li__percent"}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={"li__bottom"}>
                                <p>대학다닐 때 주로 사용. 졸업 후 안쓴진 좀 됐지만 잘 쓰는 편입니다.</p>
                            </div>
                        </li>
                        <li className={"Section__4__li"}>
                            <div className={"li__top"}>
                                <img src={""}></img>
                                <p className={"li__title"}>Illustrator</p>
                                <div className={"li__percent"}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={"li__bottom"}>
                                <p>이것도 15년 넘게 써서 꼭 필요한 만큼은 씁니다. 3D기능은 다룰 줄은 알지만 간단히 사용할 수 있습니다.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <footer>
                    <div className={"footer__header"}>
                        <strong>특별한 경험들을 만나보세요.</strong>
                    </div>
                    <div className={"footer__body"}>
                        <ul className={"Communi"}>
                            <li>nenonenoberneno@gmail.com</li>
                            <li>+82 10 4100 2497</li>
                            <li>@hyungookoh</li>
                        </ul>
                    </div>
                </footer>

            </AboutWrap>
        </Wrap>
    }
}

export default About;