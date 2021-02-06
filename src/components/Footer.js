import React from 'react'
import '../styles/reset.css';
import styles from '../styles/footer.module.css';
// import { NameBox, ToyBtn } from './Footer__styled';

const Footer = () => {
    return(
        <footer>
            <div className={styles.nameBox}>
                <a href={"https://hyungook.github.io/modern-resume/"} className={styles.toyBtn} data-depth={"0.3"} target={"_blank"}>
                    HYUNGOOK'S STORY
                </a>
            </div>
        </footer>
    )
} 

export default Footer;