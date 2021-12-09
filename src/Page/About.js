import React, { useEffect } from 'react';
import PageNav from '../components/PageNav';
import '../styles/reset.css';
import styles from '../styles/about.module.css';
import '../styles/headerEffect.css';
import { data } from '../Data/About__data'

const url = process.env.PUBLIC_URL + '/image/skill/';
const img = process.env.PUBLIC_URL + '/image/';

const About = () => {
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
                // console.log(i);
                }
            }
        }
        return {
            init: initModule
        }
    }
    
    useEffect(() => {
        animation().init();
        let cursor = document.querySelector('.cursor');
            let cursor2 = document.querySelector('.cursor2');
            const cursorRect = cursor.getBoundingClientRect()
            const cursor2Rect = cursor2.getBoundingClientRect();
     
            const cursorHalfWidth = cursorRect.width / 2;
            const cursorHalfHeight = cursorRect.height / 2;
     
            const cursor2HalfWidth = cursor2Rect.width / 2;
            const cursor2HalfHeight = cursor2Rect.height / 2;
            cursor2.style.backgroundColor = `#2bd42e`;
     
            document.addEventListener("mousemove", (e) => {
                const y = e.clientY;
                const x = e.clientX;
                cursor.style.transform = `translate(${x - cursorHalfWidth}px, ${y - cursorHalfHeight}px)`;
                cursor2.style.transform = `translate(${x - cursor2HalfWidth}px, ${y - cursor2HalfHeight}px)`;
            })
    },[])

    return (<section className={styles.section}>
            <div className={`${styles.cursor} cursor`}></div>
            <div className={`${styles.cursor2} cursor2`}></div>
            <PageNav />
            <div className={`${styles.mainBody} mainBody`}>
                <header className={styles.mainHeader}>
                    <h1 className={`${styles.mainH} mainH`}>ABOUT</h1>
                    <p className={`${styles.mainP} mainP`}>
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
                </header>
                <section className={`${styles.aboutHeader} about__header`}>
                    <p>지금까지 습득해온 디자인/개발 등 다양한 기술을 저만의 이야기로 멈추지 않고, <br />프로젝트를 통해 소통하고 싶습니다.</p>
                    <div className={`${styles.imageBox} ${styles.imgBox} image__box faded`}>
                        <img src={`${img}about.png`} className={`${styles.aboutImage} aboutImage`}></img>
                    </div>
                </section>
                <section className={`${styles.sectionBody} section__body`}>
                    <ul className={`${styles.sectionUl} sectionWrap`}>
                            <li className={styles.sectionLi}>
                                <div className={`${styles.sectionHeader} faded`}>
                                    <strong>Front-end</strong>
                                </div>
                                <section className={styles.mapWrap}>
                                {data.map((data, idx) => {
                                return data.category === "front-end" && <div className={`${styles.categoryWrap} faded`}>
                                        <div className={styles.skillHeader}>
                                            <div className={styles.skillIcon}>
                                                <img src={`${url+data["image"]}`} alt={data.alt}></img>
                                            </div>
                                            <p className={"skillName"} style={{ color: data.color }}>{data["skillName"]}</p>
                                            <div className={styles.level} >
                                                <span style={{ width: data.level * 10 + '%' , backgroundColor: data.color }}></span>
                                            </div>
                                        </div>
                                        <p className={styles.mapText}>{data["text"]}</p>
                                    </div>
                                })}
                            </section>
                            </li>

                            <li className={styles.sectionLi}>
                                <div className={`${styles.sectionHeader} faded`}>
                                    <strong>Library</strong>
                                </div>
                                <section className={styles.mapWrap}>
                                {data.map((data, idx) => {
                                return data.category === "Library" && <div className={`${styles.categoryWrap} faded`}>
                                        <div className={styles.skillHeader}>
                                            <div className={styles.skillIcon}>
                                                <img src={`${url+data["image"]}`} alt={data.alt}></img>
                                            </div>
                                            <p className={"skillName"} style={{ color: data.color }}>{data["skillName"]}</p>
                                            <div className={styles.level} >
                                                <span style={{ width: data.level * 10 + '%' , backgroundColor: data.color }}></span>
                                            </div>
                                        </div>
                                        <p className={styles.mapText}>{data["text"]}</p>
                                    </div>
                                })}
                            </section>
                            </li>

                            <li className={styles.sectionLi}>
                                <div className={`${styles.sectionHeader} faded`}>
                                    <strong>Back-end</strong>
                                </div>
                                <section className={styles.mapWrap}>
                                {data.map((data, idx) => {
                                return data.category === "Back-End" && <div className={`${styles.categoryWrap} faded`}>
                                        <div className={styles.skillHeader}>
                                            <div className={styles.skillIcon}>
                                                <img src={`${url+data["image"]}`} alt={data.alt}></img>
                                            </div>
                                            <p className={"skillName"} style={{ color: data.color }}>{data["skillName"]}</p>
                                            <div className={styles.level} >
                                                <span style={{ width: data.level * 10 + '%' , backgroundColor: data.color }}></span>
                                            </div>
                                        </div>
                                        <p className={styles.mapText}>{data["text"]}</p>
                                    </div>
                                })}
                            </section>
                            </li>

                            <li className={styles.sectionLi}>
                                <div className={`${styles.sectionHeader} faded`}>
                                    <strong>Design</strong>
                                </div>
                                <section className={styles.mapWrap}>
                                {data.map((data, idx) => {
                                return data.category === "Design" && <div className={`${styles.categoryWrap} faded`}>
                                        <div className={styles.skillHeader}>
                                            <div className={styles.skillIcon}>
                                                <img src={`${url+data["image"]}`} alt={data.alt}></img>
                                            </div>
                                            <p className={"skillName"} style={{ color: data.color }}>{data["skillName"]}</p>
                                            <div className={styles.level} >
                                                <span style={{ width: data.level * 10 + '%' , backgroundColor: data.color }}></span>
                                            </div>
                                        </div>
                                        <p className={styles.mapText}>{data["text"]}</p>
                                    </div>
                                })}
                            </section>
                            </li>
                    </ul>
                </section>

                <footer className={styles.footer}>
                    <div className={`${styles.footerHeader} faded`}>
                        <p>특별한 이야기를<br />만나보세요.</p>
                    </div>
                    <div className={styles.footerBody}>
                        <ul className={styles.footerUl}>
                            <li className={`${styles.footerLi} faded`}>nenonenoberneno@gmail.com</li>
                            <li className={`${styles.footerLi} faded`}>+82 10 4100 2497</li>
                            <li className={`${styles.footerLi} faded`}>#hyungookoh</li>
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default About;