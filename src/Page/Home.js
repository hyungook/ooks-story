import React from 'react';
import '../styles/Home.css';

import Header from '../components/Header';
import MainBodyNav from '../components/MainBodyNav';
import Footer from '../components/Footer';


const Home = () => {
    return (<div className={"mainWrap"}>
        <div className={"line"}>
            <span></span>
        </div>
        <Header />
        <MainBodyNav />
        <Footer />
    </div>
    )}


export default Home;