import React, {useEffect} from 'react'
import '../styles/reset.css';
import '../styles/Header.css'
import { Header__Wrap, Container, Cursor, Cursor2,
    HeaderUl, HeaderLi, HeaderA } from './Header__styled';

const Header = () => {
    useEffect(()=>{
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
        <Header__Wrap>
            <Container>
                <HeaderUl className={"header__ul"}>
                    <HeaderLi>
                        <HeaderA href={"https://www.notion.so/React-Basic-Course-Study-Plan-1ed484aa0fba43f8a1c194ac420f21dd"} className={"header__a"} target={"_blank"}>
                            Notion
                        </HeaderA>
                    </HeaderLi>
                    <HeaderLi>
                        <HeaderA href={"https://github.com/hyungook"} className={"header__a"} target={"_blank"}>
                            GitHub
                        </HeaderA>
                    </HeaderLi>
                    <HeaderLi>
                        <HeaderA href={"#"} className={"header__a"}  target={"_blank"}>
                            Velog
                        </HeaderA>
                    </HeaderLi>
                </HeaderUl>
            </Container>
                <Cursor className={"cursor"}></Cursor>
                <Cursor2 className={"cursor2"}></Cursor2>
        </Header__Wrap>
    )
}

export default Header;