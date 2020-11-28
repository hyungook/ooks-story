import React from 'react';
import Page__nav from '../components/Page__nav';

import '../styles/reset.css';
import '../styles/Design.css';
import { Wrap, Cursor, Cursor2, DesignWrap, MainHeader, 
    MainBody, PortfoUl, PortfoLi, Footer} from './Design__styled';
import { data } from '../Data/Design__data'


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
                <MainBody className={"mainBody"}>
                    <div className={"btnWrap"}>
                        <button className={"left"}></button>
                        <button className={"right"}></button>
                    </div>
                    <PortfoUl className={"portfoUl"}>
                    {data.map((data, idx) => { 
                        return<PortfoLi className={"PortfoLi"}>
                        <div className={"portfoImgBox"}>
                            <span className={"no"}>0{data["num"]}</span>
                            <img src={`${url+data["img"]}`} alt={data.alt}></img>
                        </div>
                        <div className={"portfoInfo"}>
                            <a href={data["url"]} target={"blank"} className={"portfoInfo__title"}>
                                <div className={"title"}>
                                    {data["title"]}<br />
                                    {data["title2"]}
                                    <div className={"goIcon"}>
                                        <p>GO</p>
                                    </div>
                                </div>
                            </a>
                            <div>
                                <div className={"subtitle"}>{data["subtitle"]}</div>
                                <div className={"info"}>{data["info"]}</div>
                                <div className={"skill"}>
                                    <a href={data["github"]} target={"blank"}>
                                        GitHub
                                    </a>
                                    <span className={"technic"}>{data["technic1"]}</span>
                                    <span className={"technic"}>{data["technic2"]}</span>
                                    <span className={"technic"}>{data["technic3"]}</span>
                                    <span className={"technic"}>{data["technic4"]}</span>
                                </div>
                            </div>
                        </div>
                    </PortfoLi>
                    })}
                    </PortfoUl>
                </MainBody>
                <Footer>
                    <strong>Determination</strong>
                    <p className={"subTitle"}>
                        한 걸음 더 나가고 싶은 오형욱 입니다.
                    </p>
                    <p className={"mainText"}>
                        본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리 본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리
                        본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리 본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리
                        본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리
                    </p>
                </Footer>
            </DesignWrap>
        </Wrap>
    }
}

export default Design;