import React, {useEffect} from 'react'
import '../styles/reset.css';
import styles from '../styles/header.module.css';

const Header = () => {


    useEffect(()=>{
        window.alert('본 포트폴리오는 Chrome에서 정상작동합니다')

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
    },[])

    return(
        <section className={styles.headerWrap}>
            <div className={styles.container}>
                <ul className={styles.headerUl}>
                    <li className={styles.headerLi}>
                        <a className={styles.headerA} href={"https://www.notion.so/React-Basic-Course-Study-Plan-1ed484aa0fba43f8a1c194ac420f21dd"} target={"_blank"}>
                            Notion
                        </a>
                    </li>
                    <li className={styles.headerLi}>
                        <a className={styles.headerA} href={"https://github.com/hyungook"} target={"_blank"}>
                            GitHub
                        </a>
                    </li>
                    <li className={styles.headerLi}>
                        <a className={styles.headerA} href={"https://velog.io/@nenonenoberneno"} target={"_blank"}>
                            Velog
                        </a>
                    </li>
                </ul>
            </div>
                <div className={`${styles.cursor} cursor`}></div>
                <div className={`${styles.cursor2} cursor2`}></div>
        </section>
    )
}

export default Header;