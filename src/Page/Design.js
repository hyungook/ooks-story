import React from 'react';
import Page__nav from '../components/Page__nav';

import '../styles/reset.css';
import '../styles/Design.css';
import { Wrap, Cursor, Cursor2, DesignWrap, MainHeader, 
    MainBody, BtnWrap, PortfoWrap, PortfoLi, Footer} from './Design__styled';
import { data } from '../Data/Design__data'


const url = process.env.PUBLIC_URL + '/image/design/';
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
                    <p>색다른 즐거움을 전합니다.</p>
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
                                        <a href={data["url"]} target={"blank"} className={"link"}>Link</a>
                                            <span className={"technic"}>{data["technic1"]}</span>
                                            <span className={"technic"}>{data["technic2"]}</span>
                                            <span className={"technic"}>{data["technic3"]}</span>
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
                        감각적인 디자인으로 보는 즐거움을 전하다.
                    </p>
                    <p className={"mainText"}>
                        지금까지 습득해온 다양한 디자인 능력을 통해 고객과 소통하며 보는 즐거움을 전할 수 있는 결과를 만들어냅니다. <br />
                        트렌디한 개발 능력에 감각적인 디자인을 더해 색다른 즐거움을 전달 할 수 있는 개발자가 되겠습니다.
                        <br /><br /> <span>* 이랜드 랜섬웨어 사건으로 사내 공용 폴더에서 작업물을 가져오지 못하고 있습니다.</span>
                    </p>
                </Footer>
            </DesignWrap>
        </Wrap>
    }
}

export default Design;