import React, { useEffect } from 'react';
import PageNav from '../components/PageNav';
import { data } from '../Data/Work__data'
import '../styles/reset.css';
import styles from '../styles/work.module.css';
import '../styles/headerEffect.css';

const url = process.env.PUBLIC_URL + '/image/work/';

const Work = () => {

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
                }}}
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
            // cursor.styled.cssText = cursor2.styled.cssText = "left" + e.clientX + "px; top:" + e.clientY + "px;";
            const y = e.clientY;
            const x = e.clientX;
        
            cursor.style.transform = `translate(${x - cursorHalfWidth}px, ${y - cursorHalfHeight}px)`;
            cursor2.style.transform = `translate(${x - cursor2HalfWidth}px, ${y - cursor2HalfHeight}px)`;
        })

        animation().init();
    }, [])

    return(
        <section className={styles.section}>
        <div className={`${styles.cursor} cursor`}></div>
        <div className={`${styles.cursor2} cursor2`}></div>

        <PageNav />
        <div className={styles.wrap}>
            <header className={styles.header}>
                <h1 className={"mainH"}>WORK</h1>
                <p className={"mainP"}>
                    <span>특</span>
                    <span>별</span>
                    <span>한 경</span>
                    <span>험</span>
                    <span>을 만</span>
                    <span>듭</span>
                    <span>니</span>
                    <span>다.</span>
                </p>
            </header>
            <section className={styles.mainBody}>
                <ul className={styles.ul}>
                {data.map((data, idx) => {
                return <li className={styles.li}>
                    <a className={styles.a} href={data["url"]} target={"blank"}>
                        <button className={styles.goBtn}>GO</button>
                        <div className={styles.wrapBox}>
                            <div className={styles.titleWrap}>
                                <div className={styles.title}>{data["title"]}</div>
                                <div className={styles.subTitle}>{data["subTitle"]}</div>
                            </div>
                            <div className={styles.info}>{data["info"]}</div>
                            <div className={styles.infoWrap}>
                                <a href={data["github"]} target={"blank"} className={styles.github}>GitHub</a>
                                <div className={"technic"}>{data["technic1"]}</div>
                                <div className={"technic"}>{data["technic2"]}</div>
                                <div className={"technic"}>{data["technic3"]}</div>
                                <div className={"technic"}>{data["technic4"]}</div>
                                <div className={"technic"}>{data["technic5"]}</div>
                            </div>
                        </div>
                    </a>
                    <img src={`${url+data["img"]}`} alt={data["alt"]} className={`${styles.image} aniImg`}></img>
                    </li>
                })}
                </ul>
            </section>
            <footer className={styles.footer}>
                <strong className={`${styles.footerHeader} faded`}>Determination</strong>
                <p className={`${styles.footerSubTitle} faded`}>
                    평범한 프로젝트에 '특별함'을 더합니다.
                </p>
                <p className={`${styles.mainText} faded`}>
                현재 웹 개발자는 많습니다. 하지만 감각적인 웹을 제작할 수 있는 개발자는 많지 않습니다. <br />
                3년간 쌓은 디자인적 감각을 더해 고객의 목적과 니즈에 부합하는 웹을 제작합니다. <br />
                커머스 웹, 인터랙티브 웹 그리고 최신 기술을 활용한 웹까지.
                평범할 수 있는 웹 페이지에 특별함을 더하고 있습니다.
                </p>
            </footer>
        </div>
        </section>)
};




export default Work;