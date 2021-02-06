import React, { useEffect } from 'react';
import PageNav from '../components/PageNav';
import '../styles/reset.css';
import '../styles/headerEffect.css';
import { Wrap, Cursor, Cursor2, WorkWrap, MainHeader, 
    MainBody, BtnWrap, PortfoWrap, PortfoLi, Footer } from './ToyProject__styled';
import { data } from '../Data/Toy__data'

const url = process.env.PUBLIC_URL + '/image/toy/';
const button = process.env.PUBLIC_URL + '/image/';

const ToyProject = () => {

    function animation() {
        let items;
        let winH;
        function initModule() {
            items = document.querySelectorAll(".faded");
            winH = window.innerHeight;
            _addEventHandlers();
        }
        function _addEventHandlers() {
            window.addEventListener("scroll", _checkPosition);
            window.addEventListener("load", _checkPosition);
            window.addEventListener("resize", initModule);
        }
        function _checkPosition() {
            for (var i = 0; i < items.length; i++) {
                var posFromTop = items[i].getBoundingClientRect().top;
                if (winH > posFromTop) {
                items[i].classList.add("fadeIn");
                }
            }
        }
        return {
            init: initModule
        }
    }


    useEffect(() => {
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
            const y = e.clientY;
            const x = e.clientX;
            cursor.style.transform = `translate(${x - cursorHalfWidth}px, ${y - cursorHalfHeight}px)`;
            cursor2.style.transform = `translate(${x - cursor2HalfWidth}px, ${y - cursor2HalfHeight}px)`;
        })

        let leftBtn = document.querySelector('.left')
        let rightBtn = document.querySelector('.right')

        // Slider
        let lis = document.querySelectorAll('.portfoLi');
        let slideWrap = document.querySelector('.slideWrap');
        
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
        
        // scroll event
        animation().init();
    },[])

    return(<Wrap>

        <Cursor className={"cursor"}></Cursor>
        <Cursor2 className={"cursor2"}></Cursor2>

        <PageNav />

        <WorkWrap className={"work__wrap"}>
            <MainHeader>
                <h1 className={"mainH"}>TOY PROJECT</h1>
                <p className={"mainP"}>
                    <span>끊</span>
                    <span>임</span>
                    <span>없</span>
                    <span>는 성</span>
                    <span>장</span>
                    <span>을 꿈</span>
                    <span>꿉</span>
                    <span>니</span>
                    <span>다.</span>
                </p>
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
                            <a href={data["url"]} target={"blank"} className={"portfoImgBox fadeIn"}>
                                <button className={"goBtn"}>GO</button>
                                <img src={`${url+data["img"]}`} alt={data.alt} className={"mainImage"}></img>
                            </a>
                            <div className={"portfoInfo"}>
                                <div className={"titleWrap fadeIn"}>
                                    <div className={"title"}>{data["title"]}</div>
                                    <div className={"subtitle"}>{data["subTitle"]}</div>
                                </div>
                                <div className={"infoWrap fadeIn"}>
                                    <div className={"info"}>{data["info"]}</div>
                                    <div className={"skill"}>
                                        <a href={data["github"]} target={"blank"} className={"github"}>GitHub</a>
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
                <strong className={"faded"}>Determination</strong>
                <p className={"subTitle faded"}>
                    한 걸음 더 나가고 싶은 오형욱 입니다.
                </p>
                <p className={"mainText faded"}>
                    아직은 프론트엔드 개발자로서 코드 구조, 알고리즘 등 부족한 부분이 많다고 생각합니다. <br />
                    스스로 부족함을 느끼기 때문에, 끊임없이 학습하고 어제보다는 오늘 더 발전하려 노력하게 되는 것 같습니다. <br />
                    작은 프로젝트라도 열과 성을 다해 차근차근 공부하며, 최고를 꿈꾸며 성장하고 있습니다.
                </p>
            </Footer>
        </WorkWrap>
        </Wrap>
    );
};

export default ToyProject;