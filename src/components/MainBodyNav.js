import React, { useEffect } from 'react'
import { Link, Route } from 'react-router-dom';
import Work from '../Page/Work';
import About from '../Page/About';
import ToyProj from '../Page/ToyProject';
import '../styles/reset.css';
import styles from '../styles/mainBodyNav.module.css';

const MainBodyNav = () => {

    useEffect(()=> {
        window.addEventListener('resize', () => {
            // console.log(`${window.innerWidth}`);
        })
        const innerWidth = window.innerWidth;

        if(innerWidth >= 1281) {
            const MainBtn__1 = document.querySelector('.MainBtn__1')
            const MainBtn__2 = document.querySelector('.MainBtn__2')
            const MainBtn__3 = document.querySelector('.MainBtn__3')

        // MainBtn__1
        MainBtn__1.addEventListener('mouseover', () => {
            MainBtn__1.style.transform = `translateX(10%)`;
            MainBtn__2.style.transform = `translateX(70%)`;
            MainBtn__3.style.transform = `translateX(70%)`;
    
            MainBtn__2.style.opacity = `0.3`;
            MainBtn__3.style.opacity = `0.3`;
        })
        MainBtn__1.addEventListener('mouseout', () => {
            MainBtn__1.style.transform = `translateX(-50%)`;
            MainBtn__2.style.transform = `translateX(0)`;
            MainBtn__3.style.transform = `translateX(50%)`;
            
            MainBtn__2.style.opacity = `1`;
            MainBtn__3.style.opacity = `1`;
        })
        // MainBtn__2
        MainBtn__2.addEventListener('mouseover', () => {
            MainBtn__1.style.transform = `translateX(-70%)`;
            MainBtn__2.style.transform = `translateX(0%)`;
            MainBtn__3.style.transform = `translateX(70%)`;
            
            MainBtn__1.style.opacity = `0.3`;
            MainBtn__3.style.opacity = `0.3`;
        })
        MainBtn__2.addEventListener('mouseout', () => {
            MainBtn__1.style.transform = `translateX(-50%)`;
            MainBtn__2.style.transform = `translateX(0)`;
            MainBtn__3.style.transform = `translateX(50%)`;
            
            MainBtn__1.style.opacity = `1`;
            MainBtn__3.style.opacity = `1`;
        })
        // MainBtn__3
        MainBtn__3.addEventListener('mouseover', () => {
            MainBtn__1.style.transform = `translateX(-70%)`;
            MainBtn__2.style.transform = `translateX(-70%)`;
            MainBtn__3.style.transform = `translateX(-10%)`;
            
            MainBtn__1.style.opacity = `0.3`;
            MainBtn__2.style.opacity = `0.3`;
        })
        MainBtn__3.addEventListener('mouseout', () => {
            MainBtn__1.style.transform = `translateX(-50%)`;
            MainBtn__2.style.transform = `translateX(0)`;
            MainBtn__3.style.transform = `translateX(50%)`;
            
            MainBtn__1.style.opacity = `1`;
            MainBtn__2.style.opacity = `1`;
        })
        } else {
            return;
        }
    },[])

    return (
        <section className={styles.section}>
                <nav className={styles.mainNav}>
                    <div className={styles.mainNavWrap}>
                        <button className={` ${styles.btn} ${styles.btn1} nav__btn__1`}>
                            <Link to="/about" className={`${styles.MainBtn} MainBtn__1 Btn`}>ABOUT</Link>
                        </button>
                        <button className={` ${styles.btn} ${styles.btn2} nav__btn__2`}>
                            <Link to="/work" className={`${styles.MainBtn} MainBtn__2 Btn`}>WORK</Link>
                        </button>
                        <button className={` ${styles.btn} ${styles.btn3} nav__btn__3`}>
                            <Link to="/ToyProject" className={`${styles.MainBtn} MainBtn__3`}>TOY-PJ</Link>
                        </button>
                    </div>
                </nav>

                <div className={styles.backBoxs}>
                    <div className={styles.backBox}></div>
                    <div className={styles.backBox}></div>
                </div>

                <main>
                    <Route exact path="/Work" component={Work} />
                    <Route exact path="/Aobut" component={About} />
                    <Route exact path="/ToyProject" component={ToyProj} />
                </main>

            </section>
    )
}

export default MainBodyNav;