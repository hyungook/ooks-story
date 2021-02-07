import React, { useEffect } from 'react';
import PageNav from '../components/PageNav';
import '../styles/reset.css';
import styles from '../styles/toyProject.module.css';
import '../styles/headerEffect.css';
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

    return(<section className={styles.section}>

        <div className={`${styles.cursor} cursor`}></div>
        <div className={`${styles.cursor2} cursor2`}></div>
        <PageNav />

        <div className={styles.wrap}>
            <header className={styles.header}>
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
            </header>
            <section className={styles.mainBody}>
                <div className={`${styles.btnWrap} btnWrap`}>
                    <button className={`${styles.btn} ${styles.left} btn left`}><img src={`${button+'button.png'}`} alt={"left button"}></img></button>
                    <button className={`${styles.btn} ${styles.rignt} btn right`}><img src={`${button+'button.png'}`} alt={"left button"}></img></button>
                </div>
                <div className={`${styles.portfoWrap} portfoWrap`}>
                    <ul className={`${styles.slideWrap} slideWrap`}>
                        {data.map((data, idx) => { 
                            return<li className={`${styles.portfoLi} portfoLi`}>
                            <a href={data["url"]} target={"blank"} className={`${styles.portfoImgBox} fadeIn`}>
                                <button className={`${styles.goBtn} goBtn`}>GO</button>
                                <img src={`${url+data["img"]}`} alt={data.alt} className={styles.mainImage}></img>
                            </a>
                            <div className={styles.portfoInfo}>
                                <div className={`${styles.titleWrap} fadeIn`}>
                                    <div className={styles.title}>{data["title"]}</div>
                                    <div className={styles.subtitle}>{data["subTitle"]}</div>
                                </div>
                                <div className={`${styles.infoWrap} fadeIn`}>
                                    <div className={styles.info}>{data["info"]}</div>
                                    <div className={styles.skill}>
                                        <a href={data["github"]} target={"blank"} className={"github"}>GitHub</a>
                                        <span className={"technic"}>{data["technic1"]}</span>
                                        <span className={"technic"}>{data["technic2"]}</span>
                                        <span className={"technic"}>{data["technic3"]}</span>
                                        <span className={"technic"}>{data["technic4"]}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        })}
                    </ul>
                </div>
            </section>
            <footer className={styles.footer}>
            <strong className={`${styles.footerHeader} faded`}>Determination</strong>
                <p className={`${styles.footerSubTitle} faded`}>
                    한 걸음 더 나가고 싶은 오형욱 입니다.
                </p>
                <p className={`${styles.mainText} faded`}>
                    아직은 프론트엔드 개발자로서 코드 구조, 알고리즘 등 부족한 부분이 많다고 생각합니다. <br />
                    스스로 부족함을 느끼기 때문에, 끊임없이 학습하고 어제보다는 오늘 더 발전하려 노력하게 되는 것 같습니다. <br />
                    작은 프로젝트라도 열과 성을 다해 차근차근 공부하며, 최고를 꿈꾸며 성장하고 있습니다.
                </p>
            </footer>
        </div>
        </section>
    );
};

export default ToyProject;