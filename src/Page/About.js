import React from 'react';
import Page__nav from '../components/Page__nav';

import '../styles/reset.css';
import '../styles/About.css';
import '../styles/headerEffect.css';
import { Wrap, Cursor, Cursor2, AboutWrap, MainHeader, About__header, Section, SectionWrap, SectionLi,
        SectionHeader, MapWrap, SectionBody, Footer } from './About__styled';

import { data } from '../Data/About__data'

const url = process.env.PUBLIC_URL + '/image/skill/';
const img = process.env.PUBLIC_URL + '/image/';

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
         cursor2.style.backgroundColor = `#2bd42e`;
 
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
             cursor.style.backgroundColor = `#2bd42e20`; 
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
                    <h1 className={"mainH"}>ABOUT</h1>
                    <p className={"mainP"}>
                        <span>저</span>
                        <span>만</span>
                        <span>의 이</span>
                        <span>야</span>
                        <span>기</span>
                        <span>로 표</span>
                        <span>현</span>
                        <span>합</span>
                        <span>니</span>
                        <span>다.</span>
                    </p>
                    {/* <p className={"mainP"}>저만의 이야기로 표현합니다.</p> */}
                </MainHeader>
                <About__header className={"about__header"}>
                    <p>지금까지 습득해온 다양한 능력을 저만의 이야기로 멈추지 않고, <br />프로젝트를 통해 대중과 소통하고 교류할 수 있는 개발자가 되고 싶습니다.</p>
                    <div className={"image__box"}>
                        <img src={`${img}about.png`} className={"aboutImage"}></img>
                    </div>
                </About__header>
                <Section className={"section__body"}>
                    <SectionWrap className={"sectionWrap"}>
                            <SectionLi className={"section__li"}>
                                <SectionHeader>
                                    <strong>Front-end</strong>
                                </SectionHeader>
                                <MapWrap className={"map__wrap"}>
                                {data.map((data, idx) => {
                                return data.category == "front-end" && <SectionBody className={"section__body frontEnd"}>
                                        <div className={"skill__header"}>
                                            <div className={"skillIcon"}>
                                                <img src={`${url+data["image"]}`} alt={data.alt}></img>
                                            </div>
                                            <p className={"skillName"} style={{ color: data.color }}>{data["skillName"]}</p>
                                            <div className={"level"} >
                                                <span style={{ width: data.level * 10 + '%' , backgroundColor: data.color }}></span>
                                            </div>
                                        </div>
                                        <p className={"map__text"}>{data["text"]}</p>
                                    </SectionBody>
                                })}
                            </MapWrap>
                            </SectionLi>

                            <SectionLi className={"section__li"}>
                                <SectionHeader>
                                    <strong>Library</strong>
                                </SectionHeader>
                                <MapWrap className={"map__wrap"}>
                                {data.map((data, idx) => {
                                return data.category == "Library" && <SectionBody className={"section__body frontEnd"}>
                                        <div className={"skill__header"}>
                                            <div className={"skillIcon"}>
                                                <img src={`${url+data["image"]}`} alt={data.alt}></img>
                                            </div>
                                            <p className={"skillName"} style={{ color: data.color }}>{data["skillName"]}</p>
                                            <div className={"level"} >
                                                <span style={{ width: data.level * 10 + '%' , backgroundColor: data.color }}></span>
                                            </div>
                                        </div>
                                        <p className={"map__text"}>{data["text"]}</p>
                                    </SectionBody>
                                })}
                            </MapWrap>
                            </SectionLi>

                            <SectionLi className={"section__li"}>
                                <SectionHeader>
                                    <strong>Back-end</strong>
                                </SectionHeader>
                                <MapWrap className={"map__wrap"}>
                                {data.map((data, idx) => {
                                return data.category == "Back-End" && <SectionBody className={"section__body frontEnd"}>
                                        <div className={"skill__header"}>
                                            <div className={"skillIcon"}>
                                                <img src={`${url+data["image"]}`} alt={data.alt}></img>
                                            </div>
                                            <p className={"skillName"} style={{ color: data.color }}>{data["skillName"]}</p>
                                            <div className={"level"} >
                                                <span style={{ width: data.level * 10 + '%' , backgroundColor: data.color }}></span>
                                            </div>
                                        </div>
                                        <p className={"map__text"}>{data["text"]}</p>
                                    </SectionBody>
                                })}
                            </MapWrap>
                            </SectionLi>

                            <SectionLi className={"section__li"}>
                                <SectionHeader>
                                    <strong>Design</strong>
                                </SectionHeader>
                                <MapWrap className={"map__wrap"}>
                                {data.map((data, idx) => {
                                return data.category == "Design" && <SectionBody className={"section__body frontEnd"}>
                                        <div className={"skill__header"}>
                                            <div className={"skillIcon"}>
                                                <img src={`${url+data["image"]}`} alt={data.alt}></img>
                                            </div>
                                            <p className={"skillName"} style={{ color: data.color }}>{data["skillName"]}</p>
                                            <div className={"level"} >
                                                <span style={{ width: data.level * 10 + '%' , backgroundColor: data.color }}></span>
                                            </div>
                                        </div>
                                        <p className={"map__text"}>{data["text"]}</p>
                                    </SectionBody>
                                })}
                            </MapWrap>
                            </SectionLi>
                    </SectionWrap>
                </Section>

                <Footer>
                    <div className={"footer__header"}>
                        <p>특별한 이야기를<br />만나보세요.</p>
                    </div>
                    <div className={"footer__body"}>
                        <ul className={"communi"}>
                            <li className={"communi__li"}>nenonenoberneno@gmail.com</li>
                            <li className={"communi__li"}>+82 10 4100 2497</li>
                            <li className={"communi__li"}>#hyungookoh</li>
                        </ul>
                    </div>
                </Footer>

            </AboutWrap>
        </Wrap>
    }
}

export default About;