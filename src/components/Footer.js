import React from 'react'
import '../styles/reset.css';
import styles from '../styles/footer.module.css';
// import { NameBox, ToyBtn } from './Footer__styled';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.nameBox}>
                {/* <a href={"https://hyungook.github.io/modern-resume/"} className={styles.toyBtn} data-depth={"0.3"} target={"_blank"}> */}
                <a href={""} className={styles.toyBtn} data-depth={"0.3"} target={"_blank"}>
                    HYUNGOOK'S STORY
                </a>
            </div>
                <p className={styles.alert}>본 포트폴리오는&nbsp;<b>Chrome</b>에서 정상작동합니다</p>
        </footer>
    )
} 

export default Footer;