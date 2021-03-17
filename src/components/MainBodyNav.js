import React, { useEffect, useRef } from 'react'
import { Link, Route } from 'react-router-dom';
import Work from '../Page/Work';
import About from '../Page/About';
import ToyProj from '../Page/ToyProject';
import '../styles/reset.css';
import styles from '../styles/mainBodyNav.module.css';

const MainBodyNav = () => {

    const innerWidth = window.innerWidth;
    
    const navBtn__1 = useRef();
    const navBtn__2 = useRef();
    const navBtn__3 = useRef();

    // if(innerWidth >= 1281) {
    // } else {
    //     return;
    // }

    // one
    const oneHover = () => {
        // console.log(navBtn__1.current);
        // console.log('o');
        navBtn__1.current.style.transform = `translateX(10%)`;
        navBtn__2.current.style.transform = `translateX(70%)`;
        navBtn__3.current.style.transform = `translateX(70%)`;

        navBtn__2.current.style.opacity = `0.3`;
        navBtn__3.current.style.opacity = `0.3`;
    };

    // two
    const twoHover = () => {
        // console.log(navBtn__2.current);
        navBtn__1.current.style.transform = `translateX(-70%)`;
        navBtn__2.current.style.transform = `translateX(0%)`;
        navBtn__3.current.style.transform = `translateX(70%)`;

        navBtn__1.current.style.opacity = `0.3`;
        navBtn__3.current.style.opacity = `0.3`;
    };

    // three
    const threeHover = () => {
        // console.log(navBtn__3.current);
        navBtn__1.current.style.transform = `translateX(-70%)`;
        navBtn__2.current.style.transform = `translateX(-70%)`;
        navBtn__3.current.style.transform = `translateX(-10%)`;

        navBtn__1.current.style.opacity = `0.3`;
        navBtn__2.current.style.opacity = `0.3`;
    };

    // leave
    const btnLeave = () => {
        // console.log('x');
        navBtn__1.current.style.transform = `translateX(-50%)`;
        navBtn__2.current.style.transform = `translateX(0)`;
        navBtn__3.current.style.transform = `translateX(50%)`;

        navBtn__1.current.style.opacity = `1`;
        navBtn__2.current.style.opacity = `1`;
        navBtn__3.current.style.opacity = `1`;
    };

    useEffect(()=> {
        if(innerWidth >= 1281) {
            navBtn__1.current.style.transform = `translateX(-50%)`;
            navBtn__2.current.style.transform = `translateX(0)`;
            navBtn__3.current.style.transform = `translateX(50%)`;
        } else {
            return;
        }
    },[])

    return (
        <section className={styles.section}>
                <nav className={styles.mainNav}>
                    <div className={styles.mainNavWrap}>
                        <button className={styles.btn} ref={navBtn__1} onMouseOver={oneHover} onMouseLeave={btnLeave} >
                            <Link to="/about" className={`${styles.MainBtn} navBtn__1`}>ABOUT</Link>
                        </button>
                        <button className={styles.btn} ref={navBtn__2} onMouseOver={twoHover} onMouseLeave={btnLeave}>
                            <Link to="/work" className={`${styles.MainBtn} navBtn__2`}>WORK</Link>
                        </button>
                        <button className={styles.btn} ref={navBtn__3} onMouseOver={threeHover} onMouseLeave={btnLeave}>
                            <Link to="/ToyProject" className={`${styles.MainBtn} navBtn__3`}>TOY-PJ</Link>
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