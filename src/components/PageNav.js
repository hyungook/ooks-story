import React,{ useEffect } from'react'
import '../styles/reset.css'
import styles from '../styles/page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const PageNav = () => {
    useEffect(() => {
        // menu button handler
        let onOff = true;
        
        const menuBtn = document.querySelector('.menuBtn');
        const homeMenu = document.querySelector('.homeMenu');

        const navClick = menuBtn.addEventListener('click', () => {

            if(onOff) {
                homeMenu.classList.add(`${styles.open}`);
                menuBtn.classList.add(`${styles.openBtn}`);
                console.log(onOff);
                onOff = false;
            } else {
                homeMenu.classList.remove(`${styles.open}`);
                menuBtn.classList.remove(`${styles.openBtn}`);
                homeMenu.style.outline = `none`;
                console.log(onOff);
                onOff = true;
            }
        })
    },[])

    return (
        <section className={styles.section}>
            <div className={styles.headerTop}>
                <button className={styles.backward}>
                    <Link to="/" className={`${styles.mainBtn} MainBtn`}>
                        <FontAwesomeIcon icon={faAngleLeft} className={styles.icon}/>
                    </Link>
                </button>
            </div>
            <div className={styles.headerButtom}>
                <div className={`${styles.menuBtn} menuBtn`}>
                    <span className={`${styles.span} span`}></span>
                    <span className={`${styles.span} span`}></span>
                    <span className={`${styles.span} span`}></span>
                </div>
                <ul className={`${styles.homeMenu} homeMenu`}>
                    <li className={`${styles.menuLink} menuLink`}><Link to="/work" className={styles.mainBtn}>WORK</Link></li>
                    <li className={`${styles.menuLink} menuLink`}><Link to="/about" className={styles.mainBtn}>ABOUT</Link></li>
                    <li className={`${styles.menuLink} menuLink`}><Link to="/ToyProject" className={styles.mainBtn}>TOY-PJ</Link></li>
                </ul>
            </div>
        </section>
    )
};

export default PageNav;