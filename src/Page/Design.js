import React from 'react';
import Page__nav from '../components/Page__nav';

import '../styles/reset.css';
import '../styles/Design.css';
import { Wrap, Cursor, Cursor2, DesignWrap, MainHeader, 
    MainBody, BtnWrap, PortfoWrap, PortfoLi, Footer} from './Design__styled';
import { data } from '../Data/Design__data'


const url = process.env.PUBLIC_URL + '/image/skill/';
const button = process.env.PUBLIC_URL + '/image/';

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
         
        
         // Cursor Effect
         document.addEventListener("mousemove", (e) => {
             // cursor.styled.cssText = cursor2.styled.cssText = "left" + e.clientX + "px; top:" + e.clientY + "px;";
             const y = e.clientY;
             const x = e.clientX;
         
             cursor.style.transform = `translate(${x - cursorHalfWidth}px, ${y - cursorHalfHeight}px)`;
             cursor2.style.transform = `translate(${x - cursor2HalfWidth}px, ${y - cursor2HalfHeight}px)`;
         })

        // Slider
        let lis = document.querySelectorAll('.portfoLi');
        console.log(lis.length);

        let slideWrap = document.querySelector('.slideWrap');
        let leftBtn = document.querySelector('.left')
        let rightBtn = document.querySelector('.right')
        let transformValue = 0;

         // 위치 변경
        let i = 0;
        rightBtn.addEventListener('click', () => {
            if(i<lis.length-1){
                transformValue = transformValue - 110;
                slideWrap.style.transform = `translateX(${transformValue}%)`;
                console.log(transformValue);
                i++;
                console.log(i);
                return transformValue;
            } else {
                return;
            }
            // for(let i in portfoLis){
            //     portfoLis[i].style.transform=`translateX(-${nowX}%)`
            // }
        })

        leftBtn.addEventListener('click', () => {
            if(i>0) {
                transformValue = transformValue + 110;
                slideWrap.style.transform = `translateX(${transformValue}%)`;
                console.log(transformValue);
                i--;
                console.log(i);
                return transformValue;
            } else {
                return;
            }
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
                    <BtnWrap className={"btnWrap"}>
                        <button className={"btn left"}><img src={`${button+'button.png'}`} alt={"left button"}></img></button>
                        <button className={"btn right"}><img src={`${button+'button.png'}`} alt={"left button"}></img></button>
                    </BtnWrap>
                    <PortfoWrap className={"portfoWrap"}>
                        <ul className={"slideWrap"}>
                            {data.map((data, idx) => { 
                                return<PortfoLi className={"portfoLi"}>
                                <div className={"portfoImgBox"}>
                                    <img src={`${url+data["img"]}`} alt={data.alt}></img>
                                </div>
                                <div className={"portfoInfo"}>
                                    <div className={"titleWrap"}>
                                        <div className={"title"}>{data["title"]}</div>
                                        <div className={"subtitle"}>{data["subTitle"]}</div>
                                    </div>
                                    <div className={"infoWrap"}>
                                        <div className={"info"}>{data["info"]}</div>
                                        <div className={"skill"}>
                                            <span className={"technic"}>{data["technic1"]}</span>
                                            <span className={"technic"}>{data["technic2"]}</span>
                                            <span className={"technic"}>{data["technic3"]}</span>
                                            <span className={"technic"}>{data["technic4"]}</span>
                                        </div>
                                    </div>
                                </div>
                            </PortfoLi>
                            })}
                        </ul>
                    </PortfoWrap>
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